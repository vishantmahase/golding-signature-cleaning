import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Get a Free Cleaning Estimate | Central Florida & West Palm Beach",
  description:
    "Request a free cleaning estimate in Central Florida and West Palm Beach. Contact Golding Signature Cleaning for residential, Airbnb, and move-in/move-out cleaning services. We respond within 24 hours.",
  alternates: { canonical: "https://www.thegoldingagency.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />

      {/* Hero */}
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Have a question or need more information? Fill out the form below and
            a member of our team will get back to you as soon as possible. We
            usually respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {/* Form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="rounded-2xl bg-navy p-6 text-white">
              <h3 className="mb-4 font-serif text-lg font-semibold text-gold">Get in Touch</h3>
              <div className="space-y-4 text-sm">
                <a href="tel:15612466544" className="flex items-center gap-3 transition-colors hover:text-gold">
                  <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +1 (561) 246-6544
                </a>
                <a href="mailto:info@thegoldingagency.com" className="flex items-center gap-3 transition-colors hover:text-gold">
                  <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@thegoldingagency.com
                </a>
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>Primarily serving St. Cloud, Lake Nona, Kissimmee &amp; Orlando<br />Also serving West Palm Beach, FL</span>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="rounded-2xl bg-gray-50 p-6">
              <h3 className="mb-3 font-semibold text-navy">Business Hours</h3>
              <p className="text-sm text-gray-600">Monday – Sunday</p>
              <p className="text-sm font-semibold text-navy">6:00 AM – 10:00 PM</p>
            </div>

            {/* Quick Links */}
            <div className="rounded-2xl bg-gray-50 p-6">
              <h3 className="mb-3 font-semibold text-navy">Not sure what you need?</h3>
              <p className="mb-4 text-sm text-gray-600">
                Check out our services page to see which cleaning package is right for your home.
              </p>
              <Link href="/services" className="text-sm font-semibold text-gold hover:text-gold-light">
                View Our Services &rarr;
              </Link>
            </div>

            {/* Spam Notice */}
            <div className="rounded-2xl border border-gold/30 bg-gold/5 p-4">
              <p className="text-sm text-gray-600">
                <strong className="text-navy">Waiting for our response?</strong> Check your spam folder just in case!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
