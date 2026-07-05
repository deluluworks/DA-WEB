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
  "/updates": "Ongoing Branding and Website Projects",
  "/clients": "Worked with companies from a diverse set of industries",
  "/faq": "Every question we get about B2B branding",
  "/service/branding-agency": "Branding Agency",
  "/industry/manufacturing": "Design Agency for Manufacturing Firms",
  "/solution/ai-saas-website": "AI SaaS Product Website Design Agency",
  "/location/ahmedabad": "Branding Agency in Ahmedabad",
  "/faq/corporate-rebrand-expert": "align executive stakeholders around a new brand strategy",
  "/clients/sevenloop": "custom metal manufacturing platform",
  "/clients/sevenloop/branding": "Branding and project brochure design",
  "/blog/sevenloop-rebrand-webflow-case-study": "Transforming Precision Manufacturing",
};

// Planned routes that don't exist yet — internal links pointing at these are
// expected 404s during migration and shouldn't hard-fail the link check.
export const PENDING_ROUTES = [
  "/clients/aavenir",
  "/case-studies/onelern",
  "/audit/hackuity",
  "/print/sevenloop",
  "/blog",
];
