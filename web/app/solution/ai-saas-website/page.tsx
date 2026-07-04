import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";
import { P, Sub, UL } from "@/components/svc-template/Prims";
import { TableOfContents, type TocEntry } from "@/components/svc-template/TableOfContents";
import { MarqueeStrip } from "@/components/svc-template/MarqueeStrip";
import { Portfolio, type PortfolioProject } from "@/components/svc-template/Portfolio";
import { Faq, type FaqEntry } from "@/components/svc-template/Faq";
import { Experts, type Expert } from "@/components/svc-template/Experts";
import { Related, type RelatedPost } from "@/components/svc-template/Related";
import { slugify } from "@/lib/slugify";

export const metadata: Metadata = {
  title: "AI SaaS Product Website Design Agency",
  description:
    "An AI SaaS product website design agency builds conversion-focused digital experiences that make complex AI capabilities accessible and move prospects toward a buying decision.",
};

// sol-01/02 are body sections; sol-03 is the CTA band (matches the export's
// `SOL_TOC` — its third entry scroll-spies onto the `svc-cta-band` section).
const TOC: TocEntry[] = [
  ["sol-01", "Top AI SaaS Product Websites: What Sets Them Apart in Web Design and User Experience"],
  ["sol-02", "The Distorted Role of Marketing in VC-Backed SaaS: Why Customer-First is the Key to Success"],
  ["sol-03", "Get your Website for AI SaaS Product"],
];

// Ported from solution/sol-blocks.jsx `SolPortfolio`. The export's cards were
// unwired `href="#"`; each project is a real /clients tile, so each links to
// its `/clients#<slug>` anchor (Aavenir to its real client-hub route). "ASPI
// & CIS Tech Diplomacy" maps to the "Aspi & CIS" tile on /clients — same
// override the Service page uses.
const REAL_HUB: Record<string, string> = { Aavenir: "/clients/aavenir" };
const TILE_OVERRIDE: Record<string, string> = { "ASPI & CIS Tech Diplomacy": "Aspi & CIS" };
function projectHref(name: string): string {
  if (REAL_HUB[name]) return REAL_HUB[name];
  return `/clients#${slugify(TILE_OVERRIDE[name] ?? name)}`;
}

const PROJECTS: PortfolioProject[] = (
  [
    ["SimpliContract", "Brand and website design for SimpliContract, an AI-powered enterprise contract lifecycle management platform."],
    ["Entropik", "Website design for Entropik, an AI-driven user-research and emotion-AI platform."],
    ["Adnaut", "Branding and web design for Adnaut, an AI-assisted B2B advertising and demand platform."],
    ["Nimble Edge", "Website design for Nimble Edge, an on-device AI and edge-inference platform."],
    ["Cloudphysician", "Brand and website design for Cloudphysician, an AI-enabled remote critical-care platform."],
    ["5X", "Website design for 5X, an AI-powered managed data platform for modern teams."],
    ["Aavenir", "Web design for Aavenir, an AI source-to-pay and workflow automation suite."],
    ["ASPI & CIS Tech Diplomacy", "Brand and report design for a tech-diplomacy initiative spanning AI policy and security."],
    ["Mili", "Website design for Mili, an AI knowledge and copilot platform for financial services."],
  ] as [string, string][]
).map(([name, desc]) => ({ name, desc, href: projectHref(name) }));

// Ported verbatim from solution/sol-blocks.jsx `SolFAQ`.
const FAQ: FaqEntry[] = [
  {
    q: "What should a pre-launch AI startup prioritise on an 8-week website timeline?",
    a: [
      { p: "With eight weeks and no time to waste, sequence the work so the highest-leverage decisions happen first. A realistic split:" },
      {
        ul: [
          "<strong>Weeks 1&ndash;2 — Positioning &amp; message.</strong> Nail the one-line outcome, the primary audience, and the proof you can credibly show. Everything downstream depends on this.",
          "<strong>Weeks 3&ndash;5 — Design &amp; build the core path.</strong> Homepage, one deep product page, and a demo/contact flow. Resist the urge to ship ten pages no one will read.",
          "<strong>Weeks 6&ndash;7 — Proof &amp; polish.</strong> Add the demo or product video, trust signals, and motion that makes the product feel real.",
          "<strong>Week 8 — Launch &amp; instrument.</strong> Ship, add analytics, and set up the first iteration loop against real visitor behaviour.",
        ],
      },
      { p: "The mistake to avoid is spreading thin. A pre-launch site that converts one audience on one outcome beats a sprawling site that explains everything and persuades no one." },
    ],
  },
];

// Ported verbatim from solution/sol-blocks.jsx `SolExperts`.
const EXPERTS: Expert[] = [
  { role: "Associate Designer", name: "Harishma D", bio: "Harishma is an Associate Designer at Design Asylum, helping businesses discover the value of great design and build strong partnerships." },
  { role: "Content Strategist", name: "Swathi Mohan", bio: "Swathi writes sharp, smart copy, sometimes poetic. Quick on her feet, she has a knack for making people feel heard." },
  { role: "Partner | Brand Strategist", name: "Mejo Kuriachan", bio: "Mejo puts the ‘Everything’ in brand, flow, video and motion — an engineer first, strategist and design manager next." },
  { role: "Lead Designer | Content Strategist", name: "Athira Krishnan", bio: "Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites." },
  { role: "Lead Designer", name: "Sanjana", bio: "With a strategic mind and diverse skills, Sanjana loves solving problems and aims to excel in B2B Cybersecurity design." },
];

// Ported verbatim from solution/sol-blocks.jsx `SolRelated`.
const RELATED: RelatedPost[] = [
  { title: "Will AI Replace Designers? An Honest 2026 Take", color: "var(--color-block-iris)" },
  { title: "B2b SaaS Web Design Agency", color: "var(--color-block-maroon)" },
  { title: "Ultimate B2B SaaS Website Guide", color: "var(--color-block-teal)" },
];

// The export's "Solutions" crumb was an unwired `href="#"`; no solutions-index
// page exists or is queued, so it stays a plain (non-link) crumb.
const CRUMB = [{ label: "Home", href: "/" }, { label: "Solutions" }, { label: "AI SaaS Website Design Agency" }];

// Ported from the export's ten AI-SaaS website teardowns (solution/sol-body.jsx).
const SITES: [string, string][] = [
  ["01 — 11x.ai", "Leads with a single, confident promise — digital workers that sell — and lets motion do the explaining. The hero shows the product working before it describes it."],
  ["02 — Jasper.ai", "Anchors everything in business outcomes for marketing teams, not model specs. Social proof and use-case tiles carry the weight a feature list usually would."],
  ["03 — HeyGen", "Sells the magic instantly: an avatar video plays in the hero, so the value is felt in two seconds. The copy stays short because the demo does the talking."],
  ["04 — Synthesia.io", "Enterprise-grade trust signals — logos, security, compliance — sit alongside an immediate product preview, balancing wonder with credibility."],
  ["05 — Copy.ai", "Organises around jobs-to-be-done (sales, marketing, ops) rather than the underlying LLM, making a horizontal tool feel specific to each buyer."],
  ["06 — Riverside.fm", "A creator-tool brand that wins on clarity and polish; the homepage is a guided tour from record to publish with zero jargon."],
  ["07 — Cohere.com", "Speaks fluently to two audiences at once — developers and enterprise buyers — with parallel paths that never dilute either message."],
  ["08 — Together.ai", "Developer-first and unapologetic about it: benchmarks, pricing, and docs are front and centre because that is what its buyer trusts."],
  ["09 — Scale.com", "Projects scale and seriousness through restraint — heavy whitespace, marquee logos, and outcome-led headlines aimed at large organisations."],
  ["10 — Gentrace", "A newer entrant that earns attention by naming a sharp problem (testing and evaluating LLM apps) and owning it cleanly, without over-claiming."],
];

/** Ported from solution/sol-*.jsx (`Solution - AI SaaS Website.html`). */
export default function AiSaasWebsiteSolutionPage() {
  return (
    <div className="svc-page">
      <RevealObserver />

      <header className="da-wrap svc-hero">
        <Breadcrumb trail={CRUMB} />
        <h1 className="sol-h1">AI SaaS Product Website Design Agency</h1>
        <p className="svc-hero-p">
          An AI SaaS product website design agency builds conversion-focused digital experiences
          that make complex AI capabilities accessible, helping prospects quickly grasp your
          product&rsquo;s value and move toward a buying decision.
        </p>
      </header>

      <section className="da-wrap sol-marquee">
        <MarqueeStrip label="AI SaaS Website Clients" />
      </section>

      <section className="da-wrap sol-callout">
        <div className="svc-callout reveal-up">
          <div className="svc-callout-tag">
            <span aria-hidden className="svc-callout-dot" />
            Question
          </div>
          <h2 className="svc-callout-q">How should AI SaaS companies approach website design differently?</h2>
          <p className="svc-callout-a">
            By leading with the outcome, not the technology. AI is complex and often misunderstood
            &mdash; your website needs to translate technical capabilities into business value your
            buyers immediately grasp. That means clear use cases, compelling demos, and messaging
            that focuses on what your AI does for the customer rather than how it works under the
            hood. Design Asylum builds AI SaaS websites that make cutting-edge technology feel
            accessible, trustworthy, and essential.
          </p>
        </div>
      </section>

      <div className="da-wrap bl-layout">
        <TableOfContents toc={TOC} />
        <article className="bl-body">
          <div className="bl-eyebrow">AI SaaS Website Design Experts</div>

          <P lead>
            Design Asylum&rsquo;s website agency consistently works with US-based AI SaaS product
            companies on their website design &mdash; SimpliContract, Cloudphysician, Mili,
            Entropik, Vecton, and Nimble Edge are a few among them.
          </P>

          <section id="sol-01" className="bl-sec">
            <h2 className="bl-h2">
              Top AI SaaS Product Websites: What Sets Them Apart in Web Design and User Experience
            </h2>
            <P>
              The best AI SaaS websites share one instinct: they lead with the outcome and treat the
              technology as proof, not pitch. Before studying the field, it helps to be clear on why
              the website carries so much weight in this category.
            </P>

            <Sub>The importance of a high-impact AI SaaS website</Sub>
            <P>
              For an AI product, the website is often the first and hardest test of whether the value
              lands. The buyer is curious but sceptical, the category is noisy, and the technology is
              easy to misunderstand. A high-impact site does a specific job:
            </P>
            <UL
              items={[
                "Translates a complex capability into a business outcome in one line.",
                "Shows the product working &mdash; demo, video, or interactive &mdash; before explaining it.",
                "Builds trust fast with proof, security, and recognisable customers.",
                "Gives both the buyer and the builder a clear path to act.",
              ]}
            />

            <P>With that lens, here is what the leading AI SaaS sites get right:</P>
            {SITES.map(([name, desc]) => (
              <div key={name}>
                <Sub>{name}</Sub>
                <P>{desc}</P>
              </div>
            ))}

            <Sub>Actionable recommendations for your AI SaaS website</Sub>
            <UL
              items={[
                "Open with the outcome your AI delivers, stated in your buyer&rsquo;s language.",
                "Put the product on screen early &mdash; show, then tell.",
                "Pick a primary audience per page; do not make developers and execs share one message.",
                "Earn trust with concrete proof, not adjectives.",
                "Make the next step obvious, whether that is a demo, a trial, or a quote.",
              ]}
            />
          </section>

          <section id="sol-02" className="bl-sec">
            <h2 className="bl-h2">
              The Distorted Role of Marketing in VC-Backed SaaS: Why Customer-First is the Key to
              Success
            </h2>
            <Sub>The problem with &lsquo;AI-first&rsquo; thinking</Sub>
            <P>
              Plenty of well-funded AI companies market the model instead of the customer.
              &lsquo;AI-first&rsquo; becomes a flex &mdash; parameter counts, architecture diagrams,
              benchmark tables &mdash; aimed at other engineers rather than the buyer who controls the
              budget. It impresses a narrow crowd and loses the rest.
            </P>

            <Sub>Why marketing should be customer-first</Sub>
            <P>
              The buyer does not care how the model works; they care what changes for them.
              Customer-first marketing starts from the job to be done, the risk being removed, and the
              outcome being bought &mdash; and uses the technology only as evidence that the outcome is
              real.
            </P>

            <Sub>The risk of misaligned messaging</Sub>
            <P>
              When the message is built for the lab and not the buyer, the cost is quiet but
              expensive: longer sales cycles, weaker conversion, and a brand that the market files
              under &lsquo;clever but unclear.&rsquo; The product may be excellent and still struggle
              to be chosen.
            </P>

            <Sub>Moving forward: a customer-first approach</Sub>
            <P>
              The fix is not to hide the technology &mdash; it is to sequence it. Lead with the
              outcome, prove it with a demo, reassure with trust, and reserve the technical depth for
              the page and the buyer who actually wants it. The same capability, framed for the
              customer, simply converts better.
            </P>

            <Sub>Final thoughts</Sub>
            <P>
              The AI companies that win the website are rarely the ones with the most impressive model
              on the homepage. They are the ones that make a complex technology feel accessible,
              trustworthy, and essential &mdash; which is exactly the brief Design Asylum builds
              against.
            </P>
          </section>
        </article>
      </div>

      <section id="sol-03" className="svc-cta-band">
        <div className="da-wrap svc-cta-inner">
          <h2 className="svc-cta-h">Get your website for an AI SaaS product.</h2>
          <Link className="svc-cta-btn" href="/contact">
            Connect with an AI SaaS product website expert at Design Asylum{" "}
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>

      <Portfolio
        heading="AI SaaS Websites"
        tabs={["Solution", "Service", "Industry"]}
        defaultTab="Solution"
        projects={PROJECTS}
        marquee={false}
      />
      <Faq heading="FAQs" items={FAQ} />
      <Experts
        heading={
          <>
            AI SaaS Website Design <span className="svc-experts-accent">Experts</span>
          </>
        }
        members={EXPERTS}
      />
      <Related heading="Related blogs" posts={RELATED} />
    </div>
  );
}
