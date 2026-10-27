import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thegoldingagency.com"),
  title: {
    default:
      "House Cleaning Services in Central Florida | Golding Signature Cleaning",
    template: "%s | Golding Signature Cleaning",
  },
  description:
    "Professional house cleaning services in St. Cloud, Lake Nona, Kissimmee, Orlando, and West Palm Beach. Standard cleaning, deep cleaning, and move-in/move-out services for homes and Airbnbs. Book your free estimate today!",
  keywords: [
    "house cleaning St. Cloud FL",
    "cleaning service Lake Nona",
    "house cleaning Kissimmee",
    "cleaning service Orlando",
    "cleaning service West Palm Beach",
    "maid service Palm Beach County",
    "deep cleaning West Palm Beach FL",
    "move out cleaning Palm Beach",
    "Airbnb cleaning Palm Beach County",
    "residential cleaning Boca Raton",
    "house cleaning Delray Beach",
    "cleaning service Jupiter FL",
    "home cleaning Wellington FL",
  ],
  openGraph: {
    title:
      "House Cleaning Services in Central Florida | Golding Signature Cleaning",
    description:
      "Professional house cleaning services in St. Cloud, Lake Nona, Kissimmee, Orlando, and West Palm Beach. Book your free estimate today!",
    url: "https://www.thegoldingagency.com",
    siteName: "Golding Signature Cleaning",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Golding Signature Cleaning - Professional House Cleaning in Central Florida",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.thegoldingagency.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HouseCleaningService",
  name: "Golding Signature Cleaning",
  url: "https://www.thegoldingagency.com",
  telephone: "+15612466544",
  email: "info@thegoldingagency.com",
  image: "https://www.thegoldingagency.com/images/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "West Palm Beach",
    addressRegion: "FL",
    postalCode: "33401",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "Place", name: "St. Cloud, FL" },
    { "@type": "Place", name: "Lake Nona, Orlando, FL" },
    { "@type": "Place", name: "Kissimmee, FL" },
    { "@type": "Place", name: "Orlando, FL" },
    { "@type": "Place", name: "Harmony, FL" },
    { "@type": "Place", name: "Sunbridge, FL" },
    { "@type": "Place", name: "Palm Beach County, Florida" },
    { "@type": "Place", name: "West Palm Beach, FL" },
    { "@type": "Place", name: "Boca Raton, FL" },
    { "@type": "Place", name: "Delray Beach, FL" },
    { "@type": "Place", name: "Boynton Beach, FL" },
    { "@type": "Place", name: "Jupiter, FL" },
    { "@type": "Place", name: "Wellington, FL" },
    { "@type": "Place", name: "Palm Beach Gardens, FL" },
    { "@type": "Place", name: "Lake Worth, FL" },
    { "@type": "Place", name: "Royal Palm Beach, FL" },
    { "@type": "Place", name: "Lantana, FL" },
    { "@type": "Place", name: "Greenacres, FL" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "06:00",
    closes: "22:00",
  },
  priceRange: "$$",
  serviceType: [
    "House Cleaning", "Deep Cleaning", "Move-In Cleaning",
    "Move-Out Cleaning", "Airbnb Cleaning", "Residential Cleaning",
    "Office Cleaning",
  ],
  description:
    "Professional residential cleaning services primarily serving Central Florida, with additional service in West Palm Beach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
