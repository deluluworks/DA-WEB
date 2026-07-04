import { Eyebrow } from "@/components/ds/Eyebrow";

const QUESTIONS: [string, string][] = [
  [
    "What does Design Asylum do?",
    "We build brand strategy, identity and digital for ambitious B2B companies, positioning, naming, visual identity, websites, film and campaigns. The kind of brand work that changes how the market reads you.",
  ],
  [
    "What kind of companies do you work with?",
    "Mostly deeptech, fintech and enterprise SaaS, companies with something genuinely interesting to say and a low tolerance for boring. Series A through to public.",
  ],
  [
    "How does your branding process work?",
    "A structured run: discovery and positioning, then identity, then digital and rollout. You always know what stage you’re in and what comes next. No mystery, no theatre.",
  ],
  [
    "How much does a B2B branding project cost?",
    "Projects start around £15k for focused work and scale from there with scope. We’ll give you a fixed number before anything starts.",
  ],
  [
    "Where are you, and do you work internationally?",
    "We’re a studio that works wherever the brief is. Remote-first, async-friendly, and used to working across time zones.",
  ],
  [
    "Why does branding matter for B2B?",
    "Because B2B buyers are still people. Clarity, confidence and a point of view shorten sales cycles, attract better talent and make investors lean in.",
  ],
  [
    "When should a startup invest in branding?",
    "When the story has outgrown the slide deck, usually around a raise, a pivot, or a new category you’re trying to own.",
  ],
  [
    "What’s the difference between a refresh and a full rebrand?",
    "A refresh sharpens what already works. A rebrand rebuilds positioning, name and identity from the ground up. We’ll tell you honestly which one you need.",
  ],
  [
    "How do you measure the ROI of branding?",
    "Against the things branding actually moves: pipeline quality, conversion, talent, raise outcomes. We agree what we’re watching before we start.",
  ],
  [
    "How long does a typical project take?",
    "A focused identity runs 6–10 weeks. A full brand-and-website build runs 3–5 months. We’ll map dates against your milestones up front.",
  ],
  [
    "Do you build websites, or just brand?",
    "Both. We design and build in Webflow and beyond, so the brand doesn’t fall apart the moment it hits the web.",
  ],
  [
    "Can you help with video and motion?",
    "Yes, live-action film, animation and Lottie. Same studio, same standard, no handoff gaps.",
  ],
  [
    "What makes you different from other B2B agencies?",
    "We work as a consultant, not a vendor. We take ownership of the problem, not just the brief. And we refuse to make boring things.",
  ],
  [
    "How do I get started?",
    "Book a call. Tell us what you’re building. We’ll reply within a day.",
  ],
];

/** Ported from da/sections-4.jsx `DAFaq`. */
export function Faq() {
  return (
    <section className="da-faq-section">
      <div className="da-wrap da-faq-grid">
        <div className="da-faq-intro">
          <Eyebrow>FAQ</Eyebrow>
          <h2>Common questions</h2>
          <a href="/contact" className="da-faq-cta">
            Book a strategy session <span aria-hidden>&rarr;</span>
          </a>
        </div>
        <div>
          {QUESTIONS.map(([q, a], i) => (
            <details key={i} className="da-faq" open={i === 0}>
              <summary>
                <span className="da-faq-q">{q}</span>
                <span className="da-faq-plus" aria-hidden>
                  +
                </span>
              </summary>
              <p className="da-faq-a">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
