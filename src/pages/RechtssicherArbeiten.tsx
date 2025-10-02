import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const RechtssicherArbeiten = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-20 sm:pt-24">
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-6 sm:mb-8 leading-tight">
                12 KI-Compliance-Checkpoints: Wie wir euch dabei unterstützen, Menschen zu befähigen und rechtssicher in die KI-Zukunft zu navigieren
              </h1>
              
              <div className="text-left max-w-3xl mx-auto space-y-4 text-base sm:text-lg text-body leading-relaxed">
                <p>
                  Die EU-KI-Verordnung verändert eure Arbeitswelt. Bis August 2027 müssen alle Anforderungen erfüllt sein, viele greifen bereits in eure aktuellen Projekte ein. Eure Teams sind der Schlüssel: Sie müssen KI-Risiken erkennen, Compliance-Anforderungen verstehen und rechtssichere Entscheidungen treffen können.
                </p>
                <p>
                  Wir führen euch durch zwölf entscheidende Checkpoints, die euren Weg zur rechtssicheren KI-Nutzung strukturieren. Ihr beginnt bei euren Menschen, schafft rechtliche Klarheit, sichert eure Verträge ab und entwickelt eine tragfähige Strategie. Jeder Checkpoint baut auf dem vorherigen auf - wie bei jeder soliden Architektur.
                </p>
                <p>
                  Ihr bekommt konkrete Schritte, erprobte Checklisten und transparente Einschätzungen zu Möglichkeiten und Grenzen. Diese Checkpoints entstehen aus unserer praktischen Arbeit mit Unternehmen, die KI strategisch und rechtssicher nutzen wollen. Ihr könnt jeden Schritt direkt in eurem Kontext anwenden und die Ergebnisse messen.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mt-12">
              <Card className="bg-card border-card-border hover:border-primary/40 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8 sm:p-10">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-3xl font-bold text-primary">1</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                      Menschen befähigen
                    </h2>
                    <p className="text-sm sm:text-base text-body">
                      Teams schulen und KI-Kompetenzen aufbauen
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border hover:border-primary/40 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8 sm:p-10">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-3xl font-bold text-primary">2</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                      Rechtliche Klarheit
                    </h2>
                    <p className="text-sm sm:text-base text-body">
                      EU AI Act und Compliance-Anforderungen verstehen
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border hover:border-primary/40 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8 sm:p-10">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-3xl font-bold text-primary">3</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                      Verträge absichern
                    </h2>
                    <p className="text-sm sm:text-base text-body">
                      Rechtssichere Vereinbarungen mit KI-Anbietern
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border hover:border-primary/40 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-8 sm:p-10">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-3xl font-bold text-primary">4</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                      Strategie entwickeln
                    </h2>
                    <p className="text-sm sm:text-base text-body">
                      Tragfähige KI-Governance und langfristige Planung
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RechtssicherArbeiten;
