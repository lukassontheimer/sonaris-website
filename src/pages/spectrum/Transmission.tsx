import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Transmission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/spectrum">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Spectrum
            </Button>
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <div className="space-y-6">
              <Link to="/spectrum/prompt-gallery" className="block">
                <div className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-between cursor-pointer">
                  <span className="text-3xl font-medium text-foreground">Prompt Gallery</span>
                  <ArrowLeft className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors rotate-180" />
                </div>
              </Link>
              
              <Link to="/spectrum/ki-grundlagen" className="block">
                <div className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-between cursor-pointer">
                  <span className="text-3xl font-medium text-foreground">KI Grundlagen</span>
                  <ArrowLeft className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors rotate-180" />
                </div>
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Transmission;
