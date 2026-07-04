---
branch: claude/elegant-davinci-0oj783
pr: (opened this run — see Run 5 note; PR #6 merged into production)
quota_per_run: 4
fix_cap: 3
wallclock_cap_min: 90
last_run_head: 4e08e5f139c09d05e65e8ec6233395a1a11c7fef
skip: []
cursor: { unit: industry-manufacturing/section-port, phase: pending }
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

## Author — Tanmaya Rao (`/author/tanmaya-rao`) — `Author - Tanmaya Rao.html`

Source: `author/auth-app.jsx` (header + about) + `author/auth-blocks.jsx`
(service tags, key-clients marquee, projects grid, blogs list, solution/
industry expertise clouds) — a one-off author-bio template attached to blog
articles (SITE-GUIDE), not a per-team-member bio system (see `team/section-
port`'s decision on the other 33 roster cards). First page to use `svc-
marquee`/`auth-blog`/`svc-card.is-feat` — promoted into `ds-components.css`
alongside the already-shared `svc-grid`/`svc-card`/`auth-tag` (ported during
`why-design-asylum/section-port`).

| Unit id | Description | Status | Notes |
|---|---|---|---|
| author-tanmaya-rao/section-port | `app/author/tanmaya-rao/page.tsx`, `components/author/{ProjectCard,TagCloud}.tsx`, `app/styles/author.css` | passed | Project cards (real client sites/videos) and tag-cloud pills (service/solution/industry expertise) were all unwired `href="#"` placeholders in the export with no real destination to link to — rendered as static/decorative (non-`<a>`) elements instead, same "no invented destination" decision as Why Us's testimonial-video button and Why Design Asylum's showreel button. Breadcrumb's middle crumb substitutes `/team` for the export's unwired "Authors" placeholder (no authors-index page exists or is planned). Source has "Solution **Experties**" / "Industry **Experties**" (typo for "Expertise") in both `TagCloud` headings — ported verbatim as editorial copy, flagged here for human review rather than silently corrected. Tested: build/lint/typecheck clean, 0 failing checks (10 pending-route soft-warnings), screenshot-verified 1440/375 full scroll-through (header, about, tags, marquee, projects grid, blogs list, both expertise clouds), no overflow, mobile nav works |
| author-tanmaya-rao/metadata | Title + description via Metadata API | passed | Title "Tanmaya Rao" (renders "Tanmaya Rao — Design Asylum"); description ported from the export's about-bio opening sentence |
| author-tanmaya-rao/wire-links | 3+ real internal links | passed | Breadcrumb → `/` + `/team`, and `team/section-port`'s Tanmaya Rao card → this page (closes that loop). Moved `/author/tanmaya-rao` from `PENDING_ROUTES` to `BUILT_ROUTES` in `.testing/routes.mjs` |

## Pricing (`/pricing`) — `Pricing.html`

Source: `pricing/pricing.jsx` — utility 8-row INR/USD/timeline table page.
`/contact`'s wire-links unit already linked here back in Run 1 (as a
pending-route placeholder); that link now resolves.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| pricing/section-port | `app/pricing/page.tsx`, `components/pricing/PricingTable.tsx`, `app/styles/pricing.css` | passed | Table wrapper scrolls horizontally on narrow viewports (`min-width: 720px` inside an `overflow-x: auto` wrapper) rather than reflowing the 4-column matrix into single columns — a data table like this can't usefully stack, and this keeps the page body itself overflow-free (verified at 375/768). Page-scoped `.pricing-page .pr-promise-band .pr-promise` override tunes the shared `.pr-promise` class (already used by Why Us in a prose-flow context) to this page's headline-scale closing treatment — same class name, different page-scoped rule, matching the export's own per-page convention of tuning shared class names per context. **Source has several verbatim typos** in the intro/footnote copy ("give you sense of", "retianer", "combiantion", "vs its not is not the same", "the not the same") — ported as-is rather than silently corrected, same policy as the "Experties" typo flagged on the Author page; human should decide whether to clean these up. Tested: build/lint/typecheck clean, 0 failing checks (10 pending-route soft-warnings), screenshot-verified 1440/375, no overflow (table scrolls internally), mobile nav works |
| pricing/metadata | Title + description via Metadata API | passed | Title "Pricing" (renders "Pricing — Design Asylum"); description is new (the export had no `<meta name="description">` override for this page beyond the site default) |
| pricing/wire-links | 3+ real internal links | passed | Breadcrumb → `/`, contextual "team" link in the intro → `/team`, closing CTA (new, not in source — same added-closer pattern as Team/Why Us/Why Design Asylum) → `/contact`. Plus the pre-existing inbound link from `/contact` now resolves. Moved `/pricing` from `PENDING_ROUTES` to `BUILT_ROUTES` in `.testing/routes.mjs` |

## Recent Updates (`/updates`) — `Recent Updates.html`

Source: `footer/recent-updates.jsx` — dated changelog feed (featured
highlight + 8-row current-projects list + 9-item archive list). Added
`cl-*` (changelog item/number/archive row) and `.fb-chip.is-fill`/`.is-iris`
modifiers to `ds-components.css` (`fb-chip` base already existed from an
earlier page; this is the first page needing the filled/outline variants).

| Unit id | Description | Status | Notes |
|---|---|---|---|
| updates/section-port | `app/updates/page.tsx`, `app/styles/updates.css` | passed | Featured-highlight "Know more →" CTA and the 9-item archive list were unwired `href="#"` placeholders in the export with no matching article/case-study route — rendered as static/decorative rows, same "no invented destination" policy as the Author page's blog list. Converted the source's large block of inline `style={{...}}` objects into semantic classes in `updates.css` (mobile-first `cl-item` grid: 44px number column below 600px, 64px at ≥600px, matching the design system's preference for classes/tokens over stray inline style objects). Tested: build/lint/typecheck clean, 0 failing checks (9 pending-route soft-warnings), screenshot-verified 1440/375 full scroll-through (highlight box, changelog list, archive list, closing CTA), no overflow, mobile nav works |
| updates/metadata | Title + description via Metadata API | passed | Title "Recent Updates" (renders "Recent Updates — Design Asylum"); description ported from the intro paragraph |
| updates/wire-links | 3+ real internal links | passed | Breadcrumb → `/`, contextual "client engagements" link in the intro → `/clients` (pending route), closing CTA (new, not in source — same added-closer pattern as Team/Pricing/Why Us/Why Design Asylum) → `/contact`. `/updates` was already wired into the footer ("Recent updates") in Run 1; moved from `PENDING_ROUTES` to `BUILT_ROUTES` in `.testing/routes.mjs` |

## Clients (`/clients`) — `Clients - Index.html`

Source: `footer/clients-index.jsx` — H1 + 44-tile client grid, no other
sections. Every tile was an unwired `href="#"` in the export; only Sevenloop
and Aavenir have a real client-hub route queued in the table below, so those
two tiles link to their real (still-pending) `/clients/sevenloop` and
`/clients/aavenir` routes and the other 42 link to a same-page anchor
(`/clients#<slug>`, with a matching `id` on each tile) — same "link to
nearest real destination, don't invent one" convention as Team's 33
unbuilt-bio cards. Reused the export's `ci-grid`/`ci-tile` classes verbatim
as page-scoped CSS (`app/styles/clients.css`, not promoted to
`ds-components.css` since nothing else in the queue reuses this exact tile
shape) with a mobile-first 1/2/3/4-column grid (export was a fixed 4-column
desktop grid with no mobile layout).

| Unit id | Description | Status | Notes |
|---|---|---|---|
| clients/section-port | `app/clients/page.tsx`, `app/styles/clients.css` | passed | 44-tile grid, reveal-up on the grid section. Added a closing `/contact` CTA (not in source — same added-closer pattern as Team/Pricing/Updates/Why Us/Why Design Asylum). **1 FIX iteration**: the export's `ci-tile` is a fixed `aspect-ratio: 4/3` square with `overflow: hidden` and a font-size floor of 22px — verbatim-porting that to a 1-column mobile grid produced two problems caught on mobile screenshot review (not caught by `run-checks.mjs`, which only checks page-level horizontal overflow, not per-element clipping): (1) 44 near-square tiles stacked 1-up made for a ~13,700px scroll; (2) long single-word names ("Simplicontract", "Cloudphysician") clipped against the tile edge since the 22px floor couldn't shrink to fit. Fixed by switching the grid's mobile floor to 2 columns (not 1) and giving `.ci-tile`/`.ci-tile-name` mobile-only rules (auto-height tile below 600px instead of the fixed aspect-ratio, font-size floor lowered to a `4.2vw` scaling clamp) — the fixed aspect-ratio + 22px floor only apply from 600px up, where it's verbatim to the export. Re-tested clean after the fix. Tested: build/lint/typecheck clean, `node .testing/run-checks.mjs --unit clients/section-port` 0 failing checks (13 pending-route soft-warnings — Sevenloop/Aavenir hubs + the rest of the still-unbuilt queue), screenshot-verified 1440/375 full scroll-through (header, tile grid, hover state, closing CTA) both before and after the mobile fix, no overflow, mobile nav works, grid reflows 2→3→4 columns |
| clients/metadata | Title + description via Metadata API | passed | Title "Clients" (renders "Clients — Design Asylum"); description ported verbatim from the export's `<meta name="description">` |
| clients/wire-links | 3+ real internal links | passed | Breadcrumb → `/`, closing CTA → `/contact`, Sevenloop/Aavenir tiles → their real pending client-hub routes, remaining 42 tiles → same-page `/clients#<slug>` anchors. `/clients` was already the primary nav's "Work"/"Clients" target and the footer's "Website projects"/"Clients" target since Run 1 — this is the single most-linked-to route landing this run (Home, Why Design Asylum, Why Us, Team, Author, Updates, nav, footer all point here); moved `/clients` from `PENDING_ROUTES` to `BUILT_ROUTES` in `.testing/routes.mjs`, converting all of those prior soft-warnings into real passing link checks |

## FAQ index (`/faq`) — `FAQ - Index.html`

Source: `footer/faq-index.jsx` — the export's own comment marks this as a
"representative cross-cluster set (the live index holds ~100; structure is
identical)": 24 accordion Q&As, each originally targeting an
`#/faq/{slug}` detail page. None of those 24 slugs match the one per-
question FAQ page actually queued in this table
(`/faq/corporate-rebrand-expert`), so "Read the full answer" — redundant
anyway, since the accordion already shows the full answer inline — was
dropped rather than wired to 24 fabricated routes; same "no invented
destination" policy as the Author page's project cards and the Updates
archive rows. Reused the `.da-faq`/`.da-faq-q`/`.da-faq-plus`/`.da-faq-a`
accordion classes verbatim from `components/home/Faq.tsx`'s `home.css`
rules (native `<details>/<summary>`, no JS state) instead of the export's
own `bl-faq-*` class family, since the visual/interaction pattern is
identical and this avoids a second accordion implementation.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| faq/section-port | `app/faq/page.tsx`, `app/styles/faq.css` | passed | Single-column, max-width 880px layout (export's own centering). Added a closing block (not in source — same added-closer pattern as Clients/Team/Pricing/Updates/Why Us/Why Design Asylum) with a primary `/contact` CTA and a secondary `/team` link. Tested: build/lint/typecheck clean, 0 failing checks (6 pending-route soft-warnings), screenshot-verified 1440/375 full scroll-through (header, all 24 accordion items, closing block), no overflow, mobile nav works, first accordion item open by default matching the export |
| faq/metadata | Title + description via Metadata API | passed | Title "FAQs" (renders "FAQs — Design Asylum"); description ported verbatim from the export's `<meta name="description">` |
| faq/wire-links | 3+ real internal links | passed | Breadcrumb → `/`, closing CTA → `/contact`, secondary closing link → `/team`. `/faq` was already the footer's "FAQs" target since Run 1; moved `/faq` from `PENDING_ROUTES` to `BUILT_ROUTES` in `.testing/routes.mjs` |

## Service — Branding Agency (`/service/branding-agency`) — `Service - Branding Agency.html`

Source: `service/svc-*.jsx` (5 files: app/body/portfolio/extras/prims) — a
long-form "SEO landing page" template: hero, sticky scroll-spy Table of
Contents + 9-section long-form body, portfolio marquee + filter tabs + a
23-project grid, a 6-item FAQ, an 8-person experts grid, and 6 related-blog
cards. **Confirmed reused verbatim by 3 more queued pages**: read
`industry/ind-app.jsx` and `industry/ind-blocks.jsx` before starting this
unit and found byte-for-byte identical component shapes and class names
(`ProjectCard`/`FaqItem`/`ExpertCard`, `bl-toc`/`bl-h2`/`bl-ul`/`svc-tabs`/
`svc-team-grid`/`svc-related`, …) under `Ind*` names instead of `Svc*` —
Solution and Location follow the same `{prefix}-app.jsx`/`{prefix}-blocks.jsx`/
`{prefix}-body.jsx` file layout, so near-certainly the same template too.
Given that, this run promoted the **generic, reusable pieces** to shared
code rather than porting them once and re-porting for Industry/Solution/
Location later:
- `components/svc-template/{Prims,TableOfContents,MarqueeStrip,Portfolio,Faq,Experts,Related}.tsx` — presentational + the scroll-spy client component, all data-driven via props (no Service-specific content baked in).
- `app/styles/ds-components.css` — the full `bl-*` article-template CSS plus `.svc-section-h2`/`.svc-tabs`/`.svc-team-*`/`.svc-related-*` (previously page-scoped `svc-*` classes for the portfolio grid/marquee already existed here from the Author-page unit).
- `lib/slugify.ts` — extracted from `app/clients/page.tsx` (now imported by both) since the portfolio grid needed the same slug logic to link back to `/clients` tiles.

Page-specific content (hero copy, the 9 body sections, the 23 projects, the
6 FAQs, the 8 experts, the 6 related posts) stays in
`app/service/branding-agency/page.tsx` — only the template mechanics moved.

**Linking decision**: the export's 23 portfolio cards were unwired
`href="#"`. Most project names match a tile already on `/clients` (built
this run), so those link to the matching `/clients#<slug>` anchor instead —
a real destination, not fabricated. Sevenloop links to its real (still
pending) `/clients/sevenloop` hub. "Fortuna Identity" has no unambiguous
match (only "Fortuna Cysec" is on the roster, a distinct engagement) and
stays decorative, same "no invented destination" policy applied to the FAQ
accordion sub-links (Experts' "Read more" and Related's blog cards — no
per-expert bio or blog-article routes exist yet).

**Filter tabs**: the export's `svc-tabs` (Solution/Service/Industry/
Branding Projects) never actually filter the `PROJECTS` array in the
source — `tab` state only toggles the active button style. Ported as-built
(decorative tabs), not "fixed" to add filtering the export itself never
implemented.

**Testing lesson (not a bug — same class as Run 3's, logged for future
runs)**: the first screenshot pass showed the entire FAQ section and the
entire Related section missing — headings and all. Diagnosed via
`getComputedStyle`/`classList` in a Playwright `evaluate` rather than
guessing: `is-revealed` **was** correctly applied to every `.reveal-up`
element by the `IntersectionObserver`, but the CSS transition
(`--motion-reveal: 720ms`) hadn't finished by the time the screenshot fired
— the capture script's post-scroll wait was only 200–300ms. Not a code bug;
fixed by waiting ~900ms after the last scroll step before capturing.
**Lesson**: for any page with `.reveal-up` sections, verify with
`is-revealed`/computed `opacity` (not just a screenshot) before concluding
content is broken, and give the 720ms transition real time to finish.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| service-branding-agency/section-port | `app/service/branding-agency/page.tsx`, `app/styles/service.css`, `components/svc-template/*` | passed | 0 FIX iterations (the reveal-up issue above was a test-script timing artifact, not a code fix). Tested: build/lint/typecheck clean, 0 failing checks (5 pending-route soft-warnings), screenshot-verified 1440/375 full scroll-through plus targeted crops (hero, ToC+body, portfolio tabs, team grid, related grid), no overflow, mobile nav works, ToC renders as a plain (non-sticky) block above the body below 900px, sticky scroll-spy confirmed above 900px |
| service-branding-agency/metadata | Title + description via Metadata API | passed | Title "Branding Agency" (renders "Branding Agency — Design Asylum"); description ported verbatim |
| service-branding-agency/wire-links | 3+ real internal links | passed | Breadcrumb → `/`, hero CTA → `/contact`, 22 of 23 portfolio cards → `/clients` tiles or `/clients/sevenloop` — far beyond 3. Moved `/service/branding-agency` from `PENDING_ROUTES` to `BUILT_ROUTES` in `.testing/routes.mjs` |

## Remaining pages (not started — queue order per SITE-GUIDE.md §2–§7)

Each row is a coarse section-port placeholder; will be split into granular
units (matching the Home/Contact/Manifesto/Why-Design-Asylum/Why-Us/Team/
Author/Pricing/Recent-Updates/Clients/FAQ/Service pattern above) when
picked up. Industry/Solution/Location should reuse `components/svc-template/*`
and the `bl-*`/`svc-section-*`/`svc-tabs`/`svc-team-*`/`svc-related-*` CSS
already promoted to `ds-components.css` — confirm each page's markup still
matches before assuming a 1:1 fit.

| Page | Planned slug | Source folder | Unit id | Status |
|---|---|---|---|---|
| FAQ — Corporate Rebrand Expert | `/faq/corporate-rebrand-expert` | `faq/` | faq-corporate-rebrand-expert/section-port | pending |
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

### Reconciliation — PR #3 (`claude/elegant-davinci-r2vqud`) merged forward

PR #3 was another instance of this same fan-out: an independent bootstrap
of the identical migration, done in parallel on session branch
`claude/elegant-davinci-r2vqud` without visibility into #5's progress. Its
`web/` used a `src/` layout (`web/src/app`, `web/src/components`, ...) —
a different file structure for the same app, not reconcilable file-by-file
with this branch's `web/app`/`web/components`/`web/lib` layout.

Resolution: merged this branch (production) into `claude/elegant-davinci-r2vqud`
and, for every conflicting path, kept this branch's version (the more
advanced, actively-continued implementation — Home/Contact/Manifesto/Why
Design Asylum/Why Us all ported vs. #3's Contact-only). Deleted #3's entire
`web/src/` tree and its duplicate `content/` stub files (`content/team/team.ts`,
`content/studies/*.mdx`, `content/blog/*.mdx`) as superseded — none of it
was referenced by this branch's code. Verified `npm run build` and
`npm run lint` both still pass clean on `claude/elegant-davinci-r2vqud`
after the merge (7 routes, same as this branch pre-merge).

Nothing from #3 was worth cherry-picking forward: its contact-form/route
handler, PillNav, and Footer are functionally equivalent to what's already
in `web/components/ContactForm.tsx` / `web/app/api/contact/route.ts` /
`web/components/Nav.tsx` / `web/components/Footer.tsx` here, just built
independently. **Recommend closing PR #3** — after this merge its diff
against `claude/design-asylum-homepage-elx1ah` is empty, so it has nothing
further to contribute.

*(Editor's note, added while resolving the merge below: this PR #3 merge
landed on the production branch mid-way through Run 4, after Run 4's own
branch had already forked from production. Run 4 independently identified
PR #3 as a stale duplicate — of #5, not realizing by the time it closed #3
that #3 had already been merged forward per the note above — and closed
it with an explanatory comment. Both conclusions agree: #3 had nothing
further to contribute. No `web/` files conflicted when merging this
production update into Run 4's branch — this file was the only conflict,
both sides purely additive.)*

### Run 4 — 2026-07-04 (PR #5 merged; fresh branch restarted from production tip)

**Reconciliation**: this session was assigned branch
`claude/elegant-davinci-d402sk`. Checked git state first per the standing
recommendation: the branch's tip (`8275754`) already matched
`origin/claude/design-asylum-homepage-elx1ah` (production) exactly — PR #5
had merged since the last run, and this branch was cut fresh from that
merged tip rather than needing any reconciliation/fast-forward work.
Diffed `last_run_head` (`af21bf9`, Run 3's final commit) through `8275754`:
only two merge commits and Run 3's own final "chore: progress" commit —
no human edits to reconcile, no re-test needed. Checked open PRs against
the repo: found #3 (`claude/elegant-davinci-r2vqud`) still open — a stale,
far-behind duplicate from the same Run-2-era fan-out that #5 (now merged)
already superseded. Closed it with an explanatory comment rather than
leaving it to rot (see the PR for the note); no unique work was on that
branch. No `claude/next-build` branch exists — same harness-assigns-a-
fresh-branch-per-session situation Runs 2/3 already flagged; still
unresolved, still recommend a durable branch (or PR-lookup-first) fix.

**Environment preflight**: same as all prior runs — no env vars set in
this sandbox. Build/tests do not depend on them; no new SETUP NEEDED
items.

**Build & serve**: `npm ci` (471 packages), `next build` clean throughout
(9 → 13 routes as pages landed), `next start` on :8080 for every TEST
step — killed and confirmed each prior `next-server`/`npm exec` PID
actually reached zombie/defunct state via `ps aux` before every restart
(per Run 2's lesson), never relied on the shell's reported exit status
alone.

**WORK LOOP** (4 of 4 quota units used, 0 FIX-loop iterations needed —
every unit passed on its first `run-checks.mjs` pass):

1. **`team/section-port`** (+ metadata + wire-links) — two-tier roster
   (Leadership 12 + Our Team 22), content already available from
   `global/content-team`. The export's per-member `'#/author/' + slug`
   hash links never resolved to a real page for 33 of the 34
   members — only Tanmaya Rao has a queued author-bio page — so those 33
   cards link to `/team#<slug>` (a real same-page anchor) instead of a
   fabricated per-person route; only Tanmaya Rao's card links to
   `/author/tanmaya-rao`. Added a closing `/contact` CTA (not in source).
2. **`author-tanmaya-rao/section-port`** (+ metadata + wire-links) — bio
   header, about, service-expertise tags, key-clients marquee, projects
   grid, blogs list, solution/industry expertise clouds. First page using
   `svc-marquee`/`auth-blog`/`svc-card.is-feat` — promoted into
   `ds-components.css` alongside the already-shared
   `svc-grid`/`svc-card`/`auth-tag`. Project cards and tag pills were
   unwired `href="#"` placeholders with no real destination — kept
   static/decorative, no destination invented (same policy as Why
   Us/Why Design Asylum's inert video buttons). Found source has
   "Solution **Experties**" / "Industry **Experties**" (typo for
   "Expertise") in both `TagCloud` headings — ported verbatim, flagged
   for human review rather than silently corrected.
3. **`pricing/section-port`** (+ metadata + wire-links) — 8-row INR/USD/
   timeline table. Table wrapper scrolls horizontally on narrow viewports
   instead of reflowing (a data matrix can't usefully stack). Reused the
   shared `.pr-promise` class for the closing band with a page-scoped
   override (different sizing than Why Us's prose-flow usage of the same
   class name — matches the export's own per-page tuning convention).
   Source has several verbatim typos in the intro/footnote ("give you
   sense of", "retianer", "combiantion", "vs its not is not the same") —
   ported as-is, flagged for human review, same policy as unit 2's
   "Experties" typo. `/contact`'s pre-existing link to `/pricing` (added
   back in Run 1, previously a pending-route soft-warning) now resolves
   for real.
4. **`updates/section-port`** (+ metadata + wire-links) — changelog feed
   (featured highlight, 8-item current-projects list, 9-item archive).
   Converted the source's large block of inline `style={{...}}` objects
   into semantic classes (`updates.css`) rather than porting the inline-
   style pattern verbatim — matches the design system's preference for
   classes/tokens over stray inline styles. Added `cl-*` changelog
   primitives and `.fb-chip.is-fill`/`.is-iris` modifiers to
   `ds-components.css`. Highlight CTA and archive rows were unwired
   `href="#"` placeholders with no matching article route — rendered as
   static rows, same policy as unit 2.

**Bugs found and fixed**: none this run (no HTML-entity-in-attribute class
bugs found in the four new source files — checked each while porting).

**Typos found, NOT corrected (flagged for human review)**: "Solution/
Industry Experties" (should be "Expertise", `author/auth-blocks.jsx`);
"give you sense of", "retianer", "combiantion", "vs its not is not the
same", "the not the same", "not same" (`pricing/pricing.jsx`). Policy:
this routine ports editorial copy verbatim and flags apparent typos here
rather than silently rewriting content it wasn't asked to edit — a human
should decide whether to correct these.

**Blocked/parked**: none new. `global/analytics-verify`,
`global/contact-integrations-verify` remain `blocked-setup` (unchanged).

**Commit range**: `37fd8bc` through `32da126` on
`claude/elegant-davinci-d402sk` (this run's commits all carry this
routine's trailer; base `8275754` is production's merged tip, not a prior
run's commit).

**Human action needed**: closed stale duplicate PR #3 (see above) — no
other action needed there. Same durable-branch-naming issue Runs 2/3
already flagged remains unresolved; consider pinning one so future runs
stop re-deriving branch continuity from scratch. This run's own PR is
opened fresh (see below) since #5 already merged and a merged PR can't be
reused. Opened **PR #6** (`claude/elegant-davinci-d402sk` →
`claude/design-asylum-homepage-elx1ah`). **Vercel preview confirmed
Ready**:
https://designasylum-studio-git-c01677-ankush-misras-projects-a0fc591e.vercel.app
(same project, picked up this branch automatically — no new one-time
setup needed).

**Next run should**: pick up `clients/section-port` (`footer/clients-
index.jsx`, planned slug `/clients`) — note this is the single
most-linked-to pending route across every page shipped so far (Home,
Why Design Asylum, Why Us, Team, Author, Updates all point here), so
landing it will convert a large number of existing soft-warnings into
real passes. `global/content-studies` should probably land before or
alongside `clients-sevenloop/section-port` per its existing note. Continue
down the "Remaining pages" table in order after that.

### Run 5 — 2026-07-04 (PR #6 merged; fresh branch restarted from production tip)

**Reconciliation**: this session was assigned branch
`claude/elegant-davinci-0oj783`. Its tip (`36508d3`) already matched
`origin/claude/design-asylum-homepage-elx1ah` (production) exactly — PR #6
had merged since the last run, and this branch was cut fresh from that
merged tip. Diffed `last_run_head` (`32da126`, Run 4's final commit)
through `36508d3`: only Run 4's own "chore: progress" commits and the PR #6
merge commit — no human edits to reconcile, no re-test needed. Checked open
PRs against the repo (per the standing recommendation): none open — #6 was
the only one and it's merged, so no fan-out this time, no duplicate-PR
cleanup needed. Same `[BRANCH: claude/next-build]` mismatch Runs 2–4
already flagged persists (the harness still assigns a fresh
`claude/elegant-davinci-<random>` branch per session) — still recommend
pinning a durable branch name; the check-open-PRs-first workaround
continues to work fine as a substitute.

**Environment preflight**: same as all prior runs — no env vars set in this
sandbox. Build/tests do not depend on them; no new SETUP NEEDED items.

**Build & serve**: `npm ci` (471 packages), `next build` clean throughout
(11 → 16 routes as pages landed), `next start` on :8080 for every TEST
step — confirmed each prior `next-server` PID reached zombie/defunct state
via `ps aux` before every restart (per Run 2's lesson), never relied on the
shell's reported exit status alone.

**WORK LOOP** (4 of 4 quota units used, ~28 minutes wall-clock):

1. **`clients/section-port`** (+ metadata + wire-links) — 44-tile client
   grid. **1 FIX iteration**: verbatim-porting the export's fixed
   `aspect-ratio: 4/3` tile to a 1-column mobile grid produced a ~13,700px
   scroll and clipped long single-word names ("Simplicontract",
   "Cloudphysician") against the tile edge — `run-checks.mjs` didn't catch
   either problem since it only checks page-level horizontal overflow, not
   per-element clipping or scroll-length sanity; both were caught by
   screenshot review. Fixed with a 2-column mobile floor and auto-height
   tiles below 600px (fixed aspect-ratio + font floor still apply verbatim
   from 600px up). Converts the single most-linked-to pending route
   (Home, Why Design Asylum, Why Us, Team, Author, Updates, nav, footer all
   point here) to a real pass.
2. **`faq/section-port`** (+ metadata + wire-links) — 24-item accordion FAQ
   index (export's own comment: representative sample of a ~100-item live
   index). Reused `home/Faq.tsx`'s `.da-faq` native `<details>` classes
   instead of porting the export's JS-driven `bl-faq-*` accordion. None of
   the 24 sample slugs match the one queued FAQ detail page
   (`/faq/corporate-rebrand-expert`), so "Read the full answer" — redundant
   anyway since the full answer is already shown inline — was dropped
   rather than wired to 24 fabricated routes. 0 FIX iterations.
3. **`service-branding-agency/section-port`** (+ metadata + wire-links) —
   the largest unit this run: hero, sticky scroll-spy ToC + 9-section
   long-form body, portfolio marquee/tabs/23-project grid, FAQ, 8-person
   experts grid, 6 related posts. Read `industry/ind-app.jsx` and
   `industry/ind-blocks.jsx` before starting and found byte-for-byte
   identical component shapes/class names to `service/svc-*.jsx` under
   `Ind*` names — confirmed reuse, not speculative — so promoted the
   generic template pieces to `components/svc-template/*` (7 files) and
   the `bl-*`/`svc-section-*`/`svc-tabs`/`svc-team-*`/`svc-related-*` CSS to
   `ds-components.css`, plus extracted `lib/slugify.ts` (shared with
   `/clients`) rather than re-porting this whole template for Industry/
   Solution/Location later. Portfolio cards link to their matching
   `/clients` tile where the client name matches (22 of 23), decorative
   otherwise. 0 FIX iterations — an initial screenshot showing the entire
   FAQ and Related sections missing (headings included) turned out to be a
   test-script timing artifact: `IntersectionObserver` correctly applied
   `is-revealed` to every element, but the 720ms CSS transition hadn't
   finished before the screenshot fired. Verified via `getComputedStyle`/
   `classList` in a Playwright `evaluate` rather than assuming a code bug;
   fixed by waiting ~900ms post-scroll before capturing. Logged as a
   lesson (same class as Run 3's reveal-up/fullPage-screenshot lesson) for
   future runs testing any `.reveal-up` page.

**Bugs found and fixed**: none new in the export's own source this run
(the `clients/section-port` and `service-branding-agency` fixes above were
both this migration's own responsive-CSS gaps, not bugs ported from the
export).

**Blocked/parked**: none new. `global/analytics-verify`,
`global/contact-integrations-verify` remain `blocked-setup` (unchanged).

**Commit range**: `9f41fd2` through `4e08e5f` on
`claude/elegant-davinci-0oj783` (all commits this run carry this routine's
trailer; base `36508d3` is production's merged tip, not a prior run's
commit).

**Human action needed**: none blocking. Opened **PR #7**
(`claude/elegant-davinci-0oj783` → `main`) — the repo's default branch
changed from `claude/design-asylum-homepage-elx1ah` to `main` (same
commit, just renamed/repointed) partway through this run, finally
resolving the durable-branch-naming gap every prior run's log flagged;
this PR targets `main` accordingly.

**Post-PR fix**: the Vercel preview for PR #7 initially failed —
`Error: No Output Directory named "public" found after the Build
completed` — even though `next build` itself succeeded (all 16 routes
prerendered) in the same log. Confirmed via `mcp__Vercel__get_project` that
the Vercel project's `framework` field had reset to `null` (Root Directory
was still correctly `web`), so it fell back to static-site output
conventions instead of Next.js's `.next` output. Added
`web/vercel.json` (`{"framework": "nextjs"}`) so this is pinned in-repo
rather than dependent on the dashboard's auto-detection; the very next
deploy on the same PR went **Ready**:
https://designasylum-studio-git-6e4374-ankush-misras-projects-a0fc591e.vercel.app

**Next run should**: pick up `industry-manufacturing/section-port`
(`industry/ind-*.jsx`) — reuse `components/svc-template/*` and the shared
`bl-*`/`svc-section-*` CSS from this run rather than re-porting the
template; confirm the markup still matches before assuming a 1:1 fit, then
continue with `solution-ai-saas-website/section-port` and
`location-ahmedabad/section-port` (same template family, per this run's
note), then `faq-corporate-rebrand-expert/section-port` per queue order.
