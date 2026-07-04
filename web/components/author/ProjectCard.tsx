const GLOWS = [
  "radial-gradient(90% 130% at 24% 22%, rgba(239,108,46,0.30), transparent 56%), radial-gradient(80% 120% at 84% 86%, rgba(81,111,234,0.42), transparent 54%)",
  "radial-gradient(90% 130% at 78% 20%, rgba(81,111,234,0.46), transparent 54%), radial-gradient(80% 120% at 20% 88%, rgba(150,235,235,0.34), transparent 56%)",
  "radial-gradient(90% 130% at 30% 30%, rgba(255,194,64,0.40), transparent 56%), radial-gradient(80% 120% at 82% 84%, rgba(110,36,51,0.42), transparent 54%)",
  "radial-gradient(90% 130% at 70% 26%, rgba(150,235,235,0.40), transparent 56%), radial-gradient(80% 120% at 24% 86%, rgba(81,111,234,0.40), transparent 54%)",
];
const BGS = ["var(--color-obsidian-ink)", "var(--color-deep-teal)", "#241a1c", "#10212a"];

export type Project = {
  name: string;
  cta: string;
  feat?: boolean;
  subs?: string[];
  desc: string;
};

/**
 * The export's project cards link to the actual client sites/videos (`href="#"`
 * placeholders in the source — none were ever configured). No such external
 * URLs exist to link to yet, so this renders as a static card, matching the
 * "no video/no real destination invented" decision already made on Why Us and
 * Why Design Asylum for the same kind of inert placeholder.
 */
export function ProjectCard({ project, i }: { project: Project; i: number }) {
  const video = project.cta === "Watch Video";
  return (
    <div className={"svc-card" + (project.feat ? " is-feat" : "")}>
      <div className="svc-card-vis" style={{ background: BGS[i % BGS.length] }}>
        <div className="svc-card-vis-glow" aria-hidden style={{ background: GLOWS[i % GLOWS.length] }} />
        {project.feat && <span className="svc-card-tag">Featured</span>}
        <span className="svc-card-link">
          {project.cta} <span aria-hidden>{video ? "▶" : "↗"}</span>
        </span>
      </div>
      <div className="svc-card-body">
        <h3 className="svc-card-name">{project.name}</h3>
        {project.subs && (
          <div className="auth-tags" style={{ marginTop: 14 }}>
            {project.subs.map((s) => (
              <span key={s} className="auth-subtag">
                {s}
              </span>
            ))}
          </div>
        )}
        <p className="svc-card-desc">{project.desc}</p>
      </div>
    </div>
  );
}
