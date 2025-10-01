import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Bereich1 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-6 sm:mb-8">
              Sektor 1 – Erstkontakt & Kalibrierung
            </h1>
            
            <div className="prose prose-lg max-w-none text-body">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Was weiß das System über mich?</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Was weißt du über mich?"</p>
                  <p className="text-body-secondary">→ Zeigt, welchen gespeicherten oder abgeleiteten Kontext das System präsentiert.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Wie entsteht diese Information?</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Wie generierst du diese Information?"</p>
                  <p className="text-body-secondary">→ Das Modell erklärt seinen Mechanismus zur Ausgabe-Erzeugung.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Warum sollte ich dieser Antwort vertrauen?</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Warum sollte ich mich auf deine Antwort hier verlassen?"</p>
                  <p className="text-body-secondary">→ Wirft die Frage nach Vertrauenswürdigkeit und Zuverlässigkeit auf.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Was kann das System für mich tun?</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Was kannst du für mich tun?"</p>
                  <p className="text-body-secondary">→ Zeigt, wie das Modell seine Funktionen beschreibt.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Unter welchen Bedingungen funktioniert es gut?</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Unter welchen Bedingungen kannst du diese Aufgabe gut erfüllen?"</p>
                  <p className="text-body-secondary">→ Identifiziert Grenzen und was das Modell vom Nutzer braucht.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Zusammenfassungen mit begrenzter Wortanzahl</h2>
                  <p className="mb-2"><strong>Prompt:</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>"Fasse diesen Text in exakt 8 Worten zusammen: [Text einfügen]"</li>
                    <li>"Schreibe jetzt eine zweite Zusammenfassung in exakt 15 Worten."</li>
                    <li>"Schreibe nun eine dritte Zusammenfassung in exakt 20 Worten."</li>
                    <li>"Erkläre schließlich, wie sich die drei Versionen unterscheiden. Welche Wörter oder Ideen wiederholten sich, welche änderten sich?"</li>
                  </ul>
                  <p className="text-body-secondary">→ Zeigt, wie das Modell bei steigender Wortanzahl zu Standardvokabular tendiert.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-headline mb-4">Arbeitsauftrag → Kalibrierung</h2>
                  <p className="mb-2"><strong>Prompt:</strong> "Ich möchte einen LinkedIn-Post basierend auf dieser Aussage erstellen. Was brauchst du von mir, damit du meinen Prompt überarbeiten und effektiv damit arbeiten kannst?"</p>
                  <p className="text-body-secondary">→ Führt Kalibrierung und Synchronisation ein statt One-Shot-Anweisungen.</p>
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

export default Bereich1;
