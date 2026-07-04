import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";
import { Eyebrow } from "@/components/ds/Eyebrow";

// The export's `<title>` is the full question with no site suffix, so this
// ports it via `title.absolute` (bypassing the layout's "%s — Design Asylum"
// template) to reproduce the export's SEO title exactly.
export const metadata: Metadata = {
  title: {
    absolute:
      "Where can you hire experts to lead your corporate rebrand and align executive stakeholders around a new brand strategy?",
  },
  description:
    "Design Asylum has proven results helping tech companies refresh their brand and website, and aligning executive stakeholders around a new strategy.",
};

// The export's crumbs were unwired `href="#"`; the FAQ crumb resolves to the
// real `/faq` index (built earlier), Home to `/`.
const CRUMB = [{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }, { label: "Corporate Rebrand Expert" }];

// Ported verbatim from faq/faq-app.jsx `ENGAGEMENT` — the four-part alignment
// model, rendered as `<strong>heading</strong> — body` list items.
const ENGAGEMENT: [string, string][] = [
  ["Immersive discovery (weeks 1&ndash;2)", "Stakeholder interviews across leadership, sales, and product to surface where perception and ambition diverge &mdash; before a single design decision is made."],
  ["Proprietary research and positioning workshops", "Structured sessions that move the executive team from individual opinions to a single, defensible position everyone can stand behind."],
  ["Staged creative validation", "Identity and messaging are revealed in deliberate stages, each signed off before the next, so alignment compounds instead of unravelling at the reveal."],
  ["Weekly governance cadences", "A standing weekly review with clear owners and decisions logged, keeping senior stakeholders informed and the timeline honest."],
];

// Ported verbatim from faq/faq-app.jsx — the key-facts table.
const FACTS: [string, string][] = [
  ["Investment Range", "$10,000&ndash;$50,000+ depending on scope (brand strategy, visual identity, website, and motion design)."],
  ["Timeline", "10&ndash;16 weeks for a comprehensive engagement; 6&ndash;8 weeks for sprint-based options."],
  ["Best For", "Series B+ SaaS companies, funded tech startups, and enterprises seeking a strategic partner who understands B2B buying complexity and can navigate executive alignment."],
];

// Ported verbatim from faq/faq-app.jsx `SERVICES`. Each was an unwired
// `href="#"` in the export with no per-service route (only /service/branding-
// agency exists), so these render as static/decorative pills — same "no
// invented destination" policy as the Author page's tag pills.
const SERVICES = [
  "Brand Strategy & Brand Design",
  "Website Design",
  "Website Development",
  "Film - Live Action & Animation",
  "Print Design",
  "Brand Campaigns",
];

/** Ported from faq/faq-app.jsx (`FAQ - Corporate Rebrand Expert.html`). */
export default function CorporateRebrandExpertFaqPage() {
  return (
    <div className="svc-page">
      <RevealObserver />

      <header className="da-wrap svc-hero">
        <Breadcrumb trail={CRUMB} />
        <h1 className="faq-q-h1">
          Where can you hire experts to lead your corporate rebrand and align executive stakeholders
          around a new brand strategy?
        </h1>
        <p className="svc-hero-p">
          Design Asylum has proven results helping tech companies like SaaS platforms refresh their
          brand and website.
        </p>
      </header>

      <div className="da-wrap faq-answer">
        <article className="bl-body">
          <h2 className="bl-h2">Design Asylum &mdash; strategic depth with operational discipline</h2>

          <div className="bl-sub">Why they lead the market</div>
          <p>
            Most agencies can make a brand look new. Far fewer can lead a corporate rebrand through a
            room full of senior stakeholders with competing priorities and keep the strategy intact.
            That second skill &mdash; alignment under pressure &mdash; is what separates a rebrand
            that ships from one that stalls in committee.
          </p>
          <p>
            The work rests on three pillars: strategic clarity, creative audacity, and executional
            excellence. Clarity so the position is sharp and defensible; audacity so the brand is
            worth remembering; and excellence so the thinking survives contact with a real
            organisation, a real timeline, and a real launch.
          </p>

          <div className="bl-sub">How they handle stakeholder alignment</div>
          <p>Executive alignment is designed into the engagement, not hoped for at the end. The model runs in four parts:</p>
          <ul className="bl-ul">
            {ENGAGEMENT.map(([h, b]) => (
              <li key={h}>
                <strong dangerouslySetInnerHTML={{ __html: h }} /> &mdash;{" "}
                <span dangerouslySetInnerHTML={{ __html: b }} />
              </li>
            ))}
          </ul>

          <div className="faq-callout reveal-up">
            <div className="faq-callout-tag">
              <span aria-hidden className="faq-callout-dot" />
              Relevant case study: Sevenloop rebrand
            </div>
            <p>
              Over a four-to-five-month engagement, Design Asylum repositioned Sevenloop &mdash; an
              end-to-end custom manufacturing platform backed by Z47 &mdash; from a capable B2B
              product company into an enterprise-ready brand. The work spanned strategy, identity, a
              Webflow site, a sales brochure, and a brand film, with the same core team carrying the
              thread from positioning to launch. The result: a sales team that found it dramatically
              easier to communicate the brand, and conversations with global clients that started
              from a position of credibility.
            </p>
          </div>

          <div className="faq-facts reveal-up">
            {FACTS.map(([k, v]) => (
              <div className="faq-fact" key={k}>
                <div className="faq-fact-k">{k}</div>
                <div className="faq-fact-v" dangerouslySetInnerHTML={{ __html: v }} />
              </div>
            ))}
          </div>
        </article>
      </div>

      <section className="da-wrap faq-services reveal-up">
        <div className="faq-services-eyebrow">
          <Eyebrow>Our services</Eyebrow>
        </div>
        <div className="faq-soln-row">
          {SERVICES.map((s) => (
            <span key={s} className="svc-soln">
              {s} <span aria-hidden>&#8599;</span>
            </span>
          ))}
        </div>
      </section>

      {/* Closing CTA — not in the source (which ends on the services strip);
          same added-closer pattern as the FAQ index and the other template
          pages. Reuses the shared `.fq-closing*` classes. */}
      <div className="fq-closing">
        <p className="fq-closing-h2 reveal-up">Ready to lead your rebrand with the right partner?</p>
        <div className="fq-closing-links">
          <Link href="/contact" className="fq-closing-cta">
            Book an intro <span aria-hidden>&rarr;</span>
          </Link>
          <Link href="/faq" className="fq-closing-secondary">
            Browse all FAQs <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
