---
quota_per_run: 2
fix_cap: 3
wallclock_cap_min: 75
last_run_head: 6b3dacb902f96d0b5d865705002004e874360be1
skip: []
cursor: { unit: global/sitemap, phase: pending }
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

## Global / viewport + motion upgrade *(inserted at FRONT of queue — Run 11)*

Pages shipped before this prompt version were only verified to 1440 with
animations disabled. These three units retrofit the two new release criteria —
FULL-RANGE RESPONSIVE (375→2560) and MOTION PARITY — across the whole site.
They run before the remaining page ports.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| global/harness-viewport-motion | Extend `.testing/run-checks.mjs` with 1920+2560 viewport assertions (centered capped column, full-bleed bands span viewport, overflow detected via element widths since `overflow-x:hidden` masks `scrollWidth`) + the MOTION PASS (reveal in-view state, marquee transform advance, accordion transition, hover-lift transition, hero gradient running; reduced-motion suppression sample) | passed | **Run 11 cycle 1**: harness extended. Responsive loop now runs 375/768/1280/1440/**1920/2560**; true horizontal overflow measured by momentarily lifting the `overflow-x:hidden` mask on html/body then restoring (the old scrollWidth check was blind to it). ≥1920 asserts the `.da-wrap` column is centered (`\|left−right\|≤2`) & capped (<vw), and the `.da-footer` full-bleed band spans the viewport (±2px). MOTION PASS runs in a fresh browser: reveal-up gains `is-revealed` on scroll, marquee `transform` advances over 500ms, accordion open flips + transition declared, hover-lift transition declared, hero-gradient running-animation probe — each PASS/SKIP(absent)/FAIL, so a route without a given motion isn't penalised but a shipped-but-dead motion element hard-fails. Reduced-motion sample (`reducedMotion:'reduce'` context) asserts reveal shown instantly + marquee/gradient suppressed. **Real bug caught & fixed** by the new overflow probe: home Industries row (`.da-ind-row`) used `grid-template-columns:15% 50% 35%` which + `gap:32px` clipped 2px at ~768px — switched to `0.15fr 0.5fr 0.35fr` (+ `min-width:0` children) so tracks distribute after gaps. Home re-verified clean at 375→2560 + motion + 768 screenshot. Added `.testing/with-server.sh` (boots+waits+tears-down `next start` inside one foreground command — this sandbox kills detached servers) and diagnostic helpers `shoot.mjs`/`find-overflow.mjs`/`probe-bleed.mjs`. Tested: harness green on home (0 fail), service (reveal 4/4, 0 fail), contact (contact-API + skips, 0 fail) |
| global/large-viewport-sweep | Fix shared layout/tokens for >=1920 composition (centered max-width column, full-bleed bands, fluid caps), then re-verify EVERY passed route at 1920 and 2560. Per-page re-test units opened only for pages still broken after the shared fix | passed | **Run 11 cycle 2**: ALL 20 built routes re-verified at 1920 **and** 2560 via the extended harness — **0 failures** across the board (centered capped `.da-wrap` column at 1200px, full-bleed `.da-footer` spanning the viewport, no true horizontal overflow at any width 375→2560, motion + reduced-motion passing). The ≥1920 composition was already built correctly in prior runs (the shared chrome centers content at `--page-max-width:1200` with `margin:0 auto`; footers/heroes/logowall + service/home marquees are full-width blocks with a `.da-wrap` inside; display type uses `clamp()` tokens that cap at 1920+ so nothing stretches — "fluid caps" already satisfied). No page was broken at ≥1920, so **no per-page re-test units opened**. Shared fixes this cycle: (1) the home Industries `.da-ind-row` `%`-track+gap overflow (committed in cycle 1 when the new overflow probe first caught it); (2) harness precision — accordion transition detection now scans the `<details>` subtree **including ::before/::after pseudo-elements**, since the blog FAQ animates its plus→minus icon via `.bl-faq-icon::after{transition:opacity}` (a pseudo-element the element-only check missed → false fail). Visual 2560 spot-checks (home, clients, service, contact, team, sevenloop hub, blog article) all compose cleanly — centered column, comfortable density, no tiny-text-in-whitespace |
| global/motion-retrofit | Build/confirm shared motion primitives as client islands (reveal-on-scroll, marquee, hover-lift, accordion transitions, hero gradient) using DS motion tokens, apply to every already-ported page per the export sources, re-verify with the motion pass | passed | **Run 12 cycle 1**: the four scroll/loop/hover/accordion primitives were already built & applied in prior runs (`RevealObserver` + `.reveal-up`, `.da-marquee-track`/`.sl-marquee`/`.svc-marquee-track`, `.pill-hover` + card lifts, `<details>` FAQ transitions) and re-confirmed green by the motion pass. The one motion the harness reported **absent/SKIP on every route** — the **animated hero gradient** — is now shipped: the DS `.gradient-loop` primitive (`@keyframes da-gradient-loop`, `--motion-loop`/`--ease-inout`, already in `base.css` but applied nowhere) is now on the three signature hero gradients — home `.da-hero-bloom`, sevenloop `.sl-hero-glow`, blog `.bl-hero-glow` (each rule switched from the `background` shorthand → `background-image` so the shared class owns `background-size:200% 200%`). Also ported the home hero's two missing export entrance motions (`Design Asylum Studio.html` `.da-rise`/`.da-hero-film`): `.da-hero-rise` staggered fade-up (0/.12/.22s) on the h1/lede/actions + `.da-hero-film-in` clip-reveal on the film panel + the film play-button hover scale — all rebuilt on DS tokens (`--motion-reveal`/`--ease-out`/`--motion-base`/`--ease-soft`) with a `prefers-reduced-motion` reset. Note: the export **website** heroes use a *static* solar-bloom gradient (only the DS `AnimatedHero` component defines the loop); applying the DS loop is the faithful way to satisfy the prompt's MOTION PARITY "animated hero gradient" criterion using the sanctioned primitive. Tested: `next build` clean; motion pass **0 failing** on home (gradient running `da-gradient-loop` + reduced-motion suppressed), `/clients/sevenloop` (reveal 10/10 + gradient), `/blog/...` (accordion + gradient); regression smoke of 5 untouched routes (service/contact/team/faq/why-da) all 0-fail. Screenshots 375/1440/2560: home hero composes correctly (centered 1200px column, full-bleed gradient spanning viewport at 2560, clean single-column reflow at 375), sevenloop + blog hero tiles render with the drift glow |

## Global / late units

| Unit id | Description | Status | Notes |
|---|---|---|---|
| global/redirects | Port `_redirects` 301s into `next.config.ts` `redirects()` | passed | `/project/sevenloop`, `/project/sevenloop-explainer-film` → `/clients/sevenloop`; `/project/aavenir` → `/clients/aavenir` |
| global/sitemap | `app/sitemap.ts` | pending | Add once most routes exist — low value while most slugs 404 |
| global/robots | `app/robots.ts` | pending | Same as above |
| global/content-studies | Extract case-study copy into `content/studies/*.mdx` + wire `lib/content/studies.ts` (reader already built, no entries yet) | passed | **Run 8**: 4 studies extracted verbatim → `content/studies/{sevenloop,sevenloop-branding,aavenir,onelern}.mdx` (sources: `sevenloop/sl-editorial.jsx` + `sl-header.jsx`, `casestudy/cs-page.jsx`, `aavenir/aav-app.jsx`, `writtencs/wcs-page.jsx`). Reader extended: `publishedAt` made **optional** (the export's case-study sources carry no publish dates — no dates invented; human can add real project dates later) + sorts date-desc when present + optional structured metadata fields (industry/headquarters/funding/investors/targetAudience/related) so page ports render the client sidebar without re-deriving. Tested: `tsc --noEmit` + `eslint` + `next build` clean; gray-matter reader assertion (faithful replica of `readCollection` over the real `content/studies` dir) confirms 4 entries, all required frontmatter present, `services[]` non-empty, bodies 900–4400 chars, `getStudyBySlug("sevenloop")` resolves. No route yet (content-layer unit); consumed by the pending `clients-sevenloop`/`clients-aavenir`/case-study page ports. HTML entities from source (`&mdash;`, `&rsquo;`, `&#8377;`) converted to real Unicode in the MDX bodies |
| global/content-blog | Extract blog copy into `content/blog/*.mdx` + wire `lib/content/blog.ts` (reader already built, no entries yet) | passed | **Run 8**: the full Sevenloop rebrand article (21 sections) extracted verbatim from `blog/blog-body-a.jsx` + `blog-body-b.jsx` + `blog-prims.jsx` → `content/blog/sevenloop-rebrand-webflow-case-study.mdx` (slug matches the planned `/blog/sevenloop-rebrand-webflow-case-study` route). Frontmatter: real dates from the export chrome — `publishedAt: 2025-10-03` ("Written on"), `lastUpdated: 2026-06-14`, `author: Tanmaya Rao`, `reviewer: Athira Krishnan`, 5 tags. `Timeline`/`Block`/`Pull`/`UL`/`Sub` primitives rendered as clean markdown (lists, `###` subs, blockquotes); the two `Fig` placeholder tiles preserved as italic figure captions (visual scaffolding stays in the page port). Reader (`lib/content/blog.ts`) given date-desc sort + optional `lastUpdated`/`reviewer`/`heroCaption` fields. Tested: `tsc`+`eslint`+`next build` clean; gray-matter assertion confirms 1 well-formed entry (12.6k-char body, all required frontmatter, `getPostBySlug` resolves). The 2 related-post teasers (`Employer Branding…`, `Messaging Is Decision-Making…`) have no body in the export — not fabricated. Consumed later by the pending `blog-sevenloop-rebrand`/`blog-index` page ports |
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

## Industry — Manufacturing (`/industry/manufacturing`) — `Industry - Manufacturing.html`

Source: `industry/ind-*.jsx` (app/blocks/body). Confirmed the `Ind*` template
is byte-for-byte the same shape as the `Svc*` template already ported in Run
5, so this page **reused `components/svc-template/*` wholesale** — no new
template components. Two shared additions this run, both promoted to
`ds-components.css` because Solution and Location reuse them verbatim:
- **CTA band** (`.svc-cta-band`/`.svc-cta-inner`/`.svc-cta-h`/`.svc-cta-btn`
  + `.svc-cta-lead`) — the full-bleed dark closer at `id="ind-03"` (the ToC's
  third entry scroll-spies onto it). Not defined anywhere in the export's
  shared CSS — it lives in each page's `<style id="svc-extra">` block; ported
  once here. `.svc-cta-inner` already flex-wraps, so it stacks on mobile with
  no extra breakpoint.
- Added a `marquee={false}` prop to `Portfolio` — Industry/Solution/Location
  render a **standalone labelled** marquee near the top (with `label`),
  whereas Service renders the marquee inside the portfolio section; the prop
  suppresses the duplicate.

Page-scoped hero (`.ind-h1`, `.ind-marquee`) in `app/styles/industry.css`.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| industry-manufacturing/section-port | `app/industry/manufacturing/page.tsx`, `app/styles/industry.css`, shared CTA band in `ds-components.css`, `marquee` prop on `Portfolio` | passed | Hero + standalone marquee + ToC(3)+long-form body (2 sections, 9-agency list, Cerrion example) + CTA band + portfolio(8) + FAQ(2) + experts(4) + related(5). 0 FIX iterations. Tested: build/lint/typecheck clean, `run-checks.mjs` 0 failing (5 pending-route soft-warnings from footer/nav → /blog, /clients/sevenloop, /audit/hackuity, /print/sevenloop), screenshot-verified 1440/375 (hero, Q&A-less body, CTA band, 3-col portfolio, experts, related, mobile single-column reflow, mobile CTA stacks). Experts/Related first showed blank in a `fullPage` capture — the **same reveal-up timing artifact** logged in Runs 3/5; confirmed benign via computed-style probe (`is-revealed` true, opacity 1, 4 experts + 5 related in DOM) + targeted in-view crops. |
| industry-manufacturing/metadata | Title + description via Metadata API | passed | Title "Design Agency for Manufacturing Firms" (renders with the layout template); description ported verbatim from the export's hero subhead. Marker text for `run-checks.mjs` |
| industry-manufacturing/wire-links | 3+ real internal links | passed | Breadcrumb → `/`, CTA band → `/contact`, all 8 portfolio cards → their real `/clients#<slug>` tiles (Sevenloop → `/clients/sevenloop` hub, marked featured). "Industries" breadcrumb crumb kept non-link (no industries-index page exists/queued). Moved `/industry/manufacturing` from `PENDING_ROUTES` to `BUILT_ROUTES` |

## Solution — AI SaaS Website (`/solution/ai-saas-website`) — `Solution - AI SaaS Website.html`

Source: `solution/sol-*.jsx` (app/blocks/body). Same `Svc*`-template reuse as
Industry above. Two page-specific differences handled this run:
- **Q&A callout** — a bordered "Question" block between the marquee and the
  ToC (`.svc-callout`/`.svc-callout-tag`/`.svc-callout-dot`/`.svc-callout-q`/
  `.svc-callout-a`). Ported into `ds-components.css` (shared template class,
  from the export's `svc-extra` block). The export used an inline `style={{}}`
  for the tag's dot; converted to a `.svc-callout-dot` class per the DS's
  class-over-inline-style preference.
- **Portfolio default tab** — Solution's grid defaults to its *first* tab
  ("Solution"), unlike Industry/Service which default to the last. Added an
  optional `defaultTab` prop to `Portfolio` (falls back to the last tab when
  unset, preserving Service's original behavior).

Page-scoped hero (`.sol-h1`, `.sol-marquee`/`.sol-callout` spacing) in
`app/styles/solution.css`.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| solution-ai-saas-website/section-port | `app/solution/ai-saas-website/page.tsx`, `app/styles/solution.css`, shared Q&A callout in `ds-components.css`, `defaultTab` prop on `Portfolio` | passed | Hero + standalone marquee + Q&A callout + ToC(3)+long-form body (2 sections, 10-site teardown list, 2 recommendation lists) + CTA band(sol-03) + portfolio(9) + FAQ(1) + experts(5) + related(3). 0 FIX iterations. Tested: build/lint/typecheck clean, `run-checks.mjs` 0 failing (6 pending-route soft-warnings), screenshot-verified 1440/375 (hero, Q&A callout bordered box renders + reflows, CTA band, 3-col portfolio, mobile single-column). Experts/Related reveal-up blank in `fullPage` again — confirmed benign via computed-style probe (5 experts + 3 related, opacity 1, revealed) as with Industry. |
| solution-ai-saas-website/metadata | Title + description via Metadata API | passed | Title "AI SaaS Product Website Design Agency"; description ported verbatim from the export's hero subhead. Marker text for `run-checks.mjs` |
| solution-ai-saas-website/wire-links | 3+ real internal links | passed | Breadcrumb → `/`, CTA band → `/contact`, all 9 portfolio cards → real `/clients#<slug>` tiles (Aavenir → `/clients/aavenir` hub; "ASPI & CIS Tech Diplomacy" → the "Aspi & CIS" tile via the same override Service uses). "Solutions" breadcrumb crumb kept non-link (no solutions-index page). Moved `/solution/ai-saas-website` from `PENDING_ROUTES` to `BUILT_ROUTES` |

## Location — Ahmedabad (`/location/ahmedabad`) — `Location - Ahmedabad.html`

Source: `location/loc-*.jsx` (app/blocks/body). Same `Svc*`-template family as
Service/Industry/Solution, so it **reused `components/svc-template/*` wholesale**
— no new template components. Differences handled this run:
- **2-column portfolio** — Location's four city projects lay out 2-wide
  (`repeat(2,1fr)`) in the export rather than the shared 3-column default.
  Added an optional `cols` prop to `Portfolio` (+ a `.svc-grid.svc-grid-2`
  desktop override in `ds-components.css`) that keeps the grid at two columns
  from 1000px up while still 1→2 on mobile/tablet (mobile-first). Also positions
  the portfolio **right after the hero** (matches the export's mount order),
  before the callout/marquee, unlike Industry/Solution.
- **Page-only `Info` block** (`.loc-info`/`.loc-info-label`) — an outlined
  label + copy panel used inside the long-form body (Best for / What is
  included / Engagement model). Ported verbatim from the export's `#svc-extra`
  block into `app/styles/location.css` (page-scoped — nothing else in the queue
  reuses it); a small `Info` component lives in the page file.
- **Two-line CTA band** — reuses the shared `.svc-cta-band` with `.svc-cta-lead`
  (already in `ds-components.css` since Run 6); the lead + heading wrap in a
  `<div>` so the flex band stacks the copy block above the button on mobile.
- No experts grid (Location omits it), so `Experts` is not imported here.

Page-scoped hero (`.loc-h1`) + marquee/callout spacing in
`app/styles/location.css`.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| location-ahmedabad/section-port | `app/location/ahmedabad/page.tsx`, `app/styles/location.css`, `cols` prop + `.svc-grid-2` on `Portfolio`, page-only `Info`/`.loc-info` | passed | Hero + 2-col portfolio(4) + Q&A callout + standalone marquee + ToC(9)+long-form body (8 sections, 3 `loc-info` blocks) + two-line CTA band(loc-09) + FAQ(6) + related(6). 0 FIX iterations. Tested: build/lint/typecheck clean, `run-checks.mjs` 0 failing (5 pending-route soft-warnings from nav/footer/related → /blog, /audit/hackuity, /print/sevenloop, /clients/sevenloop), screenshot-verified 1440/375 (hero, 2×2 portfolio, callout, marquee, ToC+body, CTA band, mobile single-column portfolio with wrapped tabs, mobile CTA stacks copy above button). FAQ/Related first showed blank in the `fullPage` capture — the **same reveal-up timing artifact** logged in Runs 3/5/6; confirmed benign via computed-style probe (`is-revealed` true, opacity ~1, 6 details + 6 related in DOM) + a targeted in-view crop |
| location-ahmedabad/metadata | Title + description via Metadata API | passed | Title "Web Design & Branding Agency in Ahmedabad" (renders with the layout template); description ported verbatim from the export's `<meta name="description">`. Marker text ("Branding Agency in Ahmedabad") for `run-checks.mjs` |
| location-ahmedabad/wire-links | 3+ real internal links | passed | Breadcrumb → `/`, CTA band → `/contact`, all 4 portfolio cards → their real `/clients#<slug>` tiles (Rewild Farms / Cloudphysician / Entropik / Relanto all on the /clients grid). "Locations" breadcrumb crumb kept non-link (no locations-index page exists/queued). Moved `/location/ahmedabad` from `PENDING_ROUTES` to `BUILT_ROUTES` |

## FAQ — Corporate Rebrand Expert (`/faq/corporate-rebrand-expert`) — `FAQ - Corporate Rebrand Expert.html`

Source: `faq/faq-app.jsx` — a single-question "answer" page (not the accordion
index; that's the separate `/faq` page from `footer/faq-index.jsx`, already
passed). Self-contained single file: question hero, long-form answer body
(reuses the shared `bl-*` article primitives), a highlighted case-study
callout, a key-facts table, and a services-strip. No svc-template reuse (it's
not that template family). New page-scoped CSS in `app/styles/faq-detail.css`:
`.faq-callout`/`.faq-facts`/`.faq-fact*`/`.svc-soln` — ported verbatim from the
export's `<style>` block, with one mobile-first addition (the export's fixed
`220px 1fr` fact row stacks to a single column below 640px). Reuses
`.svc-hero`/`.svc-page` (service.css) for hero padding and the `.fq-closing*`
classes (faq.css) for the added closing CTA.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| faq-corporate-rebrand-expert/section-port | `app/faq/corporate-rebrand-expert/page.tsx`, `app/styles/faq-detail.css` | passed | Question hero + answer body (h2, 2 `bl-sub` blocks, engagement 4-item `bl-ul`) + case-study callout + 3-row key-facts table + services strip (6 pills) + added closing CTA. 0 FIX iterations. The services strip's 6 links were unwired `href="#"` in the export with no per-service route (only `/service/branding-agency` exists), so they render as static/decorative `<span>` pills — same "no invented destination" policy as the Author page's tag pills. Tested: build/lint/typecheck clean, `run-checks.mjs` 0 failing (5 pending-route soft-warnings from nav/footer → /blog, /audit/hackuity, /print/sevenloop, /clients/sevenloop), screenshot-verified 1440/375 (hero, answer body, callout, facts table, services strip, closing CTA; mobile facts stack to single column, pills reflow full-width). Services strip + closing heading first showed blank in the `fullPage` capture — the **same reveal-up timing artifact** logged in Runs 3/5/6; confirmed benign via computed-style probe (`.faq-services` revealed, opacity 1, 6 pills; closing h2 revealed) + a targeted in-view crop |
| faq-corporate-rebrand-expert/metadata | Title + description via Metadata API | passed | Title ported via `title.absolute` (the export's `<title>` is the full question with no site suffix, so it bypasses the layout's "%s — Design Asylum" template); description ported verbatim from the export's `<meta name="description">`. Marker text ("align executive stakeholders around a new brand strategy") for `run-checks.mjs` |
| faq-corporate-rebrand-expert/wire-links | 3+ real internal links | passed | Breadcrumb → `/` + `/faq` (the FAQ index, built earlier — the export's crumbs were unwired `href="#"`), closing CTA → `/contact`, closing secondary → `/faq`. "Corporate Rebrand Expert" breadcrumb crumb is the current page (non-link). Moved `/faq/corporate-rebrand-expert` from `PENDING_ROUTES` to `BUILT_ROUTES` |

## Sevenloop — Client Hub (`/clients/sevenloop`) — `Sevenloop - Client Hub.html`

Source: `sevenloop/sl-*.jsx` (`sl-app.jsx` mounts SLNav, SLHeader, SLOverview,
SLEditorial, SLTransformation, SLTeam, SLServices, SLFooter). SLNav/SLFooter are
the shared global `Nav`/`Footer`. First client-hub page; consumes the Run-8
content-layer study `content/studies/sevenloop.mdx` for the long-form editorial
prose (parsed into sections by `##` heading in the page component, so copy is
not duplicated between the MDX and the component). Page-scoped CSS in
`app/styles/sevenloop.css` (the export's `sl-*` classes ported verbatim, with
mobile-first grids added — the export was fixed multi-column, `min-width:1180px`
desktop-only). New components under `components/sevenloop/`: `MediaTile`
(decorative colour-block placeholder tiles — the export ships no real imagery),
`BeforeAfter` (client component — pointer-drag + keyboard compare slider),
`ProjectTeam` (13-member project team, roster local to this page since it's the
project-specific composition/roles, distinct from the global 34-person roster),
`ServiceMarquee` (CSS-only dual-row marquee).

**Linking decisions** (same "no invented destination" policy as prior pages):
first industry link ("Design Agency for Manufacturing Firms") → the real
`/industry/manufacturing`; the other 4 industries render as decorative
underline-hover spans (no matching route). "Visit website" → external
`https://sevenloop.com` (the domain is named verbatim in the source copy, not
invented). Both "View case study" CTAs → `/clients/sevenloop/branding` (the
still-pending branding case study — `related` in the study frontmatter).
Team "Read more": Tanmaya Rao → `/author/tanmaya-rao`, the other 12 →
`/team#<slug>` real same-page anchors (the team page sets `id={slug}` on cards).
Service marquee chips: "Branding Agency" → `/service/branding-agency`, the rest
decorative. Jump-nav = real same-page anchors (`#about`, `#logo-design`, …).

| Unit id | Description | Status | Notes |
|---|---|---|---|
| clients-sevenloop/section-port | `app/clients/sevenloop/page.tsx`, `app/styles/sevenloop.css`, `components/sevenloop/{MediaTile,BeforeAfter,ProjectTeam,ServiceMarquee}.tsx` | passed | All 6 sections ported (header/overview+deliverables/editorial/transformation/team/services). 0 FIX iterations. Tested: `tsc --noEmit` + `eslint` + `next build` clean (prerendered static ○); `run-checks.mjs` 0 failing (5 pending-route soft-warnings from footer/nav → /blog, /clients/sevenloop/branding, /audit/hackuity, /print/sevenloop). Screenshot-verified 1440/375: desktop parity (sticky jump-nav + sticky editorial heading ≥900px, deliverable tile grids, before/after drag slider, 3-col team grid, dual-row service marquee) and mobile reflow (jump-nav non-sticky top block, single-column overview/editorial/team, 2-col tile grids, slider intact), no overflow at 375/768/1280/1440, mobile nav works. Transformation/Team/Services first showed blank in the `fullPage` capture — the **same reveal-up timing artifact** logged in Runs 3/5/6/7; confirmed benign via computed-style probe (`.sl-ba` opacity 1 h=585, 13 team cards revealed, 58 chips, editorial revealed) + targeted in-view crops of each |
| clients-sevenloop/metadata | Title + description via Metadata API | passed | Title via `title.absolute` ("Sevenloop \| Design Asylum Client Work", ported verbatim from the export `<title>` which carries its own suffix). Description sourced from the study `summary` frontmatter (the export had no `<meta name="description">`). Marker text "custom metal manufacturing platform" registered in `.testing/routes.mjs` |
| clients-sevenloop/wire-links | 3+ real internal links | passed | Breadcrumb → `/` + `/clients`, industry → `/industry/manufacturing`, case-study CTAs → `/clients/sevenloop/branding`, team → `/author/tanmaya-rao` + 12×`/team#<slug>`, service → `/service/branding-agency`, jump-nav same-page anchors — well beyond 3 distinct destinations. Moved `/clients/sevenloop` from `PENDING_ROUTES` to `BUILT_ROUTES` |

## Sevenloop — Branding Case Study (`/clients/sevenloop/branding`) — `Sevenloop - Branding Case Study.html`

Source: `casestudy/cs-page.jsx` — an image-forward case-study template (distinct
from the client-hub template): header + sticky metadata sidebar, then a
full-bleed vertical figure stack, then a deliberately sparse footer. Consumes
the Run-8 study `content/studies/sevenloop-branding.mdx` for the H1 title,
description, and the sidebar metadata (funding + investors from frontmatter).
Page-scoped CSS in `app/styles/sevenloop-branding.css` (`cs-*` classes verbatim,
mobile-first header grid added — export was fixed 2-col, `min-width:1180px`).
New components in `components/sevenloop/CaseStudyFigure.tsx`: `CloverMark` (the
Sevenloop brand SVG — orange circle + four-leaf clover, ported verbatim) and
`CaseStudyFigure` (decorative colour-block placeholder — the export ships no real
imagery; captions mirror the study's "The work" bullets).

**Footer decision**: the export's page has its own slim footer (mailto +
copyright + "Back to Sevenloop hub"). Since the app's global `Footer` (in the
root layout) already supplies contact/legal chrome site-wide, the port keeps
only the distinctive contextual navigation as a slim `.cs-backbar` above the
global footer: "← Back to Sevenloop hub" → `/clients/sevenloop`, "All clients →"
→ `/clients`. This preserves the case study's sparse feel without a competing
duplicate footer.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| clients-sevenloop-branding/section-port | `app/clients/sevenloop/branding/page.tsx`, `app/styles/sevenloop-branding.css`, `components/sevenloop/CaseStudyFigure.tsx` | passed | Header + sticky metadata sidebar + 5-figure full-bleed stack + slim back-bar. 0 FIX iterations. Tested: `tsc` + `eslint` + `next build` clean (prerendered static ○); `run-checks.mjs` 0 failing (4 pending-route soft-warnings from footer/nav → /blog, /audit/hackuity, /print/sevenloop). Screenshot-verified 1440/375: desktop parity (2-col header with sticky sidebar ≥900px, clover mark, figure stack) and mobile reflow (single-column header, sidebar below title, figures full-width), no overflow at 375/768/1280/1440, mobile nav works. Figures 3–5 first showed blank in the `fullPage` capture — the **same reveal-up timing artifact** logged in Runs 3/5/6/7/9-hub; confirmed benign via computed-style probe (all 5 `.cs-figure` opacity 1, revealed, h=585–780) + a targeted in-view crop of figure 5. **Testing note**: the harness's first branding run 404'd because a stale cycle-1 `next-server` (pid held :8080, serving the older build without this route) was still alive after `pkill` reported success — the exact orphaned-PID lesson from Run 2. Verified the PID was actually dead via `ps aux`/port-probe before restarting, then re-ran green |
| clients-sevenloop-branding/metadata | Title + description via Metadata API | passed | Title via `title.absolute` ("Sevenloop \| Branding — Design Asylum"; the export `<title>` is "Sevenloop \| Branding" with its own scheme). Description ported verbatim from the export's `<meta name="description">` / study summary. Marker text "Branding and project brochure design" registered in `.testing/routes.mjs` |
| clients-sevenloop-branding/wire-links | 3+ real internal links | passed | Breadcrumb → `/` + `/clients` + `/clients/sevenloop`, back-bar → `/clients/sevenloop` + `/clients`. Moved `/clients/sevenloop/branding` from `PENDING_ROUTES` to `BUILT_ROUTES` — this also resolves the two "View case study" CTAs on the Sevenloop hub built earlier this run |

## Sevenloop — Blog Article (`/blog/sevenloop-rebrand-webflow-case-study`) — `Sevenloop - Blog Article.html`

Source: `blog/blog-*.jsx` (app/prims/body-a/body-b/extras) — a long-form
21-section editorial article with a sticky scroll-spy ToC. The full article copy
was already extracted verbatim into `content/blog/sevenloop-rebrand-webflow-case-study.mdx`
(Run 8), so this unit is layout + a small markdown renderer, no copy re-extraction.

**Rendering decision**: the MDX body is read as a raw string (via `getPostBySlug`),
so rather than add a markdown dependency, a compact server-side renderer
(`components/blog/ArticleBody.tsx`) maps the article's fixed construct set — H2
sections, H3 subs, `-` lists, `>` blockquotes (pull quotes + bordered call-out
blocks), `*Figure: …*` tiles, inline `**bold**` — into the export's `bl-*`
article structure. `extractToc()` derives the ToC (id + label) from the same H2
pass, so the sticky scroll-spy sidebar (`components/blog/BlogToc.tsx`, the one
client component) and the body agree on `sec-01…sec-21` ids with zero
duplication. Body sections are **not** `reveal-up` (matches the export — only the
hero tile + the trailing FAQ/author/solutions/related sections reveal), sidestepping
the reveal-timing screenshot artifact logged in prior runs.

Most `bl-*` article primitives (`bl-body`/`bl-h2`/`bl-sub`/`bl-ul`/`bl-block`/
`bl-toc`/`bl-layout`) were already shared in `ds-components.css` from the
Service/Industry pages; this run added the blog-only pieces to a new page-scoped
`app/styles/blog.css` (mobile-first): article header + hero gradient tile, pull
quotes (`bl-pull`), figure tiles (`bl-fig`), ToC AI chips (`bl-aichip`), the FAQ
accordion (native `<details>`, `bl-faq-*`, same no-JS pattern as `/faq`), author
card, solutions row, the Sevenloop cross-links, and related cards.

**Linking decisions** (same "no invented destination" policy as prior pages):
the export's ToC "read summarised version with" AI chips (ChatGPT/Claude/…) and
the "Solutions we offer" pills were unwired `href="#"` with no real target →
rendered as decorative static chips/pills. The two "More blogs" teasers have no
article body in the export → decorative cards (not linked to a fabricated route).
Added an on-topic **"Explore the Sevenloop work"** cross-link block → the real
`/clients/sevenloop` hub + `/clients/sevenloop/branding` case study (both built
Run 9), giving the page real editorial cross-links to its own subject.

**Flagged for human** (verbatim, per don't-silently-correct policy): the export's
ToC sub-heading reads "Read **summaried** version with" — the source's own typo
for "summarised"; kept as-is with a code comment, human to decide.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| blog-sevenloop-rebrand/section-port | `app/blog/sevenloop-rebrand-webflow-case-study/page.tsx`, `components/blog/{ArticleBody,BlogToc}.tsx`, `app/styles/blog.css` | passed | Header + sticky scroll-spy ToC + 21-section body (pull quotes, call-out blocks, figure tiles, lists) + FAQ(3) + author card + solutions strip + Sevenloop cross-links + related cards. 0 FIX iterations. Tested: `tsc --noEmit` + `eslint` + `next build` clean (prerendered static ○); `node .testing/run-checks.mjs --unit blog-sevenloop-rebrand/section-port` 0 failing (4 pending-route soft-warnings from breadcrumb/nav/footer → /blog, /audit/hackuity, /print/sevenloop). Screenshot-verified 1440/375: desktop parity (nav "Thinking" active, gradient hero tile, two-column ToC+body, pull quotes, FAQ accordion first-open with plus/minus icons, author card) and mobile reflow (single-column, ToC stacks above body, hamburger nav, hero caption), no overflow at 375/768/1280/1440, no box-shadow, Fraunces body font |
| blog-sevenloop-rebrand/metadata | Title + description via Metadata API | passed | Title via `title.absolute` (the export `<title>` is the article title with no site suffix); description = the study/post `summary` frontmatter (matches the export's `<meta name="description">` verbatim). Marker text "Transforming Precision Manufacturing" registered in `.testing/routes.mjs` |
| blog-sevenloop-rebrand/wire-links | 3+ real internal links | passed | Breadcrumb → `/` + `/blog` (index, still pending — soft-warn until built), cross-links → `/clients/sevenloop` + `/clients/sevenloop/branding` (real, on-topic), plus 21 same-page ToC anchors. 4 distinct real route destinations, beyond 3. Registered `/blog/sevenloop-rebrand-webflow-case-study` in `.testing/routes.mjs` `BUILT_ROUTES` |

## Sevenloop — Print Showcase (`/print/sevenloop`) — `Sevenloop - Print Showcase.html`

Source: `print/print-page.jsx` — the export's leanest template: nav, a huge
uppercase title, a vertical stack of 5 brochure "spread" figures (decorative
colour-block placeholder tiles — the export ships no real brochure imagery), a
decorative AI-summary chip row, and the global footer. No shared-template reuse
(it's its own minimal shape).

New page-scoped CSS in `app/styles/print.css` (`pr-*` classes ported verbatim
from the export's inline `<style>` block, mobile-first: the export was
desktop-only `min-width:1180`; `--pr-stack-gap` clamp floor lowered for phones,
title `font-size` clamp floor dropped so the 168px display headline scales down
without overflow). The 5 spreads reuse the established `reveal-up`/`RevealObserver`
scroll-in primitive.

**Linking decisions** (same "no invented destination" policy): the export's
breadcrumb, "Ask AI for a summary" chips, and everything else were unwired
`href="#"`. Breadcrumb "Print Design" crumb kept non-link (no print-index page
exists/queued); AI chips render as decorative static chips. Added a slim
contextual back-bar (same pattern as the branding case study's `cs-backbar`)
linking to the real `/clients/sevenloop` hub, `/clients/sevenloop/branding` case
study, and `/clients` — giving this otherwise link-less showcase real internal
navigation to the work the brochure belongs to.

| Unit id | Description | Status | Notes |
|---|---|---|---|
| print-sevenloop/section-port | `app/print/sevenloop/page.tsx`, `app/styles/print.css` | passed | Title + 5-spread brochure stack + AI chip row + contextual back-bar. 0 FIX iterations. Tested: `tsc --noEmit` + `eslint` + `next build` clean (prerendered static ○); `node .testing/run-checks.mjs --unit print-sevenloop/section-port` 0 failing (3 pending-route soft-warnings from nav/footer/breadcrumb → /blog, /audit/hackuity). Screenshot-verified 1440/375: desktop parity (huge uppercase headline, gradient spread tiles with index + caption, first spread's "Sevenloop" word overlay, AI chip row) and mobile reflow (single-column stack, title wraps + scales, chips/back-bar wrap), no overflow at 375/768/1280/1440, no box-shadow, Fraunces body font. Spreads 3–5 first showed blank in the `fullPage` capture — the **same reveal-up timing artifact** logged in Runs 3/5/6/7/9; confirmed benign via computed-style probe (all 5 `.pr-fig` `is-revealed`, opacity ~1, h=520–650) + a targeted in-view crop of spreads 2–3 |
| print-sevenloop/metadata | Title + description via Metadata API | passed | Title "Sevenloop Brochure" (renders "Sevenloop Brochure — Design Asylum" via the layout template; the export `<title>` used a hyphen "Sevenloop Brochure - Design Asylum"); description ported verbatim from the export's `<meta name="description">`. Marker text "Sevenloop Brochure" registered in `.testing/routes.mjs` |
| print-sevenloop/wire-links | 3+ real internal links | passed | Breadcrumb → `/`, back-bar → `/clients/sevenloop` + `/clients/sevenloop/branding` + `/clients`. 4 distinct real route destinations, beyond 3. Moved `/print/sevenloop` from `PENDING_ROUTES` to `BUILT_ROUTES` in `.testing/routes.mjs` — this also resolves the pending-route soft-warnings other pages carried for footer/related links to `/print/sevenloop` |

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
| FAQ — Corporate Rebrand Expert | `/faq/corporate-rebrand-expert` | `faq/` | faq-corporate-rebrand-expert/section-port | **passed (Run 7)** — see page section above |
| Industry — Manufacturing | `/industry/manufacturing` | `industry/` | industry-manufacturing/section-port | **passed (Run 6)** — see page section below |
| Solution — AI SaaS Website | `/solution/ai-saas-website` | `solution/` | solution-ai-saas-website/section-port | **passed (Run 6)** — see page section below |
| Location — Ahmedabad | `/location/ahmedabad` | `location/` | location-ahmedabad/section-port | **passed (Run 7)** — see page section above |
| Sevenloop — Client Hub (canonical) | `/clients/sevenloop` | `sevenloop/` | clients-sevenloop/section-port | **passed (Run 9)** — see page section above |
| Sevenloop — Branding Case Study | `/clients/sevenloop/branding` | `casestudy/` | clients-sevenloop-branding/section-port | **passed (Run 9)** — see page section above |
| Sevenloop — Blog Article | `/blog/sevenloop-rebrand-webflow-case-study` | `blog/` | blog-sevenloop-rebrand/section-port | **passed (Run 10)** — see page section below |
| Sevenloop — Print Showcase | `/print/sevenloop` | `print/` | print-sevenloop/section-port | **passed (Run 10)** — see page section below |
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

### Run 6 — 2026-07-04 (fresh branch restarted from production tip; quota now 2)

**Reconciliation**: this session was assigned branch
`claude/dazzling-cray-o6z4m3`, reset to `origin/main` (`643369f`, the PR #7
merge). Diffed `last_run_head` (`4e08e5f`, Run 5's final commit) through
`643369f`: only Run 5's own "chore: progress" + Vercel-framework-fix commits
and the PR #7 merge commit — **no human edits to reconcile, no re-test
needed**. Checked open PRs: none open (PR #7 merged). The durable-branch gap
Runs 2–5 flagged is now effectively resolved — the default branch is `main`
and this routine checks-open-PRs-first / restarts from the merged tip each
run. **Front-matter drift normalized this run** per the routine's standing
instruction: `quota_per_run` 4 → **2**, `wallclock_cap_min` 90 → **75**,
dropped the stale `branch:`/`pr:` keys.

**Environment preflight**: same as all prior runs — no env vars set in this
sandbox (`SHEETS_WEBHOOK_URL`, `RESEND_API_KEY`, analytics IDs). Build/tests
do not depend on them; no new SETUP NEEDED items.

**Build & serve**: `npm ci` (clean), `next build` clean throughout (17 → 18
routes as pages landed), `next start` on :8080 for every TEST step. Harness
note for future runs: `pkill -f next-server` **kills its own shell** (the
pattern matches the `pkill` command's own argv → SIGTERM, exit 144) — kill by
port instead (`ss -ltnp | grep :8080` → `kill <pid>`), which is reliable. Ad
hoc screenshot scripts must launch via `playwright-core` with
`executablePath: "/opt/pw-browsers/chromium"` and `waitUntil: "load"` (NOT
`networkidle` — the marquee animation + blocked analytics hosts never let the
network idle, causing a 30s timeout); this mirrors what `run-checks.mjs`
already does.

**WORK LOOP** (2 of 2 quota — new ceiling — used, 0 FIX-loop iterations,
~15 min wall-clock):

1. **`industry-manufacturing/section-port`** (+ metadata + wire-links) —
   first reuse of Run 5's `svc-template/*` for a non-Service page. Confirmed
   `Ind*` == `Svc*` template shape, so zero new template components. Promoted
   the **CTA band** (`.svc-cta-*`, incl. `.svc-cta-lead` for Location) to
   `ds-components.css` and added a `marquee={false}` prop to `Portfolio` for
   the standalone-labelled-marquee pages.
2. **`solution-ai-saas-website/section-port`** (+ metadata + wire-links) —
   added the **Q&A callout** (`.svc-callout-*`) to `ds-components.css` and a
   `defaultTab` prop to `Portfolio` (Solution defaults to its first tab).

Both pages: build/lint/typecheck clean, `run-checks.mjs` 0 failing checks,
1440/375 screenshot parity + mobile single-column reflow confirmed. The
recurring reveal-up `fullPage`-capture blank (Experts/Related) was verified
benign both times via computed-style probes rather than treated as a bug —
same lesson as Runs 3/5.

**Bugs found and fixed**: none this run (no HTML-entity-in-attribute class
issues in the four source files; ported editorial copy verbatim). No new
typos flagged beyond those already logged for the Author/Pricing pages.

**Blocked/parked**: none new. `global/analytics-verify`,
`global/contact-integrations-verify` remain `blocked-setup` (unchanged).

**Commit range**: `abbb32c` (industry wip/coded — the passing state is
identical, no separate feat commit was needed) through `a336659` (solution
feat) on `claude/dazzling-cray-o6z4m3`; base `643369f` is production's merged
tip. All commits carry this routine's trailer.

**Green gate**: both cycles passed with zero new blocked units → PR opened
from `claude/dazzling-cray-o6z4m3` to `main` and merged (see below). Vercel
deploys `main` automatically.

**Next run should**: pick up `location-ahmedabad/section-port`
(`location/loc-*.jsx`) — same template family; it adds `.svc-cta-lead`
(already in `ds-components.css` from this run) for a two-line CTA band. Then
`faq-corporate-rebrand-expert/section-port`, then the client-hub/case-study
pages (several need `global/content-studies`/`global/content-blog` first).

### Run 7 — 2026-07-04 (fresh branch restarted from production tip; quota 2)

**Reconciliation**: this session was assigned branch
`claude/dazzling-cray-n5h8z0`, reset to `origin/main` (`631486c`, the PR #8
merge). Diffed `last_run_head` (`643369f`, Run 6's base) through `631486c`:
only Run 6's own `wip`/`feat`/`chore: progress` commits and the PR #8 merge
commit — **all carry this routine's trailer / `Claude` author, no human edits
to reconcile, no re-test needed**. Checked open PRs: none open (PR #8 merged).
The durable-branch gap is resolved — default branch is `main`, this routine
restarts from the merged tip each run. Front matter already normalized
(quota 2, wallclock 75, no stale branch keys); only `last_run_head` bumped to
`631486c`.

**Environment preflight**: same as all prior runs — no env vars set in this
sandbox (`SHEETS_WEBHOOK_URL`, `RESEND_API_KEY`, analytics IDs). Build/tests do
not depend on them; no new SETUP NEEDED items.

**Build & serve**: `npm ci` clean, `next build` clean throughout (17 → 19
routes as the two pages landed), `next start` on :8080 for every TEST step.
**Harness note (re-confirming Run 6's lesson)**: after the first cycle's
rebuild, the old cycle-1 `next-server` was left orphaned holding :8080 and
served the stale build (the new `next start` failed with `EADDRINUSE`, and the
FAQ-detail route 404'd because the stale build predated it). Diagnosed via
`ss -ltnp` + the `EADDRINUSE` in the server log, `kill -9`'d the whole
npm-exec→sh→next-server pid chain (not just the port's reported pid), confirmed
the port was free, restarted clean, and the route served 200. **Lesson**: kill
the entire process chain and verify the port is actually free before every
restart — killing only the pid `ss` reports for the port can miss the real
`next-server` child.

**WORK LOOP** (2 of 2 quota — used, 0 FIX-loop iterations, both first-pass):

1. **`location-ahmedabad/section-port`** (+ metadata + wire-links) — reused
   `components/svc-template/*` wholesale (Location is the same template family
   as Service/Industry/Solution). Added an optional `cols` prop to `Portfolio`
   (+ `.svc-grid.svc-grid-2` desktop override) for Location's 2-wide portfolio,
   and a page-only `.loc-info` block for the body's Best-for/What's-included/
   Engagement panels. Two-line CTA band reuses the shared `.svc-cta-lead`
   (added Run 6). No experts grid on this page.
2. **`faq-corporate-rebrand-expert/section-port`** (+ metadata + wire-links) —
   the single-question "answer" page (distinct from the `/faq` accordion
   index). Not a svc-template page; new page-scoped `faq-detail.css`
   (`.faq-callout`/`.faq-facts`/`.faq-fact*`/`.svc-soln`, mobile-first fact-row
   stack below 640px). Services-strip links were unwired `href="#"` → rendered
   as static/decorative pills. Title ported via `title.absolute` (the export's
   `<title>` is the full question, no site suffix).

Both pages: build/lint/typecheck clean, `run-checks.mjs` 0 failing checks,
1440/375 screenshot parity + mobile reflow confirmed. The recurring reveal-up
`fullPage`-capture blank (Location's Experts-less FAQ/Related; the FAQ page's
services strip + closing heading) was verified benign both times via
computed-style probes + targeted in-view crops — same lesson as Runs 3/5/6.

**Bugs found and fixed**: none this run (no HTML-entity-in-attribute class
issues in the source files; ported editorial copy verbatim). No new typos
flagged beyond those already logged for the Author/Pricing pages.

**Blocked/parked**: none new. `global/analytics-verify`,
`global/contact-integrations-verify` remain `blocked-setup` (unchanged).

**Commit range**: `0ca0b4c` (location wip) through this run's final commits on
`claude/dazzling-cray-n5h8z0`; base `631486c` is production's merged tip. All
commits carry this routine's trailer.

**Green gate**: both cycles passed with zero new blocked units → PR opened from
`claude/dazzling-cray-n5h8z0` to `main` and merged. Vercel deploys `main`
automatically.

**Next run should**: pick up `global/content-studies` (extract case-study copy
into `content/studies/*.mdx` + wire `lib/content/studies.ts`) — it unblocks
`clients-sevenloop/section-port` (the canonical Sevenloop client hub) and the
Sevenloop branding case study. Then continue down the client-hub/case-study
queue (Aavenir hub, OneLern written case study, Hackuity audit, Sevenloop
print/blog — the last needs `global/content-blog`), plus the late global units
(`global/sitemap`, `global/robots`) once most routes exist.

### Run 8 — 2026-07-05 (fresh branch restarted from production tip; quota 2)

**Reconciliation**: this session was assigned branch `claude/dazzling-cray-u146k5`,
reset to `origin/main` (`411cfa3`, the PR #9 merge). Diffed `last_run_head`
(`631486c`, Run 7's base) through `411cfa3`: only Run 7's own `wip`/`feat`/
`chore: progress` commits (`0ca0b4c`, `f418ab7`, `eef9bbd`, `5b46dbc` — all
`Claude`-authored, this routine's trailer) plus the PR #9 merge commit
(`accountsdesignasylum`). **No human edits to reconcile, no re-test needed.**
Cursor was at `global/content-studies`; honored it rather than the raw
table-order first-pending (`global/sitemap`/`global/robots` remain deliberately
deferred by their own notes — "add once most routes exist", ~10 page routes
still pending). Front matter already normalized (quota 2, wallclock 75, no stale
branch keys); only `last_run_head` bumped to `411cfa3`.

**Environment preflight**: same as all prior runs — no env vars set in this
sandbox (`SHEETS_WEBHOOK_URL`, `RESEND_API_KEY`, analytics IDs). Build/tests do
not depend on them; no new SETUP NEEDED items.

**Build & serve**: `npm ci` clean, `next build` clean throughout. Both units
this run are **content-layer units with no route to serve** — so no `next start`
/ screenshot / `run-checks.mjs --url` step applies; verification was
`tsc --noEmit` + `eslint` + `next build` (regression) plus a faithful
gray-matter reader assertion (a `readCollection` replica run over the real
`content/{studies,blog}` dirs, using the project's own `gray-matter` dep) that
confirms each file's frontmatter + body parse the way `lib/content/*` will read
them at build time. This mirrors how `global/content-team` was verified.

**WORK LOOP** (2 of 2 quota used, 0 FIX-loop iterations, both first-pass):

1. **`global/content-studies`** — 4 studies extracted verbatim into
   `content/studies/{sevenloop,sevenloop-branding,aavenir,onelern}.mdx` from
   `sevenloop/sl-editorial.jsx`+`sl-header.jsx`, `casestudy/cs-page.jsx`,
   `aavenir/aav-app.jsx`, `writtencs/wcs-page.jsx`. Extended
   `lib/content/studies.ts`: `publishedAt` → **optional** (the case-study
   sources carry no publish dates — none invented, per the verbatim-copy /
   flag-don't-fabricate policy; a human can add real project dates later),
   date-desc sort, and optional structured metadata
   (industry/headquarters/funding/investors/targetAudience/related) so the
   pending client-hub page ports render the client sidebar without re-deriving
   it. Reader assertion: 4 entries, all required frontmatter, `services[]`
   non-empty, bodies 900–4400 chars, `getStudyBySlug("sevenloop")` resolves.
2. **`global/content-blog`** — the full 21-section Sevenloop rebrand article
   extracted verbatim into `content/blog/sevenloop-rebrand-webflow-case-study.mdx`
   (slug matches the planned `/blog/…` route). Real dates from the export chrome
   (`publishedAt: 2025-10-03`, `lastUpdated: 2026-06-14`, author Tanmaya Rao,
   reviewer Athira Krishnan, 5 tags). `Timeline`/`Block`/`Pull`/`UL`/`Sub`
   primitives → clean markdown; the 2 `Fig` placeholder tiles preserved as
   italic captions (visual scaffolding stays in the page port). `lib/content/
   blog.ts` given date-desc sort + optional `lastUpdated`/`reviewer`/
   `heroCaption`. Reader assertion: 1 well-formed entry (12.6k-char body),
   `getPostBySlug` resolves. The 2 related-post teasers have no body in the
   export → not fabricated.

Both units unblock the pending client-hub / case-study / blog page ports.
HTML entities from source (`&mdash;`, `&rsquo;`, `&ldquo;/&rdquo;`, `&#8377;`,
`&amp;`) converted to real Unicode in the MDX bodies (same care as Run 2's
`&rsquo;`-in-attribute lesson).

**Bugs found and fixed**: none. **Typos found, NOT corrected**: none new this
run beyond those already flagged for the Author/Pricing pages.

**Blocked/parked**: none new. `global/analytics-verify`,
`global/contact-integrations-verify` remain `blocked-setup` (unchanged).

**Commit range**: `e5e7f64` (content-studies feat) through this run's final
commits on `claude/dazzling-cray-u146k5`; base `411cfa3` is production's merged
tip. All commits carry this routine's trailer.

**Green gate**: both cycles passed with zero new blocked units → PR opened from
`claude/dazzling-cray-u146k5` to `main` and merged. Vercel deploys `main`
automatically.

**Next run should**: pick up `clients-sevenloop/section-port` (the canonical
Sevenloop client hub, `sevenloop/sl-*.jsx`) — now content-unblocked; render the
hub chrome from `content/studies/sevenloop.mdx` (metadata sidebar) and the
editorial body, plus the page-specific hero / deliverables / before-after /
team-services sections. Then `clients-sevenloop-branding` (`casestudy/`, uses
`content/studies/sevenloop-branding.mdx`), `blog-sevenloop-rebrand`
(`blog/`, uses `content/blog/sevenloop-rebrand-webflow-case-study.mdx`) and the
rest of the client-hub/case-study queue, plus the late globals
(`global/sitemap`, `global/robots`) once most routes exist.

### Run 9 — 2026-07-05 (session branch `claude/dazzling-cray-xvh4mg`)

**Reconciliation**: acquired the routine lock (was `released`, no live run).
Reset the session branch to `origin/main` @ `09e9cc9` (Run 8's merged tip).
Diffed `last_run_head` (`411cfa3`) → `origin/main`: the only commits are Run 8's
own (`e5e7f64` content-studies, `016078c` content-blog, `6bda835` progress) plus
the PR-#10 merge — all carry this routine's trailer / are its own merges, **no
human edits to reconcile**. Cursor stood at the first actionable pending unit,
`clients-sevenloop/section-port`; started there.

**Environment preflight**: unchanged from prior runs — `SHEETS_WEBHOOK_URL`,
`RESEND_API_KEY`, `CONTACT_NOTIFY_TO`, and all analytics IDs absent in this
sandbox (RUNTIME-only; build/tests don't depend on them). No new SETUP NEEDED
items. All external hosts blocked (analytics beacon noise excluded from checks).

**Build & serve**: `npm ci` clean; `next build` clean throughout (now 21 routes,
`/clients/sevenloop` + `/clients/sevenloop/branding` both prerendered static ○);
`next start` on :8080 for every TEST step. Hit the orphaned-`next-server` trap
again (the cycle-1 server survived `pkill` and served a stale build to the
cycle-2 test, 404'ing the new route) — diagnosed via `ps aux`/port-probe, killed
the real PID, restarted, re-ran green. Same lesson as Run 2, re-logged.

**WORK LOOP** (2 of 2 quota cycles, both first-pass — 0 FIX-loop iterations):

1. **`clients-sevenloop/section-port`** (+ metadata + wire-links) — the canonical
   Sevenloop client hub. 6 sections ported from `sevenloop/sl-*.jsx`; long-form
   editorial sourced from `content/studies/sevenloop.mdx` (parsed by `##`
   heading, no copy duplicated). New `components/sevenloop/{MediaTile,BeforeAfter,
   ProjectTeam,ServiceMarquee}.tsx` + `app/styles/sevenloop.css` (mobile-first
   grids over the export's desktop-only layout). BeforeAfter is the run's only
   new client component (pointer-drag compare slider).
2. **`clients-sevenloop-branding/section-port`** (+ metadata + wire-links) — the
   image-forward branding case study from `casestudy/cs-page.jsx`. Sidebar
   metadata (funding/investors) sourced from `content/studies/sevenloop-branding.mdx`;
   `CloverMark` SVG + 5 placeholder figures ported. Slim `.cs-backbar` replaces
   the export's sparse footer (global footer supplies chrome). Resolves the two
   "View case study" CTAs on the hub built in cycle 1.

**Testing note (not a bug)**: both pages' reveal-up sections (hub Transformation/
Team/Services; branding figures 3–5) showed blank in the initial `fullPage`
screenshot — the same `.reveal-up` IntersectionObserver/transition timing
artifact logged across Runs 3/5/6/7. Confirmed benign each time via
computed-style probe (opacity 1 / `is-revealed` true / real heights) + targeted
in-view crops before concluding. No code fix needed.

**Bugs found and fixed**: none new.

**Blocked/parked**: none new. `global/analytics-verify`,
`global/contact-integrations-verify` remain `blocked-setup` (unchanged).

**Commit range**: `0fb421b`/`4d9aeb2` (cycle 1) + `b05ba06`/branding-feat
(cycle 2) + this progress commit on `claude/dazzling-cray-xvh4mg`; base
`09e9cc9` is production's merged tip. All commits carry this routine's trailer.

**Green gate**: both cycles passed with zero new blocked units → PR opened from
`claude/dazzling-cray-xvh4mg` to `main` and merged. Vercel deploys `main`
automatically.

**Next run should**: pick up `blog-sevenloop-rebrand/section-port` (`blog/`, uses
`content/blog/sevenloop-rebrand-webflow-case-study.mdx` — content-unblocked;
needs a markdown/MDX render path for the long article body, first page to need
one), then `print-sevenloop`, `clients-aavenir` (uses `content/studies/aavenir.mdx`),
`case-studies-onelern`, `audit-hackuity`, and `blog-index` (new, no export
equivalent — nav "Thinking"/footer "Blog" both point at `/blog`), plus the late
globals (`global/sitemap`, `global/robots`) once most routes exist.

### Run 10 — 2026-07-05 (session branch `claude/dazzling-cray-zhi8n5`)

**Reconciliation**: session branch reset to `origin/main` (`00f556e`, the merged
tip of Run 9's PR #11). Diffed `last_run_head` (`09e9cc9`) → `origin/main`: the
5 commits in between (`0fb421b`, `4d9aeb2`, `b05ba06`, `ec67d0f`, merge `00f556e`)
are all Run 9's own routine commits (author "Claude", carrying this routine's
trailer — Sevenloop client hub + branding case study). No human edits, no shared
files touched by a third party → no re-test/adopt needed. Cursor set to the first
actionable pending unit, `blog-sevenloop-rebrand/section-port`. Normalized nothing
(front matter already `quota_per_run: 2`, `wallclock_cap_min: 75`, no stale
`branch:`/`pr:` keys).

**Environment preflight**: same as Runs 1–9 — no env vars set in this sandbox
(`SHEETS_WEBHOOK_URL`, `RESEND_API_KEY`, analytics IDs). Build/tests do not depend
on them; no new SETUP NEEDED items. All external hosts blocked (analytics beacons
untestable locally — excluded from console-error checks as designed).

**Build & serve**: `npm ci` (clean), `next build` clean throughout, `next start`
on :8080 for every TEST step. Hit the orphaned-PID trap once (the exact lesson
from Runs 2/9): after the cycle-1 server, a `pkill` reported success but a stale
`next-server` (pid 15006) survived holding :8080 and serving the pre-`/print`
build, so `/print/sevenloop` 404'd on first probe. Diagnosed via `pgrep -af`,
killed the real PID by number, confirmed the port was free (`curl` → 000), then
restarted clean and re-ran green. Lesson (again): verify the PID is actually dead
and the port free, not just the shell's exit status.

**WORK LOOP** (2 of 2 quota cycles used, both first-pass — 0 FIX-loop iterations):

1. **`blog-sevenloop-rebrand`** (`/blog/sevenloop-rebrand-webflow-case-study`) —
   the long-form 21-section Sevenloop article. First page to need a markdown
   render path: rather than add a dependency, built a compact server-side
   renderer (`components/blog/ArticleBody.tsx`) that maps the article's fixed
   construct set (H2/H3/lists/blockquotes/figures/inline-bold) into the export's
   `bl-*` structure, plus `extractToc()` and a client scroll-spy sidebar
   (`components/blog/BlogToc.tsx`) that share `sec-01…sec-21` ids. New page-scoped
   `app/styles/blog.css` for the blog-only pieces (header/hero, pull quotes,
   figures, AI chips, native-`<details>` FAQ, author card, cross-links, related).
   Flagged the export's "Read **summaried** version with" typo (kept verbatim).
2. **`print-sevenloop`** (`/print/sevenloop`) — the leanest template: title +
   5-spread brochure stack + AI chip row. New page-scoped `app/styles/print.css`
   (`pr-*` verbatim, mobile-first). Added a contextual back-bar to the Sevenloop
   hub/case-study/clients for real internal links.

Each page's metadata + wire-links units landed with its section-port (title via
Metadata API, 4 distinct real route destinations each). Both routes registered in
`.testing/routes.mjs` `BUILT_ROUTES` with SSR marker text; `/print/sevenloop`
moved out of `PENDING_ROUTES`.

**Blocked/parked**: none new. `global/analytics-verify`,
`global/contact-integrations-verify` remain `blocked-setup` (env vars — same as
Runs 1–9).

**Commit range**: `06561f0`/`2031a23` (cycle 1, blog) + `90208a4`/print-feat
(cycle 2) + this progress commit on `claude/dazzling-cray-zhi8n5`; base `00f556e`
is production's merged tip. All commits carry this routine's trailer.

**Green gate**: both cycles passed with zero new blocked units → PR from
`claude/dazzling-cray-zhi8n5` to `main`, merged. Vercel deploys `main`
automatically.

**Next run should**: pick up `clients-aavenir/section-port` (`aavenir/`, uses
`content/studies/aavenir.mdx` — content-unblocked; client-hub template, compare
against Run 9's `clients-sevenloop` shape before assuming reuse), then
`case-studies-onelern` (`writtencs/`, uses `content/studies/onelern.mdx`),
`audit-hackuity` (`audit/`), and `blog-index` (new, no export equivalent — nav
"Thinking"/footer "Blog" both point at `/blog`; the blog article's breadcrumb
also links here, so building it resolves that soft-warn), plus the late globals
(`global/sitemap`, `global/robots`) once most routes exist.

### Run 11 — 2026-07-05 (session branch `claude/zealous-feynman-dxjlw0`)

**Reconciliation**: session branch reset to `origin/main` (`6b3dacb`, the merged
tip of Run 10's PR #12). Diffed `last_run_head` (`00f556e`) → `origin/main`: the
5 commits in between (`06561f0`, `2031a23`, `90208a4`, `9e2823e`, merge `6b3dacb`)
are all Run 10's own routine commits (author "Claude", routine trailer — blog
article + print showcase). No human edits, no third-party shared-file touches →
no re-test/adopt needed.

**QUEUE UPGRADE (one-time)**: this is the first run under the prompt version that
adds the FULL-RANGE-RESPONSIVE (375→2560) and MOTION-PARITY release criteria. The
three upgrade units did not yet exist, so inserted them at the FRONT of the queue:
`global/harness-viewport-motion`, `global/large-viewport-sweep`,
`global/motion-retrofit` (new "## Global / viewport + motion upgrade" section).
Cursor moved off `clients-aavenir` to the first of these. Front matter already
normalized (`quota_per_run: 2`, `wallclock_cap_min: 75`, no stale `branch:`/`pr:`).

**Environment preflight**: same as Runs 1–10 — no env vars in this sandbox
(`SHEETS_WEBHOOK_URL`, `RESEND_API_KEY`, analytics IDs). Build/tests don't depend
on them; no new SETUP NEEDED. All external hosts blocked (analytics untestable
locally, excluded from console-error checks by design).

**Build & serve**: `npm ci` clean; `next build` clean throughout (20 routes, all
prerendered static ○). **Serving note for future runs**: this sandbox KILLS
detached/background processes (`next start` via `run_in_background` or `setsid` dies
with exit 144) AND blocks foreground `sleep`. The working pattern is
`.testing/with-server.sh` (added this run): it boots `next start`, waits via
`curl --retry` (not `sleep`), runs the given command, and tears the server down —
all inside ONE foreground `Bash` call with `dangerouslyDisableSandbox`. Every check
this run ran through it.

**WORK LOOP** (2 of 2 quota cycles used, both passed):

1. **`global/harness-viewport-motion`** — extended `.testing/run-checks.mjs`:
   responsive loop now covers 375/768/1280/1440/**1920/2560**; horizontal overflow
   measured by momentarily lifting the `overflow-x:hidden` mask (the old
   `scrollWidth` check was blind to it); ≥1920 asserts a centered+capped `.da-wrap`
   column and a full-bleed `.da-footer`; new MOTION PASS (reveal-on-scroll, marquee
   transform advance, accordion transition incl. pseudo-elements, hover-lift
   transition, hero-gradient running probe) with PASS/SKIP/FAIL semantics; plus a
   `reducedMotion:'reduce'` suppression sample. **Real bug caught & fixed**: home
   Industries `.da-ind-row` (`15% 50% 35%` tracks + `gap:32px`) clipped 2px at
   ~768px → `0.15fr 0.5fr 0.35fr` + `min-width:0`. Tested green on home/service/
   contact.
2. **`global/large-viewport-sweep`** — re-verified ALL 20 built routes at 1920 and
   2560: **0 failures** everywhere. ≥1920 composition already sound (centered
   `--page-max-width:1200` column, full-bleed bands, `clamp()` type caps), so no
   per-page re-test units opened. One harness-precision fix (accordion detection
   scans ::before/::after — the blog FAQ animates via a pseudo-element). Visual 2560
   spot-checks on 7 representative pages all clean.

**Blocked/parked**: none new. `global/analytics-verify`,
`global/contact-integrations-verify` remain `blocked-setup` (env vars — unchanged).

**Commit range**: `62066eb` (harness wip) → `07c4880` (cycle 1) → `336e2fa`
(cycle 2) + this progress commit on `claude/zealous-feynman-dxjlw0`; base `6b3dacb`
is production's merged tip. All commits carry this routine's trailer.

**Green gate**: both cycles passed with zero new blocked units → PR from
`claude/zealous-feynman-dxjlw0` to `main`, merged. Vercel deploys `main`.

**Next run should**: pick up `global/motion-retrofit` (build/confirm the shared
motion islands — reveal, marquee, hover-lift, accordion, **animated hero gradient**
— and apply to every ported page per the export sources; the hero gradient is the
one motion the harness currently reports as absent/SKIP on every page, so it's the
main retrofit target; then re-verify each with the motion pass). After that, resume
the page ports: `clients-aavenir/section-port` (`aavenir/`, uses
`content/studies/aavenir.mdx`), `case-studies-onelern`, `audit-hackuity`,
`blog-index`, then the late globals (`global/sitemap`, `global/robots`).
