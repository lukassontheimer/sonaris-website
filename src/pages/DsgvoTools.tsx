import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const DsgvoTools = () => {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-20 sm:pt-24">
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-4 sm:mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary text-xs sm:text-sm">
                DSGVO & Datenschutz
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-4 sm:mb-6 leading-tight">
                Langdock und andere DSGVO-konformen Plattformen
              </h1>
            </div>

            <div className="space-y-8">
              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                    Langdock: DSGVO als tragende Struktur, nicht als Fußnote
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-body leading-relaxed">
                    <p>
                      Langdock verankert eure Datensouveränität in europäischen Hosting-Umgebungen und öffnet euch den Weg zu dedizierten Bereitstellungen in eurer eigenen Cloud oder im Rechenzentrum. Ihr erweitert eure Governance mit Auftragsverarbeitungsvertrag, individuell konfigurierbaren Aufbewahrungsfristen und präzisen Admin-Policies. Eure Sicherheit wächst auf geprüften Standards wie ISO 27001 und SOC 2 Typ II und verstärkt sich durch Verschlüsselung in Ruhe und Übertragung, durch konsequenten Least-Privilege-Zugriff, durch regelmäßige Penetrationstests und Schwachstellenscans. Eure Datenführung richtet sich klar aus: kein Training mit Nutzungsdaten – sowohl auf Plattformebene als auch bei angebundenen Modellen. SSO/SAML/SCIM, Rollen- und Rechteverwaltung, dokumentierte Prozesse und auditierbare Entscheidungen erweitern eure Steuerbarkeit kontinuierlich.
                    </p>
                    <p className="font-semibold text-foreground">Im Alltag entwickelt sich daraus:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>verlässliche EU-Datenresidenz über Plattform und Modelle,</li>
                      <li>dedizierte Kontrolle über Speicherorte, Zugriffe und Datenketten,</li>
                      <li>Richtlinien, die sich in Handlungen übersetzen – Protokolle, die nachvollziehbar sind – Löschfristen, die greifen,</li>
                      <li>eine einheitliche, konforme API über mehrere Modelle, die Use Cases bündelt und ausrollt.</li>
                    </ul>
                    <p>
                      So wächst eure Arbeit kontinuierlich hin zu sicherer Kollaboration und prüfbarer Entscheidung.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                    Microsoft Copilot
                  </h2>
                  <p className="text-sm sm:text-base text-body leading-relaxed">
                    In gewachsenen Microsoft-365-Landschaften entfaltet Copilot seine Stärke durch präzise Konfiguration. Eure Kontrolle über Datenzugriffe wächst, Speicherfristen werden definiert, Nachvollziehbarkeit entsteht durch Audit-Logs und Rollenmodelle. Datenminimierung lebt ihr im Alltag, indem ihr Aufgaben präzise zuschneidet und sensible Bereiche sauber segmentiert. Daraus entwickelt sich ein klarer Rahmen für skalierte Unternehmensnutzung.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                    Google Gemini (Workspace)
                  </h2>
                  <p className="text-sm sm:text-base text-body leading-relaxed">
                    Gemini baut seine Leistungsfähigkeit in der Collaboration-Suite aus, wenn ihr eure Admin-Regeln eng an Datenschutzrichtlinien ausrichtet. Ihr definiert Speicherfristen, strukturiert sensible Datenräume und erweitert Logging sowie Rechte-Management. Konfiguration vor Skalierung wird zu eurem Leitprinzip. Jede Einführung wächst so Schritt für Schritt hin zu kontrollierter Teamnutzung.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                    Weitere EU-orientierte Plattformen
                  </h2>
                  <p className="text-sm sm:text-base text-body leading-relaxed">
                    EU-orientierte Plattformen stärken euch durch Hosting in Europa, durch DSGVO-Konformität und dedizierte Deployments. Eure Prüfung richtet sich auf Zertifizierungen, dokumentierte TOMs und die klare Ausrichtung „keine Trainingsnutzung von Nutzerdaten". Modelle wählt ihr gezielt mit EU-Residenz, Policies richtet ihr darauf aus. Ein verlässlicher Rahmen entsteht, in dem KI eure Organisation kontinuierlich stärkt.
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

export default DsgvoTools;
