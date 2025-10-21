import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const KiGrundlagen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/spectrum/transmission">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Transmission
            </Button>
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-8">KI Grundlagen</h1>
            <div className="grid gap-4">
              <Link to="/spectrum/daten-verstehen">
                <Button size="lg" className="text-lg py-6 w-full">
                  Daten verstehen
                </Button>
              </Link>
              <Link to="/spectrum/grundlagen-ki">
                <Button size="lg" className="text-lg py-6 w-full">
                  Grundlagen der Künstlichen Intelligenz
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KiGrundlagen;
