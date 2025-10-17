import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LukasSontheimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/#team">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zum Team
            </Button>
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Lukas Sontheimer - KI-Stratege
            </h1>
            
            <div className="space-y-6 text-foreground/90">
              <p className="text-xl leading-relaxed">
                Content placeholder for Lukas Sontheimer's detailed profile.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LukasSontheimer;
