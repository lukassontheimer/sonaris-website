import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.1
    });
    const elementsToAnimate = document.querySelectorAll(".fade-in-up");
    elementsToAnimate.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden" style={{
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/40 hero-grid"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Badge className="fade-in-up mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary hover:border-primary/40 transition-all duration-300">
          KI sinnvoll integriert statt isoliert
        </Badge>
        
        <h1 className="fade-in-up text-4xl md:text-6xl lg:text-7xl font-bold text-headline mb-6 leading-tight">
          Möglichkeiten verknüpfen.{" "}
          <span className="gradient-text">Zukunft mit KI gestalten.</span>
        </h1>
        
        <p className="fade-in-up text-lg md:text-xl text-body mb-8 max-w-3xl mx-auto leading-relaxed">Von der ersten Idee bis zur gelebten KI-Praxis: Wir führen euch systematisch und partnerschaftlich durch alle Phasen der KI-Integration – mit Fokus auf Zusammenarbeit und nachhaltigen Erfolg.</p>
        
        <Button onClick={() => scrollToSection("final-cta")} className="fade-in-up interactive-hover bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg border border-primary/50">
          Deinen Standort bestimmen und weiterdenken
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;