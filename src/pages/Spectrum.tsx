import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Spectrum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Homepage
            </Button>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Spectrum
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/spectrum/first-contact" 
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-between"
            >
              <span className="text-xl font-medium text-foreground">First Contact</span>
              <ArrowLeft className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors rotate-180" />
            </Link>

            <Link 
              to="/spectrum/onboarding" 
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-between"
            >
              <span className="text-xl font-medium text-foreground">Onboarding</span>
              <ArrowLeft className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors rotate-180" />
            </Link>

            <Link 
              to="/spectrum/bridge-building" 
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-between"
            >
              <span className="text-xl font-medium text-foreground">Bridge Building</span>
              <ArrowLeft className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors rotate-180" />
            </Link>

            <Link 
              to="/spectrum/future-pacing" 
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-between"
            >
              <span className="text-xl font-medium text-foreground">Future Pacing</span>
              <ArrowLeft className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors rotate-180" />
            </Link>

            <Link 
              to="/spectrum/experience-echo" 
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-between"
            >
              <span className="text-xl font-medium text-foreground">Experience Echo</span>
              <ArrowLeft className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors rotate-180" />
            </Link>

            <Link 
              to="/spectrum/resonating-echo" 
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-between"
            >
              <span className="text-xl font-medium text-foreground">Resonating Echo</span>
              <ArrowLeft className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors rotate-180" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Spectrum;
