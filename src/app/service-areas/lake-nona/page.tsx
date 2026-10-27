import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "House Cleaning Services in Lake Nona, FL",
  description: "Golding Signature Cleaning offers regular, deep, Airbnb and move-in/move-out cleaning in Lake Nona, FL. Request a free estimate.",
  alternates: { canonical: "https://www.thegoldingagency.com/service-areas/lake-nona" },
};
const services = [
  { title: "Standard / Regular Cleaning", description: "Routine dusting, floor care, kitchen wipe-downs, and bathroom surface cleaning." },
  { title: "Deep Cleaning", description: "A more detailed clean focused on built-up dirt, bathroom scrubbing, and kitchen surfaces." },
  { title: "Airbnb & Move-In / Move-Out", description: "Cleaning for property transitions and short-term rental turnovers." },
  { title: "Custom Focus Cleaning (Hourly)", description: "Choose priority areas and a time frame that fit your budget." },
];
export default function LocationPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas" }, { name: "Lake Nona", href: "/service-areas/lake-nona" }]} />
      <section className="bg-navy pb-16 pt-32 text-center sm:pt-36">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="mb-4 font-serif text-4xl font-bold text-white sm:text-5xl">House Cleaning Services in Lake Nona, FL</h1>
          <p className="text-lg text-white/80">Professional, detail-oriented cleaning for homes and rental properties in Lake Nona and nearby Central Florida communities.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-5 font-serif text-3xl font-bold text-navy">Cleaning That Fits Your Lake Nona Home</h2>
          <p className="mb-10 text-gray-600">For busy Lake Nona households, flexible cleaning can help keep kitchens, bathrooms, and living areas comfortable between appointments.</p>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => <div key={service.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"><h3 className="mb-3 text-lg font-bold text-navy">{service.title}</h3><p className="text-sm text-gray-600">{service.description}</p></div>)}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 font-serif text-3xl font-bold text-navy">Request a Free Cleaning Estimate in Lake Nona</h2>
          <p className="mb-7 text-gray-600">Tell us about your property, preferred schedule, and cleaning priorities. We will confirm availability and provide a tailored estimate.</p>
          <Link href="/contact" className="inline-block rounded-full bg-gold px-8 py-3 font-semibold text-navy">Get a Free Estimate</Link>
          <div className="mt-6"><Link href="/service-areas" className="text-sm font-semibold text-navy underline">View all service areas</Link></div>
        </div>
      </section>
    </>
  );
}