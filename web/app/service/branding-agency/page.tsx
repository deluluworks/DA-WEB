import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";
import { Block, P, Sec, UL } from "@/components/svc-template/Prims";
import { TableOfContents, type TocEntry } from "@/components/svc-template/TableOfContents";
import { Portfolio, type PortfolioProject } from "@/components/svc-template/Portfolio";
import { Faq, type FaqEntry } from "@/components/svc-template/Faq";
import { Experts, type Expert } from "@/components/svc-template/Experts";
import { Related, type RelatedPost } from "@/components/svc-template/Related";
import { slugify } from "@/lib/slugify";

export const metadata: Metadata = {
  title: "Branding Agency",
  description:
    "A B2B branding agency that starts with diagnosis, positioning, and the words on the page — then builds the identity. Design Asylum.",
};

const TOC: TocEntry[] = [
  ["svc-01", "Everything You Need to Know About Choosing a B2B Branding Agency in India"],
  ["svc-02", "The Definitive Guide to B2B Branding Agencies"],
  ["svc-03", "The 2026 Buyer's Guide"],
  ["svc-04", "Top 10 B2B Branding Agencies in India — The Strategic Guide"],
  ["svc-05", "Best B2B Branding Agency Based on Your Needs"],
  ["svc-06", "How to Identify a B2B Branding Agency That Actually Delivers"],
  ["svc-07", "20 Critical Factors Every Decision-Maker Must Know"],
  ["svc-08", "The Ultimate Guide to Selecting B2B Branding Agencies in India"],
  ["svc-09", "How to Use These Resources"],
];

// Ported from service/svc-portfolio.jsx. Most project names match a tile on
// the /clients grid (see app/clients/page.tsx's `slugify`+`id` pairing) —
// linking there gives a real destination instead of the export's inert
// `href="#"`. Sevenloop gets its real (still-pending) client-hub route.
// "Fortuna Identity" has no unambiguous match on /clients (only "Fortuna
// Cysec" is listed, a distinct engagement) and stays decorative — same "no
// invented destination" policy as everywhere else in this migration.
const CLIENT_TILE_OVERRIDE: Record<string, string> = {
  "Good Food Movement — Akshaykalpa": "Good Food Movement",
  "ASPI & CIS Tech Diplomacy": "Aspi & CIS",
};
const NO_CLIENT_TILE = new Set(["Fortuna Identity"]);

function projectHref(name: string): string | undefined {
  if (name === "Sevenloop") return "/clients/sevenloop";
  if (NO_CLIENT_TILE.has(name)) return undefined;
  const tileName = CLIENT_TILE_OVERRIDE[name] ?? name;
  return `/clients#${slugify(tileName)}`;
}

const PROJECTS: PortfolioProject[] = (
  [
    ["Fortuna Cysec", "Brand strategy and website design for Fortuna Cysec, an AI-driven managed security services provider."],
    ["Lakshmigraha", "Brand identity for Lakshmigraha, a heritage gold and jewellery manufacturing business."],
    ["Swiffy Labs", "Branding and web design for Swiffy Labs, a product engineering and automation studio."],
    ["Tunnel", "Visual identity and messaging for Tunnel, a developer-tooling and infrastructure platform."],
    ["SimpliContract", "Brand and website design for SimpliContract, an enterprise contract lifecycle management platform."],
    ["Good Food Movement — Akshaykalpa", "Brand storytelling for Akshaykalpa, an organic dairy and good-food movement."],
    ["i3systems", "Branding for i3systems, an AI document-intelligence company for insurance and banking."],
    ["Fortuna Identity", "Identity system for Fortuna Identity, a digital identity and verification platform."],
    ["Founder's Cupid", "Brand and web design for Founder's Cupid, a co-founder matching platform for startups."],
    ["ASPI & CIS Tech Diplomacy", "Brand and report design for a tech-diplomacy initiative spanning policy and security."],
    ["Compport", "Branding and website for Compport, a compensation management SaaS platform."],
    ["IVY Homes", "Brand identity and website for IVY Homes, an instant home-buying real-estate platform."],
    ["Ximkart", "Brand and messaging for Ximkart, a custom-manufacturing sourcing platform for Indian factories."],
    ["Progcap", "Branding and web design for Progcap, an embedded-finance platform for retail supply chains."],
    ["Phronetic", "Identity and website for Phronetic, a spatial-computing and AR product company."],
    ["OneLern", "Brand and web design for OneLern, a K-12 learning and school-operations platform."],
    ["Sevenloop", "Brand identity and website design for Sevenloop, an end-to-end custom manufacturing solutions provider."],
    ["Adnaut", "Branding for Adnaut, a B2B advertising and demand-generation platform."],
    ["TLH", "Brand identity for TLH, an industrial logistics and heavy-haulage operator."],
    ["Alkemiz", "Branding and web design for Alkemiz, a specialty chemicals and materials company."],
    ["Lumora Security", "Brand strategy and identity for Lumora Security, an enterprise cybersecurity provider."],
    ["Expent", "Branding and website for Expent, a procurement and spend-management platform."],
    ["Xflow", "Brand and web design for Xflow, a cross-border payments and treasury platform."],
  ] as [string, string][]
).map(([name, desc]) => ({ name, desc, feat: name === "Sevenloop", href: projectHref(name) }));

const FAQ: FaqEntry[] = [
  {
    q: "What is B2B branding and why does it matter?",
    a: [
      {
        p: "B2B branding is the deliberate construction of belief &mdash; the positioning, narrative, and identity that decide what a buyer, an investor, or a hire thinks about you before they ever speak to your team. In long, committee-driven sales cycles, that pre-belief is what gets you shortlisted, shortens the conversation, and lets you command a premium. A weak brand forces your salespeople to explain who you are on every call; a strong one does that work before the call begins.",
      },
    ],
  },
  {
    q: "What should you look for when hiring a branding agency?",
    a: [
      {
        p: "Look for evidence of strategy, not just a gallery of logos. The agencies that deliver lead with diagnosis and positioning, write their clients&rsquo; copy, keep one core team on a project from kickoff to launch, and have genuine depth in your sector. The clearest signal of all is repeat clients &mdash; companies that came back for a second and third engagement because the first one worked.",
      },
    ],
  },
  {
    q: "How to evaluate a branding agency's portfolio?",
    a: [
      {
        p: "Read the case studies, don&rsquo;t just look at them. A portfolio that only shows finished artwork tells you the agency can make things look good; a portfolio that explains the problem, the strategic decision, and the result tells you the agency can think. Ask what the brief was, what changed for the business, and whether the client came back. Beautiful work attached to no story is a warning, not a credential.",
      },
    ],
  },
  {
    q: "Questions to ask a branding agency?",
    a: [
      {
        p: "Ask the questions that surface how they actually work: How do you diagnose our current positioning? Who writes the copy? Which people will be on our project, and do they stay for the whole engagement? How do you extend the brand across the website, deck, and film? Can we talk to a repeat client?",
      },
      { sub: "Bringing your A-team" },
      {
        p: "The single most important question is about continuity: will the senior people in the pitch be the ones doing the work, or will the project be handed to a junior team after you sign? At Design Asylum the same core team that builds the strategy designs the identity and ships the site &mdash; which is why the strategic thread never gets lost between phases. Insist on that continuity from any agency you hire.",
      },
    ],
  },
  {
    q: "How much does a B2B branding agency charge?",
    a: [
      { p: "Pricing tracks scope, depth of strategy, and the number of touchpoints the brand extends across. As a rough guide for the Indian market:" },
      {
        ul: [
          "<strong>Positioning &amp; messaging</strong> — roughly &#8377;4&ndash;10 lakh ($5K&ndash;$12K): diagnosis, positioning, and core narrative.",
          "<strong>Brand identity build</strong> — roughly &#8377;8&ndash;20 lakh ($10K&ndash;$25K): strategy plus logo, type, colour, and a full identity system.",
          "<strong>Brand + website + collateral</strong> — roughly &#8377;18&ndash;40 lakh+ ($22K&ndash;$50K+): the complete engagement, including a Webflow build, deck, and film.",
        ],
      },
      { p: "We scope every project against the outcome you need and quote a fixed engagement, so the number is clear before any work begins." },
    ],
  },
  {
    q: "What is brand identity and why does it matter?",
    a: [
      {
        p: "Brand identity is the visible, repeatable system &mdash; logo, typography, colour, motion, imagery, and the rules that hold them together &mdash; that makes your strategy recognisable everywhere it appears. It matters because consistency is credibility: a buyer who meets the same confident, coherent brand on your site, your deck, and your LinkedIn trusts you faster. Identity is not decoration; it is the carrier that lets the positioning travel.",
      },
    ],
  },
];

const EXPERTS: Expert[] = [
  { role: "Lead Designer", name: "Akhilesh J", bio: "Akhilesh, a graphic designer, is passionate about creating captivating designs that inspire and resonate with people." },
  { role: "Lead Designer | Content Strategist", name: "Athira Krishnan", bio: "Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites." },
  { role: "Co-Founder | Principal Designer", name: "Ekta Manchanda", bio: "Ekta, a design evangelist, has shaped many brands with her creative vision in retail, hospitality, and B2B spaces." },
  { role: "Partner | Brand Strategist", name: "Mejo Kuriachan", bio: "Mejo puts the ‘Everything’ in brand, flow, video and motion — an engineer first, strategist and design manager next." },
  { role: "Senior Brand Designer", name: "Neha Bhatnagar", bio: "Neha helps you level up brands with designs that not only look great but truly capture the essence of the business." },
  { role: "Lead Designer", name: "Sanjana", bio: "With a strategic mind and diverse skills, Sanjana loves solving problems and aims to excel in B2B Cybersecurity design." },
  { role: "Lead Strategist", name: "Sijeesh VB", bio: "Sijeesh is a creative strategist who blends UX, branding, and business to create impactful experiences." },
  { role: "Content Strategist", name: "Swathi Mohan", bio: "Swathi writes sharp, smart copy, sometimes poetic. Quick on her feet, she has a knack for making people feel heard." },
];

const RELATED: RelatedPost[] = [
  { title: "Top 10 Branding Agencies in Bangalore (2026 Shortlist)", color: "var(--color-block-iris)" },
  { title: "Top B2B Visual Identity Design Agencies in 2026", color: "var(--color-block-maroon)" },
  { title: "Fortuna Cysec: Cybersecurity Branding Case Study", color: "var(--color-block-teal)" },
  { title: "Branding agency for Y Combinator companies", color: "var(--color-block-iris)" },
  { title: "Swiffy Labs Branding and Web Design", color: "var(--color-block-maroon)" },
  { title: "Branding Process", color: "var(--color-block-teal)" },
];

/** Ported from service/svc-*.jsx (`Service - Branding Agency.html`). */
export default function BrandingAgencyServicePage() {
  return (
    <div className="svc-page">
      <RevealObserver />
      <header className="da-wrap svc-hero">
        <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "Branding Agency" }]} />
        <h1 className="svc-h1">Branding Agency</h1>
        <p className="svc-hero-p">
          A branding agency should answer one question first: what do you want a buyer, an
          investor, or a hire to believe about you before they meet you. Most agencies skip the
          question and go straight to logo exploration. Design Asylum starts where every B2B
          brand actually has to start &mdash; with diagnosis, positioning, and the words on the
          page &mdash; and only then builds the identity.
        </p>
        <div className="svc-hero-ctas">
          <Link href="/contact" className="svc-hero-cta-primary">
            Book a strategy call <span aria-hidden>&rarr;</span>
          </Link>
          <a href="#svc-04" className="svc-hero-cta-secondary">
            See our work <span aria-hidden>&darr;</span>
          </a>
        </div>
      </header>

      <div className="da-wrap bl-layout">
        <TableOfContents toc={TOC} />
        <article className="bl-body">
          <div className="bl-eyebrow">Branding Agency Experts</div>
          <P lead>
            A branding agency should answer one question first: what do you want a buyer, an
            investor, or a hire to believe about you before they meet you. Most agencies skip the
            question and go straight to logo exploration. Design Asylum starts where every B2B
            brand actually has to start &mdash; with diagnosis, positioning, and the words on the
            page &mdash; and only then builds the identity.
          </P>

          <Sec
            id="svc-01"
            title="Everything You Need to Know About Choosing a B2B Branding Agency in India"
            sub="Your complete reading guide — 7 in-depth resources for decision-makers"
          >
            <P>
              Choosing a branding partner is one of the highest-leverage decisions a B2B company
              makes, and one of the hardest to evaluate from the outside. The work is intangible
              until it ships, the vocabulary is unfamiliar, and every agency claims the same
              outcomes. This guide is built to fix that &mdash; a structured reading path that
              takes you from understanding what branding actually is to shortlisting the few
              agencies worth a conversation.
            </P>
            <P>
              Read it in order if you are starting cold, or jump to the resource that matches
              your stage. Each section below is self-contained, and the table of contents on the
              left tracks where you are.
            </P>
          </Sec>

          <Sec id="svc-02" title="The Definitive Guide to B2B Branding Agencies">
            <P>
              B2B branding is not a logo and a colour palette. It is the deliberate construction
              of belief in a market where the buyer is rational, the cycle is long, and the
              decision is made by a committee. A real branding agency works across three layers,
              in this order:
            </P>
            <UL
              items={[
                "<strong>Strategy</strong> — positioning, narrative, and the single idea that makes you the obvious choice for a specific buyer.",
                "<strong>Messaging</strong> — the words that carry that idea across the website, the deck, and the sales conversation.",
                "<strong>Identity</strong> — the logo, type, colour, motion, and system that make the strategy recognisable and repeatable.",
              ]}
            />
            <P>
              Agencies that lead with identity tend to produce work that looks good and changes
              nothing. The order matters because the identity is only as good as the idea it is
              dressing.
            </P>
          </Sec>

          <Sec id="svc-03" title="The 2026 Buyer's Guide">
            <P>
              The market has shifted. Buyers research in private, AI summarises your category
              before a human ever reads your homepage, and a generic brand is now actively
              penalised &mdash; it gets compressed into a list of interchangeable vendors. In
              2026, a brand earns its place by being legible to a machine and memorable to a
              person at the same time.
            </P>
            <P>
              When you brief an agency this year, press on three things: how they diagnose your
              current positioning, how they write (ask to read their copy, not see their logos),
              and how they think about the brand showing up across formats &mdash; site, film,
              deck, and search &mdash; as one coherent system rather than a set of assets.
            </P>
            <Block head="How much does a B2B branding agency cost, and how long does a brand build take?">
              <P>
                A focused positioning-and-identity engagement is a different number from a full
                brand-plus-website-plus-film build &mdash; cost tracks scope, depth of strategy,
                and the number of touchpoints we extend the brand across. A typical B2B brand
                build runs three to five months end to end: roughly two to three weeks of
                diagnosis and positioning, four to six weeks of identity and messaging, and the
                balance on the website and collateral. We scope every project against the outcome
                you need, then quote a fixed engagement so there are no surprises mid-build.
              </P>
            </Block>
          </Sec>

          <Sec id="svc-04" title="Top 10 B2B Branding Agencies in India — The Strategic Guide">
            <P>
              Rankings are a starting point, not a verdict. The right agency for a seed-stage
              cybersecurity startup is rarely the right agency for a forty-year-old manufacturing
              firm. Instead of a fixed top-ten, evaluate any shortlist against the work itself:
              depth in your sector, evidence of strategy (not just visuals), and clients who came
              back for a second and third project.
            </P>
            <P>
              Design Asylum&rsquo;s own portfolio runs across manufacturing, cybersecurity,
              fintech, SaaS, and deep tech &mdash; Sevenloop, Fortuna Cysec, Ximkart, Progcap, and
              others &mdash; with a pattern of long, compounding relationships rather than
              one-off rebrands. That repeat-engagement record is the signal worth looking for in
              any agency you consider.
            </P>
          </Sec>

          <Sec id="svc-05" title="Best B2B Branding Agency Based on Your Needs">
            <P>There is no single best agency &mdash; only the best fit for your situation. Match the partner to the problem:</P>
            <UL
              items={[
                "<strong>Repositioning a company that has outgrown its story</strong> — you need a strategy-led agency that writes well, not a studio that only designs.",
                "<strong>Launching a new brand from zero</strong> — you need a team that can build naming, narrative, identity, and a site as one engagement.",
                "<strong>A category nobody understands yet</strong> — you need an agency with the patience to learn your domain and the craft to make it legible.",
              ]}
            />
            <P>Be honest about which of these you are. The brief you write determines the partner you should pick.</P>
          </Sec>

          <Sec id="svc-06" title="How to Identify a B2B Branding Agency That Actually Delivers">
            <P>
              The reliable signals are the unglamorous ones. Look for an agency whose case
              studies explain the thinking, not just show the artwork. Look for repeat clients
              and referrals &mdash; the clearest proof a relationship worked. Look for a single
              team that carries a project from strategy through build, so the strategic thread
              never gets lost in a handoff.
            </P>
            <P>
              Be wary of the opposite: a portfolio of beautiful logos with no story attached, a
              pitch that opens with visual directions before anyone has diagnosed the problem,
              and a team that disappears behind account managers after the kickoff.
            </P>
          </Sec>

          <Sec id="svc-07" title="20 Critical Factors Every Decision-Maker Must Know">
            <P>Before you sign, run the engagement against a checklist. The factors that most often separate a brand that works from one that gathers dust:</P>
            <UL
              items={[
                "Strategy comes before identity &mdash; always.",
                "The same core team stays on from kickoff to launch.",
                "They write your copy, not just design your pages.",
                "They have genuine depth in your sector or category.",
                "The brand is built as a system, not a set of files.",
                "Pricing is fixed and scoped to a clear outcome.",
                "Repeat clients and referrals back up the pitch.",
                "They can extend the brand to film, deck, and search.",
              ]}
            />
            <P>
              The remaining factors &mdash; governance, asset handoff, motion guidelines,
              accessibility, SEO architecture, and ongoing support &mdash; matter just as much
              once the brand is live. Ask how each is handled before, not after, you commit.
            </P>
          </Sec>

          <Sec id="svc-08" title="The Ultimate Guide to Selecting B2B Branding Agencies in India">
            <P>
              Pull it together into a process. Write a brief that states the belief you want to
              create, not the deliverables you think you need. Shortlist three to five agencies
              on evidence of strategy and sector depth. Ask each to walk you through one project
              end to end &mdash; the diagnosis, the decision, the result. Read their writing.
              Talk to a repeat client.
            </P>
            <P>
              The agency that asks the sharpest questions about your business, rather than the
              one with the slickest deck, is almost always the right one. A branding engagement
              is a partnership measured in years, not a transaction measured in assets.
            </P>
          </Sec>

          <Sec id="svc-09" title="How to Use These Resources">
            <P>
              Start with the Definitive Guide if branding is new territory, or the 2026
              Buyer&rsquo;s Guide if you are briefing an agency this quarter. Use the 20 Critical
              Factors as a scorecard while you shortlist, and the Ultimate Guide to run your
              selection process. When you are ready to talk, bring the belief you want to build
              &mdash; we will start with the diagnosis.
            </P>
          </Sec>
        </article>
      </div>

      <Portfolio
        heading="Clients we did Branding for"
        tabs={["Solution", "Service", "Industry", "Branding Projects"]}
        projects={PROJECTS}
      />
      <Faq heading="FAQs" items={FAQ} />
      <Experts
        heading={
          <>
            Branding <span className="svc-experts-accent">Experts</span>
          </>
        }
        members={EXPERTS}
      />
      <Related heading="Related blogs" posts={RELATED} />
    </div>
  );
}
