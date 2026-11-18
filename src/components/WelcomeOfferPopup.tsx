"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function WelcomeOfferPopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();

    return () => dialog?.close();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label="New client welcome offer"
      className="fixed inset-0 m-auto w-[min(48rem,calc(100vw-2rem),calc((100dvh-2rem)*1.29))] max-w-none overflow-hidden rounded-xl bg-navy p-0 shadow-2xl backdrop:bg-black/70"
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      <button
        type="button"
        autoFocus
        aria-label="Close welcome offer"
        onClick={() => dialogRef.current?.close()}
        className="absolute right-2 top-2 grid size-11 place-items-center rounded-full bg-navy text-2xl leading-none text-white shadow-md hover:bg-navy-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        <span aria-hidden="true">×</span>
      </button>
      <Image
        src="/images/new-client-welcome-offer.jpeg"
        alt="Golding Signature Cleaning welcome offer: New clients save $25 on their first completed deep cleaning. Cannot be combined with other offers. Serving St. Cloud, Lake Nona, and Kissimmee. Call 561-246-6544 or WhatsApp or text 646-764-6839."
        width={1426}
        height={1103}
        className="block h-auto w-full"
        unoptimized
        preload
      />
    </dialog>
  );
}
