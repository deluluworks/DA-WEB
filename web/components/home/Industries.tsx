import { Tag } from "@/components/ds/Tag";

type Row = { name: string; desc: string; services: string[]; ctas: string[] };

const ROWS: Row[] = [
  {
    name: "Cloudphys",
    desc: "Visual branding and website design for an AI-powered platform that sharpens critical-care monitoring.",
    services: ["Website strategy", "Website design", "Explainer film", "Webflow build"],
    ctas: ["View website"],
  },
  {
    name: "Lumen",
    desc: "Branding and website design for a cybersecurity outfit built for growing businesses.",
    services: ["Webflow build", "Website design", "Logo design", "Landing pages"],
    ctas: ["View website"],
  },
  {
    name: "Vantage",
    desc: "Rebrand and website design for a technology-led digital media and adtech consultancy.",
    services: ["Brand identity", "Brand refresh", "Logo design", "Lottie animation"],
    ctas: ["View case study", "View website"],
  },
  {
    name: "Foundry",
    desc: "Brand identity and website design for an end-to-end custom manufacturing platform.",
    services: ["Website design", "Webflow build", "Brand identity", "Lottie animation"],
    ctas: ["View case study", "View website"],
  },
];

function IndustryRow({ name, desc, services, ctas }: Row) {
  return (
    <div className="da-ind-row">
      <span className="da-ind-name">{name}</span>
      <div>
        <p className="da-ind-desc">{desc}</p>
        <div className="da-ind-tags">
          {services.map((s) => (
            <Tag key={s} style={{ color: "var(--color-paper-white)", borderColor: "rgba(255,255,255,0.32)" }}>
              {s}
            </Tag>
          ))}
        </div>
      </div>
      <div className="da-ind-ctas">
        {ctas.map((c) => (
          <a key={c} href="/clients" className="da-ind-cta">
            {c} <span aria-hidden>&rarr;</span>
          </a>
        ))}
      </div>
    </div>
  );
}

/** Ported from da/sections-3.jsx `DAIndustries`. */
export function Industries() {
  return (
    <section className="da-industries">
      <div className="da-wrap">
        <h2 className="da-industries-head">
          Worked with companies from a stubbornly diverse set of industries
        </h2>
        <div className="da-ind-list">
          {ROWS.map((r) => (
            <IndustryRow key={r.name} {...r} />
          ))}
        </div>
        <div className="da-industries-cta-wrap">
          <a href="/contact" className="da-industries-cta">
            Book a brand strategy session <span aria-hidden>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
