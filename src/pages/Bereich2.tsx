import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Bereich2 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-6 sm:mb-8">
              Sektor 2 – Kalibrierung & tiefergehende Techniken
            </h1>
            
            <div className="prose prose-lg max-w-none text-body">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Mehrdeutigkeit erkennen</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Identifiziere alle unklaren oder mehrdeutigen Begriffe in diesem Text: 'Wir brauchen innovative, skalierbare, nachhaltige Lösungen für die Zukunft der Energie.'"</p>
                  <p className="text-body-secondary">→ Deckt vage Begriffe auf, die Klärung benötigen.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Gemeinsames Verständnis aufbauen</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Gib für jeden unklaren Begriff mögliche Interpretationen basierend auf Sprachgebrauch. Frage mich dann, wie ich ihn definiere."</p>
                  <p className="text-body-secondary">→ Modelliert Ko-Definition ohne zu implizieren, das Modell 'denke'.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Bestätigungsschleife</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Bevor du fortfährst, frage mich: Habe ich meine Anfrage klar formuliert?"</p>
                  <p className="text-body-secondary">→ Baut eine Feedback-Schleife in den Dialog ein.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Prompt-Verbesserung</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Zeige, wie du diesen Prompt umformulieren würdest, um ihn klarer zu machen: 'Schreibe einen Bericht über Nachhaltigkeit im Energiesektor.'"</p>
                  <p className="text-body-secondary">→ Macht das Modell zum Ko-Designer von Prompts.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Verfeinerungsprotokoll</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Frage mich nach jeder Antwort, ob ich möchte, dass du sie verfeinerst oder erweiterst, bevor wir fortfahren."</p>
                  <p className="text-body-secondary">→ Etabliert einen iterativen Workflow statt einmaliger Antworten.</p>
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

export default Bereich2;
