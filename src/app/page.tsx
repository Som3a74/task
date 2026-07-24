import ScrollRevealHandler from "@/components/ui/ScrollRevealHandler";
import { Navbar } from "@/features/landing/components/Navbar";
import { HeroSection } from "@/features/landing/components/HeroSection";
import { StatsSection } from "@/features/landing/components/StatsSection";
import { AboutSection } from "@/features/landing/components/AboutSection";
import { ServicesSection } from "@/features/landing/components/ServicesSection";
import { GrowthSection } from "@/features/landing/components/GrowthSection";
import { CtaSection } from "@/features/landing/components/CtaSection";
import { Footer } from "@/features/landing/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollRevealHandler />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <GrowthSection />
      <CtaSection />
      <Footer />
    </>
  );
}
