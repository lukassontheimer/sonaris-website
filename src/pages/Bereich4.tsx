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
              Sektor 4 – Kritisches Denken & Reflexion
            </h1>
            
            <div className="prose prose-lg max-w-none text-body">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Wahrheit vs. Plausibilität</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Erkläre den Unterschied zwischen einer wahren und einer plausiblen Antwort. Gib jeweils ein Beispiel."</p>
                  <p className="text-body-secondary">→ Hebt Wahrheit vs. Wahrscheinlichkeit in LLM-Ausgaben hervor.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Praktisches Denken</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Wenn ein Unternehmen 5 Stunden in das Erlernen eines neuen Tools investiert und danach täglich 30 Minuten spart, nach wie vielen Arbeitstagen amortisiert sich die Investition? Zeige deine Überlegungen Schritt für Schritt."</p>
                  <p className="text-body-secondary">→ Demonstriert mehrstufiges Denken in praktischem Kontext.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Mehrdeutigkeits-Erkundung</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Liste drei mögliche Interpretationen des Wortes Merkur auf und erläutere jede kurz."</p>
                  <p className="text-body-secondary">→ Zeigt Umgang mit mehrdeutigem Input.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Regressionstest</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Wiederhole deine letzte Zusammenfassung dreimal. Vergleiche sie und zeige an, ob sie sich zu gängigen Formulierungen hin bewegt haben."</p>
                  <p className="text-body-secondary">→ Deckt Regression zum statistischen Mittelwert auf.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Anti-Standardphrasen</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Schreibe deinen letzten Text um, aber vermeide Phrasen wie 'im Durchschnitt', 'insbesondere', 'beispielsweise'."</p>
                  <p className="text-body-secondary">→ Trainiert Bewusstsein für LLM-typische Füllwörter.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Editorrolle</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Markiere, welche Teile deines letzten Textes noch menschliche Bearbeitung benötigen würden, um einen persönlichen Stil zu bewahren."</p>
                  <p className="text-body-secondary">→ Macht die menschliche Rolle als Editor explizit.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Zukunfts-Selbstreflexion</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Stell dir vor, es ist ein Jahr später und du fasst zusammen, was ich aus diesen Übungen gelernt habe. Schreibe diese Zusammenfassung in drei Sätzen."</p>
                  <p className="text-body-secondary">→ Endet die Sequenz mit einer leichten, reflektierenden Note.</p>
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

export default Bereich4;
