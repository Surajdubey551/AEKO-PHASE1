import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CreateAgentSection from "@/components/CreateAgentSection";
import AllModelsSection from "@/components/AllModelsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AIToolsSection from "@/components/AIToolsSection";
import LLMAgentFeaturesSection from "@/components/LLMAgentFeaturesSection";
import ImageToolsFeaturesSection from "@/components/ImageToolsFeaturesSection";
import VideoToolsFeaturesSection from "@/components/VideoToolsFeaturesSection";
import DevelopersSection from "@/components/DevelopersSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CreateAgentSection />
      <AllModelsSection />
      <FeaturesSection />
      <AIToolsSection />
      <LLMAgentFeaturesSection />
      <ImageToolsFeaturesSection />
      <VideoToolsFeaturesSection />
      <DevelopersSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
