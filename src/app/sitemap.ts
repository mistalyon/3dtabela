import type { MetadataRoute } from "next";
import { services, SITE_URL } from "@/lib/services";
import { regions } from "@/lib/regions";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const servicePages = services.map((s) => ({
    url: `${SITE_URL}/hizmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const regionPages = regions.map((r) => ({
    url: `${SITE_URL}/bolgeler/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages,
    ...regionPages,
  ];
}
