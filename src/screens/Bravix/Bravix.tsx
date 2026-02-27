import { ClientShowcaseSection } from "./sections/ClientShowcaseSection";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { MarketingMessageSection } from "./sections/MarketingMessageSection/MarketingMessageSection";
import { PortfolioGallerySection } from "./sections/PortfolioGallerySection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection/ServicesOverviewSection";

export const Bravix = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <HeroSection />
      <PortfolioGallerySection />
      <ServicesOverviewSection />
      <ClientShowcaseSection />
      <MarketingMessageSection />
      <ContactSection />
    </div>
  );
};
