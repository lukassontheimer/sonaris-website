import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const FirstContactSpectrum = () => {
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            First Contact
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground-secondary text-lg mb-6">
              Content coming soon...
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FirstContactSpectrum;
