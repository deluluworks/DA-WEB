# Deploying the Next.js site (`web/`)

The site is a static-first Next.js App Router app — TypeScript, git-based
content (MDX + typed content files under `web/content/`, no database), the
Design Asylum Studio v3 design system self-hosted (fonts, tokens). It builds
and renders correctly with **zero** environment variables set; the vars below
only unlock live lead delivery and analytics.

## How deploys work here

1. Every push to a work branch (e.g. `claude/elegant-davinci-r2vqud`,
   whatever this session's branch is) creates a **Vercel preview deployment**
   automatically, once a human has connected this repo to a Vercel project
   (one-time setup, below). Preview URLs show up on the PR.
2. **Nothing goes live on its own.** The site reaches production only when a
   human merges the work branch's PR into the production branch
   (`claude/design-asylum-homepage-elx1ah` — the repo's current default
   branch) or promotes a specific deployment in the Vercel dashboard. No
   automated routine triggers a production deploy or promotion.
3. `web/` is the app root. Point the Vercel project's **Root Directory**
   setting at `web/` — the legacy PHP files at the repo root
   (`index.php`, `includes/`, `api/`, `da/`, `_ds/`) are pre-cutover
   artifacts, untouched by this build, and should not be deployed by Vercel.

## One-time Vercel project setup (human)

1. In Vercel, **Add New Project** → import
   `DesignAsylum/designasylum.studio-webiste`.
2. **Root Directory**: `web`.
3. Framework preset: Next.js (auto-detected).
4. Build command / output: leave as Next.js defaults (`next build`).
5. Add the environment variables below (Production **and** Preview scopes —
   previews are how this gets tested before every promotion).
6. Deploy. Every subsequent push to any branch now gets a preview; merges to
   the production branch (or manual promotion) go live.

## Environment variables

All optional at build time — the app builds and every page server-renders
without any of them. They gate specific runtime features:

| Variable | Required for | Notes |
|---|---|---|
| `SHEETS_WEBHOOK_URL` | Contact form → Google Sheets | See "Google Sheets webhook" below. Without it, `/api/contact` still validates and returns success, it just skips the Sheets append. |
| `RESEND_API_KEY` | Email notification on new leads | Optional even with Sheets configured. |
| `RESEND_TO_EMAIL` | — | Defaults to `hello@designasylum.in`. |
| `RESEND_FROM_EMAIL` | — | Defaults to `onboarding@resend.dev`. Set this to an address on a domain verified in Resend before relying on it for real delivery. |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity | Omit to skip the script entirely. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics (GA4) | Omit to skip. Ignored if `NEXT_PUBLIC_GTM_ID` is set (GTM subsumes it). |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager | If set, loads GTM instead of a bare gtag.js include. |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads conversion tag | Omit to skip. |

`NEXT_PUBLIC_*` vars are inlined at build time and visible in the browser —
that's expected for analytics IDs, never put a secret in one of them.

### Google Sheets webhook (Apps Script)

The contact route posts a JSON body (`name`, `email`, `company`,
`submittedAt`, `message`) to `SHEETS_WEBHOOK_URL` — no Google API
credentials needed, just a deployed Apps Script:

1. Create (or open) the target Google Sheet.
2. **Extensions → Apps Script**, replace the default code with a `doPost`
   handler that parses `e.postData.contents` as JSON and appends a row.
3. **Deploy → New deployment → Web app**. Execute as "Me", access "Anyone".
4. Copy the deployment's web app URL into `SHEETS_WEBHOOK_URL` in Vercel.
5. Submit the contact form on a preview deployment and confirm a new row
   appears — this is exactly the "controlled downstream failure" path that
   the sandbox test suite can't verify for real (all external hosts are
   blocked there), so this manual check on a live preview is the real proof.

## Testing before merge

From `web/`:

```
npm run build && npm run start -- -p 8080   # production build + serve
node .testing/run-checks.mjs --url http://127.0.0.1:8080/<slug> --unit <id>
```

See `SITE-PROGRESS.md` for the current unit queue and `.testing/routes.json`
for the slug table `run-checks.mjs` checks against.

---

## Legacy: deploying the PHP homepage to Hostinger

This section describes the **pre-cutover** PHP shell at the repo root
(`index.php`, `includes/`, `api/contact.php`, `da/`). It is left in the repo
untouched during the Next.js migration and should not be edited or deployed
alongside `web/`. Once the Next.js site is promoted to production, this
section — and the files it describes — can be retired.

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
