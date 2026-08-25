import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Us | Trusted House Cleaners in West Palm Beach, FL",
  description:
    "Meet the team behind Golding Signature Cleaning — trusted, detail-oriented house cleaners proudly serving Palm Beach County, Florida. Quality, consistency, and customer satisfaction.",
  alternates: { canonical: "https://www.thegoldingagency.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />

      {/* Hero */}
      <section className="bg-navy pb-20 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            The Story Behind Our Shine
          </h1>
          <p className="text-lg text-white/80">
            Dedicated to delivering exceptional cleaning services across Palm Beach County, Florida.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="relative mx-auto h-96 w-full max-w-md overflow-hidden rounded-2xl md:h-[500px]">
            <Image
              src="/images/founder.png"
              alt="Petrice, founder of Golding Signature Cleaning in West Palm Beach FL"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-6 font-serif text-3xl font-bold text-navy">
              Meet Our Founder
            </h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              Founder <strong>Petrice</strong> created <strong>Golding Signature Cleaning</strong> with a
              commitment to providing dependable, detail-oriented cleaning with a personalized
              touch. Her passion for service began while growing up in Jamaica, where she learned 
              the importance of hard work, care, and taking pride in a job well done.
            </p>
            <p className="mb-4 leading-relaxed text-gray-600">
              Today, Petrice leads a dedicated team focused on delivering a{" "}
              <strong>high standard of professional cleaning</strong> and creating welcoming,
              beautifully maintained spaces for every client.
            </p>
            <p className="mb-4 leading-relaxed text-gray-600">
              Golding Signature Cleaning proudly serves <strong>Palm Beach County and Central Florida</strong>,
              including <strong>St. Cloud, Sunbridge, Harmony, Kissimmee, Lake Nona, and surrounding
              Orlando communities.</strong>
            </p>    
            <blockquote className="border-l-4 border-gold pl-4 italic text-navy">
              &ldquo;Our goal is to build lasting relationships with every client we
              serve&mdash;one spotless space at a time.&rdquo;
            </blockquote>

            <div className="mt-8">
              <Image
                src="/images/gold-member.png"
                alt="Golding Signature Cleaning Gold Member certification badge"
                width={120}
                height={120}
                className="h-24 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-navy">
            Why Palm Beach County Homeowners Choose Us
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-navy">Reliable &amp; Consistent</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                We show up on time, every time. Our clients in West Palm Beach,
                Boca Raton, and throughout Palm Beach County count on us for
                dependable, high-quality cleaning.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-navy">Detail-Oriented</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                We don&apos;t just clean &mdash; we pay attention to the details
                that make a difference. From baseboards to behind appliances,
                nothing gets overlooked.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-navy">Customer Satisfaction</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Your satisfaction is our priority. We customize every cleaning
                to your needs and won&apos;t rest until your home feels fresh
                and comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <h2 className="mb-4 font-serif text-3xl font-bold text-navy">Our Team</h2>
          <p className="mb-8 text-gray-600">
            A dedicated team of professional cleaners serving homes across Palm
            Beach County with care and attention to detail.
          </p>
          <div className="relative mx-auto h-80 overflow-hidden rounded-2xl sm:h-[400px]">
            <Image
              src="/images/team.jpeg"
              alt="Golding Signature Cleaning team of professional house cleaners in Palm Beach County FL"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold/10 py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-4 font-serif text-3xl font-bold text-navy">
            Ready to Experience the Golding Difference?
          </h2>
          <p className="mb-8 text-gray-600">
            Let our team take care of your Palm Beach County home. Get a free,
            no-obligation estimate today.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-navy px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-light"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
