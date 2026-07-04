import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";
import { PricingTable } from "@/components/pricing/PricingTable";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "An indicative pricing table for Design Asylum's brand design, website, and video engagements — INR, USD, and typical timelines.",
};

/** Ported from pricing/pricing.jsx (`Pricing.html`) — utility table page. */
export default function PricingPage() {
  return (
    <div className="pricing-page">
      <RevealObserver />
      <header className="da-wrap">
        <div className="pr-wrap">
          <div className="reveal-up" style={{ marginBottom: 26 }}>
            <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          </div>
          <h1 className="pr-h1 reveal-up">Pricing</h1>
        </div>
      </header>

      <section className="da-wrap" style={{ paddingTop: "clamp(32px, 4.4vw, 64px)" }}>
        <div className="pr-wrap">
          <p className="pr-intro reveal-up">
            This table is to give you sense of the budget you should keep in mind for our{" "}
            <Link href="/team">team</Link>. Based on the task at hand, number of products/ services
            you have, stage of your brand, team required based on the requirements, detailing
            required on the brand &amp; website, timelines &mdash; pricing and model of engagement
            (fixed price, retianer, hourly or a combiantion) will be determined. We also do bring
            in consultants based on the requirements.
          </p>

          <PricingTable />

          <p className="pr-footnote reveal-up">
            *A website project when copy is in place vs its not is not the same. A brand design
            project for a legacy brand vs a startup is the not the same. Execution cost of 3D,
            Animations vs static is not same.
          </p>

          <div className="pr-promise-band reveal-up">
            <p className="pr-promise">
              We exist to design B2B businesses their right to win &amp; communicate with clarity,
              personality, and a point of view, making the right people want to remember &amp;
              associate.
            </p>
            <Link href="/contact" className="pricing-closing-cta">
              Get a detailed quote <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
