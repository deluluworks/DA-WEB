import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { RevealObserver } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about B2B branding, web design, video and motion — Design Asylum.",
};

// Ported from footer/faq-index.jsx. The export's own comment notes this is a
// "representative cross-cluster set (the live index holds ~100; structure is
// identical)" — each item's `#/faq/{slug}` target is a per-question detail
// page that doesn't exist in this export (only one such page is queued in
// SITE-PROGRESS.md, `/faq/corporate-rebrand-expert`, and its slug isn't in
// this sample), so "Read the full answer" renders as static/decorative
// rather than a fabricated link — same "no invented destination" policy as
// the Author page's project cards and the Updates archive rows.
const FAQ: [string, string][] = [
  [
    "How should a defense-tech startup approach branding for procurement and investors?",
    "Lead with credibility and clarity. Procurement officers need proof of capability and compliance; investors need a story about the market. A defense-tech brand has to carry both audiences without diluting either — so we separate the messaging into parallel paths that share one confident identity.",
  ],
  [
    "What does branding look like for an aerospace and defense manufacturer?",
    "Restraint and seriousness. The brand has to read as precise as the engineering — heavy whitespace, disciplined type, and proof-led messaging that respects a technical, risk-averse buyer.",
  ],
  [
    "How do you brand a legal or compliance professional-services firm?",
    "Trust is the entire product. The work is to make a firm feel authoritative and current at once — a brand that signals rigor to a cautious buyer while still looking like it belongs in 2026.",
  ],
  [
    "What makes a good B2B explainer-video agency?",
    "One that starts with the message, not the motion. The script and the strategic point come first; the animation exists to make a complex value proposition land in ninety seconds.",
  ],
  [
    "How should a fintech company approach explainer videos?",
    "Lead with the outcome and the trust signal. Fintech buyers are evaluating risk as much as product, so the video has to feel as secure and credible as it is clear.",
  ],
  [
    "What should a cybersecurity explainer video communicate?",
    "The threat, the relief, and the proof — fast. A cybersecurity buyer needs to feel the risk you remove before they care how you remove it.",
  ],
  [
    "How do you make an explainer video for a proptech platform?",
    "Show the workflow it replaces. Proptech often digitises a messy, manual process, so the video earns its keep by making the before-and-after obvious.",
  ],
  [
    "What does an energy-sector explainer video need?",
    "Scale and seriousness. Energy buyers think in decades and megawatts — the film has to match that ambition while keeping the value plain.",
  ],
  [
    "When does a B2B company need 3D design or animation?",
    "When the product is invisible or complex — hardware, infrastructure, molecules, or software with no obvious physical form. 3D makes the intangible tangible and memorable.",
  ],
  [
    "How do you handle branding for a multilingual or global audience?",
    "Design the system to flex. A global brand needs a visual and verbal identity that survives translation — tested across languages so the meaning, not just the words, carries.",
  ],
  [
    "How much does a B2B branding project cost?",
    "It tracks scope and depth of strategy. A focused positioning engagement, a full identity build, and a brand-plus-website-plus-film project sit in three different ranges — we scope each against the outcome and quote a fixed engagement.",
  ],
  [
    "How long does a B2B website redesign take?",
    "Typically 10–16 weeks end to end for a comprehensive build, or 6–8 weeks for a focused, single-template sprint.",
  ],
  [
    "What is the difference between branding and a brand refresh?",
    "A refresh sharpens what already works — messaging, type, and a few touchpoints — without throwing out hard-won recognition. Full branding rebuilds the position and identity from the strategy up.",
  ],
  [
    "How do you write messaging for a deep-tech company?",
    "Translate, do not simplify. The job is to make a genuinely advanced capability legible to a buyer without losing the depth the technical evaluator is checking for.",
  ],
  [
    "What should a SaaS rebrand prioritise?",
    "Positioning before pixels. Most SaaS rebrands fail because they restyle without resolving who the product is for and what it stands against — fix that first.",
  ],
  [
    "How do you brand a venture-capital or investment firm?",
    "Signal judgment and access. A VC brand sells trust to founders and LPs alike — it has to feel discerning, confident, and unmistakably itself.",
  ],
  [
    "What makes a strong manufacturing website?",
    "A site that makes industrial capability feel premium and easy to buy — leading with the outcome a procurement head wants, then proving it with the specs.",
  ],
  [
    "How do you approach branding for a climate-tech startup?",
    "Pair urgency with rigor. Climate-tech brands win by being credible and commercial, not just idealistic — the science has to feel investable.",
  ],
  [
    "What does a healthcare-tech brand need to get right?",
    "Trust, clarity, and humanity. The brand has to reassure a risk-averse buyer while staying warm enough for the people the product ultimately serves.",
  ],
  [
    "How do you design a brochure for enterprise sales?",
    "Build it for the room it lives in. An enterprise brochure is a sales tool — it has to open a conversation and survive being forwarded to a committee.",
  ],
  [
    "When should a startup invest in a brand film?",
    "When the story is bigger than the homepage can hold. A brand film earns its cost by making people feel the mission, not just read it.",
  ],
  [
    "How do you choose between a freelancer, a boutique, and a large agency?",
    "Match the partner to the stakes. Boutiques give you senior continuity from strategy to launch; large agencies give scale but often a junior bench; freelancers give speed on a narrow slice.",
  ],
  [
    "What is B2B brand positioning, really?",
    "The single belief you want a buyer to hold before they meet you. Positioning is a courage problem more than a creative one — it means choosing who you are best for, and who you are not.",
  ],
  [
    "How do you measure the impact of a rebrand?",
    "Watch what changes in the sales room — how conversations start, how fast trust is established, and how little has to be explained. That is the real scoreboard.",
  ],
];

/** Ported from footer/faq-index.jsx (`FAQ - Index.html`). */
export default function FaqPage() {
  return (
    <div className="fq-page da-wrap">
      <RevealObserver />
      <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />

      <header className="fq-header reveal-up">
        <Eyebrow>Frequently asked</Eyebrow>
        <h1 className="fq-h1">FAQs</h1>
        <p className="fq-intro">
          Every question we get about B2B branding, web design, video and motion &mdash; each one
          also lives on its own page.
        </p>
      </header>

      <section className="fq-list reveal-up">
        {FAQ.map(([q, a], i) => (
          <details key={q} className="da-faq" open={i === 0}>
            <summary>
              <span className="da-faq-q">{q}</span>
              <span className="da-faq-plus" aria-hidden>
                +
              </span>
            </summary>
            <p className="da-faq-a">{a}</p>
          </details>
        ))}
      </section>

      <div className="fq-closing">
        <p className="fq-closing-h2 reveal-up">Got a question we didn&rsquo;t cover?</p>
        <div className="fq-closing-links">
          <Link href="/contact" className="fq-closing-cta">
            Book an intro <span aria-hidden>&rarr;</span>
          </Link>
          <Link href="/team" className="fq-closing-secondary">
            Meet the team who&rsquo;ll answer it <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
