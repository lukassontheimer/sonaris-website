import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Onboarding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/spectrum">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Spectrum
            </Button>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Onboarding: Eure Arbeitsumgebung mit KI
          </h1>
          
          <div className="space-y-8 text-foreground-secondary">
            <p className="text-lg italic border-l-4 border-primary pl-6 py-2">
              "Eine gut eingerichtete Arbeitsumgebung entscheidet darüber, ob KI im Alltag trägt oder im Experiment stecken bleibt. Personalisierung, System-Prompts, Workspace-Struktur – das wird euer Fundament."
            </p>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Worum es geht</h2>
              <div className="space-y-4">
                <p>
                  Eure Teams haben vielleicht schon mit ChatGPT, Copilot oder anderen LLM-Oberflächen gearbeitet. Dokumente erstellt, Fragen gestellt, erste Ergebnisse erzielt. Zwischen diesen ersten Versuchen und einer Arbeitsumgebung, die verlässlich funktioniert, bauen wir die Brücke.
                </p>
                <p>
                  <strong className="text-foreground">Eine LLM-Oberfläche ist mehr als ein Chatfenster.</strong> Projekte, Workspaces, Memory-Einstellungen, System-Prompts, Custom GPTs – diese Ebenen bestimmen, wie präzise, wie sicher und wie effizient eure Teams arbeiten können. Wer diese Struktur versteht, gewinnt Kontrolle. Wer sie gestaltet, schafft Routinen.
                </p>
                <p>
                  <strong className="text-foreground">Dieses Onboarding macht aus einer Oberfläche euren Arbeitsraum.</strong> Wir zeigen euch, wie ihr Langdock – oder eine andere Plattform – so einrichtet, dass sie eure Anforderungen an Datenschutz, Teamarbeit und Arbeitsqualität erfüllt. Schicht für Schicht, praktisch anwendbar, im Arbeitsalltag verankert.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Für wen wir das entwickelt haben</h2>
              <div className="space-y-4">
                <p>
                  Für Teams, die KI verlässlich in ihren Arbeitsalltag integrieren wollen. Für Führungskräfte, die ihren Mitarbeitenden eine sichere, strukturierte Umgebung bereitstellen möchten. Für alle, die verstehen wollen, wie eine professionelle KI-Arbeitsumgebung aufgebaut ist.
                </p>
                <p>
                  <strong className="text-foreground">Datenschutz ist euch wichtig.</strong> Deshalb arbeiten wir primär mit Langdock – einer DSGVO-konformen Plattform, die sich in eure bestehende Infrastruktur einfügt. Eure Daten bleiben eure Daten. Eure Workflows bleiben eure Workflows.
                </p>
                <p>
                  <strong className="text-foreground">Ihr wollt nicht nur nutzen, sondern gestalten.</strong> Personalisierte Einstellungen, System-Prompts, Workspace-Strukturen – wir zeigen euch, wie ihr diese Ebenen so konfiguriert, dass sie eure Arbeitsweise unterstützen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Was im Onboarding geschieht</h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Session 1 (90–120 Min): Die Landschaft verstehen</h3>
                  <div className="space-y-3">
                    <p>
                      <strong className="text-foreground">Wie ist eine LLM-Oberfläche aufgebaut?</strong> Wir zeigen euch die Architektur: Chats, Projekte, Workspaces, Assistenten, Wissenspools. Wo liegen eure Daten? Wie organisiert ihr Zugriffsrechte? Wie strukturiert ihr Teamarbeit?
                    </p>
                    <p>
                      <strong className="text-foreground">Bildschirmteilung.</strong> Ihr nennt einen Use-Case, wir öffnen die Plattform, ihr seht die Umsetzung. Diese unmittelbare Erfahrung öffnet Türen, die sich durch Beschreibungen allein nicht öffnen lassen.
                    </p>
                    <p>
                      <strong className="text-foreground">Erste Einrichtung.</strong> Wir gehen gemeinsam durch: Account-Einstellungen, Datenschutz-Optionen, Memory-Funktionen. Was speichert die Plattform? Was löscht ihr? Wann arbeitet ihr im Incognito-Modus?
                    </p>
                    <p className="font-semibold text-foreground">
                      Ergebnis: Eure Teams verstehen die Topografie der Plattform. Jeder hat seinen Account eingerichtet. Die Grundlagen für sichere Arbeit sind gelegt.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Session 2 (90–120 Min): Personalisierung und System-Prompts</h3>
                  <div className="space-y-3">
                    <p>
                      <strong className="text-foreground">System-Prompts gestalten.</strong> Diese Anweisungen bestimmen von Anfang an, wie das LLM mit euch arbeitet. Welche Tonalität? Welche Ausgabeformate? Welche Qualitätskriterien? Wir zeigen euch, wie ihr System-Prompts so schreibt, dass sie eure Arbeitsweise widerspiegeln.
                    </p>
                    <p>
                      <strong className="text-foreground">Personalisierte Einstellungen.</strong> Profile, Erinnerungen, bevorzugte Arbeitsweisen – wie steuert ihr das Verhalten des Modells verantwortungsvoll? Wir arbeiten mit echten Beispielen aus eurem Arbeitsalltag.
                    </p>
                    <p>
                      <strong className="text-foreground">Workspace-Struktur aufbauen.</strong> Wie organisiert ihr Projekte? Wie teilt ihr Assistenten im Team? Wie befüllt ihr Wissenspools, damit sie nützlich werden? Wir bauen gemeinsam eure erste Struktur.
                    </p>
                    <p className="font-semibold text-foreground">
                      Ergebnis: Eure Teams haben personalisierte System-Prompts. Eure Workspaces sind strukturiert. Die Plattform arbeitet so, wie ihr es braucht.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Session 3 (optional, 90–120 Min): Assistenten und Team-Workflows</h3>
                  <div className="space-y-3">
                    <p>
                      <strong className="text-foreground">Custom GPTs für wiederkehrende Aufgaben.</strong> Wir nehmen einen konkreten Use-Case aus eurer Arbeit – Dokumentation, Content-Erstellung, Protokollierung – und bauen gemeinsam einen Assistenten. Instruktionen strukturieren, testen, im Team teilen.
                    </p>
                    <p>
                      <strong className="text-foreground">Wissenspools nutzen.</strong> Wie macht ihr interne Dokumente, Richtlinien, Prozessbeschreibungen für das LLM nutzbar? Wir zeigen euch, wie ihr Wissen organisiert, damit es abrufbar wird.
                    </p>
                    <p>
                      <strong className="text-foreground">Team-Zusammenarbeit gestalten.</strong> Wie arbeiten mehrere Personen in derselben Umgebung? Wie teilt ihr Assistenten, Prompts, Ergebnisse? Wir zeigen euch die Möglichkeiten.
                    </p>
                    <p className="font-semibold text-foreground">
                      Ergebnis: Ein funktionierender Assistent für euren Use-Case. Ein befüllter Wissenspool. Klare Routinen für Teamarbeit.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Was eure Teilnehmenden mitnehmen</h2>
              <div className="space-y-4">
                <p>
                  Ein vollständig eingerichteter Account auf der Plattform eurer Wahl. Personalisierte System-Prompts, die eure Arbeitsweise widerspiegeln. Strukturierte Workspaces für Projekte und Teams. Sichere Routinen für den Umgang mit sensiblen Daten.
                </p>
                <p>
                  <strong className="text-foreground">Vor allem:</strong> Die Fähigkeit, eure Arbeitsumgebung selbstständig zu gestalten. Ihr seid nicht abhängig von vorgegebenen Strukturen. Ihr baut die Umgebung, die eure Arbeit trägt.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Warum dieses Onboarding jetzt</h2>
              <div className="space-y-4">
                <p>
                  Viele Teams nutzen KI-Tools bereits – aber ohne Struktur. Chats stapeln sich, Einstellungen bleiben auf Standard, Datenschutz wird zur Unsicherheit. Eine professionell eingerichtete Umgebung schafft Klarheit, Sicherheit, Effizienz.
                </p>
                <p>
                  <strong className="text-foreground">Dieses Onboarding legt das Fundament.</strong> Die Struktur, die wir gemeinsam aufbauen, trägt auch dann, wenn neue Features kommen oder sich eure Anforderungen ändern. Ihr bleibt beweglich.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Format und Durchführung</h2>
              <div className="space-y-4">
                <p>
                  Drei Sessions à 90–120 Minuten. Session 3 ist optional. Online, interaktiv, mit Live-Konfiguration eurer Accounts. Bildschirmteilung. Adaptive Tiefe – angepasst an den Wissensstand eurer Gruppe.
                </p>
                <p>
                  <strong className="text-foreground">Wir arbeiten primär mit Langdock</strong> – DSGVO-konform, in eure Infrastruktur integrierbar. Falls ihr eine andere Plattform nutzt, passen wir das Onboarding entsprechend an.
                </p>
                <p>
                  <strong className="text-foreground">Ein Anruf genügt.</strong> Wir klären gemeinsam, welche Plattform für euch passt und was eure Teams brauchen. Dann bauen wir das Onboarding passgenau für euch.
                </p>
              </div>
            </section>

            <section className="pt-8 border-t border-border">
              <p className="text-xl font-semibold text-foreground mb-4">
                Bereit anzufangen?
              </p>
              <p>
                Kontaktiert uns für ein unverbindliches Gespräch. Wir zeigen euch, wie aus einer Oberfläche eure Arbeitsumgebung wird – strukturiert, sicher, im Arbeitsalltag verankert.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Onboarding;
