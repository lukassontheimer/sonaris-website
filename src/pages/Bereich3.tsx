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
              Sektor 3 – Musterbewusstsein & Übersetzung
            </h1>
            
            <div className="prose prose-lg max-w-none text-body">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Problem- vs. Lösungsorientierung</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Formuliere folgenden Satz lösungsorientiert um: Ich möchte nicht mehr so viele Überstunden machen."</p>
                  <p className="text-body-secondary">→ Zeigt, wie Weg-von-Formulierungen zu Hin-zu-Formulierungen werden.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Überblick vs. Detail</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Schreibe diese Aussage erst als Überblick, dann als detaillierte Beschreibung: Unser Unternehmen verbessert Batterie-Recycling-Prozesse."</p>
                  <p className="text-body-secondary">→ Demonstriert Chunk-Größe: breites Bild vs. spezifisches Detail.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Sequenziell vs. assoziativ</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Schreibe diese Idee auf zwei Arten: als Schritt-für-Schritt-Sequenz, als freies assoziatives Brainstorming: Wir planen ein neues Batterietauschprogramm."</p>
                  <p className="text-body-secondary">→ Zeigt, wie Ordnung versus laterale Assoziation das Verständnis verändert.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Hin-zu vs. Weg-von</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Formuliere folgende Aussage hin-zu-orientiert um: Wir wollen keine Marktanteile verlieren."</p>
                  <p className="text-body-secondary">→ Hebt motivationale Filter in Sprache hervor.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Schreiber- vs. Leserperspektive</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Schreibe diesen Satz in zwei Versionen: Schreiber-zentriert (wir/unser), Leser-zentriert (ihr/euer): Wir ermöglichen smarteres Batterie-Lifecycle-Management."</p>
                  <p className="text-body-secondary">→ Zeigt, wie Perspektivwechsel Ton und Betonung verschieben.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Bestimmt vs. vorsichtig</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Schreibe diese Aussage auf zwei Arten: Bestimmt, Vorsichtig: Batteriewiederverwendung wird Kosten im Energiesektor senken."</p>
                  <p className="text-body-secondary">→ Zeigt Unterschiede in Commitment und Vertrauensmarkern.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Bereich3;
