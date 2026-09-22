"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/petrice@thegoldingagency.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
        <div className="flex flex-col items-center py-12 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-bold text-navy">Thank You!</h2>
          <p className="mb-6 text-gray-600">
            Your request has been submitted. We&apos;ll get back to you within 24 hours.
            Be sure to check your spam folder just in case!
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
      <h2 className="mb-2 text-xl font-bold text-navy">Request a Free Estimate</h2>
      <p className="mb-6 text-sm text-gray-500">
        Not sure which service you need? Select &ldquo;Not Sure Yet&rdquo; and we&apos;ll help you choose the best option.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* FormSubmit.co config: CC recipients, disable captcha, set subject */}
        <input type="hidden" name="_cc" value="petrice1891@gmail.com" />
        <input type="hidden" name="_subject" value="New Cleaning Estimate Request - Golding Signature Cleaning" />
        <input type="hidden" name="_template" value="table" />
        {/* Honeypot for spam prevention */}
        <input type="text" name="_honey" className="hidden" />

        {/* Name Row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-700">First Name *</label>
            <input type="text" id="firstName" name="First Name" required className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-700">Last Name *</label>
            <input type="text" id="lastName" name="Last Name" required className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">Email *</label>
            <input type="email" id="email" name="Email" required className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">Phone *</label>
            <input type="tel" id="phone" name="Phone" required className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
          </div>
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="mb-1 block text-sm font-medium text-gray-700">Address</label>
          <input type="text" id="address" name="Address" placeholder="Street address in Palm Beach County" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
        </div>

        {/* Service Type + Property Type */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="serviceType" className="mb-1 block text-sm font-medium text-gray-700">Type of Cleaning Service</label>
            <select id="serviceType" name="Cleaning Service" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
              <option value="">Select a service</option>
              <option value="Standard/Regular Cleaning">Standard/Regular Cleaning</option>
              <option value="Deep Cleaning">Deep Cleaning</option>
              <option value="Airbnb & Move-In/Move-Out">Airbnb & Move-In/Move-Out</option>
              <option value="Custom Focus Cleaning (Hourly)">Custom Focus Cleaning (Hourly)</option>
              <option value="Not Sure Yet">Not Sure Yet</option>
            </select>
          </div>
          <div>
            <label htmlFor="propertyType" className="mb-1 block text-sm font-medium text-gray-700">Property Type</label>
            <select id="propertyType" name="Property Type" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
              <option value="">Select type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Condo">Condo</option>
              <option value="Office">Office</option>
            </select>
          </div>
        </div>

        {/* Bedrooms + Bathrooms */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="bedrooms" className="mb-1 block text-sm font-medium text-gray-700">Number of Bedrooms</label>
            <select id="bedrooms" name="Bedrooms" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
          <div>
            <label htmlFor="bathrooms" className="mb-1 block text-sm font-medium text-gray-700">Number of Bathrooms</label>
            <select id="bathrooms" name="Bathrooms" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
          </div>
        </div>

        {/* Preferred Date + Time */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="preferredDate" className="mb-1 block text-sm font-medium text-gray-700">Preferred Service Date</label>
            <input type="date" id="preferredDate" name="Preferred Date" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
          </div>
          <div>
            <label htmlFor="timeWindow" className="mb-1 block text-sm font-medium text-gray-700">Preferred Time Window</label>
            <select id="timeWindow" name="Time Window" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
              <option value="">Select</option>
              <option value="Morning (6 AM – 12 PM)">Morning (6 AM – 12 PM)</option>
              <option value="Afternoon (12 PM – 5 PM)">Afternoon (12 PM – 5 PM)</option>
              <option value="Evening (5 PM – 10 PM)">Evening (5 PM – 10 PM)</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="mb-1 block text-sm font-medium text-gray-700">Additional Notes</label>
          <textarea id="notes" name="Additional Notes" rows={4} placeholder="Tell us about any specific areas, concerns, or special instructions..." className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
        </div>

        {status === "error" && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
            Something went wrong. Please try again or email us directly at info@thegoldingagency.com.
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-gold py-3.5 text-base font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg disabled:opacity-60 sm:w-auto sm:px-10"
        >
          {status === "submitting" ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
