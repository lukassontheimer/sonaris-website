import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "nav-glass border-b border-nav-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-foreground">sonaris</span>
            <div className="frequency-line w-16 mt-1"></div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground-secondary hover:text-foreground transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground-secondary hover:text-foreground transition-colors duration-300"
            >
              Über uns
            </button>
          </div>

          {/* CTA Button */}
          <Button variant="default" className="interactive-hover bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/50">
            Gespräch vereinbaren
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;