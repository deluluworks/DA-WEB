---
branch: claude/elegant-davinci-21f0la
pr: pending — see Run 2 note (branch continuity issue, PR #2/#3 duplicate)
quota_per_run: 4
fix_cap: 3
wallclock_cap_min: 90
last_run_head: 5a8edd44445885d237b0bd3b92ae8f7c5c42e9ff
skip: []
cursor: { unit: home/whyus-industries-testimonials-faq, phase: testing }
---

# SITE-PROGRESS

Single source of truth for the Next.js port of the Design Asylum Studio
website. Human edits to this file always win — the routine only appends.
The **code** is the truth about what exists; this file is a queue + log.

App root: `web/`. Legacy PHP (`index.php`, `includes/`, `api/`, `da/`,
`_ds/`, `.htaccess`) stays untouched at the repo root until cutover. Reference
export: `Design Asylum Studio website (1)/` (read-only — never edit).

## Conventions

- **Unit status**: `pending` · `blocked-1` / `blocked-2` (failed FIX loop,
  retry count) · `blocked-setup` (needs an env var / human decision) ·
  `re-test` (human touched passed code, needs re-verification) · `passed`.
- **Unit id**: `<page-slug>/<unit-slug>`.
- Every page gets: one or more **section-port** units (JSX → typed React,
  config/hrefs rewired), one **wire-links** unit (3+ real internal links),
  and one **metadata** unit (title + description via the Metadata API).
  Pages not yet started list a single coarse section-port unit that will be
  split into per-section units when work begins on that page (see Home for
  the granular pattern once a page is underway).
- Nav item destinations (Work/Studio/Thinking/Clients/Team/Book a call) are
  an **assumption** documented in `web/lib/site-config.ts` — the export's nav
  was unwired `#` placeholders (SITE-GUIDE.md §8A). Revisit if wrong.

## SETUP NEEDED

- `SHEETS_WEBHOOK_URL`, `RESEND_API_KEY`, `CONTACT_NOTIFY_TO` — not present in
  this sandbox. The contact route handler (`web/app/api/contact/route.ts`)
  degrades gracefully when absent (still validates + honeypots correctly;
  the Sheets append / Resend notify are `Promise.allSettled` best-effort and
  logged, never block the user-facing response). **Human action**: set these
  in the Vercel project's environment variables, then verify a real
  submission lands in the Sheet on the preview deployment.
- `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_CLARITY_ID`,
  `NEXT_PUBLIC_GOOGLE_ADS_ID` — not present. `web/components/Analytics.tsx`
  is fully wired (env-driven, `next/script` `afterInteractive`, no-op when a
  given ID is unset) but untestable end-to-end in this sandbox since every
  analytics host is network-blocked. **Human action**: set the real IDs in
  Vercel, then confirm beacons fire on the preview via each vendor's
  debugger.
- `NEXT_PUBLIC_SITE_URL` — defaults to `https://designasylum.in` in
  `web/lib/site-config.ts` (`metadataBase`); override in Vercel if the final
  domain differs.
- Visual parity screenshots against the reference export (`:8081`) were not
  possible this run: the export loads React/Babel/the DS bundle from
  `unpkg`/CDN at runtime, and all external hosts are blocked in this
  sandbox, so the reference page never actually renders here. Fidelity was
  instead verified by porting styles/markup directly from the export's JSX
  and design-system bundle source (which is unminified and fully readable),
  plus screenshotting the *built* Next.js pages standalone. **Human
  action**: eyeball the Vercel preview next to the exported `.html` files
  opened locally for true side-by-side parity.

## Global / late units

| Unit id | Description | Status | Notes |
|---|---|---|---|
| global/redirects | Port `_redirects` 301s into `next.config.ts` `redirects()` | passed | `/project/sevenloop`, `/project/sevenloop-explainer-film` → `/clients/sevenloop`; `/project/aavenir` → `/clients/aavenir` |
| global/sitemap | `app/sitemap.ts` | pending | Add once most routes exist — low value while most slugs 404 |
| global/robots | `app/robots.ts` | pending | Same as above |
| global/content-studies | Extract case-study copy into `content/studies/*.mdx` + wire `lib/content/studies.ts` (reader already built, no entries yet) | pending | Real copy source: `sevenloop/sl-editorial.jsx`, `casestudy/`, `aavenir/`, `writtencs/` |
| global/content-blog | Extract blog copy into `content/blog/*.mdx` + wire `lib/content/blog.ts` (reader already built, no entries yet) | pending | Source: `blog/` (Sevenloop rebrand article) |
| global/content-team | Port team roster into typed content | passed | `content/team/data.ts` + `lib/content/team.ts` — full 34-person roster ported verbatim from `team/team.jsx` |
| global/analytics-verify | Verify analytics beacons fire on real IDs | blocked-setup | See SETUP NEEDED |
| global/contact-integrations-verify | Verify Sheets append + Resend email on real env vars | blocked-setup | See SETUP NEEDED |

## Contact — `/contact` *(built first per routine instructions — establishes app/layout.tsx, shared metadata, and the script layer)*

Source: `footer/contact.jsx` (Calendly-embed version) + `da/sections-4.jsx`
`DAContact` (the actual working form). **Decision**: ported the working form
(name/email/message/preferred-slot + honeypot, posts to a real endpoint)
rather than the Calendly placeholder, since the export's `CALENDLY_URL` was
an unconfigured `{{CALENDLY_URL}}` token and the routine's scope explicitly
asks for a working validated contact endpoint. Revisit if a real Calendly
account should replace/augment this.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| contact/app-shell | `app/layout.tsx`, fonts (`app/fonts.ts`, self-hosted Blinker 400 + Fraunces variable), design tokens (`app/styles/tokens.css`, `base.css`), global CSS import graph | passed | Tokens ported verbatim from `_ds/.../tokens/*.css`. Blinker locked to weight 400 per project CLAUDE.md rule ("Regular only, never heavier") |
| contact/nav-footer | `components/Nav.tsx` (+ `nav.css`), `components/Footer.tsx` (+ `footer.css`) | passed | Nav ported from `_ds` `PillNav` source (readable in `_ds_bundle.js`) — its tablet/mobile collapse-to-overlay behavior was already in the component, just never wired into the export's page assembly; this is now the site's real mobile nav. Footer ported from `sevenloop/sl-shared.jsx` `SLFooter` |
| contact/page-shell | `app/contact/page.tsx`, `components/ContactForm.tsx` (+ `contact.css`) | passed | Screenshot-verified at 1440/375, no overflow |
| contact/api-route | `app/api/contact/route.ts`, `lib/contact-schema.ts`, `lib/env.ts` | passed | Validates name/email/message, honeypot silently accepted, Sheets+Resend best-effort via `Promise.allSettled`, graceful 200 on downstream failure. Tested: valid→200, honeypot→200 (silent), invalid email→422, malformed JSON→400, array body→400 |
| contact/metadata | Title + description via Metadata API | passed | `export const metadata` in `app/contact/page.tsx` |
| contact/wire-links | 3+ real internal links | passed | Links to `/`, `/why-design-asylum`, `/clients`, `/pricing` (last three currently pending routes — see global slug table in `.testing/routes.mjs`; will resolve as those units land) |
| contact/analytics-layer | `components/Analytics.tsx` wired into layout | passed | Env-driven Clarity/GA/GTM/Ads; see SETUP NEEDED for live verification |

## Home (`/`) — front door, `Design Asylum Studio.html`

Source: `da/` (`app.jsx`, `sections-1.jsx`…`sections-4.jsx`,
`sections-services.jsx`). 15 sections total in the export; 8 are now ported
(Hero, LogoWall, FeaturedWork, Services, Showreel, Portfolio, PainPoints,
Stats) plus a lightweight closing CTA not from the export. **Per routine
instructions, home is NOT marked passed as a whole** — its remaining
sections are pending-port, old React adopted as baseline where usable.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| home/hero | `components/home/Hero.tsx` (+ styles in `home.css`) | passed | Ported from `da/sections-1.jsx` `DAHero`. Screenshot-verified 1440/375 |
| home/logowall | `components/home/LogoWall.tsx` | passed | Ported from `DALogoWall` — CSS marquee animation (`prefers-reduced-motion` respected) |
| home/cta-closer | Lightweight "Book a call" closing section | passed | Not from export — placeholder closer until Featured/Services etc. land; revisit once real sections below are ported (may replace this) |
| home/featured-work | `DAFeatured` — 4-project stacking scroll panels | passed | `da/sections-1.jsx` lines 138–204. `components/home/FeaturedWork.tsx`, styles in `home.css`. Field-notes link points at `/blog` (site-config's "Thinking" mapping) instead of the export's unwired `#thinking` anchor. Tested: build/lint clean, 0 failing checks (14 pending-route soft-warnings), screenshot-verified 1440/375, no overflow, mobile stacks to single column |
| home/services | `sections-services.jsx` | passed | `components/home/Services.tsx` (client component — cursor-follow color-block preview), styles in `home.css`. Preview/cursor is fine-pointer + ≥900px only (CSS `pointer: fine` media query, matches export's "fine-pointer only" comment); mobile/touch gets the row list without the floating preview. Tested: build/lint clean, 0 failing checks, hover-preview screenshot-verified (color-block tile + "VIEW →" cursor follow both work), mobile stacks cleanly with no overflow. Note: first test run hit a false-positive failure (CSS 500 + overflow + font fallback) from a stale orphaned `next-server` process left over from a prior background-task kill on :8080 — killed it and restarted clean, re-ran green. Lesson for future runs: always verify the PID actually died after `pkill`/backgrounding, not just the shell's exit status |
| home/showreel-portfolio-painpoints-stats | `sections-2.jsx` sections (Showreel, Portfolio, PainPoints, Stats) | passed | `components/home/{Showreel,Portfolio,PainPoints,Stats}.tsx`, styles in `home.css`. Sticky side-column headings (Portfolio intro, PainPoints h2) only sticky at ≥900px — plain stacked flow below that. Found + fixed a real content bug: two PainPoints quotes had literal `&rsquo;` text baked into JSX *string attributes* (not JSX children, so never HTML-decoded in the export) — replaced with real Unicode apostrophes, screenshot-confirmed rendering correctly. `#thinking`/`#work` anchor placeholders mapped to `/blog` / `/clients` per site-config's nav mapping. Tested: build/lint clean, 0 failing checks on first pass, 1440/375 screenshots verified for full page + close-up of the pain-points cards, no overflow |
| home/whyus-industries-testimonials-faq | `DAWhyUs`, `DAIndustries`, `DATestimonials` (`sections-3.jsx`) + `DAFaq` (`sections-4.jsx`) | testing | `components/home/{WhyUs,Industries,Testimonials,Faq}.tsx`, styles appended to `home.css`. New DS primitives ported: `components/ds/{Tag,Avatar,Eyebrow}.tsx` (+ CSS in `ds-components.css`) — needed by Industries/Testimonials/WhyUs/Faq, first use since the contact-page port. FAQ uses native `<details>/<summary>` (no JS accordion state needed). `#work`/`#contact` anchors mapped to `/clients` / `/contact` per site-config |
| home/brand-values-what-we-do | `sections-4.jsx` `DABrandValues`, `DAWhatWeDo` | pending | Seen this run while reading `sections-4.jsx` for the contact form; not ported |
| home/contact-section | Embed `ContactForm` inline (as the export does, `id="contact"`) | pending | Reuse `components/ContactForm.tsx` built for `/contact`; currently home only links out to `/contact` |
| home/metadata | Title/description | passed | Uses layout default (`Design Asylum — Bold by design`) — matches export title verbatim, no override needed |
| home/wire-links | 3+ internal links | pending | Currently only 1 contextual link (`/contact`) beyond nav/footer chrome; add more as sibling pages land |

## Remaining pages (not started — queue order per SITE-GUIDE.md §2–§7)

Each row is a coarse section-port placeholder; will be split into granular
units (matching the Home/Contact pattern above) when picked up.

| Page | Planned slug | Source folder | Unit id | Status |
|---|---|---|---|---|
| Manifesto | `/manifesto` | `manifesto/` | manifesto/section-port | pending |
| Why Design Asylum | `/why-design-asylum` | `footer/why-da.jsx` | why-design-asylum/section-port | pending |
| Why Us | `/why-us` | `footer/why-us.jsx` | why-us/section-port | pending |
| Team | `/team` | `team/team.jsx` | team/section-port | pending — content ready (global/content-team, passed) |
| Author — Tanmaya Rao | `/author/tanmaya-rao` | `author/` | author-tanmaya-rao/section-port | pending |
| Pricing | `/pricing` | `pricing/` | pricing/section-port | pending |
| Recent Updates | `/updates` | `footer/recent-updates.jsx` | updates/section-port | pending |
| Clients index | `/clients` | `footer/clients-index.jsx` | clients/section-port | pending |
| FAQ index | `/faq` | `footer/faq-index.jsx` | faq/section-port | pending |
| FAQ — Corporate Rebrand Expert | `/faq/corporate-rebrand-expert` | `faq/` | faq-corporate-rebrand-expert/section-port | pending |
| Service — Branding Agency | `/service/branding-agency` | `service/` | service-branding-agency/section-port | pending |
| Industry — Manufacturing | `/industry/manufacturing` | `industry/` | industry-manufacturing/section-port | pending |
| Solution — AI SaaS Website | `/solution/ai-saas-website` | `solution/` | solution-ai-saas-website/section-port | pending |
| Location — Ahmedabad | `/location/ahmedabad` | `location/` | location-ahmedabad/section-port | pending |
| Sevenloop — Client Hub (canonical) | `/clients/sevenloop` | `sevenloop/` | clients-sevenloop/section-port | pending — needs global/content-studies first |
| Sevenloop — Branding Case Study | `/clients/sevenloop/branding` | `casestudy/` | clients-sevenloop-branding/section-port | pending |
| Sevenloop — Blog Article | `/blog/sevenloop-rebrand-webflow-case-study` | `blog/` | blog-sevenloop-rebrand/section-port | pending — needs global/content-blog first |
| Sevenloop — Print Showcase | `/print/sevenloop` | `print/` | print-sevenloop/section-port | pending |
| Aavenir — Client Hub | `/clients/aavenir` | `aavenir/` | clients-aavenir/section-port | pending |
| OneLern — Written Case Study | `/case-studies/onelern` | `writtencs/` | case-studies-onelern/section-port | pending |
| Website Audit — Hackuity | `/audit/hackuity` | `audit/` | audit-hackuity/section-port | pending |
| Blog index | `/blog` | — (new, not in export) | blog-index/section-port | pending — no export equivalent; needed since nav "Thinking" + footer "Blog" both link here |

## Run log

### Run 1 — 2026-07-04 (bootstrap)

**Reconciliation**: fresh bootstrap — `SITE-PROGRESS.md` and `web/` did not
exist on any branch. Working branch `claude/elegant-davinci-7ievrz` was at
the same commit as `claude/design-asylum-homepage-elx1ah` (the repo's
default/HEAD branch, treated as PRODUCTION for this run since the task's
`[PRODUCTION BRANCH]` placeholder was not filled in by the caller — flagging
this for the human to confirm/correct). Fast-forward merged
`claude/design-asylum-site-guide-staj8k` (adds `SITE-GUIDE.md`, one commit
ahead of the same base) into the working branch to satisfy "cut from the
branch containing SITE-GUIDE.md." Commits seen: `648c622` (homepage),
`1fb84e3` (PHP conversion), `5993a4f` (JSX components + tokens),
`20bcc33` (SITE-GUIDE.md) — all pre-existing, authored before this routine;
no re-test needed since none touch `web/`.

**Environment preflight**: `SHEETS_WEBHOOK_URL`, `RESEND_API_KEY`,
`CONTACT_NOTIFY_TO`, and all analytics ID env vars are absent in this
sandbox — logged as SETUP NEEDED above, dependent units parked
`blocked-setup`, build/tests do not depend on them.

**Bootstrap**: scaffolded Next.js 16 (App Router, TypeScript, Turbopack) at
`web/`. Ported the Design Asylum v3 design tokens verbatim
(`app/styles/tokens.css`, `base.css`). Self-hosted Blinker (400 only, per
project rule) and Fraunces (variable, normal+italic) via `next/font/local`,
sourcing the actual woff2 files from the `@fontsource`/`@fontsource-variable`
npm packages (npm registry was reachable; the CDN hosts the export used —
jsdelivr/unpkg — are not) and committing them under `app/fonts/`. Built the
shared chrome (`Nav`, `Footer`), site config module (`lib/site-config.ts`,
replacing `window.SITE_CONFIG`), content-layer skeleton
(`content/{team,studies,blog}`, `lib/content/*`), the contact route handler
+ page, the analytics script layer, `.testing/` Playwright harness
(`run-checks.mjs` — SSR marker check, hydration/console-error check with
pending-route-prefetch-404 exclusion, click-sweep, internal-link check with
soft-warn for not-yet-built pending routes, responsive overflow check at
375/768/1280/1440, DS adherence check for box-shadow + Fraunces body font),
and this file.

**WORK LOOP** (2 of 4 quota units used): `contact/*` units and `home/hero` +
`home/logowall` + `home/cta-closer`. All CODE → TEST → passed on first pass
except one FIX iteration: (1) `.da-mail` in the footer hardcoded white text,
which made the contact page's email link invisible on its white background
— scoped the fix to `color: inherit` plus a `.da-mail-serif` override for
the contact-page treatment; (2) the mobile nav overlay's `z-index: 55` beat
the nav bar's implicit stacking order, trapping the close ("×") toggle
under the overlay once open — fixed by giving `.da-nav-bar` `z-index: 56`;
(3) `eslint-plugin-react-hooks` flagged two synchronous `setState`-in-effect
calls in `Nav.tsx` (closing the overlay on breakpoint/route change) —
refactored to the React-documented "adjust state during render" pattern
instead of effects. All three re-tested and passed; `npm run lint` is clean.
Visual parity verified via direct screenshot review (no live reference
render possible — see SETUP NEEDED).

**Blocked/parked**: `global/analytics-verify`, `global/contact-integrations-verify`
(blocked-setup, missing env vars). All "Remaining pages" rows pending
(not started — outside this run's quota).

**Commit range**: see `git log` on this branch for this run's commits
(all carry this routine's trailer). **Vercel preview**: confirmed working —
the Vercel GitHub bot commented on PR #2 with a **Ready** deployment:
https://designasylum-studio-git-071e17-ankush-misras-projects-a0fc591e.vercel.app
(project `designasylum-studio-webiste`, owner `ankush-misras-projects`).
The Vercel project is already connected and building `web/` correctly from
this branch — no further one-time setup needed there. Human should still
add the env vars from SETUP NEEDED so the contact/analytics integrations
work for real on that preview.

**Next run should**: pick up `home/featured-work` (next pending unit in
table order), then continue down the Home section list, then move to
`manifesto/section-port` per queue order.
