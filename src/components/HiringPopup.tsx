"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "golding-hiring-popup-last-shown";
const DAY_MS = 24 * 60 * 60 * 1000;
const DISPLAY_MS = 5000;

export default function HiringPopup() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname === "/careers" || pathname.startsWith("/careers/")) {
      return;
    }

    let eligible = true;
    try {
      const lastShown = Number(window.localStorage.getItem(STORAGE_KEY));
      eligible = !lastShown || Date.now() - lastShown >= DAY_MS || Date.now() < lastShown;
    } catch {
      // Private browsing or blocked storage: the popup can still be dismissed.
    }

    if (!eligible) return;

    setVisible(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // Storage may be unavailable.
    }

    const timeout = window.setTimeout(() => setVisible(false), DISPLAY_MS);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  if (!visible || pathname === "/careers" || pathname.startsWith("/careers/")) return null;

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-labelledby="hiring-popup-title"
      aria-describedby="hiring-popup-description"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto w-auto max-w-md overflow-hidden rounded-2xl border border-gold/40 bg-white shadow-2xl sm:bottom-8 sm:right-8 sm:left-auto sm:mx-0 sm:w-[420px]"
    >
      <div className="bg-navy px-5 pb-5 pt-4 text-white sm:px-7">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-navy">
            Now Hiring
          </span>
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Close hiring announcement"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-xl leading-none text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            &times;
          </button>
        </div>
        <h2 id="hiring-popup-title" className="font-serif text-2xl font-bold sm:text-3xl">
          Join Our Cleaning Team!
        </h2>
        <p id="hiring-popup-description" className="mt-2 text-sm leading-relaxed text-white/85">
          We&apos;re looking for reliable, detail-oriented individuals to join Golding Signature Cleaning in Central Florida.
        </p>
      </div>
      <div className="flex items-center justify-between gap-3 px-5 py-4 sm:px-7">
        <span className="text-xs font-medium text-navy/75">Interested in joining us?</span>
        <Link
          href="/careers"
          onClick={() => setVisible(false)}
          className="rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          Apply Now &rarr;
        </Link>
      </div>
    </aside>
  );
}
