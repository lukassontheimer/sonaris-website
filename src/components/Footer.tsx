import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg sm:text-xl font-bold text-foreground">sonaris</span>
            <div className="frequency-line w-10 sm:w-12 mt-1"></div>
          </div>
          
          {/* Links */}
          <nav className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8" aria-label="Footer Navigation">
            <div className="flex items-center space-x-6 sm:space-x-8">
              <Link to="/impressum" className="text-foreground-secondary hover:text-foreground transition-colors duration-300 text-sm sm:text-base">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-foreground-secondary hover:text-foreground transition-colors duration-300 text-sm sm:text-base">
                Datenschutz
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <a href="https://www.linkedin.com/company/sonaris" target="_blank" rel="noopener noreferrer" aria-label="SONARIS auf LinkedIn besuchen">
                <Linkedin className="w-5 h-5 text-foreground-secondary hover:text-primary transition-colors duration-300" />
              </a>
            </div>
          </nav>
          
          {/* Copyright */}
          <div className="text-foreground-secondary text-xs sm:text-sm order-first md:order-last">
            © 2025 sonaris
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/20">
          <p className="text-center text-xs sm:text-sm text-foreground-secondary">DSGVO-konforme KI-Integration für den Mittelstand</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;