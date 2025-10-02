import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/hero-bg.webp";
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
  return <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden" style={{
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll"
  }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/40 hero-grid"></div>
      
      {/* Content */}
      <header className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <Badge className="fade-in-up mb-4 sm:mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary hover:border-primary/40 transition-all duration-300 text-xs sm:text-sm">
          KI integriert – Zusammenarbeit optimiert
        </Badge>
        
        <h1 className="fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-headline mb-4 sm:mb-6 leading-tight">
          Möglichkeiten verbinden.{" "}
          <span className="gradient-text">Kompetenzen entfalten.</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-body mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">Wir verwandeln mit unserem Wissen eure Neugier in Können – bedarfsorientiert geführt und dialogorientiert umgesetzt, mit verlässlichen Routinen für euch im Arbeitsalltag und KI, die bereichsübergreifende Zusammenarbeit stärkt.</p>
        
        <Button
          onClick={() => scrollToSection("final-cta")} 
          className="fade-in-up interactive-hover bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border border-primary/50"
          aria-label="Zur Terminbuchung springen"
        >
          <span className="hidden sm:inline">Euren Standort bestimmen und weiterdenken</span>
          <span className="sm:hidden">Standort bestimmen</span>
        </Button>
      </header>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-primary/50 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;