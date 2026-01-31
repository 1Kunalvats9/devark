import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

const baseUrl = siteConfig.url

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    // Add more routes when you have /about, /work, /contact etc.
    // { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ]
}
