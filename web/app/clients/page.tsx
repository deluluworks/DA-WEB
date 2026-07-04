import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { RevealObserver } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Worked with companies from a diverse set of industries — the Design Asylum client roster.",
};

// Ported verbatim from footer/clients-index.jsx. Only Sevenloop and Aavenir
// have a real client-hub route queued (see SITE-PROGRESS.md); every other
// name has no destination in the export beyond an unwired `href="#"`, so it
// links to a same-page anchor on its own tile instead of a fabricated route.
const CLIENTS = [
  "Sevenloop", "Ximkart", "Revind Ai", "Fortuna Cysec", "Swiffy Labs", "Tunnel", "SimpliContract", "Aavenir",
  "Good Food Movement", "i3systems", "Founder's Cupid", "Compport", "IVY Homes", "Progcap", "Phronetic", "OneLern",
  "Adnaut", "TLH", "Alkemiz", "Lumora Security", "Expent", "Xflow", "Entropik", "Cloudphysician",
  "Nimble Edge", "5X", "Mili", "Relanto", "Rewild Farms", "TurboTech", "GenRobotics", "Ajax Engineering",
  "Lakshmigraha", "Ayr Energy", "Armory", "Botim", "SISA", "Turno", "Zuora", "Hand In Hand India",
  "Transitry", "Aspi & CIS", "Phantom", "Lumora",
] as const;

const REAL_HUB: Record<string, string> = {
  Sevenloop: "/clients/sevenloop",
  Aavenir: "/clients/aavenir",
};

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Ported from footer/clients-index.jsx (`Clients - Index.html`). */
export default function ClientsPage() {
  return (
    <div className="ci-page da-wrap">
      <RevealObserver />
      <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Clients" }]} />

      <header className="ci-header">
        <Eyebrow>Clients</Eyebrow>
        <h1 className="ci-h1">Worked with companies from a diverse set of industries</h1>
      </header>

      <section className="ci-grid reveal-up">
        {CLIENTS.map((name) => {
          const slug = slugify(name);
          const href = REAL_HUB[name] ?? `/clients#${slug}`;
          return (
            <Link key={name} id={slug} className="ci-tile" href={href}>
              <span className="ci-tile-name">{name}</span>
              <span className="ci-tile-tag">
                <span aria-hidden className="ci-tile-dot" />
                Projects
              </span>
            </Link>
          );
        })}
      </section>

      <div className="ci-closing">
        <p className="ci-closing-h2 reveal-up">Want to be the next case study?</p>
        <Link href="/contact" className="ci-closing-cta">
          Book an intro <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
