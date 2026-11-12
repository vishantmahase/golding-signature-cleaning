"use client";

import Script from "next/script";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { applicationFields, resumeLimit } from "@/lib/careers";

type Turnstile = {
  render: (container: HTMLElement, options: Record<string, string>) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};

const fieldClass = "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-navy focus:border-navy focus:outline-2 focus:outline-navy";

export default function CareersForm({ siteKey }: { siteKey: string }) {
  const widget = useRef<HTMLDivElement>(null);
  const challenge = useRef<{ api: Turnstile; id: string } | null>(null);
  const pending = useRef(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const api = (window as Window & { turnstile?: Turnstile }).turnstile;
    if (!scriptReady || !widget.current || !api) return;
    const id = api.render(widget.current, { sitekey: siteKey, action: "careers", size: "flexible" });
    challenge.current = { api, id };
    return () => {
      api.remove(id);
      challenge.current = null;
    };
  }, [scriptReady, siteKey, sent]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;

    const data = new FormData(event.currentTarget);
    const resume = data.get("resume");
    if (!(resume instanceof File) || !resume.size || resume.size > resumeLimit || !/\.pdf$/i.test(resume.name)) {
      setError("Choose a PDF résumé that is 3 MB or smaller.");
      return;
    }
    if (!data.get("cf-turnstile-response")) {
      setError("Complete the security check before submitting.");
      return;
    }

    pending.current = true;
    setSending(true);
    setError("");
    try {
      const response = await fetch("/api/careers", { method: "POST", body: data });
      if (response.ok) {
        setSent(true);
      } else {
        const result = await response.json();
        setError(result.error || "Your application could not be submitted. Please try again.");
      }
    } catch {
      setError("We couldn’t confirm your submission. Please check your connection and try again.");
    } finally {
      if (challenge.current) challenge.current.api.reset(challenge.current.id);
      pending.current = false;
      setSending(false);
    }
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onReady={() => setScriptReady(true)}
        onError={() => setError("The security check could not load. Refresh this page to try again.")}
      />
      {sent ? (
        <p role="status" className="rounded-lg bg-gold/10 p-4 text-navy">Your application was submitted. Thank you for applying.</p>
      ) : (
        <form method="post" action="/api/careers" encType="multipart/form-data" onSubmit={submit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            {applicationFields.map((field) => (
              <label key={field.name} className={`block text-sm font-medium text-navy ${field.type === "textarea" ? "sm:col-span-2" : ""}`}>
                {field.label}
                {field.type === "textarea" ? (
                  <textarea name={field.name} required maxLength={field.max} rows={3} className={fieldClass} />
                ) : (
                  <input name={field.name} type={field.type} autoComplete={field.autoComplete} required maxLength={field.max} className={fieldClass} />
                )}
              </label>
            ))}
          </div>
          <label className="block text-sm font-medium text-navy">
            Résumé (PDF, up to 3 MB)
            <input name="resume" type="file" accept=".pdf,application/pdf" required className={fieldClass} />
          </label>
          <p className="text-sm text-gray-600">
            Your application and résumé are sent through Resend to Golding Signature Cleaning for hiring review. Leave out sensitive information such as Social Security numbers, government IDs, and financial details.
          </p>
          <div ref={widget} />
          {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
          <button type="submit" disabled={!scriptReady || sending} className="rounded-full bg-gold px-6 py-3 font-semibold text-navy hover:bg-gold-light disabled:opacity-60">
            {sending ? "Submitting…" : "Submit application"}
          </button>
          <noscript><p>Enable JavaScript to complete the security check and apply.</p></noscript>
        </form>
      )}
    </>
  );
}
