import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = document.querySelectorAll(".fade-in-up");
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden animated-bg"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 grid-overlay opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <Badge 
          className="fade-in-up bg-card/60 backdrop-blur-md border-border text-foreground-secondary hover:border-primary/30 transition-all duration-200"
        >
          KI sinnvoll integriert statt isoliert
        </Badge>
        
        <h1 className="fade-in-up text-4xl md:text-5xl lg:text-6xl font-semibold text-headline leading-tight">
          Möglichkeiten verknüpfen.{" "}
          <span className="gradient-text">Zukunft gestalten.</span>
        </h1>
        
        <p className="fade-in-up text-lg md:text-xl text-body max-w-2xl mx-auto leading-relaxed">
          Von der ersten Idee bis zur gelebten KI-Praxis: Wir führen euch systematisch und 
          partnerschaftlich durch alle Phasen der KI-Einführung – mit Fokus auf Zusammenarbeit 
          und nachhaltigen Erfolg.
        </p>
        
        <Button
          onClick={() => scrollToSection("maturity-check")}
          className="fade-in-up interactive-hover bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-base font-medium border border-primary/30"
        >
          Deinen Standort bestimmen und weiterdenken
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border border-primary/40 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;