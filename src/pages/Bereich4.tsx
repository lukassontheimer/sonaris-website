import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Bereich4 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-6 sm:mb-8">
              Bereich 4 – Kritisches Denken & Reflexion
            </h1>
            
            <div className="prose prose-lg max-w-none text-body">
              <p>Wahrheit vs. Plausibilität, praktisches Denken, Mehrdeutigkeitserkundung, Regressionstest, Anti-Standardformulierung, Redakteursrolle, Zukunftsreflexion</p>
              {/* Content will be added here */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Bereich4;
