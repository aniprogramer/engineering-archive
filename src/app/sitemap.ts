import type { MetadataRoute } from "next";
import { getProjects } from "@/data/portfolio";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aniket.de"; // VERIFY: same fallback as layout.tsx

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    { url: `${siteUrl}/projects` },
    ...getProjects().map((p) => ({ url: `${siteUrl}/projects/${p.slug}` })),
  ];
}
