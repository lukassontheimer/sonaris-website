import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/"
            className="flex flex-col hover:opacity-80 transition-opacity duration-300"
          >
            <span className="text-xl sm:text-2xl font-bold text-foreground">sonaris</span>
            <div className="frequency-line w-12 sm:w-16 mt-1"></div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-foreground-secondary hover:text-foreground transition-colors duration-300"
                >
                  Frequencies
                </button>
                <Link
                  to="/about-sonaris"
                  className="text-foreground-secondary hover:text-foreground transition-colors duration-300"
                >
                  Sonaris
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="text-foreground-secondary hover:text-foreground transition-colors duration-300"
                >
                  Frequencies
                </Link>
                <Link
                  to="/about-sonaris"
                  className="text-foreground-secondary hover:text-foreground transition-colors duration-300"
                >
                  Sonaris
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground-secondary hover:text-foreground transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("final-cta")}
              variant="default" 
              className="interactive-hover bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/50"
            >
              <span className="hidden lg:inline">Virtueller Espresso</span>
              <span className="lg:hidden">Kontakt</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-nav-border/30">
            <div className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
                  <button
                    onClick={() => {
                      scrollToSection("services");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-foreground-secondary hover:text-foreground transition-colors duration-300 py-2"
                  >
                    Frequencies
                  </button>
                  <Link
                    to="/about-sonaris"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-foreground-secondary hover:text-foreground transition-colors duration-300 py-2"
                  >
                    Sonaris
                  </Link>
                  <Button 
                    onClick={() => {
                      scrollToSection("final-cta");
                      setIsMobileMenuOpen(false);
                    }}
                    variant="default" 
                    className="mt-4 w-full interactive-hover bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/50"
                  >
                    Virtueller Espresso
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-foreground-secondary hover:text-foreground transition-colors duration-300 py-2"
                  >
                    Frequencies
                  </Link>
                  <Link
                    to="/about-sonaris"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-foreground-secondary hover:text-foreground transition-colors duration-300 py-2"
                  >
                    Sonaris
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;