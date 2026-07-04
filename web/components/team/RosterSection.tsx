import { MemberCard } from "@/components/team/MemberCard";
import type { TeamMember } from "@/lib/content/team";

export function RosterSection({
  title,
  count,
  members,
  startIndex,
}: {
  title: string;
  count: string;
  members: TeamMember[];
  startIndex: number;
}) {
  return (
    <section className="da-wrap tm-section">
      <div className="tm-head reveal-up">
        <h2 className="tm-sec-title">{title}</h2>
        <span className="tm-sec-count">{count}</span>
      </div>
      <div className="tm-grid">
        {members.map((m, idx) => (
          <MemberCard key={m.name} member={m} i={startIndex + idx} />
        ))}
      </div>
    </section>
  );
}
