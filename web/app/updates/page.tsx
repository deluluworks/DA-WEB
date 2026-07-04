import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Recent Updates",
  description:
    "Latest projects and milestones — brand strategy, naming, web, motion, and film for B2B companies. Design Asylum's currently active client engagements.",
};

type CurrentUpdate = [num: string, tags: string[], title: string, desc: string];

// Verbatim from footer/recent-updates.jsx.
const CURRENT: CurrentUpdate[] = [
  ["01", ["Ongoing"], "Web Design for Turno, a battery intelligence startup", "Positioning, Messaging, 3D, Brand Refresh — it’s progressing really well. Turno, a Stellaris-funded company."],
  ["02", ["Partnership", "Ongoing"], "Web Design for an Australian CPaaS brand", "Website design and Webflow development in partnership with Focus Lab."],
  ["03", ["Ongoing"], "4 Ad films for Zuora", "A set of four ad films for the subscription-software platform, in production now."],
  ["04", ["Ongoing"], "Branding for a Nuclear Energy startup", "Brand strategy and identity for an early-stage nuclear energy company."],
  ["05", ["Ongoing"], "Website Project with a Defense Startup", "Messaging and website design for a defense-technology startup."],
  ["06", ["New"], "Venture Studio Logo Design", "Identity work for a venture studio backing early-stage founders."],
  ["07", ["Ongoing"], "ReBranding for a M&A Firm", "A full rebrand for a mergers-and-acquisitions advisory firm."],
  ["08", ["Ongoing"], "Messaging and Web Development for a leading IT Product Brand", "Repositioning and a Webflow build for an established IT product company."],
];

const ARCHIVE = [
  "Industry Page Launch — Cybersecurity Sector",
  "Industry Page Launch — Energy Sector",
  "Four ad films for the subscription software platform, Zuora.",
  "3D Works Page — Now Live",
  "An AI Report landing page for one of India’s oldest VC firms, Z47.",
  "Strategy, messaging, website, and film for the battery intelligence company, Turno.",
  "Teaser Film — Armory Defence Tech Website Launch",
  "Brand Identity and Website for a Legal Tech Platform",
  "Website for Defence Startup — Armory",
];

function Pill({ children, fill }: { children: string; fill?: boolean }) {
  return <span className={"fb-chip" + (fill ? " is-fill" : "")}>{children}</span>;
}

/** Ported from footer/recent-updates.jsx (`Recent Updates.html`) — dated changelog feed. */
export default function RecentUpdatesPage() {
  return (
    <div className="upd-page">
      <RevealObserver />
      <main className="da-wrap">
        <div className="upd-container">
          <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Recent Updates" }]} />

          <div className="upd-meta" style={{ marginTop: 24 }}>
            <span className="upd-meta-date">Updated May 2026</span>
            <span className="upd-meta-author">By Mejo Kuriachan</span>
          </div>
          <h1 className="upd-h1">Ongoing Branding and Website Projects at Design Asylum</h1>
          <p className="upd-intro">
            Latest projects and milestones &mdash; brand strategy, naming, web, motion, and film
            for B2B companies. You can see Design Asylum&rsquo;s currently active{" "}
            <Link href="/clients">client engagements</Link> here.
          </p>

          {/* Export's "Know more →" CTA was an unwired href="#" — no dedicated
              case-study page exists for this highlight yet, so it stays
              decorative rather than linking nowhere. */}
          <div className="upd-highlight reveal-up">
            <Pill fill>Q1 2026 Highlight</Pill>
            <h2 className="upd-highlight-h2">Brand Refresh and Web Development for Cybersecurity Brand</h2>
            <p className="upd-highlight-p">
              Under the leadership of Ekta and Sanjana, Design Asylum revamped the brand and
              website for SISA, a leading cybersecurity brand.
            </p>
            <span className="upd-highlight-cta">
              Know more <span aria-hidden>&rarr;</span>
            </span>
          </div>

          <div className="upd-section">
            <h2 className="upd-section-h2">Current Projects and Updates from Design Asylum</h2>
            <p className="upd-section-sub">What we&rsquo;ve shipped, launched, and built this quarter.</p>
            <div>
              {CURRENT.map(([num, tags, title, desc]) => (
                <div key={num} className="cl-item reveal-up">
                  <span className="cl-num">{num}</span>
                  <div>
                    <div className="cl-tags">
                      {tags.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>
                    <h2 className="cl-title">{title}</h2>
                    <p className="cl-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="upd-section">
            <h2 className="upd-section-h2" style={{ marginBottom: 24 }}>
              All Updates
            </h2>
            <div>
              {/* Same "no invented destination" decision as the Author page's
                  blog list — these titles don't correspond to any built
                  article route, so they render as static rows. */}
              {ARCHIVE.map((t) => (
                <div key={t} className="cl-archive reveal-up">
                  <span aria-hidden className="cl-archive-arrow">
                    &rarr;
                  </span>
                  <span className="cl-archive-text">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="upd-closing reveal-up">
            <p className="upd-closing-h2">Want to be the next update on this page?</p>
            <Link href="/contact" className="upd-closing-cta">
              Book an intro <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
