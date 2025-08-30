import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-foreground">sonaris</span>
            <div className="frequency-line w-10 mt-1"></div>
          </div>
          
          {/* Links */}
          <div className="flex items-center space-x-8">
            <a 
              href="#impressum" 
              className="text-foreground-secondary hover:text-foreground transition-colors duration-200 text-sm"
            >
              Impressum
            </a>
            <a 
              href="#datenschutz" 
              className="text-foreground-secondary hover:text-foreground transition-colors duration-200 text-sm"
            >
              Datenschutz
            </a>
            <div className="flex items-center space-x-3">
              <Linkedin className="w-4 h-4 text-foreground-secondary hover:text-primary transition-colors duration-200 cursor-pointer" />
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-foreground-secondary text-xs">
            © 2024 sonaris
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/10">
          <p className="text-center text-xs text-foreground-secondary">
            DSGVO-konforme KI-Transformation für den Mittelstand im DACH-Raum
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;