import type { MetadataRoute } from "next";

const cities = [
  "st-cloud", "lake-nona", "kissimmee", "orlando", "harmony", "sunbridge",
  "west-palm-beach", "boca-raton", "delray-beach", "boynton-beach", "jupiter",
  "wellington", "palm-beach-gardens", "lake-worth", "royal-palm-beach", "lantana", "greenacres",
];
const legacyServiceCities = cities.filter((city) => !["st-cloud", "lake-nona", "kissimmee", "orlando", "harmony", "sunbridge"].includes(city));

const services = [
  "standard-cleaning",
  "deep-cleaning",
  "airbnb-cleaning",
  "office-cleaning",
  "custom-cleaning",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thegoldingagency.com";

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/service-areas/${city}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const serviceLocationPages: MetadataRoute.Sitemap = legacyServiceCities.flatMap((city) =>
    services.map((service) => ({
      url: `${baseUrl}/service-areas/${city}/${service}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...cityPages,
    ...serviceLocationPages,
  ];
}
