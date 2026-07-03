# Design Asylum Studio — Project Documentation

## Tech stack (mandatory for every page in this project — no deviations)

Every page is **one build-less, self-contained `.html` file** that runs straight in
the browser. No bundler, no package manager, no build tooling, no backend.

- **React 18.3.1** — UMD build (`react` + `react-dom`) loaded from the unpkg CDN
  with pinned integrity hashes. The entire page renders into a single
  `<div id="root">`.
- **Babel Standalone 7.29.0** — loaded from CDN. All JSX is written inline in
  `<script type="text/babel" data-presets="react">` blocks and transpiled in the
  browser. Page logic is split across several small `.jsx` section files that each
  export their components to `window` (via `Object.assign(window, {...})`) and are
  assembled + mounted by an `app.jsx`-style entry script.
- **Design Asylum Studio v3 design system** — the binding visual style. Load its
  compiled bundle `_ds/design-asylum-studio-v3-5943145e-1a4f-4091-8df6-de00e686edbf/_ds_bundle.js`
  (components exposed on `window.DesignAsylumDesignSystem_594314`) plus its
  `styles.css` and design tokens. Use its components/tokens for typography,
  spacing, colour, buttons, and layout primitives wherever possible. Never invent
  colours, type, spacing, or components not grounded in the system.
- **Custom CSS overrides** — a single `<style>` block per page for page-specific
  tweaks: squared-off card corners (`--radius-cards: 0`), a widened content column
  (`--page-max-width`), logo/service marquees, FAQ-style accordions, sticky
  jump-nav, and hover/reveal interactions.
- **Fonts** — `Blinker` (display sans — headings, UI, nav, stats; Regular 400 only,
  never heavier) and `Fraunces` (serif — editorial/long-form body, taglines),
  loaded via `@font-face` from CDN through the design-system font tokens.

If the design-system bundle isn't reachable at runtime, fall back to plain semantic
HTML + the custom `<style>` block, keeping the same class names and structure.

## Conventions

- Section files live in a per-page folder (e.g. `da/` for the homepage,
  `sevenloop/` for the client hub). Each defines local `D`/`S` font constants
  inside components and shares components via `window`.
- Never name a module-scoped object `styles` — name collisions across Babel
  scripts break the page. Use specific names or inline styles.
- No box-shadows anywhere — depth comes from surface-tone shifts and generous
  180px section gaps. Cards lift with a 4px `translateY` nudge only.
- Voice: declarative, confident, editorial. UI labels UPPERCASE; running serif copy
  sentence case. No emoji. The recurring glyph is the arrow `→`.

## Pages

- `Design Asylum Studio.html` — the studio homepage (sections in `da/`).
- `Sevenloop — Client Hub.html` — client case-study hub page (sections in `sevenloop/`).
