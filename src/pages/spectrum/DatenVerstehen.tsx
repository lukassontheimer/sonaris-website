import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DatenVerstehen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/spectrum/ki-grundlagen">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to KI Grundlagen
            </Button>
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-8">Daten verstehen</h1>
            {/* Content will be added here */}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DatenVerstehen;
