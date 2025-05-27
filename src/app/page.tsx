import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ApySection } from "@/components/apy-section";
import { FeaturesSection } from "@/components/features-section";
import { MobileSection } from "@/components/mobile-section";
import { FounderSection } from "@/components/founder-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <ApySection />
      <FeaturesSection />
      <MobileSection />
      <FounderSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
