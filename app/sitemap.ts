import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/src/data/categories";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/how-to-use", "/pricing", "/where-to-buy"];

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const categoryEntries = CATEGORIES.map((category) => ({
    url: absoluteUrl(`/${category.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...categoryEntries];
}
