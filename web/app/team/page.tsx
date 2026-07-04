import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";
import { RosterSection } from "@/components/team/RosterSection";
import { getLeadership, getTeam } from "@/lib/content/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The people behind Design Asylum — leadership and team. Strategists, designers, writers, developers and motion artists.",
};

/** Ported from team/team.jsx (`Team.html`) — two-tier roster: Leadership + Our Team. */
export default function TeamPage() {
  const leadership = getLeadership();
  const team = getTeam();
  return (
    <div className="tm-page">
      <RevealObserver />
      <div className="da-wrap">
        <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Team" }]} />
        <div className="reveal-up" style={{ maxWidth: 900, marginTop: 32 }}>
          <h1 className="tm-h1">Team</h1>
          <p className="tm-intro">
            Strategists, designers, writers, developers and motion artists &mdash; in the same
            room, on the same problem. The people who make Design Asylum what it is.
          </p>
        </div>
      </div>

      <RosterSection title="Leadership" count="12 people" members={leadership} startIndex={0} />
      <RosterSection title="Our Team" count="22 people" members={team} startIndex={3} />

      <div className="da-wrap tm-closing">
        <p className="tm-closing-h2 reveal-up">This is who you&rsquo;d be working with.</p>
        <Link href="/contact" className="tm-closing-cta">
          Book an intro <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
