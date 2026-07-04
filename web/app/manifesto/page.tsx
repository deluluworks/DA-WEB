import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "Why we exist. The belief statement of Design Asylum — a B2B branding studio that refuses to play it safe.",
};

const PARAGRAPHS: { text: string; className?: string }[] = [
  {
    className: "mf-lead",
    text: "We are Design Asylum, and we’re not here to play it safe. Safe never built something remarkable.",
  },
  {
    text: "Safe is the slow death of every brand that ever had a real idea and then sanded it down until nobody could object and nobody could be moved. We started this studio because we were tired of watching genuinely interesting companies — companies solving hard, important, expensive problems — show up to the market looking like everyone else, sounding like everyone else, quietly apologising for taking up space. That is the one thing we refuse to do, and the one thing we refuse to let our clients do.",
  },
  {
    text: "So we push. Not for the sake of noise, but because the brief is almost never the real problem — the real problem is usually hiding underneath it, and you only find it if you’re willing to walk past the comfortable answer. We push past the first idea, the obvious palette, the template that would have been perfectly fine. Fine is not why anyone hires us. We are here to make work the right people remember, repeat, and reach for the chequebook over.",
  },
  {
    text: "Most agencies sell you safety dressed up as strategy. They’ll tell you what tested well, what the category already does, what won’t get anyone in the room fired. We think that is the most expensive advice in the world — because a brand built to avoid losing will never be built to win. Winning needs a point of view, and a point of view, by definition, is something not everyone will agree with.",
  },
  { className: "mf-emph", text: "Difference is not our garnish. It is our method." },
  {
    text: "We are strategists, designers, copywriters, developers and motion artists, and we sit in the same room and argue about the same problem from five directions at once. A strategist who can’t write loses the argument to a writer who can’t design; a developer who only thinks in components misses the story a motion artist can see in a single frame. None of this works as a relay race — strategy handing to design handing to build, each pass quietly diluting the last. We work as one team, on one problem, accountable to one outcome, so the idea that survives the first conversation is the same idea that ships.",
  },
  { className: "mf-emph", text: "We take ownership. Period." },
  {
    text: "We don’t hide behind process when something slips, and we don’t disappear when the work gets hard. When we falter, we communicate, we adapt, and we fix it — because accountability is the foundation of trust, and trust is the only currency that compounds. A brand is a promise. An agency that can’t keep its own has no business making yours.",
  },
  {
    text: "Risk, to us, is not the thing to be managed away — risk is the opportunity wearing a disguise. Every brand we’re proud of started with a decision that felt slightly too bold in the room and obviously right twelve months later. We would rather make that decision with you than watch a competitor make it first. The cost of looking like everyone else is invisible right up until the day it isn’t, and by then it is usually too late to be early.",
  },
  {
    text: "And we are never finished learning. The tools change, the channels change, the way a buyer decides changes — so we change with them, upskilling relentlessly, staying uncomfortable on purpose, because the studio that stops learning simply starts repeating itself, and repetition is only safe wearing a fresh coat of paint.",
  },
  {
    text: "This is the work: to reimagine what a B2B brand is allowed to be, to disrupt a category that has been beige for far too long, and to give serious companies a way to be taken seriously without ever being boring. We are Design Asylum. We exist to design B2B businesses their right to win — and we intend to keep earning it, brief after brief, in plain sight.",
  },
];

/**
 * Ported from manifesto/manifesto.jsx. H1 is the verbatim CMS mislabel
 * noted in the source comment — this page also serves the footer's
 * "Our terms" link.
 */
export default function ManifestoPage() {
  return (
    <div className="da-wrap mf-page">
      <RevealObserver />
      <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Manifesto" }]} />

      <header className="mf-wrap mf-header">
        <h1 className="mf-h1 reveal-up">*Terms and Conditions</h1>
      </header>

      <section className="mf-wrap mf-body">
        {PARAGRAPHS.map((p, i) => (
          <p key={i} className={`reveal-up ${p.className || "mf-p"}`}>
            {p.text}
          </p>
        ))}
        <p className="reveal-up mf-p mf-links">
          This is the belief statement. See it show up in{" "}
          <Link href="/clients">the work</Link>, or{" "}
          <Link href="/contact">talk to us</Link> about yours.
        </p>
      </section>
    </div>
  );
}
