import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Residential Cleaning Services | Central Florida & West Palm Beach",
  description:
    "Residential cleaning services in St. Cloud, Lake Nona, Kissimmee, Orlando, and West Palm Beach, FL. Weekly, biweekly, and one-time deep cleaning for homes, Airbnbs, and move-outs. Book online today!",
  alternates: { canonical: "https://www.thegoldingagency.com/services" },
};

const packages = [
  {
    name: "Standard/Regular Cleaning",
    image: "/images/standard-cleaning.png",
    alt: "Standard residential house cleaning service in Palm Beach County FL",
    price: "Starting estimate provided after consultation",
    description:
      "Ideal for routine upkeep and maintaining a clean, comfortable home. This service focuses on high-traffic and commonly used areas throughout your Central Florida residence.",
    includes: [
      "Dusting surfaces",
      "Sweeping & mopping floors",
      "Kitchen wipe-down (counters, sink, exterior appliances)",
      "Bathroom surface cleaning",
      "Trash removal",
    ],
    note: "Recommended for weekly, bi-weekly, or monthly service.",
    popular: false,
  },
  {
    name: "Deep Cleaning",
    image: "/images/deep-cleaning.png",
    alt: "Deep house cleaning service in West Palm Beach and Palm Beach County FL",
    price: "Starting estimate provided after consultation",
    description:
      "A more detailed clean designed to tackle built-up dirt and neglected areas. Perfect for first-time clients or homes in Central Florida that need extra attention.",
    includes: [
      "Everything in Standard Cleaning",
      "Detailed bathroom scrubbing",
      "Baseboards & buildup removal",
      "Kitchen deep clean (exterior appliances, heavier grime)",
    ],
    note: "Deep cleaning is recommended before starting recurring service.",
    popular: false,
  },
  {
    name: "Airbnb & Move-In/Move-Out Cleaning",
    image: "/images/moveout-cleaning.png",
    alt: "Airbnb turnover and move-out cleaning service in Palm Beach County FL",
    price: "Starting estimate provided after consultation",
    description:
      "Designed for property turnovers, rentals, and move-outs across Central Florida and West Palm Beach. This service focuses on preparing the space for the next occupant or guest.",
    includes: [
      "Kitchen & bathroom deep clean",
      "Floors throughout",
      "Interior surface wipe-down",
      "Trash removal",
    ],
    note: null,
    popular: false,
  },
  {
    name: "Office Cleaning",
    image: "/images/standard-cleaning.png",
    alt: "Professional office cleaning service in Palm Beach County FL",
    price: "Starting estimate provided after consultation",
    description:
      "Keep your workspace clean, healthy, and professional. We provide reliable office cleaning for small and mid-size businesses throughout Central Florida and West Palm Beach.",
    includes: [
      "Desk and workstation sanitization",
      "Breakroom and kitchen cleaning",
      "Reception area and lobby care",
      "Restroom deep cleaning and restocking",
      "Trash and recycling removal",
    ],
    note: "Available for daily, weekly, or biweekly scheduling.",
    popular: false,
  },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Standard Cleaning",
        description:
          "Routine residential cleaning covering dusting, sweeping, mopping, kitchen wipe-down, bathroom surface cleaning, and trash removal. Ideal for weekly, bi-weekly, or monthly upkeep.",
        provider: { "@type": "HouseCleaningService", name: "Golding Signature Cleaning", url: "https://www.thegoldingagency.com" },
        areaServed: { "@type": "Place", name: "Palm Beach County, FL" },
        serviceType: "Standard House Cleaning",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Deep Cleaning",
        description:
          "Thorough cleaning that tackles built-up dirt and neglected areas including detailed bathroom scrubbing, baseboard cleaning, and kitchen deep clean. Recommended before starting recurring service.",
        provider: { "@type": "HouseCleaningService", name: "Golding Signature Cleaning", url: "https://www.thegoldingagency.com" },
        areaServed: { "@type": "Place", name: "Palm Beach County, FL" },
        serviceType: "Deep House Cleaning",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Move-Out Cleaning",
        description:
          "Comprehensive cleaning designed for move-outs, preparing the space for the next occupant with kitchen and bathroom deep clean, full floor cleaning, and surface wipe-down.",
        provider: { "@type": "HouseCleaningService", name: "Golding Signature Cleaning", url: "https://www.thegoldingagency.com" },
        areaServed: { "@type": "Place", name: "Palm Beach County, FL" },
        serviceType: "Move-Out Cleaning",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Airbnb Turnover Cleaning",
        description:
          "Fast, reliable turnover cleaning for short-term rental properties. Ensures your Airbnb or vacation rental is guest-ready with thorough cleaning of all rooms.",
        provider: { "@type": "HouseCleaningService", name: "Golding Signature Cleaning", url: "https://www.thegoldingagency.com" },
        areaServed: { "@type": "Place", name: "Palm Beach County, FL" },
        serviceType: "Airbnb Turnover Cleaning",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Custom Focus Cleaning",
        description:
          "Hourly cleaning service customized to your budget and priority areas. You choose the rooms and tasks that matter most, and we clean thoroughly within the agreed time frame.",
        provider: { "@type": "HouseCleaningService", name: "Golding Signature Cleaning", url: "https://www.thegoldingagency.com" },
        areaServed: { "@type": "Place", name: "Palm Beach County, FL" },
        serviceType: "Custom Cleaning",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Office Cleaning",
        description:
          "Professional office and workspace cleaning for small and mid-size businesses. Includes desk sanitization, breakroom cleaning, restroom care, and trash removal.",
        provider: { "@type": "HouseCleaningService", name: "Golding Signature Cleaning", url: "https://www.thegoldingagency.com" },
        areaServed: { "@type": "Place", name: "Palm Beach County, FL" },
        serviceType: "Commercial Office Cleaning",
      },
    },
  ],
};

const centralCities = [
  { name: "St. Cloud", slug: "st-cloud" },
  { name: "Lake Nona", slug: "lake-nona" },
  { name: "Kissimmee", slug: "kissimmee" },
  { name: "Orlando", slug: "orlando" },
  { name: "Harmony", slug: "harmony" },
  { name: "Sunbridge", slug: "sunbridge" },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden bg-navy pb-20 pt-32 sm:pt-36">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/services-hero.png" alt="" fill className="object-cover" aria-hidden="true" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">
            Choose Your Shine
          </h1>
          <p className="text-lg text-white/80">
            Residential cleaning, deep clean, Airbnb turnovers &mdash; packages for every home in Palm Beach County.
          </p>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="overflow-hidden bg-gold py-3">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="mx-8 text-sm font-semibold text-navy">
              Residential Cleaning &#10038; Deep Clean &#10038; Satisfaction Guaranteed &#10038; Trusted Staff &#10038; Bathroom Sparkle &#10038; Palm Beach County
            </span>
          ))}
        </div>
      </div>

      {/* Service Packages */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow hover:shadow-lg ${
                  pkg.popular ? "border-gold ring-2 ring-gold/20" : "border-gray-100"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
                    Most Popular
                  </div>
                )}
                <div className="relative h-72 overflow-hidden">
                  <Image src={pkg.image} alt={pkg.alt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-bold text-navy">{pkg.name}</h2>
                  <p className="mb-4 text-sm italic text-gold">{pkg.price}</p>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{pkg.description}</p>

                  <h3 className="mb-2 text-sm font-semibold text-navy">Includes:</h3>
                  <ul className="mb-5 space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {pkg.note && <p className="mb-5 text-xs italic text-gray-500">{pkg.note}</p>}

                  <Link
                    href="/contact"
                    className={`block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                      pkg.popular
                        ? "bg-gold text-navy hover:bg-gold-light"
                        : "bg-navy text-white hover:bg-navy-light"
                    }`}
                  >
                    Get Your Free Estimate
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
              alt="Custom focus hourly cleaning service for homes in Central Florida FL"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-navy">
              Custom Focus Cleaning (Hourly)
            </h2>
            <p className="mb-4 text-gray-600">
              Not every home needs a full clean. Our Custom Focus Cleaning allows
              you to customize your service based on your budget and priority areas.
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

      {/* Service Areas */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center font-serif text-3xl font-bold text-navy">
            Find Our Cleaning Services Near You
          </h2>
          <p className="mb-10 text-center text-gray-600">
            Explore our primary Central Florida service areas or request a free cleaning estimate.
          </p>
          <h3 className="mb-4 text-xl font-bold text-navy">Central Florida — Primary Service Area</h3>
          <div className="mb-10 flex flex-wrap gap-3">
            {centralCities.map((city) => (
              <Link key={city.slug} href={`/service-areas/${city.slug}`}
                className="rounded-full border border-navy/20 bg-navy/5 px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white">
                {city.name}
              </Link>
            ))}
          </div>
          <div className="rounded-2xl bg-gray-50 p-8">
            <h3 className="mb-3 text-xl font-bold text-navy">West Palm Beach — South Florida</h3>
            <p className="mb-5 text-gray-600">We also offer cleaning services in West Palm Beach and surrounding Palm Beach County communities.</p>
            <Link href="/service-areas/west-palm-beach" className="inline-block rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light">
              Explore West Palm Beach Cleaning
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-4 font-serif text-3xl font-bold text-white">
            Not Sure Which Service You Need?
          </h2>
          <p className="mb-8 text-white/70">
            Contact us and we&apos;ll help you choose the best cleaning package for your home.
            We primarily serve Central Florida, and also serve West Palm Beach.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

    </>
  );
}
