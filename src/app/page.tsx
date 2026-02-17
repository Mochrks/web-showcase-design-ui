import { HeroSection } from "@/components/layout/hero-section";
import { TemplateGrid } from "@/components/layout/template-grid";
import { FeaturesSection } from "@/components/layout/features-section";
import { CTASection } from "@/components/layout/cta-section";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TemplateGrid />
      <CTASection />
      <Footer />
    </div>
  );
}
