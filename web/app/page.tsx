import { Hero } from "@/components/home/Hero";
import { LogoWall } from "@/components/home/LogoWall";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Services } from "@/components/home/Services";
import { Showreel } from "@/components/home/Showreel";
import { Portfolio } from "@/components/home/Portfolio";
import { PainPoints } from "@/components/home/PainPoints";
import { Stats } from "@/components/home/Stats";
import { WhyUs } from "@/components/home/WhyUs";
import { Industries } from "@/components/home/Industries";
import { Testimonials } from "@/components/home/Testimonials";
import { Faq } from "@/components/home/Faq";
import { Contact } from "@/components/home/Contact";

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
      <WhyUs />
      <Industries />
      <Testimonials />
      <Faq />
      <Contact />
    </div>
  );
}
