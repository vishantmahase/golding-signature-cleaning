import Image from "next/image";
import Link from "next/link";
import GoogleReviews from "@/components/GoogleReviews";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const services = [
  {
    title: "Standard/Regular Cleaning",
    image: "/images/standard-cleaning.png",
    alt: "Standard residential house cleaning service in Palm Beach County FL",
    description:
      "Ideal for routine upkeep and maintaining a clean, comfortable home. This service focuses on high-traffic and commonly used areas.",
    includes: [
      "Dusting surfaces",
      "Sweeping & mopping floors",
      "Kitchen wipe-down (counters, sink, exterior appliances)",
      "Bathroom surface cleaning",
      "Trash removal",
    ],
    note: "Recommended for weekly, bi-weekly, or monthly service.",
  },
  {
    title: "Deep Cleaning",
    image: "/images/deep-cleaning.png",
    alt: "Deep house cleaning service in West Palm Beach FL",
    description:
      "A more detailed clean designed to tackle built-up dirt and neglected areas. Perfect for first-time clients or homes that need extra attention.",
    includes: [
      "Everything in Standard Cleaning",
      "Detailed bathroom scrubbing",
      "Baseboards & buildup removal",
      "Kitchen deep clean (exterior appliances, heavier grime)",
    ],
    note: "Deep cleaning is recommended before starting recurring service.",
  },
  {
    title: "Airbnb & Move-In/Move-Out Cleaning",
    image: "/images/moveout-cleaning.png",
    alt: "Airbnb turnover and move-out cleaning service Palm Beach County",
    description:
      "Designed for property turnovers, rentals, and move-outs. This service focuses on preparing the space for the next occupant or guest.",
    includes: [
      "Kitchen & bathroom deep clean",
      "Floors throughout",
      "Interior surface wipe-down",
      "Trash removal",
    ],
    note: null,
  },
  {
    title: "Office Cleaning",
    image: "/images/standard-cleaning.png",
    alt: "Professional office cleaning service in Palm Beach County FL",
    description:
      "Keep your workspace clean, healthy, and professional. We offer flexible scheduling to minimize disruption to your business operations.",
    includes: [
      "Desk & surface sanitization",
      "Restroom cleaning & restocking",
      "Floor vacuuming & mopping",
      "Trash & recycling removal",
    ],
    note: "Available for one-time or recurring office cleaning schedules.",
  },
];

const galleryImages = [
  { src: "/images/gallery-1.jpeg", alt: "Professional cleaning results - spotless bathroom in Palm Beach County home" },
  { src: "/images/gallery-2.jpeg", alt: "Clean kitchen after deep cleaning service in West Palm Beach" },
  { src: "/images/gallery-3.jpeg", alt: "Move-out cleaning results for Palm Beach County rental property" },
  { src: "/images/gallery-4.jpeg", alt: "Golding Signature Cleaning team at work in Boca Raton home" },
];

const serviceAreasList = [
  { name: "West Palm Beach", slug: "west-palm-beach" },
  { name: "Boca Raton", slug: "boca-raton" },
  { name: "Delray Beach", slug: "delray-beach" },
  { name: "Boynton Beach", slug: "boynton-beach" },
  { name: "Jupiter", slug: "jupiter" },
  { name: "Wellington", slug: "wellington" },
  { name: "Palm Beach Gardens", slug: "palm-beach-gardens" },
  { name: "Lake Worth", slug: "lake-worth" },
  { name: "Royal Palm Beach", slug: "royal-palm-beach" },
  { name: "Lantana", slug: "lantana" },
  { name: "Greenacres", slug: "greenacres" },
];

const faqs = [
  {
    question: "How much does house cleaning cost in Palm Beach County?",
    answer:
      "Pricing depends on the size of your home, the type of cleaning, and how often you'd like service. Contact us for a free, no-obligation estimate tailored to your needs.",
  },
  {
    question: "What's included in a standard cleaning?",
    answer:
      "Our standard cleaning covers dusting surfaces, sweeping and mopping floors, kitchen wipe-down (counters, sink, exterior appliances), bathroom surface cleaning, and trash removal. It's ideal for weekly, bi-weekly, or monthly maintenance.",
  },
  {
    question: "How is deep cleaning different from standard cleaning?",
    answer:
      "Deep cleaning includes everything in a standard clean plus detailed bathroom scrubbing, baseboard and buildup removal, and a more thorough kitchen clean. We recommend a deep clean before starting any recurring service.",
  },
  {
    question: "Do you provide cleaning supplies and equipment?",
    answer:
      "Yes, we bring all necessary cleaning supplies and equipment. If you have preferred products or specific requirements, we're happy to accommodate.",
  },
  {
    question: "Are you insured and bonded?",
    answer:
      "Yes, Golding Signature Cleaning is fully insured for your peace of mind. Our team is trusted, vetted, and committed to treating your home with care.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve all of Palm Beach County, Florida, including West Palm Beach, Boca Raton, Delray Beach, Boynton Beach, Jupiter, Wellington, Palm Beach Gardens, Lake Worth, Royal Palm Beach, Lantana, and Greenacres.",
  },
  {
    question: "How do I book a cleaning?",
    answer:
      "Simply fill out our online contact form or call us at (561) 246-6544. We usually respond within 24 hours with a free estimate.",
  },
  {
    question: "Can I customize my cleaning service?",
    answer:
      "Absolutely. Our Custom Focus Cleaning lets you choose the areas that matter most and set your budget. We clean thoroughly within your agreed time frame and priorities.",
  },
];

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/hero.png"
          alt="Professional house cleaning services in Palm Beach County Florida"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Experience a New Level of Clean
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
            Professional house cleaning services proudly serving St. Cloud,
            Lake Nona, Kissimmee, Orlando, and surrounding Central Florida communities.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-xl"
            >
              Get Your Free Cleaning Estimate
            </Link>
            <Link
              href="/services"
              className="rounded-full border-2 border-white/50 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-gold hover:text-gold"
            >
              View Our Services
            </Link>
          </div>
          <a
            href="tel:15612466544"
            className="mt-6 inline-block text-sm text-white/70 transition-colors hover:text-gold"
          >
            Or call us: +1 (561) 246-6544
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-6">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 px-4 text-center text-sm font-medium text-gray-600 sm:gap-10">
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Trusted &amp; Insured
          </span>
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Satisfaction Guaranteed
          </span>
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Detail-Oriented Staff
          </span>
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Open 7 Days a Week
          </span>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-navy sm:text-4xl">
              Explore What We Have to Offer
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              From routine upkeep to deep cleans and move-out turnovers, we have
              the right cleaning package for your Palm Beach County home.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                  <p className="mb-2 text-sm font-semibold text-navy">Includes:</p>
                  <ul className="mb-4 space-y-1.5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {service.note && (
                    <p className="mb-4 text-xs italic text-gray-500">{service.note}</p>
                  )}
                  <Link
                    href="/contact"
                    className="inline-block rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
                  >
                    Book Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Focus Cleaning */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="relative h-80 overflow-hidden rounded-2xl md:h-[450px]">
            <Image
              src="/images/custom-cleaning.jpg"
              alt="Custom focus hourly cleaning service for homes in Palm Beach County FL"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-navy sm:text-4xl">
              Custom Focus Cleaning (Hourly)
            </h2>
            <p className="mb-4 text-gray-600">
              Not every home needs a full clean. Our Custom Focus Cleaning
              allows you to customize your service based on your budget and
              priority areas.
            </p>
            <h3 className="mb-3 font-semibold text-navy">How it works:</h3>
            <ul className="mb-6 space-y-2.5">
              <li className="flex items-start gap-3 text-gray-600">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">1</span>
                You tell us your budget
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">2</span>
                You choose the areas that matter most
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">3</span>
                We clean thoroughly within the agreed time frame
              </li>
            </ul>
            <p className="mb-6 text-sm text-gray-500">
              Final scope, price, and timing are confirmed before your appointment.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg"
            >
              Request a Custom Cleaning
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery / Social Proof */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-3 font-serif text-3xl font-bold text-navy sm:text-4xl">
              See Our Work
            </h2>
            <p className="text-gray-600">
              Follow us on{" "}
              <a
                href="https://www.instagram.com/goldingsignaturecleaning/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold underline hover:text-gold-light"
              >
                Instagram
              </a>{" "}
              for before &amp; after photos from homes across Palm Beach County.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative h-64 overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Service Areas Section */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            Proudly Serving Central Florida
          </h2>
          <p className="mb-8 text-white/70">
            Our primary service areas include St. Cloud, Lake Nona,
            Kissimmee, Orlando, Harmony, Sunbridge, and surrounding communities.
            We also provide cleaning services in West Palm Beach and surrounding areas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreasList.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="rounded-full border border-gold/30 bg-white/5 px-5 py-2 text-sm text-white/90 transition-colors hover:border-gold hover:bg-white/10"
              >
                {area.name}, FL
              </Link>
            ))}
          </div>
          <Link
            href="/service-areas"
            className="mt-8 inline-block text-sm font-semibold text-gold underline transition-colors hover:text-gold-light"
          >
            View All Service Areas
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-3 font-serif text-3xl font-bold text-navy sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions about our cleaning services in Palm Beach County.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-sm font-semibold text-navy [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gold transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="border-t border-gray-100 px-6 pb-5 pt-4 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold/10 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-4 font-serif text-3xl font-bold text-navy sm:text-4xl">
            Ready for a Spotless Home?
          </h2>
          <p className="mb-8 text-gray-600">
            Get a free cleaning estimate for your home in Central Florida 
            or West Palm Beach. We usually respond within 24 hours.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-navy px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-light"
            >
              Get Your Free Estimate
            </Link>
            <a
              href="tel:15612466544"
              className="rounded-full border-2 border-navy px-8 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Call +1 (561) 246-6544
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
