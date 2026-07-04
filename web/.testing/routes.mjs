// Single source of truth for the slug table, shared between SITE-PROGRESS.md
// bookkeeping (by convention) and the test harness. Update as pages land.
export const BUILT_ROUTES = {
  "/": "Strategic rebranding",
  "/contact": "Let’s talk about your brand",
  "/manifesto": "not here to play it safe",
  "/why-design-asylum": "the most compelling way",
  "/why-us": "on the hunt for a team",
  "/team": "in the same room",
  "/author/tanmaya-rao": "Lead Brand Designer",
  "/pricing": "sense of the budget",
};

// Planned routes that don't exist yet — internal links pointing at these are
// expected 404s during migration and shouldn't hard-fail the link check.
export const PENDING_ROUTES = [
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
