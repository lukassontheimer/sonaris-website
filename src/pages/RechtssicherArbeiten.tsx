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
              <Badge className="mb-4 sm:mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary text-xs sm:text-sm">
                Rechtssicherheit & Compliance
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-4 sm:mb-6 leading-tight">
                Rechtssicher mit KI-Plattformen arbeiten
              </h1>
              
              <p className="text-base sm:text-lg text-body max-w-3xl mx-auto">
                KI-Risiken erkennen, Compliance-Anforderungen verstehen und rechtssichere Entscheidungen treffen
              </p>
            </div>

            <div className="space-y-8">
              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                    KI-Risiken systematisch erkennen
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-body leading-relaxed">
                    <p>
                      Die Integration von KI-Systemen bringt spezifische Risiken mit sich, die erkannt und bewertet werden müssen. Wir unterstützen euch dabei, potenzielle Risikoquellen zu identifizieren und angemessene Schutzmaßnahmen zu etablieren.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Datenschutzrisiken und DSGVO-Konformität</li>
                      <li>Transparenz und Nachvollziehbarkeit von KI-Entscheidungen</li>
                      <li>Bias und Diskriminierung in Trainingsdaten</li>
                      <li>Sicherheitslücken und unberechtigte Datenzugriffe</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                    Compliance-Anforderungen verstehen
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-body leading-relaxed">
                    <p>
                      Die rechtlichen Rahmenbedingungen für KI-Nutzung entwickeln sich kontinuierlich weiter. Wir helfen euch, die relevanten Vorschriften zu verstehen und in praktische Handlungsanweisungen zu übersetzen.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>EU AI Act und dessen Anforderungen</li>
                      <li>Branchenspezifische Compliance-Standards</li>
                      <li>Dokumentationspflichten und Audit-Trails</li>
                      <li>Vertragliche Vereinbarungen mit KI-Anbietern</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                    Rechtssichere Entscheidungen treffen
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-body leading-relaxed">
                    <p>
                      Die rechtssichere Nutzung von KI erfordert klare Prozesse und Verantwortlichkeiten. Wir entwickeln mit euch praktikable Governance-Strukturen, die Compliance gewährleisten ohne Innovation zu hemmen.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Etablierung von KI-Governance-Strukturen</li>
                      <li>Risikobasierte Freigabeprozesse</li>
                      <li>Schulung und Sensibilisierung der Mitarbeitenden</li>
                      <li>Kontinuierliches Monitoring und Anpassung</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                    Praktische Umsetzung im Alltag
                  </h2>
                  <p className="text-sm sm:text-base text-body leading-relaxed">
                    Rechtssicherheit entsteht nicht durch komplexe Regelwerke, sondern durch praktikable Prozesse, die im Arbeitsalltag gelebt werden. Wir begleiten euch von der Strategie bis zur konkreten Implementierung – mit klaren Checklisten, Entscheidungshilfen und praxisnahen Schulungen, die eure Teams befähigen, KI verantwortungsvoll und rechtssicher einzusetzen.
                  </p>
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
