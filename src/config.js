// Site-wide configuration. Set these as environment variables in Vercel's dashboard
// (Project Settings → Environment Variables). Each has a sensible fallback for dev.
export const SITE_CONFIG = {
  siteName:   'Design Asylum',
  email:      import.meta.env.VITE_CONTACT_EMAIL      || 'hello@designasylum.in',
  phone:      import.meta.env.VITE_CONTACT_PHONE      || '+91 85478 07934',
  phoneHref:  import.meta.env.VITE_CONTACT_PHONE_HREF || '+918547807934',
  location:   import.meta.env.VITE_STUDIO_LOCATION    || 'Bengaluru, India',
  contactApi: '/api/contact',
};
