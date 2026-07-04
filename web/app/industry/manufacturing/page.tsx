import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";
import { P, Sub } from "@/components/svc-template/Prims";
import { TableOfContents, type TocEntry } from "@/components/svc-template/TableOfContents";
import { MarqueeStrip } from "@/components/svc-template/MarqueeStrip";
import { Portfolio, type PortfolioProject } from "@/components/svc-template/Portfolio";
import { Faq, type FaqEntry } from "@/components/svc-template/Faq";
import { Experts, type Expert } from "@/components/svc-template/Experts";
import { Related, type RelatedPost } from "@/components/svc-template/Related";
import { slugify } from "@/lib/slugify";

export const metadata: Metadata = {
  title: "Design Agency for Manufacturing Firms",
  description:
    "A design agency for manufacturing firms builds branding and websites that highlight industrial expertise, driving online visibility and client engagement.",
};

// Ind-01/02 are body sections; ind-03 is the CTA band (matches the export's
// `IND_TOC` — its third entry scroll-spies onto the `svc-cta-band` section).
const TOC: TocEntry[] = [
  ["ind-01", "When Your Manufacturing Website Costs You $2M Orders"],
  ["ind-02", "Leading Agencies for Manufacturing Website Design"],
  ["ind-03", "Design your right to win"],
];

// Ported from industry/ind-blocks.jsx `IndPortfolio`. The export's cards were
// unwired `href="#"`; every one of these 8 manufacturing projects is a real
// tile on the /clients grid, so each links to its `/clients#<slug>` anchor
// (Sevenloop to its real client-hub route) — same "link to the nearest real
// destination" convention as the Service page's portfolio.
const REAL_HUB: Record<string, string> = { Sevenloop: "/clients/sevenloop" };
function projectHref(name: string): string {
  return REAL_HUB[name] ?? `/clients#${slugify(name)}`;
}

const PROJECTS: PortfolioProject[] = (
  [
    ["Ximkart", "Brand and messaging for Ximkart, a custom-manufacturing sourcing platform for Indian factories."],
    ["TurboTech", "Brand and website design for TurboTech, a precision engineering and automotive turbocharger solutions company."],
    ["GenRobotics", "Branding for GenRobotics, a robotics company building machines for hazardous industrial and sanitation work."],
    ["Sevenloop", "Brand identity and website design for Sevenloop, an end-to-end custom manufacturing solutions provider."],
    ["Ajax Engineering", "Brand and web design for Ajax Engineering, a manufacturer of self-loading concrete machinery."],
    ["Revind Ai", "Branding for Revind Ai, an AI platform for metals, manufacturing, and industrial procurement."],
    ["Lakshmigraha", "Brand identity for Lakshmigraha, a heritage gold and jewellery manufacturing business."],
    ["Ayr Energy", "Brand and website design for Ayr Energy, an industrial energy and clean-power solutions company."],
  ] as [string, string][]
).map(([name, desc]) => ({ name, desc, feat: name === "Sevenloop", href: projectHref(name) }));

// Ported verbatim from industry/ind-blocks.jsx `IndFAQ`.
const FAQ: FaqEntry[] = [
  {
    q: "How does digital branding help manufacturing companies attract new clients?",
    a: [
      {
        p: "Digital branding gives a manufacturing company a way to be chosen before the sales conversation begins. A clear position, confident messaging, and a website that loads credibility in seconds mean a procurement head shortlists you on capability rather than dismissing you on appearance. In a category where buyers compare suppliers in private and at speed, branding is what turns a search result into a serious enquiry.",
      },
    ],
  },
  {
    q: "Why manufacturing brands need good design to attract better clients and talent?",
    a: [
      {
        p: "Good design is not a finish coat &mdash; it is the difference between being treated as a commodity vendor and being trusted as a strategic partner. Here is what strong design actually does for an industrial brand:",
      },
      {
        ul: [
          "Makes complex capability legible to a non-technical buyer in seconds.",
          "Signals reliability &mdash; a precise brand implies a precise factory.",
          "Wins the shortlist when two suppliers are otherwise equal.",
          "Justifies a price premium instead of forcing a race to the bottom.",
          "Shortens the sales cycle by answering trust questions up front.",
          "Attracts better talent who want to work for a brand they respect.",
          "Travels across formats &mdash; site, deck, brochure, and film.",
          "Builds recall so you are remembered when the order is finally placed.",
          "Makes the company look as modern as its engineering already is.",
          "Gives the sales team a brand they are proud to put in front of clients.",
        ],
      },
      { sub: "Conclusion" },
      {
        p: "Manufacturing brands that invest in design do not just look better &mdash; they sell better, hire better, and command more. The factory earns the capability; the brand makes sure the right people believe it.",
      },
    ],
  },
];

// Ported verbatim from industry/ind-blocks.jsx `IndExperts`.
const EXPERTS: Expert[] = [
  { role: "Partner | Brand Strategist", name: "Mejo Kuriachan", bio: "Mejo puts the ‘Everything’ in brand, flow, video and motion — an engineer first, strategist and design manager next." },
  { role: "Lead Designer", name: "Sanjana", bio: "With a strategic mind and diverse skills, Sanjana loves solving problems and aims to excel in B2B Cybersecurity design." },
  { role: "Lead Strategist", name: "Sijeesh VB", bio: "Sijeesh is a creative strategist who blends UX, branding, and business to create impactful experiences." },
  { role: "Lead Brand Designer | Illustrator", name: "Tanmaya Rao", bio: "A b2b brand designer, she has worked wonders for many SaaS and B2B companies with her vision and expert skills." },
];

// Ported verbatim from industry/ind-blocks.jsx `IndRelated`.
const RELATED: RelatedPost[] = [
  { title: "Brand Design for B2B: Scope, Process, and 2026 Examples", color: "var(--color-block-iris)" },
  { title: "Best B2B Website Agency in Bangalore for 2026", color: "var(--color-block-maroon)" },
  { title: "B2B Website Agency FAQs: Timelines, Pricing, Process", color: "var(--color-block-teal)" },
  { title: "How to Choose a Web Design Agency in India (2026)", color: "var(--color-block-iris)" },
  { title: "What Is Rebranding? A B2B Founder’s 2026 Guide", color: "var(--color-block-maroon)" },
];

// The export's breadcrumb "Industries" crumb was an unwired `href="#"`; no
// industries-index page exists or is queued, so it stays a plain (non-link)
// crumb — same call as the Author page's "Authors" crumb, minus a nearest
// substitute since there isn't one here.
const CRUMB = [{ label: "Home", href: "/" }, { label: "Industries" }, { label: "Manufacturing" }];

/** Ported from industry/ind-*.jsx (`Industry - Manufacturing.html`). */
export default function ManufacturingIndustryPage() {
  return (
    <div className="svc-page">
      <RevealObserver />

      <header className="da-wrap svc-hero">
        <Breadcrumb trail={CRUMB} />
        <h1 className="ind-h1">Design Agency for Manufacturing Firms &mdash; Branding, Website</h1>
        <p className="svc-hero-p">
          A design agency for manufacturing firms builds branding and websites that highlight
          industrial expertise, driving online visibility and client engagement.
        </p>
      </header>

      <section className="da-wrap ind-marquee">
        <MarqueeStrip label="Clients from Manufacturing Industry" />
      </section>

      <div className="da-wrap bl-layout">
        <TableOfContents toc={TOC} />
        <article className="bl-body">
          <div className="bl-eyebrow">Manufacturing Design Experts</div>

          <P lead>
            A design agency for manufacturing firms builds branding and websites that highlight
            industrial expertise, driving online visibility and client engagement &mdash; turning
            decades of engineering credibility into something a buyer can feel in the first ten
            seconds.
          </P>

          <P>
            A design agency for manufacturing firms focuses on creating branding and digital
            experiences that make industrial capability legible to the people who buy it &mdash;
            procurement heads, plant managers, and innovation officers who decide on six- and
            seven-figure orders. The work is rarely about looking modern for its own sake; it is
            about closing the gap between how good the manufacturing is and how good it looks from
            the outside.
          </P>
          <P>
            In the competitive manufacturing industry, good design is essential rather than
            decorative. When two suppliers can both do the job, the one that communicates with
            clarity, confidence, and a point of view wins the shortlist &mdash; and very often the
            order.
          </P>

          <section id="ind-01" className="bl-sec">
            <h2 className="bl-h2">When Your Manufacturing Website Costs You $2M Orders</h2>
            <P>
              Picture a procurement head with a $2M order to place. They have three suppliers, all
              technically capable. They open the first website on their phone between meetings.
              Within seconds, the site has either earned a conversation or lost one &mdash; and most
              manufacturing websites lose it before a single specification is read.
            </P>

            <Sub>The hospitality principle</Sub>
            <P>
              Think about how a great hotel makes you feel before you have unpacked. The lighting,
              the welcome, the quiet confidence that you are in capable hands &mdash; none of it is
              the product, and all of it shapes whether you trust the product. A manufacturing brand
              works the same way. The feeling a buyer gets on the homepage is the brief; the
              specifications are the proof that follows.
            </P>

            <Sub>Fluorescent lights and plastic chairs</Sub>
            <P>
              Most industrial websites are the digital equivalent of a waiting room with fluorescent
              lights and plastic chairs: functional, honest, and completely forgettable. Grey
              gradients, stock photos of gears, a wall of certifications, and a contact form. It says
              &ldquo;we exist&rdquo; when it needs to say &ldquo;you are in the right place.&rdquo;
            </P>

            <Sub>What can be changed?</Sub>
            <P>
              Almost everything that matters is within reach: a sharp position that names who you are
              best for, copy that speaks to the buyer&rsquo;s risk rather than your machinery,
              photography that shows the work with intent, and a structure that moves a serious buyer
              from interest to a quote without friction. None of it requires inventing new
              capabilities &mdash; only translating the ones you already have.
            </P>

            <Sub>The feeling is non-negotiable</Sub>
            <P>
              You can argue about layout and palette, but the feeling is non-negotiable. A buyer
              placing a large, high-consequence order needs to feel that you are the safe, capable,
              obvious choice. Every design decision either builds that feeling or leaks it. The
              agencies worth hiring treat that feeling as the deliverable.
            </P>
          </section>

          <section id="ind-02" className="bl-sec">
            <h2 className="bl-h2">Leading Agencies for Manufacturing Website Design</h2>
            <P>
              If you are building a shortlist, several agencies do credible work in the manufacturing
              and industrial space. A representative set, with what each is known for:
            </P>
            {(
              [
                ["Duck.Design", "Subscription-model design studio offering unlimited requests for product and marketing teams."],
                ["DBS Interactive", "Full-service digital agency with a strong base in manufacturing and industrial web builds."],
                ["Invoidea", "Web design and development shop serving industrial and B2B clients at volume."],
                ["Lform Design", "New-Jersey studio specialising in B2B and manufacturing website design."],
                ["Orbit Media", "Chicago agency known for content-led, conversion-focused B2B websites."],
                ["Digital Silk", "Brand-and-growth agency building enterprise sites for industrial manufacturers."],
                ["WebFX", "Performance-marketing agency with a large manufacturing web and SEO practice."],
                ["Bop Design", "B2B-only branding and web design firm focused on industrial and tech sectors."],
                ["Blend", "B2B brand and demand agency working across complex manufacturing categories."],
              ] as [string, string][]
            ).map(([name, desc]) => (
              <div key={name}>
                <Sub>{name}</Sub>
                <P>{desc}</P>
              </div>
            ))}

            <Sub>Cerrion: branding &amp; website analysis</Sub>
            <P>
              Take an AI-for-manufacturing company like Cerrion as a worked example. The technology
              &mdash; computer vision that watches production lines and flags faults before they
              cascade &mdash; is genuinely advanced, but the first job of the brand is to make that
              value obvious to a plant manager in one line, not three paragraphs of model
              architecture.
            </P>
            <P>
              A strong site would lead with the outcome (less downtime, fewer defects), prove it with
              a concrete before/after, and only then open the hood for the technical buyer who wants
              depth. The mistake most analyses surface is the same one: the homepage explains how the
              AI works before it establishes why anyone on the factory floor should care.
            </P>
            <P>
              Design Asylum specialises in B2B branding and websites that bridge exactly this gap
              &mdash; old-world manufacturing meeting modern, AI-driven engineering &mdash; making
              complex industrial capability feel trustworthy, premium, and easy to buy.
            </P>
          </section>
        </article>
      </div>

      <section id="ind-03" className="svc-cta-band">
        <div className="da-wrap svc-cta-inner">
          <h2 className="svc-cta-h">Design your right to win.</h2>
          <Link className="svc-cta-btn" href="/contact">
            Book a strategy call with Design Asylum <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>

      <Portfolio
        heading="Design Projects in Manufacturing Industry"
        tabs={["Solution", "Service", "Industry"]}
        projects={PROJECTS}
        marquee={false}
      />
      <Faq heading="FAQs" items={FAQ} />
      <Experts
        heading={
          <>
            Manufacturing <span className="svc-experts-accent">Design Experts</span>
          </>
        }
        members={EXPERTS}
      />
      <Related heading="Related blogs" posts={RELATED} />
    </div>
  );
}
