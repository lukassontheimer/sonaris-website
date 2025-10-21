import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const GrundlagenKI = () => {
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
          
          <article className="prose prose-lg max-w-none prose-invert">
            <h1 className="text-4xl font-bold mb-8">Grundlagen der Künstlichen Intelligenz</h1>
            
            <p className="text-xl mb-6">Eine Einführung in die Welt der KI</p>

            <section id="einfuehrung">
              <h2 className="text-3xl font-bold mt-12 mb-6">Was ist Künstliche Intelligenz?</h2>
              
              <p className="mb-4">
                Künstliche Intelligenz (KI) ist eines der transformativsten Technologiefelder unserer Zeit. Doch was genau verbirgt sich hinter diesem Begriff? In diesem Artikel erkunden wir die Grundlagen der KI, ihre Geschichte, verschiedene Ansätze und ihre praktischen Anwendungen.
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GrundlagenKI;
