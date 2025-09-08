import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ChallengesSection from "@/components/ChallengesSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";

import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <HeroSection />
      <main>
        <ChallengesSection />
        <ServicesSection />
        <TeamSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
