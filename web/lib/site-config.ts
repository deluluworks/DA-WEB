/**
 * Static site configuration — replaces the PHP-era window.SITE_CONFIG.
 * Editorial content (studies, posts, team bios) lives in content/ instead;
 * this file is only for structural constants: brand, nav, footer, socials.
 */

export const brand = {
  name: "Design Asylum",
  wordmark: "designasylum",
  tagline: "Bold by design",
  legalName: "Design Asylum",
  email: "hello@designasylum.in",
  phone: "+91 85478 07934",
  phoneHref: "tel:+918547807934",
  location: "Bengaluru, Karnataka, India",
} as const;

export type NavItem = {
  id: string;
  label: string;
  href: string;
  group?: "right";
};

// Assumption (documented in SITE-PROGRESS.md): the export's nav items were
// unwired `#` placeholders. Mapped here to the closest real destination in
// the site hierarchy; revisit once /work and a dedicated "thinking" index
// exist.
export const primaryNav: NavItem[] = [
  { id: "work", label: "Work", href: "/clients" },
  { id: "studio", label: "Studio", href: "/why-design-asylum" },
  { id: "thinking", label: "Thinking", href: "/blog" },
  { id: "clients", label: "Clients", href: "/clients" },
  { id: "team", label: "Team", href: "/team" },
  { id: "call", label: "Book a call", href: "/contact", group: "right" },
];

export const footerColumns: { heading: string; items: { label: string; href: string }[] }[] = [
  {
    heading: "Projects",
    items: [
      { label: "B2B website design", href: "/service/branding-agency" },
      { label: "Website projects", href: "/clients" },
      { label: "3D projects", href: "/clients" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Website audit", href: "/audit/hackuity" },
      { label: "Print design agency", href: "/print/sevenloop" },
      { label: "Clients", href: "/clients" },
      { label: "Case study", href: "/clients/sevenloop" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "Our terms", href: "/manifesto" },
      { label: "FAQs", href: "/faq" },
      { label: "Why Design Asylum", href: "/why-design-asylum" },
      { label: "Recent updates", href: "/updates" },
      { label: "Contact", href: "/contact" },
      { label: "Book a call", href: "/contact" },
    ],
  },
];

export const socials: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/designasylum" },
  { label: "Instagram", href: "https://www.instagram.com/designasylum.in" },
  { label: "YouTube", href: "https://www.youtube.com/@designasylum" },
];

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://designasylum.in";
