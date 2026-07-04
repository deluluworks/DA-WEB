import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";
import { P, Sub, UL } from "@/components/svc-template/Prims";
import { TableOfContents, type TocEntry } from "@/components/svc-template/TableOfContents";
import { MarqueeStrip } from "@/components/svc-template/MarqueeStrip";
import { Portfolio, type PortfolioProject } from "@/components/svc-template/Portfolio";
import { Faq, type FaqEntry } from "@/components/svc-template/Faq";
import { Related, type RelatedPost } from "@/components/svc-template/Related";
import { slugify } from "@/lib/slugify";

export const metadata: Metadata = {
  title: "Web Design & Branding Agency in Ahmedabad",
  description:
    "Positioning-led brand and Webflow builds for Ahmedabad B2B founders — manufacturing, product-tech, and GIFT City fintech. Design Asylum.",
};

// loc-01..loc-08 are body sections; loc-09 is the CTA band (matches the
// export's `LOC_TOC` — its last entry scroll-spies onto the `svc-cta-band`).
const TOC: TocEntry[] = [
  ["loc-01", "Why Ahmedabad B2B brands need a branding partner that understands the local market"],
  ["loc-02", "What goes wrong with most Ahmedabad agency engagements"],
  ["loc-03", "How we work with Ahmedabad B2B founders"],
  ["loc-04", "Named clients and work"],
  ["loc-05", "Best for"],
  ["loc-06", "What is included"],
  ["loc-07", "Engagement model"],
  ["loc-08", "Bridging legacy industry and modern tech in one brand"],
  ["loc-09", "Ready to transform your Ahmedabad brand?"],
];

// Ported from location/loc-blocks.jsx `LocPortfolio`. The export's cards were
// unwired `href="#"`; all four of these city projects are real tiles on the
// /clients grid, so each links to its `/clients#<slug>` anchor — same "link to
// the nearest real destination" convention as the Service/Industry/Solution
// portfolios.
const PROJECTS: PortfolioProject[] = (
  [
    ["Rewild Farms", "Brand and website design for Rewild Farms, an ecological farming initiative restoring biodiversity through regenerative agriculture."],
    ["Cloudphysician", "Brand and website design for Cloudphysician, an AI-enabled remote critical-care platform."],
    ["Entropik", "Website design for Entropik, an AI-driven user-research and emotion-AI platform."],
    ["Relanto", "Brand and web design for Relanto, a data, AI, and automation advisory and solutions partner."],
  ] as [string, string][]
).map(([name, desc]) => ({ name, desc, href: `/clients#${slugify(name)}` }));

// Ported verbatim from location/loc-blocks.jsx `LocFAQ`.
const FAQ: FaqEntry[] = [
  {
    q: "How does B2B web design differ from B2C?",
    a: [
      {
        p: "B2B web design serves a rational buyer in a long, multi-person decision &mdash; the job is clarity and credibility, not impulse. Instead of optimising for an instant emotional purchase, a B2B site has to explain a complex offer, earn trust with proof, and give different stakeholders (the user, the budget-holder, the technical evaluator) what each of them needs. The aesthetics matter, but they serve the argument rather than replace it.",
      },
    ],
  },
  {
    q: "What makes a boutique agency better than a large agency for B2B web design?",
    a: [
      {
        p: "Continuity and seniority. At a boutique studio the people who pitch are the people who do the work, and the same small team carries your project from strategy to launch &mdash; so the strategic thread never gets lost in a handoff. Large agencies often sell senior talent and deliver with a rotating junior bench. For B2B, where the brand lives or dies on sharp positioning and writing, that continuity is the difference.",
      },
    ],
  },
  {
    q: "How to choose the right web design agency?",
    a: [
      {
        p: "Look for evidence of strategy, not just a gallery of visuals. Read their case studies for the thinking, ask who will actually be on your project, read their copy, and talk to a repeat client. The agency that asks the sharpest questions about your business &mdash; rather than the one with the slickest deck &mdash; is almost always the right one.",
      },
    ],
  },
  {
    q: "How much does a B2B website redesign cost in India and the US?",
    a: [
      { p: "Cost tracks scope and depth of strategy. As a rough guide:" },
      {
        ul: [
          "<strong>Focused redesign</strong> — &#8377;6&ndash;15 lakh ($8K&ndash;$18K): restructure, copy refresh, and a Webflow rebuild of an existing brand.",
          "<strong>Brand + website</strong> — &#8377;15&ndash;35 lakh ($18K&ndash;$42K): positioning, identity, messaging, and a full site.",
          "<strong>Enterprise / multi-template</strong> — &#8377;35 lakh+ ($42K+): large site architecture, custom illustration, and motion.",
        ],
      },
      {
        p: "US engagements sit at the higher end of these bands; we quote a fixed scope against the outcome you need either way.",
      },
    ],
  },
  {
    q: "How long does a B2B website redesign take?",
    a: [
      { p: "A typical end-to-end redesign runs roughly 15&ndash;20 weeks, phased like this:" },
      {
        ul: [
          "<strong>Weeks 1&ndash;4 — Strategy.</strong> Diagnosis, positioning, messaging, and sitemap.",
          "<strong>Weeks 5&ndash;14 — Design &amp; build.</strong> Identity, page design, copy, and the Webflow build.",
          "<strong>Weeks 15&ndash;20 — Polish &amp; launch.</strong> Motion, QA, content load, and go-live.",
        ],
      },
      {
        p: "Focused, single-template projects compress to four to six weeks; large multi-template sites run longer.",
      },
    ],
  },
  {
    q: "What should a high-quality B2B website include in design, messaging, and UX?",
    a: [
      {
        p: "A sharp position stated in the buyer&rsquo;s language above the fold; messaging that leads with outcomes and proves them with evidence; a structure that guides each stakeholder to what they need; credibility signals (clients, results, security) placed where doubt arises; and a clear, low-friction path to the next step &mdash; demo, quote, or call. Design holds it all together and signals reliability, but the argument is what converts.",
      },
    ],
  },
];

// Ported verbatim from location/loc-blocks.jsx `LocRelated` — every card was an
// unwired `href="#"` (no blog-article routes exist yet), so `Related` renders
// them static/decorative, same policy as the other template pages.
const RELATED: RelatedPost[] = [
  { title: "Top B2B Branding Agencies in India (2026)", color: "var(--color-block-iris)" },
  { title: "Best Webflow Agencies in India 2026: Ranked and Reviewed", color: "var(--color-block-maroon)" },
  { title: "Better B2B Branding Starts With a Point of View", color: "var(--color-block-teal)" },
  { title: "B2B Positioning Is a Courage Problem, Not Creative", color: "var(--color-block-iris)" },
  { title: "Working With a Webflow Agency: 7-Step Process (2026)", color: "var(--color-block-maroon)" },
  { title: "8 Steps to Build a B2B Brand Strategy (2026)", color: "var(--color-block-teal)" },
];

// The export's "Locations" crumb was an unwired `href="#"`; no locations-index
// page exists or is queued, so it stays a plain (non-link) crumb — same call as
// the Solution page's "Solutions" crumb.
const CRUMB = [{ label: "Home", href: "/" }, { label: "Locations" }, { label: "Ahmedabad Web Design Agency" }];

// Page-only `.loc-info` block from loc-body.jsx's `Info` primitive.
function Info({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="loc-info">
      <div className="loc-info-label">{label}</div>
      {children}
    </div>
  );
}

/** Ported from location/loc-*.jsx (`Location - Ahmedabad.html`). */
export default function AhmedabadLocationPage() {
  return (
    <div className="svc-page location-page">
      <RevealObserver />

      <header className="da-wrap svc-hero">
        <Breadcrumb trail={CRUMB} />
        <h1 className="loc-h1">Best Web Design &amp; Branding Agency in Ahmedabad</h1>
        <p className="svc-hero-p">
          Ahmedabad&rsquo;s economy has three layers &mdash; a deep manufacturing base, a
          fast-growing B2B and product-tech base, and the GIFT City fintech build-out. Each one needs
          a different kind of brand, but they share a buyer who has been around for a while and is
          hard to impress.
        </p>
      </header>

      {/* Portfolio sits high, right after the hero (matches the export's mount
          order), 2-wide with Location as the active tab. */}
      <Portfolio
        heading="Design Projects for Ahmedabad Brands"
        tabs={["Solution", "Service", "Industry", "Location"]}
        defaultTab="Location"
        projects={PROJECTS}
        cols={2}
        marquee={false}
      />

      <section className="da-wrap loc-callout">
        <div className="svc-callout reveal-up">
          <div className="svc-callout-tag">
            <span aria-hidden className="svc-callout-dot" />
            Question
          </div>
          <h2 className="svc-callout-q">What does an Ahmedabad founder gain from a Bangalore B2B studio?</h2>
          <p className="svc-callout-a">
            We work with Ahmedabad founders on positioning-led brand and Webflow builds. Same
            timezone, full working-day overlap, four to six weeks for standard scope. We are
            comfortable across modern SaaS and traditional manufacturing &mdash; and we know the
            difference.
          </p>
        </div>
      </section>

      <section className="da-wrap loc-marquee">
        <MarqueeStrip label="Our Clients in Ahmedabad" />
      </section>

      <div className="da-wrap bl-layout">
        <TableOfContents toc={TOC} />
        <article className="bl-body">
          <div className="bl-eyebrow">Ahmedabad — B2B Brand &amp; Web Design</div>

          <P lead>
            Ahmedabad&rsquo;s economy has three layers &mdash; a deep manufacturing base, a
            fast-growing B2B and product-tech base, and the GIFT City fintech build-out. Each one
            needs a different kind of brand, but they share a buyer who has been around for a while
            and is hard to impress.
          </P>

          <section id="loc-01" className="bl-sec">
            <h2 className="bl-h2">
              Why Ahmedabad B2B brands need a branding partner that understands the local market
            </h2>
            <P>
              Ahmedabad founders are pragmatic. They have built real businesses with real revenue,
              often in categories where the buyer values substance over polish. A branding partner
              who does not understand that walks in with a generic &lsquo;startup&rsquo; aesthetic and
              immediately loses the room. The work here has to respect the operator&rsquo;s instinct
              while still moving the brand somewhere more ambitious.
            </P>
            <P>
              That is the gap we fill: a B2B studio that takes Ahmedabad&rsquo;s industrial
              seriousness as a starting point, not a problem to design away.
            </P>
          </section>

          <section id="loc-02" className="bl-sec">
            <h2 className="bl-h2">What goes wrong with most Ahmedabad agency engagements</h2>
            <P>Across the founders we talk to, the same four patterns come up again and again:</P>
            <Sub>Manufacturing-style websites</Sub>
            <P>
              Sites built like a product catalogue &mdash; specs, certifications, and a contact form
              &mdash; with no story and no point of view. They prove you exist; they do not make
              anyone want to work with you.
            </P>
            <Sub>No positioning depth</Sub>
            <P>
              The agency jumps to visuals before anyone has decided who the brand is for or what it
              stands against. The result looks fine and says nothing.
            </P>
            <Sub>Weak copywriting</Sub>
            <P>
              Words treated as filler around the design rather than the load-bearing part of the
              brand. In B2B, the copy is the product demo &mdash; weak words mean a weak pitch.
            </P>
            <Sub>Vendor mentality</Sub>
            <P>
              An agency that waits for instructions instead of bringing a strategy. You end up
              art-directing your own brand, which is exactly what you hired out.
            </P>
          </section>

          <section id="loc-03" className="bl-sec">
            <h2 className="bl-h2">How we work with Ahmedabad B2B founders</h2>
            <P>
              We work with Ahmedabad founders on positioning-led brand and Webflow builds. Same
              timezone, full working-day overlap, and four to six weeks for standard scope. We start
              with a diagnosis of where the brand actually stands, agree a sharp position, write the
              copy, and only then design the identity and build the site &mdash; one team carrying the
              thread from strategy to launch.
            </P>
          </section>

          <section id="loc-04" className="bl-sec">
            <h2 className="bl-h2">Named clients and work</h2>
            <P>
              Our industrial and manufacturing work is directly relevant to Ahmedabad&rsquo;s base.
              We built the brand and messaging for <strong>Ximkart</strong>, a custom-manufacturing
              sourcing platform, and the full brand and website for <strong>Sevenloop</strong>, an
              end-to-end custom manufacturing solutions provider &mdash; both projects that sit
              exactly at the intersection of old-world manufacturing and modern engineering that
              defines much of Ahmedabad&rsquo;s growth.
            </P>
          </section>

          <section id="loc-05" className="bl-sec">
            <h2 className="bl-h2">Best for</h2>
            <Info label="Best for">
              <UL
                items={[
                  "Ahmedabad manufacturers ready to look as modern as their engineering already is.",
                  "B2B and product-tech founders who need positioning and copy, not just a redesign.",
                  "GIFT City fintech teams building an enterprise-credible brand from day one.",
                ]}
              />
            </Info>
          </section>

          <section id="loc-06" className="bl-sec">
            <h2 className="bl-h2">What is included</h2>
            <Info label="What is included">
              <P>
                Brand diagnosis and positioning, messaging and website copywriting, visual identity,
                and a Webflow build &mdash; plus the collateral (deck, one-pager) that the sales team
                actually uses. Everything is delivered by the same core team, so the strategy carries
                all the way to the live page.
              </P>
            </Info>
          </section>

          <section id="loc-07" className="bl-sec">
            <h2 className="bl-h2">Engagement model</h2>
            <Info label="Engagement model">
              <P>
                A fixed-scope engagement quoted against a clear outcome, typically four to six weeks
                for standard scope, with full working-day overlap and a single point of contact. No
                open-ended retainers and no surprise change-orders mid-build.
              </P>
            </Info>
          </section>

          <section id="loc-08" className="bl-sec">
            <h2 className="bl-h2">Bridging legacy industry and modern tech in one brand</h2>
            <P>
              Ahmedabad&rsquo;s real branding challenge is range. A single brand often has to speak to
              a fifty-year-old manufacturing buyer and a venture-backed product team in the same week.
              The GIFT City fintech build-out sharpens this further &mdash; institutions there need a
              brand that signals regulatory seriousness and modern capability at once.
            </P>
            <P>
              That is the work we are built for: holding industrial credibility and contemporary
              ambition in one coherent brand, so you do not have to choose between looking trustworthy
              and looking current.
            </P>
          </section>
        </article>
      </div>

      <section id="loc-09" className="svc-cta-band">
        <div className="da-wrap svc-cta-inner">
          <div>
            <p className="svc-cta-lead">
              Book a 30-minute diagnosis call &mdash; no pitch, just a clear read on where your brand
              stands.
            </p>
            <h2 className="svc-cta-h">Ready to transform your Ahmedabad brand?</h2>
          </div>
          <Link className="svc-cta-btn" href="/contact">
            Talk to a design expert <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>

      <Faq heading="FAQs" items={FAQ} />
      <Related heading="Related blogs" posts={RELATED} />
    </div>
  );
}
