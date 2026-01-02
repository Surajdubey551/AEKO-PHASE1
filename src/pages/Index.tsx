import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CreateAgentSection from "@/components/CreateAgentSection";
import AllModelsSection from "@/components/AllModelsSection";
import AIToolsSection from "@/components/AIToolsSection";
import LLMAgentFeaturesSection from "@/components/LLMAgentFeaturesSection";
import ImageToolsFeaturesSection from "@/components/ImageToolsFeaturesSection";
import VideoToolsFeaturesSection from "@/components/VideoToolsFeaturesSection";
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
      <AIToolsSection />
      <LLMAgentFeaturesSection />
      <ImageToolsFeaturesSection />
      <VideoToolsFeaturesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
