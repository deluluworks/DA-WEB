import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

/**
 * robots.txt — allow all crawlers, disallow the contact API route (a POST-only
 * handler with nothing to index), and point at the sitemap. `host` and the
 * sitemap URL derive from the same `siteUrl` the metadataBase uses.
 */
export default function robots(): MetadataRoute.Robots {
  const base = siteUrl.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
