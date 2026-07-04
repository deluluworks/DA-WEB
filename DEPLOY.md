# Deploying Design Asylum Studio

The site is being rebuilt as a static-first **Next.js App Router** app at
`web/` (TypeScript, git-based content, no database, no PHP). It deploys to
**Vercel**. The legacy PHP/Hostinger site (repo root, outside `web/`) stays
live and untouched until the new app is ready to cut over — see
[Legacy: Hostinger (PHP)](#legacy-hostinger-php) below.

## How deploys work

- **Every push** to any branch connected to the Vercel project produces a
  **Preview Deployment** — a unique URL to review before anything goes
  live. This is a one-time setup a human does once in the Vercel dashboard
  (Import the repo → set **Root Directory** to `web/`); after that it's
  automatic on every push.
- **Production** only updates when a human merges the branch to the
  production branch (or promotes a specific deployment in the Vercel
  dashboard). Nothing in this workflow — including this automated build
  routine — pushes to the production branch or triggers a production
  deploy.
- Vercel builds with `next build` and serves with its own runtime — no
  `next start` process to manage, no server to patch.

## One-time setup (human)

1. In Vercel: **Add New → Project**, import
   `designasylum/designasylum.studio-webiste`, set **Root Directory** to
   `web`. Framework preset auto-detects Next.js.
2. Set environment variables (Project Settings → Environment Variables).
   None are required for the app to **build** — every integration below
   degrades gracefully when its variable is unset — but they're required
   for the corresponding feature to actually work in production:

   | Variable | Used by | Required for |
   |---|---|---|
   | `SHEETS_WEBHOOK_URL` | `app/api/contact/route.ts` | Leads reaching the Google Sheet |
   | `RESEND_API_KEY` | `app/api/contact/route.ts` | Email notification on new lead |
   | `CONTACT_NOTIFY_TO` | `app/api/contact/route.ts` | Where the Resend email goes |
   | `NEXT_PUBLIC_GA_ID` | `components/Analytics.tsx` | Google Analytics (GA4) |
   | `NEXT_PUBLIC_GTM_ID` | `components/Analytics.tsx` | Google Tag Manager |
   | `NEXT_PUBLIC_CLARITY_ID` | `components/Analytics.tsx` | Microsoft Clarity |
   | `NEXT_PUBLIC_GOOGLE_ADS_ID` | `components/Analytics.tsx` | Google Ads conversion tag |
   | `NEXT_PUBLIC_SITE_URL` | `lib/site-config.ts` | Correct absolute URLs in metadata/sitemap |

3. **Google Sheets webhook (`SHEETS_WEBHOOK_URL`)**: create a Google Sheet,
   then Extensions → Apps Script, paste a script that reads the POSTed JSON
   body (`name`, `email`, `slot`, `message`, `submittedAt`) and appends a
   row via `SpreadsheetApp`. Deploy it as a Web App (Execute as: *Me*,
   Access: *Anyone*), and use the resulting `/exec` URL as
   `SHEETS_WEBHOOK_URL`. Test with a real submission on the Preview
   Deployment once deployed — this can't be exercised end-to-end in the
   sandboxed build environment (all external hosts are network-blocked
   there), only the graceful-failure path is tested there.
4. **Resend** (optional): create an API key at resend.com, verify a sending
   domain, set `RESEND_API_KEY` + `CONTACT_NOTIFY_TO`.

## Ongoing workflow

1. Push to a feature branch → review the auto-generated Preview URL
   (comment on the PR, or the Vercel dashboard).
2. Merge to the production branch when ready → Vercel promotes
   automatically, or a human promotes a specific build manually.
3. `SITE-PROGRESS.md` (repo root) tracks what's been ported, tested, and
   what's still pending — check it before assuming a page is live-ready.

## Local development

```
cd web
npm install
npm run dev      # dev server, hot reload — do NOT use for final verification
npm run build && npm run start   # production build + serve, matches Vercel
```

`next dev` hides real SSR/hydration behavior; always verify with
`build` + `start` before calling a page done (see `web/.testing/`).

## Testing harness

`web/.testing/run-checks.mjs` drives a Playwright Chromium against a running
`next start` server: SSR content check, hydration/console-error check,
interactive-element click-sweep, internal-link check, responsive overflow
check (375/768/1280/1440), and design-system adherence (no stray
box-shadows, Fraunces body font). Run per-route:

```
node .testing/run-checks.mjs --url http://127.0.0.1:8080/<slug> --unit <id>
```

---

## Legacy: Hostinger (PHP)

This section is preserved for the current live site at the repo root
(`index.php`, `includes/`, `api/`, `da/`, `_ds/`) until cutover. **Do not
edit these files as part of the Next.js migration** — they're read-only
scaffolding for the old stack.

This is a PHP site: `index.php` renders the page shell and injects site
config server-side; the page itself is still a build-less React app
(loaded from CDN via Babel Standalone) for the visual layer, with a real
PHP backend for the contact form.

### File layout

```
index.php              entry point — sets page title, includes header/footer
includes/
  config.php            site settings: contact email, phone, SMTP, rate limit
  header.php             <head>, design-system assets, injects window.SITE_CONFIG
  footer.php             loads the React section scripts, closes the page
  .htaccess               blocks direct HTTP access to this folder
api/
  contact.php            POST endpoint the homepage contact form submits to
da/                       React section components (homepage)
_ds/                      Design Asylum design-system bundle (CSS, tokens, JS)
.htaccess                 sets index.php as the default document
```

### Steps

1. **Edit `includes/config.php`** before upload:
   - `recipient_email` — where contact-form leads should land
   - `contact_email` / `contact_phone` — shown across the page and footer
   - Leave `smtp_host` empty to use PHP's built-in `mail()`. For reliable
     delivery (recommended — shared-hosting `mail()` often lands in spam),
     set `smtp_host` to `smtp.hostinger.com`, `smtp_port` to `587`, and fill
     in `smtp_user` / `smtp_pass` with a Hostinger email account's
     credentials, then install PHPMailer:
     ```
     composer require phpmailer/phpmailer
     ```
     and upload the resulting `vendor/` folder alongside the rest of the
     site. `api/contact.php` automatically uses PHPMailer/SMTP when
     `vendor/autoload.php` is present and `smtp_host` is set; otherwise it
     falls back to `mail()`.

2. **Upload** the whole project folder to `public_html` (via Hostinger's
   File Manager or FTP/SFTP). Keep the folder structure intact.

3. In hPanel, set the **PHP version** to 8.1+ under
   *Advanced → PHP Configuration*.

4. Visit your domain — `index.php` is served automatically as the default
   document (`.htaccess` sets `DirectoryIndex index.php`).

5. Test the contact form at the bottom of the homepage. A submission with
   working SMTP/`mail()` config should arrive at `recipient_email` within
   a minute; check hPanel's email logs if it doesn't.

### Notes

- `includes/` is blocked from direct HTTP access (`includes/.htaccess`) and
  every file in it also self-guards with a `DA_APP` constant check, so even
  a misconfigured server can't leak `config.php` contents.
- The contact endpoint has a simple per-IP rate limit (`rate_limit_seconds`
  in `config.php`) and a honeypot field — no CAPTCHA dependency.
