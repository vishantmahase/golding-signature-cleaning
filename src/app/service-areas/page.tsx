import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Cleaning Service Areas | Central Florida & West Palm Beach",
  description: "Golding Signature Cleaning primarily serves St. Cloud, Lake Nona, Kissimmee, Orlando, Harmony, and Sunbridge. We also serve West Palm Beach and surrounding Palm Beach County communities.",
  alternates: { canonical: "https://www.thegoldingagency.com/service-areas" },
};
const centralFlorida = [{"name":"St. Cloud","slug":"st-cloud","description":"Residential cleaning for St. Cloud homes, apartments, and move-in or move-out transitions."},{"name":"Lake Nona","slug":"lake-nona","description":"Flexible routine and deep cleaning for Lake Nona households and rental properties."},{"name":"Kissimmee","slug":"kissimmee","description":"House cleaning and property turnover support for Kissimmee residents and hosts."},{"name":"Orlando","slug":"orlando","description":"Professional home cleaning options for Orlando residents and busy households."},{"name":"Harmony","slug":"harmony","description":"Thoughtful recurring and one-time cleaning for homes in Harmony."},{"name":"Sunbridge","slug":"sunbridge","description":"Customizable cleaning for Sunbridge homes and growing neighborhoods."}];
const southFlorida = [{"name":"West Palm Beach","slug":"west-palm-beach"},{"name":"Boca Raton","slug":"boca-raton"},{"name":"Delray Beach","slug":"delray-beach"},{"name":"Boynton Beach","slug":"boynton-beach"},{"name":"Jupiter","slug":"jupiter"},{"name":"Wellington","slug":"wellington"},{"name":"Palm Beach Gardens","slug":"palm-beach-gardens"},{"name":"Lake Worth","slug":"lake-worth"},{"name":"Royal Palm Beach","slug":"royal-palm-beach"},{"name":"Lantana","slug":"lantana"},{"name":"Greenacres","slug":"greenacres"}];

export default function ServiceAreasPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas" }]} />
      <section className="bg-navy pb-16 pt-32 text-center sm:pt-36">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">Our Cleaning Service Areas</h1>
          <p className="text-lg text-white/80">Central Florida is our primary service area, with additional service in West Palm Beach and surrounding Palm Beach County communities.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 font-serif text-3xl font-bold text-navy">Central Florida — Primary Service Area</h2>
          <p className="mb-8 text-gray-600">Professional cleaning services in St. Cloud, Lake Nona, Kissimmee, Orlando, Harmony, and Sunbridge.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {centralFlorida.map((area) => (
              <Link key={area.slug} href={`/service-areas/${area.slug}`} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-gold/30 hover:shadow-md">
                <h3 className="mb-3 text-lg font-bold text-navy">{area.name}, FL</h3>
                <p className="mb-4 text-sm text-gray-600">{area.description}</p>
                <span className="text-sm font-semibold text-gold">Explore cleaning services &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 font-serif text-3xl font-bold text-navy">West Palm Beach &amp; South Florida</h2>
          <p className="mb-8 text-gray-600">We also provide professional cleaning services in West Palm Beach and surrounding Palm Beach County communities.</p>
          <Link href="/service-areas/west-palm-beach" className="mb-8 inline-block rounded-full bg-navy px-6 py-3 font-semibold text-white hover:bg-navy-light">Explore West Palm Beach &rarr;</Link>
          <div className="flex flex-wrap gap-3">
            {southFlorida.map((area) => <Link key={area.slug} href={`/service-areas/${area.slug}`} className="rounded-full border border-navy/20 bg-white px-5 py-2 text-sm text-navy hover:border-gold">{area.name}</Link>)}
          </div>
        </div>
      </section>
      <section className="py-16 text-center">
        <h2 className="mb-3 font-serif text-2xl font-bold text-navy">Not Sure Whether We Serve Your Address?</h2>
        <p className="mx-auto mb-6 max-w-2xl px-4 text-gray-600">Contact us with your location and cleaning needs. We will confirm availability and provide a free estimate.</p>
        <Link href="/contact" className="inline-block rounded-full bg-gold px-8 py-3 font-semibold text-navy">Get a Free Estimate</Link>
      </section>
    </>
  );
}