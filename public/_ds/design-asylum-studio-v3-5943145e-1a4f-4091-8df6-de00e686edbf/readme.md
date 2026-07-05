# Design Asylum — Design System

**Bold by design.** A brand & digital studio identity system. Monochrome-dominant,
editorial, and loud where it counts: extremely wide expanded display type set
against a warm contemporary serif, on a near-black-and-paper palette punctuated
by a single chromatic accent and one signature solar gradient.

This repository is the source of truth for designing anything Design Asylum —
production UI, marketing pages, decks, or throwaway prototypes.

---

## Sources

The foundations were extracted from a design-token export:

- `uploads/theme.css` — Tailwind-style `@theme` token block
- `uploads/tokens.json` — W3C design-token JSON (colors, type, spacing, radius, surfaces)
- `uploads/variables.css` — `:root` custom properties incl. the solar gradient & named radii

The token JSON notes an extraction origin of `raggededge.com` ("Ragged Edge",
captured 2026-06-03). Those values were used purely as raw foundations; all
naming, voice, components, and the website UI kit here are authored for **Design
Asylum Studio (V3)**. No external product code or Figma file was provided — if one
exists, attach it via the Import menu and the UI kit can be tightened against it.

---

## Typography (locked) — Blinker + Fraunces

The system runs on a strict two-family contrast, both open-source (OFL) and
loaded as `@font-face` from CDN (self-host by swapping the `src:` URLs in
`tokens/fonts.css`):

| Family | Role |
|---|---|
| **Blinker** (geometric sans) | Display — headlines, the hero wordmark, stat numbers, nav, buttons, tags, UI labels. Set large, tight leading, slightly tightened tracking; uppercase for the wordmark. **Regular 400 only — never set heavier than 400; headlines earn presence through scale, case and tracking, not weight.** |
| **Fraunces** (variable serif) | Body, project descriptions, taglines, captions, footer nav, and the serif-labelled CTAs. Soft/low-contrast optical setting (`--serif-variation: 'SOFT' 60 …`) so it reads warm, not stiff. Italic is used expressively for taglines and overlay nav. |

The sans/serif tension is the identity — a lean geometric display (Regular 400,
never heavier) against a characterful serif. `--font-display` / `--font-serif` are the only handles you
need; legacy aliases (`--font-abcdiatypeexpanded-bold` etc.) still resolve.
Fluid display steps (`--text-mega`, `--text-section`, `--text-statement`,
`--text-stat`, `--text-lede`) use `clamp()` so headlines scale smoothly across
breakpoints. *(Single swap-point: if you ever prefer Spectral or single-family
Blinker, change it in `tokens/fonts.css` + `tokens/typography.css`.)*

---

## Content fundamentals — voice & tone

The writing is **declarative, confident, and lean**. It states things as fact and
trusts the reader.

- **Person:** mostly **"we"** (the studio) addressing **"you"** (the client).
  "We build brands that refuse to be ignored." "Tell us what you're building."
- **Register:** editorial and a little provocative. Short sentences. Hard stops.
  Fragments are allowed and encouraged for rhythm: *"No safe. No filler. No apologies."*
- **Casing:** display/UI labels are **UPPERCASE** (the expanded sans is always
  caps). Running serif copy is sentence case. Never title-case.
- **Claims, not descriptions:** "Bold by design." not "We help brands be bolder."
  Avoid hedging ("we try to", "we help"), avoid exclamation marks, avoid hype words.
- **Numbers are concrete:** "Projects start around £15k." "We reply within a day."
- **Emoji:** never. The voice is too dry for them.
- **Vibe:** a confident studio with a low tolerance for boring. Pick a side, hold
  a line. Wit over warmth; restraint over decoration.

Examples in use: hero *"Bold by design."* · statement *"We're a small studio with
a low tolerance for boring."* · contact *"Let's make something loud."*

---

## Visual foundations

**Palette.** Near-monochrome. **Obsidian Ink (#181F1F)** carries ~90% of every
screen — text, fills, hairlines. **Paper White** is the canvas. **Fog / Ash /
Graphite** are the only greys (dividers, muted text). Two dark surfaces — **Deep
Teal (#1F3233)** and Obsidian — frame case-study and footer blocks. Chromatic
colour is rationed: **Iris Voltage (#516FEA)** is the outline/focus accent; the
**solar gradient** (`--gradient-solar-bloom`) and the **animated mesh hero** are
the big chromatic events. For editorial / "happenings" blocks there's a small set
of **vivid accent block colours** (`--color-block-iris/solar/teal/maroon/mint/ink`)
used as full-bleed `FeatureCard` surfaces — bold solid blocks, never gradients.
The canvas can be Paper White or the warm **Paper Off (#F6F5F1)** off-white.

**Type.** Two families, maximum contrast — **Blinker** (display) vs **Fraunces**
(serif). Display is a lean geometric sans set at Regular 400 only (never heavier),
large with tight leading and slightly tightened tracking (uppercase for the
wordmark), fluid up to ~168px in the hero.
Body is the warm Fraunces serif (soft optical setting), used for everything you
actually read plus expressive italics for taglines. Never mix roles: sans for
labels/headlines/stats, serif for reading + serif CTAs.

**Spacing & layout.** 4px base unit with a deliberately gappy scale (4·12·16·24·
32·64·80·180·200). Sections breathe — the signature `--section-gap` is **180px**.
Content lives in a **1200px** max-width column, generously padded.

**Radii.** Large and soft, everywhere. Buttons / nav / tags are full pills
(`--radius-pill: 9999px`; legacy 64px still defined), inputs 54px, cards & body
blocks 40px. **There are no small corners in this system.**

**Backgrounds.** Mostly flat Paper White, with Mint Wash for "breathing" sections
and the two dark surfaces for emphasis. The *only* gradient is the solar wash —
used large, soft, and slightly blurred behind the hero headline. No textures, no
patterns, no photographic noise by default; imagery (when present) sits inside
40px-rounded cards, often over a gradient or teal cover.

**Borders & shadows.** Borders are 1px hairlines — Obsidian for emphasis, Fog for
subtle dividers. **There are no box-shadows anywhere in this system** — depth comes
from surface tone shifts (white → mint → teal → obsidian) and the generous 180px
gaps, never from elevation. The interface reads as flat printed editorial. The only
motion-based "lift" is a small `translateY(-4px)` on interactive cards — a nudge,
with no shadow behind it.

**Motion (named tokens).** Smooth and physical — see `tokens/motion.css`. Three
named primitives: **`reveal-up`** (ghost → full opacity + ~28px upward slide,
~720ms ease-out, triggered ~20% in view, staggered for groups), **`pill-hover`**
(every capsule shares one hover: gentle lift + scale, settle on press), and
**`gradient-loop`** (the hero mesh drifts on a ~22s loop). Durations/easings are
tokens (`--motion-*`, `--ease-*`). **Everything degrades to the instant final
state under `prefers-reduced-motion`** (reveals show, gradient stops).

**Responsive (mobile-first, core rule).** Breakpoints: mobile ≤640, tablet
641–1024, desktop ≥1025 (`--bp-*`). The canvas uses fluid side gutters
(`--gutter`) and fluid vertical rhythm (`--section-pad-y`) that shrink on small
screens; all display type is `clamp()` so headlines scale smoothly. Key reflows:
the **PillNav** collapses from inline chip groups to a wordmark + `+`/`×` toggle
opening a full-screen overlay of stacked italic Fraunces links; **WorkCard** media
goes landscape → portrait and text stacks single-column (the "More" pill stays
anchored bottom-right); the **FeatureCard** grid collapses to one column;
**SectionHeader** keeps its label-left / tagline-right split at every size; the
newsletter field + button stay on one line; **FooterNav** stacks to one column.

**Hover / press states.** Hover = colour change (fill swaps, ghost gains Mint Wash,
card lifts). Press = scale-down 0.97. Focus = Iris Voltage ring + 3px soft halo.
Disabled = 40% opacity.

**Transparency & blur.** Used in exactly one place: the floating nav pill —
translucent Mint Wash with a 14px backdrop blur. Otherwise surfaces are opaque.

**Imagery vibe.** Warm and graphic rather than photographic — gradient and solid
colour covers dominate work cards; when photography is used it's full-bleed inside
rounded cards, colour-rich, never desaturated or grainy.

---

## Iconography

Design Asylum is **near-iconless by design** — the editorial voice does the work.
The one recurring glyph is the **arrow `→`** (U+2192), used as the universal
"forward / more" affordance: trailing button labels, the `ArrowLink`, and work-card
corner badges. It nudges +4px on hover. Bullets and the eyebrow marker use a small
solid dot.

- **No icon font or SVG sprite** ships with this system (none existed in the
  source). UI relies on the unicode arrow + dot plus type and layout.
- **If you need a broader icon set** for richer product UI, use **[Lucide](https://lucide.dev)**
  from CDN — thin (1.5–2px) strokes, rounded caps — which matches the minimal,
  hairline aesthetic. *This is a substitution, not a brand-owned set; flag it when
  you use it and keep icons sparse.*
- **Emoji:** never used.

---

## Index / manifest

Root foundations
- `styles.css` — **the entry point** consumers link; `@import` manifest only.
- `tokens/` — `colors.css` (neutrals, accents, **vivid blocks**), `typography.css`
  (Blinker/Fraunces + fluid steps), `spacing.css` (+ fluid gutter/pad), `radius.css`
  (+ pill), `surfaces.css`, `fonts.css` (Blinker + Fraunces `@font-face`),
  `breakpoints.css`, `motion.css` (reveal-up · pill-hover · gradient-loop),
  `base.css` (element defaults + `.da-*` helpers).
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand).

Components — `window.DesignAsylumDesignSystem_594314.*`
- `components/brand/` — **Logo** (wordmark, stacked & inline)
- `components/buttons/` — **Button** (primary · secondary · ghost · inverse), **ArrowLink**
- `components/forms/` — **Input** (pill field, label / hint / error)
- `components/content/` — **Card** (4 surfaces, no shadow), **Tag** (4 tones), **Avatar**
- `components/editorial/` — **CaseStudy** (5:7 split block with rotated vertical mark)
- `components/hero/` — **AnimatedHero** (mesh-gradient hero), **PillNav** (responsive chips ↔ overlay)
- `components/sections/` — **StatementBlock**, **SectionHeader**, **JumboPillCTA**, **NewsletterBand**
- `components/work/` — **WorkCard** (core project module + stat + More pill), **FeatureCard** (vivid colour block)
- `components/footer/` — **ContactRow** (copy-to-clipboard), **FooterNav** (two-column)

UI kits
- `ui_kits/studio-v3/` — the current reference build: AnimatedHero + PillNav,
  reveal-up work modules with stats, offset FeatureCard grid, newsletter band,
  jumbo CTA, contact + footer. Fully responsive. Open `index.html`.
- `ui_kits/website/` — earlier monochrome studio site: full-bleed solar gradient
  hero, **alternating case-study split blocks** (never a card grid), enquiry form,
  obsidian footer. Open `index.html`.

Meta
- `SKILL.md` — Agent-Skills wrapper for downloadable use.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — **generated**;
  do not edit by hand.
