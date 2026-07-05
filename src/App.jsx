import { DANav, DAHero, DALogoWall, DAFeatured } from './sections/SectionHero';
import { DAServices } from './sections/SectionServices';
import { DAShowreel, DAPortfolio, DAPainPoints, DAStats } from './sections/SectionPortfolio';
import { DAWhyUs, DAIndustries, DATestimonials } from './sections/SectionIndustries';
import { DAFaq, DAContact, DAFooter } from './sections/SectionContact';

export default function App() {
  return (
    <>
      <DANav />
      <DAHero />
      <DALogoWall />
      <DAFeatured />
      <DAServices />
      <DAShowreel />
      <DAPortfolio />
      <DAPainPoints />
      <DAStats />
      <DAWhyUs />
      <DAIndustries />
      <DATestimonials />
      <DAFaq />
      <DAContact />
      <DAFooter />
    </>
  );
}
