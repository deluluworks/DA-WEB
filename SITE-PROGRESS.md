---
branch: claude/elegant-davinci-d402sk
pr: (none yet — PR #5 merged into production; this run opens a fresh PR, see Run 4 note)
quota_per_run: 4
fix_cap: 3
wallclock_cap_min: 90
last_run_head: 827575409f2acd449f37f86568ac33b18fa536f7
skip: []
cursor: { unit: author-tanmaya-rao/section-port, phase: pending }
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
`sections-services.jsx`). `app.jsx`'s `Page()` mounts 13 sections total
(Hero, LogoWall, Featured, Services, Showreel, Portfolio, PainPoints,
Stats, WhyUs, Industries, Testimonials, Faq, Contact) plus shared Nav/
Footer chrome — all 13 are now ported. `sections-4.jsx` additionally
defines `DABrandValues`/`DAWhatWeDo`, but `app.jsx` never renders them; see
the `home/brand-values-what-we-do` row below — confirmed dead code in the
export, not part of the live homepage, so not a pending unit. All 13
mounted sections are now ported and `home/wire-links` is satisfied (see
below) — **home is now fully passed**.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| home/hero | `components/home/Hero.tsx` (+ styles in `home.css`) | passed | Ported from `da/sections-1.jsx` `DAHero`. Screenshot-verified 1440/375 |
| home/logowall | `components/home/LogoWall.tsx` | passed | Ported from `DALogoWall` — CSS marquee animation (`prefers-reduced-motion` respected) |
| home/cta-closer | Lightweight "Book a call" closing section | superseded | Was never from the export — a Run 1 stopgap. Removed (Run 3) and replaced by `home/contact-section`'s real `DAContact`-derived section, which now closes the page with its own CTA |
| home/featured-work | `DAFeatured` — 4-project stacking scroll panels | passed | `da/sections-1.jsx` lines 138–204. `components/home/FeaturedWork.tsx`, styles in `home.css`. Field-notes link points at `/blog` (site-config's "Thinking" mapping) instead of the export's unwired `#thinking` anchor. Tested: build/lint clean, 0 failing checks (14 pending-route soft-warnings), screenshot-verified 1440/375, no overflow, mobile stacks to single column |
| home/services | `sections-services.jsx` | passed | `components/home/Services.tsx` (client component — cursor-follow color-block preview), styles in `home.css`. Preview/cursor is fine-pointer + ≥900px only (CSS `pointer: fine` media query, matches export's "fine-pointer only" comment); mobile/touch gets the row list without the floating preview. Tested: build/lint clean, 0 failing checks, hover-preview screenshot-verified (color-block tile + "VIEW →" cursor follow both work), mobile stacks cleanly with no overflow. Note: first test run hit a false-positive failure (CSS 500 + overflow + font fallback) from a stale orphaned `next-server` process left over from a prior background-task kill on :8080 — killed it and restarted clean, re-ran green. Lesson for future runs: always verify the PID actually died after `pkill`/backgrounding, not just the shell's exit status |
| home/showreel-portfolio-painpoints-stats | `sections-2.jsx` sections (Showreel, Portfolio, PainPoints, Stats) | passed | `components/home/{Showreel,Portfolio,PainPoints,Stats}.tsx`, styles in `home.css`. Sticky side-column headings (Portfolio intro, PainPoints h2) only sticky at ≥900px — plain stacked flow below that. Found + fixed a real content bug: two PainPoints quotes had literal `&rsquo;` text baked into JSX *string attributes* (not JSX children, so never HTML-decoded in the export) — replaced with real Unicode apostrophes, screenshot-confirmed rendering correctly. `#thinking`/`#work` anchor placeholders mapped to `/blog` / `/clients` per site-config's nav mapping. Tested: build/lint clean, 0 failing checks on first pass, 1440/375 screenshots verified for full page + close-up of the pain-points cards, no overflow |
| home/whyus-industries-testimonials-faq | `DAWhyUs`, `DAIndustries`, `DATestimonials` (`sections-3.jsx`) + `DAFaq` (`sections-4.jsx`) | passed | `components/home/{WhyUs,Industries,Testimonials,Faq}.tsx`, styles appended to `home.css`. New DS primitives ported: `components/ds/{Tag,Avatar,Eyebrow}.tsx` (+ CSS in `ds-components.css`) — needed by Industries/Testimonials/WhyUs/Faq, first use since the contact-page port. FAQ uses native `<details>/<summary>` (no JS accordion state needed). `#work`/`#contact` anchors mapped to `/clients` / `/contact` per site-config. Tested: build/lint clean, 0 failing checks on first pass, all 4 sections screenshot-verified individually at 1440/375 (maze graphic, industry tags, testimonial avatars + highlight, FAQ accordion open/closed state), no overflow |
| home/brand-values-what-we-do | `sections-4.jsx` `DABrandValues`, `DAWhatWeDo` | skipped — not rendered | **Correction (Run 3)**: these components are defined in `sections-4.jsx` but `da/app.jsx`'s `Page()` never renders them — its JSX list goes `Faq → Contact → Footer` with no `<DABrandValues />`/`<DAWhatWeDo />`. Confirmed the live export HTML (`Design Asylum Studio.html`) loads `sections-4.jsx` only for the components `app.jsx` actually uses (Faq/Contact/Footer). These two are dead code in the reference export, never part of the rendered homepage — porting them would add content that was never live. Not counted as a pending unit going forward; revisit only if a human explicitly asks for this copy to be added as new content |
| home/contact-section | Embed `ContactForm` inline (as the export does, `id="contact"`) | passed | `components/home/Contact.tsx`. Ported from `da/sections-4.jsx` `DAContact` (the section `app.jsx` *does* mount) — its right column was an inert "Pick a slot" booking placeholder (hardcoded "Wed 18, 11:00", submitted nothing); replaced with the real `ContactForm`, same decision already made for `/contact`. Reused `.da-contact-grid`/`.da-mail`/`.da-mail-serif` from `contact.css` rather than duplicating; replaced the placeholder `da-home-cta` CTA section (which was never from the export — a Run 1 stopgap) since the real Contact section already closes with its own CTA. Tested: build/lint clean, 0 failing checks (10 pending-route soft-warnings), screenshot-verified 1440/375, no overflow, form stacks below intro on mobile |
| home/metadata | Title/description | passed | Uses layout default (`Design Asylum — Bold by design`) — matches export title verbatim, no override needed |
| home/wire-links | 3+ internal links | passed | **Correction (Run 3)**: re-audited actual component code rather than trusting the stale Run 2 note — 7 contextual links already exist across the ported sections, to 3 distinct destinations: `/contact` (Faq CTA, Industries CTA), `/blog` (Showreel teaser, FeaturedWork field-notes), `/clients` (Industries logos, Portfolio "see more", PainPoints outcome links). Requirement (3+ real internal links) already met; no new work needed |

## Manifesto (`/manifesto`) — `Manifesto.html`

Source: `manifesto/manifesto.jsx` (single self-mounting page, no `app.jsx`
assembly step). First page to use the export's `sevenloop/sl-shared.jsx`
`useReveal`/`sl-reveal` scroll-in pattern — rather than duplicate it under a
second class name, it now hooks into the DS token-driven `.reveal-up` /
`.is-revealed` primitive already in `base.css` (ported in Run 1 from the
`_ds` bundle's own `useReveal`/`revealStyle`) via a new tiny client
component, `components/Reveal.tsx`'s `RevealObserver`. Reusable by every
future "SL"-family page (Why Us, FAQ index, Clients index, client hubs,
etc. all use the same `sl-reveal` pattern in the export).

| Unit id | Description | Status | Notes |
|---|---|---|---|
| manifesto/section-port | `app/manifesto/page.tsx`, `app/styles/manifesto.css`, shared `components/Reveal.tsx` | passed | Verbatim editorial copy (11 paragraphs) from `manifesto/manifesto.jsx`; h1 `*Terms and Conditions` kept as-is per the source's own comment ("verbatim CMS mislabel", also the footer's "Our terms" target). Nav/footer chrome reused from the shared layout (not re-implemented as `SLNav`/`SLFooter` — those export components are what `Nav.tsx`/`Footer.tsx` were already ported from in Run 1). Tested: build/lint clean, 0 failing checks (14 pending-route soft-warnings), screenshot-verified 1440/375 at top/mid-scroll/end, reveal-on-scroll confirmed firing, no overflow |
| manifesto/metadata | Title + description via Metadata API | passed | Title "Manifesto" (renders "Manifesto — Design Asylum" via the layout template); description ported from the export's `<meta name="description">` verbatim |
| manifesto/wire-links | 3+ real internal links | passed | Breadcrumb → `/` (Home), plus a new closing line (not in the source essay, added in the site's voice) linking to `/clients` and `/contact` — same pattern as the `/contact` page's added cross-links. Also wired the footer's "Our terms" item (present in the export's `SLFooter` copy but dropped when `Footer.tsx` was built in Run 1) to `/manifesto` in `lib/site-config.ts`, and registered `/manifesto` in `.testing/routes.mjs` `BUILT_ROUTES` |

## Why Design Asylum (`/why-design-asylum`) — `Why Design Asylum.html`

Source: `footer/why-da.jsx` (self-mounting, 7 sections: Hero, Showreel,
Testimonials, FeaturedProjects, Fit, TeamStrip, Closing). The export's
`AltNav` (a `PillNav` instance with page-specific labels: "Our work", "The
right fit", …) was not ported — the site has one shared global `<Nav/>` in
the root layout (already established for every other page); a per-page nav
variant doesn't fit that architecture.

**New shared CSS investment**: this page's `svc-*`/`fb-*`/`pr-*`/`auth-tag`
classes are reused **verbatim** (same names, same rules) across ~12 more
export pages (Why Us, Clients Index, FAQ Index/Corporate-Rebrand, Recent
Updates, Author, Industry, Location, Service, Solution, OneLern) — ported
once into `app/styles/ds-components.css` (mobile-first grids added: the
export's fixed 3-column `svc-grid` and 2-column `fb-fit` grid are both
1-column below 700px) rather than re-declaring per page. Page-only layout
classes (`wda-*`) live in `app/styles/why-design-asylum.css`.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| why-design-asylum/section-port | `app/why-design-asylum/page.tsx` + `components/why-da/*` | passed | Showreel's "Play showreel" button is the export's own inert placeholder (never wired to a real video) — kept as static/decorative, no video invented. Featured Projects' 6 cards link to `/clients` (no per-project case-study routes exist yet beyond Sevenloop/Aavenir) — same unbuilt-project convention as home's Industries/Portfolio. Team strip's 8 "Meet {name}" pills link to `/team` (export had unwired `href="#"`). Reuses `RevealObserver` built for the manifesto unit — 4 reveal-up elements. Tested: build/lint clean, 0 failing checks (13 pending-route soft-warnings), screenshot-verified 1440/375 (full scroll-through, including a full page + section-cropped pass confirming the reveal-on-scroll fires correctly under real scroll — an initial `fullPage` capture without incremental scrolling produced a false-blank artifact in a few reveal-gated sections; re-verified via computed-style checks and targeted crops, not a site bug), no overflow |
| why-design-asylum/metadata | Title + description via Metadata API | passed | Title "Why Design Asylum" (renders "Why Design Asylum — Design Asylum" via layout template); description ported verbatim |
| why-design-asylum/wire-links | 3+ real internal links | passed | Breadcrumb → `/`, Closing CTAs → `/why-us` + `/contact`, Featured Projects → `/clients` (×6), Team strip → `/team` (×8) — well beyond 3. `/why-design-asylum` was already wired into the primary nav ("Studio") and footer ("Why Design Asylum") in Run 1; registered the route in `.testing/routes.mjs` `BUILT_ROUTES` |

## Why Us (`/why-us`) — `Why Us.html`

Source: `footer/why-us.jsx` — a single-column prose "sales letter" (no
multi-section layout like the other pages so far). Deliberately lowercase,
informal voice in the body copy ("right now, you're probably comparing us
against 3 other agencies...") — kept verbatim, it's the source's
intentional tone shift from the rest of the site's sentence-case voice.
Added `.pr-col`/`.pr-promise` to `ds-components.css` (confirmed reused
verbatim across the same ~6 pages as `pr-ul`/`pr-quote`: Clients Index,
Contact, FAQ Index, Recent Updates, Why Design Asylum, Pricing).

| Unit id | Description | Status | Notes |
|---|---|---|---|
| why-us/section-port | `app/why-us/page.tsx`, `app/styles/why-us.css` | passed | The export's `AltNav` again not ported (shared global `Nav`, same call as Why Design Asylum). "Watch 10:55 min testimonial video" button kept as the export's own inert placeholder (no video source ever existed). Reuses `RevealObserver`. Tested: build/lint clean, 0 failing checks (12 pending-route soft-warnings), screenshot-verified 1440/375 full scroll-through, no overflow |
| why-us/metadata | Title + description via Metadata API | passed | Title "Why Us?" (renders "Why Us? — Design Asylum"); description ported verbatim |
| why-us/wire-links | 3+ real internal links | passed | Breadcrumb → `/`, closing CTA → `/contact`. Also wired the footer's "No-brainer offer" item (present in the export's `SLFooter` copy, dropped in Run 1) to `/why-us` in `lib/site-config.ts` — this closes the loop with `why-design-asylum/section-port`'s "See the offer" link, which pointed here. Registered `/why-us` in `.testing/routes.mjs` `BUILT_ROUTES` |

## Team (`/team`) — `Team.html`

Source: `team/team.jsx` — two-tier roster (Leadership 12 + Our Team 22),
content already ported verbatim in `global/content-team`
(`content/team/data.ts` / `lib/content/team.ts`), so this unit was pure
layout/component work, no new copy extraction.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| team/section-port | `app/team/page.tsx`, `components/team/{MemberCard,RosterSection}.tsx`, `app/styles/team.css` | passed | Mobile-first `tm-grid` (1 col below 600px, 2 at 600px, 3 at 900px, 4 at 1180px — export was a fixed 4/3/2 desktop-down grid with no mobile floor). **Decision**: the export's card links were export-only hash routes (`'#/author/' + slug(name)`) that never resolved to a real page for any of the 34 members — only one dedicated author template exists in the whole export (`author/`, for Tanmaya Rao, built as a blog-author-bio page, not a per-member bio system per SITE-GUIDE). So only Tanmaya Rao's card links to the queued `/author/tanmaya-rao` route; the other 33 link to `/team#<slug>` (a real, working same-page anchor — not a placeholder `#`) — same "link to nearest real destination" convention used for unbuilt per-item routes elsewhere (home's Portfolio/Industries → `/clients`). Also added a closing CTA (not in the source `team.jsx`, no closer existed) linking to `/contact`, matching the voice/pattern already established on Why Us/Why Design Asylum/Manifesto's added closers. Tested: build/lint/typecheck clean, 0 failing checks (11 pending-route soft-warnings), screenshot-verified 1440/375 full scroll-through (Leadership + Our Team grids, closing CTA), no overflow, mobile reflows to single column with working mobile nav |
| team/metadata | Title + description via Metadata API | passed | Title "Team" (renders "Team — Design Asylum"); description ported verbatim from the export's `<meta name="description">` |
| team/wire-links | 3+ real internal links | passed | Breadcrumb → `/`, closing CTA → `/contact`, Tanmaya Rao's card → `/author/tanmaya-rao` (queued pending route), 33 other cards → `/team#<slug>` real same-page anchors. `/team` was already wired into the primary nav ("Team") and footer ("Team") in Run 1; moved from `PENDING_ROUTES` to `BUILT_ROUTES` in `.testing/routes.mjs` |

## Remaining pages (not started — queue order per SITE-GUIDE.md §2–§7)

Each row is a coarse section-port placeholder; will be split into granular
units (matching the Home/Contact/Manifesto/Why-Design-Asylum/Why-Us/Team
pattern above) when picked up.

| Page | Planned slug | Source folder | Unit id | Status |
|---|---|---|---|---|
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

### Run 2 — 2026-07-04 (continued on a new session branch — see reconciliation)

**Reconciliation — branch-continuity break, IMPORTANT for future runs**: this
routine assumes one durable branch (`[BRANCH: claude/next-build]`) that every
run resumes. In practice, the harness that invokes this routine assigns each
session a *freshly generated* branch name
(`claude/elegant-davinci-<random>`), so no branch named `claude/next-build`
has ever existed, and this run's assigned branch
(`claude/elegant-davinci-21f0la`) started at the pre-bootstrap commit
(`5993a4f`), before `SITE-GUIDE.md` even. Worse: two prior scheduled runs
fired 32 seconds apart (`2026-07-04T14:32:00Z` and `14:32:32Z`) and each
independently ran the full FIRST-RUN BOOTSTRAP from scratch, producing two
competing draft PRs — **#2** (branch `claude/elegant-davinci-7ievrz`:
contact + `home/hero`+`home/logowall`+`cta-closer` passed, Vercel preview
confirmed live) and **#3** (branch `claude/elegant-davinci-r2vqud`: contact
+ team-content passed, home left as a stub). Notified the human of this via
push notification before proceeding (duplicate-PR situation is a
shared-repo-state judgment call, not something to silently resolve).
Rather than run a **third** duplicate bootstrap, this run fast-forward
merged `origin/claude/elegant-davinci-7ievrz` (the more advanced of the
two) into `claude/elegant-davinci-21f0la` — a clean fast-forward since
`5993a4f` is its ancestor — and continued the WORK LOOP from there per its
own `SITE-PROGRESS.md` "Next run should" note. No other human/prior-session
commits existed beyond that merge; no re-test needed.
**Human action recommended**: close PR #3 as a duplicate, and treat this
run's eventual PR (opened against `claude/design-asylum-homepage-elx1ah`,
same as #2/#3) as the canonical continuation of #2's work. Longer-term, the
scheduling setup should pin a durable branch name (or this routine should
look up the branch from the existing open PR against the production
branch, rather than assuming its own assigned branch is the continuation
point) so this doesn't recur every run.

**Environment preflight**: same as Run 1 — no env vars set in this sandbox
(`SHEETS_WEBHOOK_URL`, `RESEND_API_KEY`, analytics IDs). Build/tests do not
depend on them; no new SETUP NEEDED items.

**Build & serve**: `npm ci` (471 packages), `next build` clean throughout,
`next start` on :8080 for every TEST step. One harness hiccup, not a code
bug: after the first background-server kill, the shell wrapper reported
the kill as "failed" but the underlying `next-server` process was actually
still alive and orphaned, holding :8080 and serving a stale build — this
produced a false-positive test failure (CSS 500, overflow, font fallback)
on the `home/services` unit's first test run. Diagnosed via `ps aux` +
`EADDRINUSE` in the server log, killed the real PID, restarted clean, and
the same test run went green. Lesson recorded in that unit's notes: always
verify the PID actually died, not just the shell's reported exit status.

**WORK LOOP** (4 of 4 quota units used, all first-pass — 0 FIX-loop
iterations needed): `home/featured-work`, `home/services`,
`home/showreel-portfolio-painpoints-stats` (4 sections: Showreel,
Portfolio, PainPoints, Stats), `home/whyus-industries-testimonials-faq` (4
sections: WhyUs, Industries, Testimonials, Faq). Home is now 12 of 15
export sections ported (Hero, LogoWall, FeaturedWork, Services, Showreel,
Portfolio, PainPoints, Stats, WhyUs, Industries, Testimonials, Faq) plus
the non-export CTA closer. Added DS primitives `Tag`, `Avatar`, `Eyebrow`
(ported from the `_ds` bundle source / `da/sections-1.jsx`) — first use of
any DS primitive beyond Button/Input since the contact page.

**Bugs found and fixed** (real content bugs in the export, not
introduced): two `PainPoints` quotes had literal `&rsquo;` text baked into
JSX *string attributes* (e.g. `quote="We can&rsquo;t convey..."`) —
because JSX only HTML-decodes entities in *children* text, not in string
attribute literals, the export would have rendered the literal string
`&rsquo;` on the page. Replaced with real Unicode apostrophes; confirmed
correct via screenshot. Checked all other `da/*.jsx` files for the same
pattern — no other instances found.

**Blocked/parked**: none new. `global/analytics-verify`,
`global/contact-integrations-verify` remain `blocked-setup` (same as Run
1).

**Commit range**: `5a8edd4` (Run 1's final commit, adopted as this run's
baseline) through `3a97b72` (last passed-unit commit this run) on
`claude/elegant-davinci-21f0la`.

**Next run should**: pick up `home/brand-values-what-we-do`
(`DABrandValues` + `DAWhatWeDo` from `sections-4.jsx`), then
`home/contact-section` (inline `ContactForm` embed) and `home/wire-links`
to finish Home, then move to `manifesto/section-port` per queue order.
Before coding anything, re-run the branch-continuity reconciliation above
— if a durable branch still doesn't exist, check for open PRs against the
production branch first rather than assuming a fresh bootstrap is needed.

### Run 3 — 2026-07-04 (continued on a fourth fresh session branch — see reconciliation)

**Reconciliation — same branch-continuity break as Run 2, again**: this
session was assigned yet another freshly generated branch,
`claude/elegant-davinci-6mi2rx`, which turned out to be a direct git
ancestor of `claude/elegant-davinci-21f0la` (Run 2's branch, PR #4) at
exactly its pre-bootstrap commit (`5993a4f`) — i.e. zero divergent commits,
a clean fast-forward. Checked open PRs against the repo first (per Run 2's
own recommendation) rather than assuming a fresh bootstrap: found **three**
open draft PRs (#2, #3, #4) all racing the same migration from
near-simultaneous scheduled runs. PR #4 (`claude/elegant-davinci-21f0la`)
is the most advanced — it already adopted #2's branch as its baseline and
carries 4 more shipped units on top, and its own body recommends treating
it as canonical. Fast-forward merged `origin/claude/elegant-davinci-21f0la`
into this session's branch (trivial — no conflicts, no re-test needed,
since the local branch had no commits beyond the shared ancestor) and
continued the WORK LOOP from its "Next run should" note. No other
human/prior-session commits existed on top; diffed `last_run_head`
(`3a97b72`) through the adopted tip (`5d2b94d`) and found only this
routine's own two "chore: progress" commits — no reconciliation action
needed beyond what Run 2 already logged.

**Environment preflight**: same as Runs 1–2 — no env vars set in this
sandbox. Build/tests do not depend on them; no new SETUP NEEDED items.

**Build & serve**: `npm ci` (471 packages), `next build` clean throughout,
`next start` on :8080 for every TEST step, killed and restarted fresh
before every rebuild (per Run 2's PID lesson — verified each old
`next-server` PID was actually dead via `ps aux`/port-probe before
restarting, every time).

**WORK LOOP** (4 of 4 quota units used, 0 FIX-loop iterations needed):

1. **`home/contact-section`** — plus two queue corrections found while
   reading `sections-4.jsx`/`app.jsx` directly: (a) `home/brand-values-
   what-we-do` (`DABrandValues`/`DAWhatWeDo`) is dead code in the export —
   `app.jsx`'s `Page()` never renders them — marked `skipped` rather than
   ported; (b) `home/wire-links` was already satisfied by links added in
   prior runs' sections (7 links, 3 destinations) — marked `passed` with
   no new work. **Home is now fully passed** (13/13 mounted export
   sections ported).
2. **`manifesto/section-port`** (+ metadata + wire-links) — first page
   needing the export's `sl-reveal`/`useReveal` scroll-in pattern; built
   `components/Reveal.tsx` (`RevealObserver`) hooking into the DS token's
   existing `.reveal-up`/`.is-revealed` primitive instead of duplicating
   it under a new class name. Wired the footer's "Our terms" link (in the
   export's `SLFooter` copy, dropped when `Footer.tsx` was built in Run 1)
   to `/manifesto`.
3. **`why-design-asylum/section-port`** (+ metadata + wire-links) — 7
   sections. Promoted `svc-*`/`fb-*`/`pr-*`/`auth-tag` into
   `ds-components.css` after confirming they're reused verbatim across
   ~12 more queued pages; added mobile-first breakpoints (export grids
   were fixed 2–3 column, no mobile layout at all).
4. **`why-us/section-port`** (+ metadata + wire-links) — single-column
   prose page. Added `pr-col`/`pr-promise` to the same shared stylesheet
   (same reuse pattern, confirmed across 6 pages). Wired the footer's
   "No-brainer offer" link to `/why-us`, closing the loop with Why Design
   Asylum's "See the offer" CTA that points here.

**Testing note (not a bug, logged for future runs)**: an initial
`page.screenshot({ fullPage: true })` taken without any prior real scroll
produced a false-blank render for `reveal-up`-gated sections on the Why
Design Asylum page (Featured Projects grid, Fit blocks) — Chromium's
full-page capture doesn't fire the real scroll events `IntersectionObserver`
needs. Confirmed via computed-style checks (`opacity`, `.is-revealed`
class) and targeted crops after a real incremental `scrollTo` loop that
the underlying page is correct. **Lesson for future runs**: always
incrementally scroll through the page before a full-page screenshot on
any route using `RevealObserver`/`.reveal-up`.

**Bugs found and fixed**: none new this run (Run 2's `&rsquo;`-in-attribute
bug class was already checked exhaustively last run).

**Blocked/parked**: none new. `global/analytics-verify`,
`global/contact-integrations-verify` remain `blocked-setup` (unchanged).

**Commit range**: `5d2b94d` (Run 2's final commit, adopted as this run's
baseline after the branch-continuity fast-forward) through this run's
last commit on `claude/elegant-davinci-6mi2rx` — see `git log` for exact
shas (all carry this routine's trailer).

**Human action needed**: four open draft PRs (#2, #3, #4, and this run's
#5) now exist for what is effectively one continuous line of work.
Recommend closing #2, #3, and #4 in favor of #5 (it is the furthest ahead
— a strict superset of all their commits). **Vercel preview confirmed
Ready** for #5:
https://designasylum-studio-git-9235a4-ankush-misras-projects-a0fc591e.vercel.app
(same project as prior runs, picked this branch up automatically — no
new one-time setup needed). As Run 2 already recommended — still
unresolved — pinning a durable branch name for this routine would stop
future scheduled runs from rediscovering this same fan-out.

**Next run should**: pick up `team/section-port` (`team/team.jsx` —
content already ported in `global/content-team`, so this unit is mostly
layout/component work, not new copy extraction), then continue down the
"Remaining pages" queue in table order (Author — Tanmaya Rao, Pricing,
Recent Updates, Clients index, …). Before coding anything, re-run the
branch-continuity reconciliation above — check open PRs against the
production branch first.
