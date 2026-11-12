import { NextResponse } from "next/server";
import { applicationFields, resumeLimit } from "@/lib/careers";

export const runtime = "nodejs";
const requestLimit = resumeLimit + 64 * 1024;

function fail(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

export async function POST(request: Request) {
  const { RESEND_API_KEY, CAREERS_FROM_EMAIL, TURNSTILE_SECRET_KEY } = process.env;
  const unavailable = "Applications are temporarily unavailable. Please try again later.";
  if (!RESEND_API_KEY || !CAREERS_FROM_EMAIL || !TURNSTILE_SECRET_KEY) return fail(unavailable, 503);

  const contentType = request.headers.get("content-type") ?? "";
  if (!request.body || !contentType.toLowerCase().startsWith("multipart/form-data;")) {
    return fail("Submit the application from the careers page.");
  }

  let data: FormData;
  try {
    const reader = request.body.getReader();
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > requestLimit) {
        await reader.cancel().catch(() => {});
        return fail("Choose a PDF résumé that is 3 MB or smaller.", 413);
      }
      chunks.push(value);
    }
    data = await new Response(Buffer.concat(chunks), {
      headers: { "content-type": contentType },
    }).formData();
  } catch {
    return fail("The application could not be read. Please try again.");
  }

  const values = new Map<string, string>();
  for (const field of applicationFields) {
    const value = data.get(field.name);
    if (typeof value !== "string" || !value.trim() || value.length > field.max) {
      return fail(`Check the ${field.label.toLowerCase()} field and try again.`);
    }
    values.set(field.name, value.trim());
  }
  const email = values.get("email") ?? "";
  if (!/^[^\s@<>(),;:"\\]+@[^\s@<>(),;:"\\]+\.[^\s@<>(),;:"\\]+$/.test(email)) {
    return fail("Enter a valid email address.");
  }
  const phone = values.get("phone") ?? "";
  if ((phone.match(/\d/g)?.length ?? 0) < 7) return fail("Enter a valid phone number.");

  const resume = data.get("resume");
  if (
    !(resume instanceof File) || !resume.size || resume.size > resumeLimit ||
    !/\.pdf$/i.test(resume.name) ||
    !["application/pdf", "application/octet-stream", ""].includes(resume.type) ||
    await resume.slice(0, 5).text() !== "%PDF-"
  ) {
    return fail("Choose a valid PDF résumé that is 3 MB or smaller.");
  }

  const token = data.get("cf-turnstile-response");
  const challengeError = "Complete the security check again before submitting.";
  if (typeof token !== "string" || !token || token.length > 2048) return fail(challengeError);

  try {
    const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret: TURNSTILE_SECRET_KEY, response: token }),
      signal: AbortSignal.timeout(8000),
    });
    if (!verification.ok) return fail(unavailable, 503);
    const result = await verification.json();
    if (!result.success || result.action !== "careers") return fail(challengeError);

    const delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CAREERS_FROM_EMAIL,
        to: ["petrice@thegoldingagency.com"],
        cc: ["petrice1891@gmail.com"],
        reply_to: email,
        subject: "New Golding Signature Cleaning application",
        text: applicationFields.map(({ name, label }) => `${label}: ${values.get(name)}`).join("\n\n"),
        attachments: [{
          filename: "resume.pdf",
          content: Buffer.from(await resume.arrayBuffer()).toString("base64"),
        }],
      }),
      signal: AbortSignal.timeout(12000),
    });
    if (!delivery.ok) return fail(unavailable, 503);
    const receipt = await delivery.json();
    if (typeof receipt.id !== "string" || !receipt.id) return fail(unavailable, 503);
    return NextResponse.json({ success: true });
  } catch {
    return fail(unavailable, 503);
  }
}
