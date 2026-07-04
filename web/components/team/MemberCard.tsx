import Link from "next/link";
import { slugify, type TeamMember } from "@/lib/content/team";

const GLOWS = [
  "radial-gradient(90% 130% at 24% 22%, rgba(239,108,46,0.34), transparent 56%), radial-gradient(80% 120% at 84% 86%, rgba(81,111,234,0.44), transparent 54%)",
  "radial-gradient(90% 130% at 78% 20%, rgba(81,111,234,0.48), transparent 54%), radial-gradient(80% 120% at 20% 88%, rgba(150,235,235,0.36), transparent 56%)",
  "radial-gradient(90% 130% at 30% 30%, rgba(255,194,64,0.42), transparent 56%), radial-gradient(80% 120% at 82% 84%, rgba(110,36,51,0.46), transparent 54%)",
  "radial-gradient(90% 130% at 70% 26%, rgba(150,235,235,0.42), transparent 54%), radial-gradient(80% 120% at 24% 86%, rgba(81,111,234,0.42), transparent 54%)",
  "radial-gradient(90% 130% at 26% 24%, rgba(81,111,234,0.42), transparent 56%), radial-gradient(80% 120% at 80% 84%, rgba(239,108,46,0.36), transparent 54%)",
];
const BGS = ["var(--color-obsidian-ink)", "var(--color-deep-teal)", "#241a1c", "#10212a", "#1b1530"];

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const a = parts[0] ? parts[0][0] : "";
  const b = parts.length > 1 ? parts[parts.length - 1][0] : parts[0]?.[1] || "";
  return (a + b).toUpperCase();
}

export function MemberCard({ member, i }: { member: TeamMember; i: number }) {
  const slug = slugify(member.name);
  // Only Tanmaya Rao has a real author/bio page queued (SITE-GUIDE §"Author -
  // Tanmaya Rao" is a one-off author template, not a per-member bio system);
  // every other card anchors back to this page rather than a fabricated route.
  const href = slug === "tanmaya-rao" ? "/author/tanmaya-rao" : `/team#${slug}`;
  return (
    <Link className="tm-card reveal-up" href={href} id={slug}>
      <div className="tm-vis" style={{ background: BGS[i % BGS.length] }}>
        <div className="tm-vis-glow" aria-hidden style={{ background: GLOWS[i % GLOWS.length] }} />
        <span className="tm-initials" aria-hidden>
          {initials(member.name)}
        </span>
      </div>
      <div className="tm-body">
        <span className="tm-role">{member.role}</span>
        <h3 className="tm-name">{member.name}</h3>
        <p className="tm-bio">{member.bio}</p>
        <span className="tm-more">
          Read More <span className="tm-more-arrow" aria-hidden>&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
