/**
 * Runtime-only env access. These are intentionally NOT required at build
 * time — the site must build and statically render without them (Vercel
 * preview / CI has no .env.local). Missing values degrade the dependent
 * feature gracefully instead of throwing.
 */
export const env = {
  sheetsWebhookUrl: process.env.SHEETS_WEBHOOK_URL,
  resendApiKey: process.env.RESEND_API_KEY,
  contactNotifyTo: process.env.CONTACT_NOTIFY_TO,
} as const;
