import { Hero } from "@/components/home/Hero";
import { LogoWall } from "@/components/home/LogoWall";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Services } from "@/components/home/Services";
import { Showreel } from "@/components/home/Showreel";
import { Portfolio } from "@/components/home/Portfolio";
import { PainPoints } from "@/components/home/PainPoints";
import { Stats } from "@/components/home/Stats";
import { ArrowLink } from "@/components/ds/ArrowLink";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoWall />
      <FeaturedWork />
      <Services />
      <Showreel />
      <Portfolio />
      <PainPoints />
      <Stats />

      <section className="da-home-cta">
        <div className="da-home-cta-inner">
          <h2>
            Ready to design your business the right to win? Talk to us about your rebrand, your
            website, or the story you haven&rsquo;t told yet.
          </h2>
          <div className="da-home-cta-link">
            <ArrowLink href="/contact">Book a call</ArrowLink>
          </div>
        </div>
      </section>
    </div>
  );
}
