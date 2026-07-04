import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RevealObserver } from "@/components/Reveal";
import { Hero } from "@/components/why-da/Hero";
import { Showreel } from "@/components/why-da/Showreel";
import { Testimonials } from "@/components/why-da/Testimonials";
import { FeaturedProjects } from "@/components/why-da/FeaturedProjects";
import { Fit } from "@/components/why-da/Fit";
import { TeamStrip } from "@/components/why-da/TeamStrip";
import { Closing } from "@/components/why-da/Closing";

export const metadata: Metadata = {
  title: "Why Design Asylum",
  description:
    "Why choose Design Asylum — showreel, testimonials, featured projects, and the right-fit test.",
};

/** Ported from footer/why-da.jsx (`Why Design Asylum.html`). */
export default function WhyDesignAsylumPage() {
  return (
    <div className="wda-page">
      <RevealObserver />
      <div className="da-wrap">
        <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Why Design Asylum" }]} />
      </div>
      <Hero />
      <Showreel />
      <Testimonials />
      <FeaturedProjects />
      <Fit />
      <TeamStrip />
      <Closing />
    </div>
  );
}
