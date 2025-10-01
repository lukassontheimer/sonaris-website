import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Bereich3 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-6 sm:mb-8">
              Bereich 3 – Musterbewusstsein & Übersetzung
            </h1>
            
            <div className="prose prose-lg max-w-none text-body">
              <p>Problem- vs. Lösungsorientierung, Übersicht vs. Detail, Reihenfolge vs. Zufall, Hin- und Hergehen vs. Weggehen, Autoren- vs. Leserperspektive, Durchsetzungsvermögen vs. Absicherung</p>
              {/* Content will be added here */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Bereich3;
