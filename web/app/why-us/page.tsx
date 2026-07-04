import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Why Us?",
  description: "If you are on the hunt for a team to build your B2B website, here is our take.",
};

const CHECKLIST = [
  "what process they follow",
  "what solutions they provide",
  "the kind of clients they've worked with",
  "what it would be like working with them",
  "what the leadership is like",
  "past projects",
  "will they run away in the middle of the project",
  "testimonials",
  "pricing",
  "even location",
];

const WEAKNESSES = [
  "made without thinking about your brand positioning",
  "difficult to navigate and understand",
  "loaded with generic, meaningless content",
  "overloaded with technical jargon",
  "confusing and unclear in their messaging",
  "lacking essential information",
  "overwhelming with too much content!!!",
];

/** Ported from footer/why-us.jsx — a single-column prose "sales letter". */
export default function WhyUsPage() {
  return (
    <div className="da-wrap wu-page">
      <RevealObserver />
      <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Why Us" }]} />

      <div className="pr-col wu-body">
        <h1 className="wu-h1 reveal-up">
          If you&rsquo;re reading this, you are on the hunt for a team who can help you get a B2B
          website.
        </h1>

        <div style={{ marginTop: 44 }}>
          <p className="pr-strong reveal-up">
            right now, you&rsquo;re probably comparing us against 3 other agencies. and while you
            do, you&rsquo;re quietly checking a long list of things:
          </p>
          <ul className="pr-ul reveal-up">
            {CHECKLIST.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="reveal-up">
            you want to make sure you pick the best option. it&rsquo;s a big decision, a real
            investment, and you don&rsquo;t want to lose your sleep over this.
          </p>
          <p className="pr-strong reveal-up">
            here&rsquo;s the thing — this is similar to the journey your potential customer will
            also go through when they land on your website. they&rsquo;re evaluating, comparing,
            deciding. the website is where that decision gets made or lost.
          </p>
        </div>

        <p className="pr-promise reveal-up">
          We create websites that don&rsquo;t confuse the visitors. That&rsquo;s our promise.
        </p>

        <p className="pr-strong reveal-up">the hard truth is, most websites are:</p>
        <ul className="pr-ul reveal-up">
          {WEAKNESSES.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <p className="reveal-up">
          you might have given this a shot with your busy internal team already — and it
          half-worked, or stalled, or shipped something nobody&rsquo;s proud of. that&rsquo;s not
          a knock on your team. building a website that actually sells is a different job from
          running the business, and it needs people who do only this.
        </p>
        <p className="reveal-up">
          that&rsquo;s where we come in. we start with positioning and messaging — the words and
          the strategy — and only then design and build. so the site doesn&rsquo;t just look
          good; it says the right thing to the right buyer, in the right order.
        </p>

        <blockquote className="pr-quote reveal-up">
          <p>
            &ldquo;You understood our business, products and the industry we operate in better
            than some of my internal teams.&rdquo;
          </p>
          <cite>A founder we worked with</cite>
        </blockquote>

        <div style={{ margin: "12px 0 44px" }}>
          <button className="fb-play" type="button">
            Watch 10:55 min testimonial video <span aria-hidden style={{ fontSize: 10 }}>&#9654;</span>
          </button>
        </div>

        <blockquote className="pr-quote reveal-up">
          <p>
            &ldquo;They actually understood the product, what is getting built out, and turned it
            into a story our customers immediately got.&rdquo;
          </p>
          <cite>Another client, post-launch</cite>
        </blockquote>

        <p className="pr-strong reveal-up">
          and once the brand and website are right, we can take it further — SEO, link building,
          performance marketing, film and motion — the whole way a B2B company shows up and gets
          remembered.
        </p>

        <p className="reveal-up" style={{ marginTop: 40 }}>
          so that&rsquo;s us &amp; our take on B2B websites in a nutshell. reach out to us, and
          let&rsquo;s get to know you too!
        </p>
      </div>

      <div className="pr-col wu-closing">
        <p className="wu-closing-h2 reveal-up">We design your right to win. Say Hi!</p>
        <p className="wu-closing-sub">Let&rsquo;s get that website communication effective.</p>
        <Link href="/contact" className="wu-closing-cta">
          Book an intro <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
