import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CareersForm from "@/components/CareersForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Careers | Join Our Team",
  description: "Apply to join the Golding Signature Cleaning team.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  const siteKey = process.env.TURNSTILE_SITE_KEY;
  const ready = siteKey && process.env.TURNSTILE_SECRET_KEY &&
    process.env.RESEND_API_KEY && process.env.CAREERS_FROM_EMAIL;

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Careers", href: "/careers" }]} />
      <section className="bg-navy pb-16 pt-32 text-center sm:pt-36">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">Join Our Team</h1>
          <p className="text-lg text-white/80">We’re hiring. Apply to join Golding Signature Cleaning.</p>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
          <h2 className="mb-5 font-serif text-2xl font-bold text-navy sm:text-3xl">Apply to join our cleaning team</h2>
          {ready && siteKey ? <CareersForm siteKey={siteKey} /> : (
            <p className="text-gray-700">Online applications are currently unavailable. Please check back later.</p>
          )}
        </div>
      </section>
    </>
  );
}
