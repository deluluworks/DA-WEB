// Single source of truth for the slug table, shared between SITE-PROGRESS.md
// bookkeeping (by convention) and the test harness. Update as pages land.
export const BUILT_ROUTES = {
  "/": "Strategic rebranding",
  "/contact": "Let’s talk about your brand",
  "/manifesto": "not here to play it safe",
};

// Planned routes that don't exist yet — internal links pointing at these are
// expected 404s during migration and shouldn't hard-fail the link check.
export const PENDING_ROUTES = [
  "/why-design-asylum",
  "/why-us",
  "/team",
  "/author/tanmaya-rao",
  "/pricing",
  "/updates",
  "/clients",
  "/clients/sevenloop",
  "/clients/sevenloop/branding",
  "/clients/aavenir",
  "/case-studies/onelern",
  "/audit/hackuity",
  "/print/sevenloop",
  "/blog",
  "/faq",
  "/faq/corporate-rebrand-expert",
  "/service/branding-agency",
  "/industry/manufacturing",
  "/solution/ai-saas-website",
  "/location/ahmedabad",
];
