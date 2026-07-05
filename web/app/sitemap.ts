import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

/**
 * XML sitemap for the currently-built, indexable routes. Kept as an explicit
 * list (rather than derived from `content/`) because routes are individual
 * segments today — several `content/` entries (e.g. the aavenir / onelern
 * studies) have no page yet and must not be advertised. Add a route here when
 * its page ships. Priorities tier the site: home first, then the top-level
 * marketing/editorial pages, then the deeper service/case-study/FAQ pages.
 */
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/why-design-asylum", priority: 0.8, changeFrequency: "monthly" },
  { path: "/why-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/manifesto", priority: 0.7, changeFrequency: "yearly" },
  { path: "/team", priority: 0.7, changeFrequency: "monthly" },
  { path: "/author/tanmaya-rao", priority: 0.5, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/updates", priority: 0.6, changeFrequency: "weekly" },
  { path: "/clients", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq/corporate-rebrand-expert", priority: 0.5, changeFrequency: "monthly" },
  { path: "/service/branding-agency", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industry/manufacturing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/solution/ai-saas-website", priority: 0.7, changeFrequency: "monthly" },
  { path: "/location/ahmedabad", priority: 0.7, changeFrequency: "monthly" },
  { path: "/clients/sevenloop", priority: 0.6, changeFrequency: "monthly" },
  { path: "/clients/sevenloop/branding", priority: 0.5, changeFrequency: "monthly" },
  { path: "/blog/sevenloop-rebrand-webflow-case-study", priority: 0.6, changeFrequency: "monthly" },
  { path: "/print/sevenloop", priority: 0.4, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? `${base}/` : `${base}${path}`,
    changeFrequency,
    priority,
  }));
}
