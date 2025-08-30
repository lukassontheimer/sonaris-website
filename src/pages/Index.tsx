import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ChallengesSection from "@/components/ChallengesSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import MaturityCheck from "@/components/MaturityCheck";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <HeroSection />
      <ChallengesSection />
      <ServicesSection />
      <TeamSection />
      <MaturityCheck />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
