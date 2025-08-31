import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">sonaris</span>
            <div className="frequency-line w-12 mt-1"></div>
          </div>
          
          {/* Links */}
          <div className="flex items-center space-x-8">
            <Link 
              to="/impressum" 
              className="text-foreground-secondary hover:text-foreground transition-colors duration-300"
            >
              Impressum
            </Link>
            <Link 
              to="/datenschutz" 
              className="text-foreground-secondary hover:text-foreground transition-colors duration-300"
            >
              Datenschutz
            </Link>
            <div className="flex items-center space-x-3">
              <Linkedin className="w-5 h-5 text-foreground-secondary hover:text-primary transition-colors duration-300 cursor-pointer" />
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-foreground-secondary text-sm">
            © 2025 sonaris
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/20">
          <p className="text-center text-sm text-foreground-secondary">
            DSGVO-konforme KI-Transformation für den Mittelstand im DACH-Raum
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;