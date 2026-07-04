/** Static site config — nav labels, socials, brand constants. Replaces the
 * export's window.SITE_CONFIG global; editorial content lives in content/. */

export const site = {
  name: 'Design Asylum',
  brand: 'Design Asylum',
  url: 'https://designasylum.in',
  email: 'hello@designasylum.in',
  phone: { display: '+91 85478 07934', href: '+918547807934' },
  location: 'Bengaluru, Karnataka, India',
} as const;

export type NavItem = {
  id: string;
  label: string;
  href: string;
  group?: 'right';
};

export const navItems: NavItem[] = [
  { id: 'work', label: 'Work', href: '/clients' },
  { id: 'studio', label: 'Studio', href: '/' },
  { id: 'thinking', label: 'Thinking', href: '/faq' },
  { id: 'clients', label: 'Clients', href: '/clients' },
  { id: 'team', label: 'Team', href: '/team' },
  { id: 'call', label: 'Book a call', href: '/contact', group: 'right' },
];

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/designasylum' },
  { label: 'Instagram', href: 'https://www.instagram.com/designasylum.in' },
  { label: 'YouTube', href: 'https://www.youtube.com/@designasylum' },
] as const;

export const footerColumns: Record<string, { label: string; href: string }[]> = {
  PROJECTS: [
    { label: 'B2B website design', href: '/service/branding-agency' },
    { label: 'Website projects', href: '/clients' },
    { label: '3D projects', href: '/clients' },
  ],
  RESOURCES: [
    { label: 'Blog', href: '/clients/sevenloop/blog' },
    { label: 'Website audit', href: '/clients/hackuity-audit' },
    { label: 'Print design agency', href: '/clients/sevenloop/print' },
    { label: 'Clients', href: '/clients' },
    { label: 'Case study', href: '/clients/sevenloop' },
    { label: 'Agency reviews', href: '/why-design-asylum' },
    { label: 'Team', href: '/team' },
  ],
  COMPANY: [
    { label: 'Our terms', href: '/pricing' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Why Design Asylum', href: '/why-design-asylum' },
    { label: 'Recent updates', href: '/recent-updates' },
    { label: 'Contact', href: '/contact' },
    { label: 'Book a call', href: '/contact' },
  ],
};

export const aiSummaryLinks = ['ChatGPT', 'Gemini', 'Perplexity', 'Claude'] as const;

/** Analytics IDs — env-driven, all optional. Missing IDs = script simply omitted. */
export const analytics = {
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID,
  gaId: process.env.NEXT_PUBLIC_GA_ID,
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
};
