# Design Asylum — Site Guide

A page-by-page explanation of everything in this project export, and a map of how the
pages connect to one another.

> **What this project is.** A static, build-less recreation of the **Design Asylum / Everything Design**
> B2B branding-agency website. Every page is a single self-contained `.html` file that loads
> React + Babel from a CDN, renders into one `<div id="root">`, and is assembled from small
> per-page `.jsx` section files. All pages share the **Design Asylum Studio v3** design system
> (`_ds/…`) and a common navbar + footer defined in `sevenloop/sl-shared.jsx`.

---

## 1. How a page is built (the shared pattern)

Each top-level `.html` file is a thin shell. Its `<head>` loads React, Babel, and the design
system; its `<body>` is just `<div id="root"></div>` followed by a list of `<script type="text/babel">`
tags. Those scripts are the page's content, split into small modules that live in a folder named
after the page:

- `sevenloop/sl-shared.jsx` — **loaded first on almost every page.** Exports the shared
  primitives: the `SLNav` navbar (Design Asylum wordmark + Work / Studio / Thinking / Clients /
  Team / Book a call), the dark `SLFooter`, the `Breadcrumb`, the `Eyebrow` label, the
  `useReveal` scroll-animation hook, and the brand font/colour constants.
- Then one or more page-specific `*.jsx` files (body, blocks, app entry) that build that page's
  sections and mount them into `#root`.

So the folders (`da/`, `sevenloop/`, `service/`, `industry/`, `blog/`, etc.) are **source code
for the matching `.html` page**, not separate pages themselves.

---

## 2. Core / studio pages

### `Design Asylum Studio.html` — Homepage
The studio's own landing page (title *"Design Asylum — Bold by design"*). Animated mesh-gradient
hero, a scrolling client logo wall, service/work modules, statement blocks and CTA. Assembled from
the `da/` folder (`app.jsx`, `sections-1…4.jsx`, `sections-services.jsx`). This is the front door
of the whole site.

### `Manifesto.html` — Manifesto
The belief statement / "why we exist" page. Long editorial, Fraunces serif. Source in `manifesto/`.

### `Why Design Asylum.html` — Why choose us
Persuasion page: showreel, testimonials, featured projects and a "right-fit test". Ends in a CTA
block linking to **Why Us** and **Contact**. Source in `footer/why-da.jsx`.

### `Why Us.html` — Why Us (B2B website angle)
A shorter positioning page focused on being your B2B website partner. CTA links to **Contact**.
Source in `footer/why-us.jsx`.

### `Team.html` — Team
Studio team / leadership grid (strategists, designers, writers, developers, motion artists).
Source in `team/team.jsx`.

### `Author - Tanmaya Rao.html` — Author bio
Individual profile page for Tanmaya Rao (Lead Brand Designer & Illustrator) — the kind of
author page attached to blog articles. Source in `author/`.

### `Pricing.html` — Pricing
Budget ranges for branding, websites and motion (INR / USD, with timelines). Source in `pricing/`.

### `Contact - Book a Call.html` — Contact
"Book a free brand consultation" page. This is the destination of most CTA buttons across the site.
Source in `footer/contact.jsx`.

### `Recent Updates.html` — What's New
A running list of current engagements and shipped work. Source in `footer/recent-updates.jsx`.

---

## 3. Index / hub pages

### `Clients - Index.html` — Clients index
The client roster / directory. Conceptually the parent of the individual client hub pages
(Sevenloop, Aavenir). Source in `footer/clients-index.jsx`.

### `FAQ - Index.html` — FAQ index
The main FAQ landing page (accordion of common questions about branding, web, video/motion).
Parent of the individual FAQ answer pages. Source in `footer/faq-index.jsx`.

---

## 4. SEO landing pages (service / industry / solution / location)

These are long-form, single-topic SEO pages. Each recreates one Everything Design marketing page,
exact content and section order. All share the `sl-shared.jsx` chrome.

### `Service - Branding Agency.html` — Service page
"Branding Agency" service page — diagnosis → positioning → copy → identity. Source in `service/`.

### `Industry - Manufacturing.html` — Industry page
"Design agency for manufacturing firms." Turns industrial expertise into client engagement.
Source in `industry/`.

### `Solution - AI SaaS Website.html` — Solution page
"AI SaaS product website design agency." Source in `solution/`.

### `Location - Ahmedabad.html` — Location page
"Web design & branding agency in Ahmedabad" — local-SEO page (manufacturing, product-tech, GIFT
City fintech). Source in `location/`.

---

## 5. FAQ answer page

### `FAQ - Corporate Rebrand Expert.html`
A focused single-question SEO page ("Where can you hire experts to lead your corporate rebrand…").
A child of **FAQ - Index**. Source in `faq/`.

---

## 6. Client work — case studies & showcases

### `Sevenloop - Client Hub.html` — Sevenloop hub *(canonical)*
The flagship client case-study hub: client header + breadcrumb, "How Design Asylum Helped
Sevenloop" editorial, before/after transformation, team grid, and a service marquee. This is the
**canonical** Sevenloop page — the redirect stubs all point here. Source in `sevenloop/`
(`sl-header`, `sl-editorial`, `sl-team-services`, `sl-app`, on top of `sl-shared`).

### `Sevenloop - Client Hub (standalone).html`
A single-file, dependency-free version of the same hub (inline CSS, no external `.jsx` — note the
`__bundler/template` block). A portable fallback of the page above; content is the same.

### `Sevenloop - Branding Case Study.html` — Visual case study
The image-forward "Sevenloop | Branding" case study: project title + metadata sidebar + a tall
stack of brand visuals. Deliberately minimal. Its footer has a **"← Back to Sevenloop hub"** link.
Source in `casestudy/`.

### `Sevenloop - Blog Article.html` — Blog article
Long-form editorial: *"Sevenloop Rebrand & Webflow Site: A 5-Month Case Study."* Sticky table of
contents, "read summary with AI" chips, FAQ accordion, related posts. Source in `blog/`.

### `Sevenloop - Print Showcase.html` — Print collateral
The leanest template: navbar + title + a vertical stack of brochure spreads + footer.
Source in `print/`.

### `Aavenir - Client Hub.html` — Aavenir hub *(canonical)*
Client hub for Aavenir (AI contract-lifecycle management on ServiceNow), same structure as the
Sevenloop hub. Source in `aavenir/`.

### `OneLern - Written Case Study.html` — Written case study
A structured narrative case study for OneLern (Ed-Tech): messaging, positioning, illustrations,
web design. Source in `writtencs/`.

### `Website Audit - Hackuity.html` — Website audit
A minimal audit-showcase page critiquing Hackuity.io's messaging and visual design.
Source in `audit/`.

---

## 7. Redirect stubs & routing helpers (not real pages)

### `project/aavenir.html`, `project/sevenloop.html`, `project/sevenloop-explainer-film.html`
Meta-refresh + `window.location.replace` redirect stubs. They immediately forward old
`/project/*` URLs to the canonical client hubs, passing SEO equity through:
`project/aavenir → Aavenir - Client Hub.html`, and both `project/sevenloop` and
`project/sevenloop-explainer-film → Sevenloop - Client Hub.html`.

### `_redirects`
Server-level 301 rules (Netlify-style) that do the same job at the host level — the preferred
mechanism over the meta-refresh stubs. Maps `/project/sevenloop`, `/project/sevenloop-explainer-film`
→ `/clients/sevenloop` and `/project/aavenir` → `/clients/aavenir`.

### `reference/`, `screens/`, `scraps/`, `uploads/`
Working / source material, **not** shipped pages. `uploads/` holds the build prompts
(`Prompts for ED.md`, `Prompts for ED v2.md`) and reference screenshots; `scraps/` and `screens/`
hold captures; `reference/` holds source snippets. `_ds/` is the design-system bundle. `CLAUDE.md`
is the project's build documentation.

---

## 8. How the pages link together

There are **three layers** of connection. It's important to understand that most navigation is
*visual chrome*, not wired links.

**A. Shared chrome (present on nearly every page, but not clickable-through).**
Every content page loads the same `SLNav` navbar and `SLFooter`. However, the navbar items
(Work / Studio / Thinking / Clients / Team / Book a call), the footer link columns, and the
social links are currently **placeholder `#` anchors** — they render the site's structure but do
not navigate to the other `.html` files. So the pages *look* like one connected site while, in the
exported files, the top nav and footer menus don't yet point at real page URLs.

**B. Real, wired page-to-page links (the ones that actually navigate).**
- **Why Design Asylum** → `Why Us.html` and `Contact - Book a Call.html` (CTA buttons).
- **Why Us** → `Contact - Book a Call.html` (CTA button).
- **Sevenloop - Branding Case Study** → `Sevenloop - Client Hub.html` ("← Back to Sevenloop hub").
- The redirect stubs in `project/` → the canonical **Aavenir** and **Sevenloop** hubs.

So **Contact - Book a Call.html is the main convergence point** — the primary call-to-action target.

**C. Intended hierarchy (the sitemap the content implies).**
Even where links aren't yet wired, the content defines a clear tree:

```
Design Asylum Studio.html  (home)
├── Manifesto.html · Why Design Asylum.html · Why Us.html · Team.html · Pricing.html · Recent Updates.html
├── Contact - Book a Call.html                (CTA convergence point)
├── Clients - Index.html
│   ├── Sevenloop - Client Hub.html           (canonical; alias: project/sevenloop*, /clients/sevenloop)
│   │   ├── Sevenloop - Branding Case Study.html   → back-links to the hub
│   │   ├── Sevenloop - Blog Article.html
│   │   └── Sevenloop - Print Showcase.html
│   ├── Aavenir - Client Hub.html             (canonical; alias: project/aavenir, /clients/aavenir)
│   ├── OneLern - Written Case Study.html
│   └── Website Audit - Hackuity.html
├── FAQ - Index.html
│   └── FAQ - Corporate Rebrand Expert.html
└── SEO landing pages
    ├── Service - Branding Agency.html
    ├── Industry - Manufacturing.html
    ├── Solution - AI SaaS Website.html
    └── Location - Ahmedabad.html
```

---

## 9. Quick reference — folder ↔ page

| Page (`.html`) | Source folder |
|---|---|
| Design Asylum Studio | `da/` |
| Sevenloop - Client Hub | `sevenloop/` |
| Sevenloop - Branding Case Study | `casestudy/` |
| Sevenloop - Blog Article | `blog/` |
| Sevenloop - Print Showcase | `print/` |
| Aavenir - Client Hub | `aavenir/` |
| OneLern - Written Case Study | `writtencs/` |
| Website Audit - Hackuity | `audit/` |
| Service - Branding Agency | `service/` |
| Industry - Manufacturing | `industry/` |
| Solution - AI SaaS Website | `solution/` |
| Location - Ahmedabad | `location/` |
| FAQ - Corporate Rebrand Expert | `faq/` |
| Author - Tanmaya Rao | `author/` |
| Team | `team/` |
| Manifesto | `manifesto/` |
| Pricing | `pricing/` |
| Contact / Clients index / FAQ index / Why DA / Why Us / Recent Updates | `footer/` |
| _shared nav, footer, breadcrumb, hooks_ | `sevenloop/sl-shared.jsx` |
| _redirect stubs_ | `project/` + `_redirects` |
| _design system_ | `_ds/` |
