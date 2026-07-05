import Link from "next/link";
import { slugify } from "@/lib/slugify";
import { Eyebrow } from "@/components/ds/Eyebrow";

/**
 * Project team grid — ported from `sevenloop/sl-team-services.jsx` `SLTeam`.
 * The 13 members here are the *project-specific* team composition (with
 * project roles), distinct from the global 34-person roster in
 * `content/team/data.ts`, so the roster/bios stay local to this page.
 * Read-more targets follow the team-page convention: Tanmaya Rao → her author
 * bio, everyone else → their real same-page anchor on /team.
 */

type Member = { role: string; name: string; bio: string };

const TEAM: Member[] = [
  { role: "Creative Director | Films", name: "Tejus Yakhob", bio: "Tejus Yakhob is a writer and filmmaker with 11+ years of experience, specializing in storytelling and visual media." },
  { role: "Lead Designer | Content Strategist", name: "Athira Krishnan", bio: "Articulate with a clear thought process, she excels in content writing, driving design in B2B SaaS and B2C websites." },
  { role: "Lead Brand Designer | Illustrator", name: "Tanmaya Rao", bio: "A b2b brand designer, she has worked wonders for many SaaS and B2B companies with her vision and expert skills." },
  { role: "Co-Founder | Principal Designer", name: "Ekta Manchanda", bio: "Ekta, a design evangelist, has shaped many brands with her creative vision in retail, hospitality, and B2B spaces." },
  { role: "Head of Webflow Department", name: "Saurabh Chakradhari", bio: "Your go-to for technical queries, with engineering expertise, analytical thinking, and clear communication." },
  { role: "Chief of Staff | Project Manager", name: "Arpan Sen", bio: "Arpan handles management at Design Asylum, ensuring that everything, well…flows smoothly." },
  { role: "Content Strategist", name: "Swathi Mohan", bio: "Swathi writes sharp, smart copy, sometimes poetic. Quick on her feet, she has a knack for making people feel heard." },
  { role: "Associate Editor | Films", name: "Yugankita Aich", bio: "Yugankita brings ideas to life through seamless editing, storytelling, and high-quality visuals with a creative touch." },
  { role: "Partner | Brand Strategist", name: "Mejo Kuriachan", bio: "Mejo puts the ‘Everything’ in brand, flow, video and motion — an engineer first, strategist and design manager next." },
  { role: "Junior Designer", name: "Kashish Gulati", bio: "Kashish Gulati is a junior designer at Design Asylum, specializing in branding, web design, and typography." },
  { role: "Webflow Developer", name: "Burhan Upad", bio: "Burhan is a Webflow developer who crafts visually appealing websites, utilizing GSAP for dynamic, interactive animations." },
  { role: "Associate Designer", name: "Harishma D", bio: "Harishma is an Associate Designer at Design Asylum, helping businesses discover the value of great design and build strong partnerships." },
  { role: "Project Manager", name: "Akshay A D", bio: "Akshay, a disciplined Project Manager, excels at seamless project execution, making him invaluable to the team." },
];

function TeamCard({ role, name, bio }: Member) {
  const slug = slugify(name);
  const href = slug === "tanmaya-rao" ? "/author/tanmaya-rao" : `/team#${slug}`;
  return (
    <article className="sl-team-card">
      <span className="sl-team-role">{role}</span>
      <h3 className="sl-team-name">{name}</h3>
      <p className="sl-team-bio">{bio}</p>
      <Link href={href} className="sl-readmore">
        Read more{" "}
        <span className="sl-readmore-arrow" aria-hidden>
          &rarr;
        </span>
      </Link>
    </article>
  );
}

export function ProjectTeam() {
  return (
    <section className="sl-section sl-section-paper">
      <div className="da-wrap">
        <div className="sl-team-head">
          <div>
            <Eyebrow>The people</Eyebrow>
            <h2 className="sl-team-h2">Project team</h2>
          </div>
          <p className="sl-team-lead">
            The same core team across Ximkart, Revind and Sevenloop &mdash; strategy, design, film
            and build under one roof.
          </p>
        </div>
        <div className="sl-team-grid reveal-up">
          {TEAM.map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
