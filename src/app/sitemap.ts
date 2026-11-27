import type { MetadataRoute } from "next";
import { SITE_URL, VERTICALS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/servizi", "/faq", "/contatti"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const verticalRoutes = VERTICALS.map((v) => ({
    url: `${SITE_URL}/settori/${v.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...verticalRoutes];
}
