import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AboutSonaris = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-50 nav-glass border-b border-nav-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex flex-col hover:opacity-80 transition-opacity duration-300">
              <span className="text-xl sm:text-2xl font-bold text-foreground">sonaris</span>
              <div className="frequency-line w-12 sm:w-16 mt-1"></div>
            </Link>
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Zurück
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-headline mb-8">
            Sonaris
          </h1>

          <blockquote className="mb-12 pl-6 border-l-4 border-primary/50 italic text-foreground-secondary">
            <p className="text-lg sm:text-xl leading-relaxed mb-2">
              "Im Raum zwischen menschlichem Denken und maschinellem Verstehen entsteht Bewegung. Gedanken verwandeln sich zu Einsichten, Fragen werden zu Möglichkeiten. Diese sonare Resonanz formt, wie wir künftig arbeiten."
            </p>
            <footer className="text-sm sm:text-base not-italic text-foreground-secondary/80">
              — Elysium Echo
            </footer>
          </blockquote>

          <div className="prose prose-lg max-w-none space-y-6 text-body">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-4">
                Unsere Mission
              </h2>
              <p className="leading-relaxed mb-4">
                Sonare Kommunikation – das Aussenden von Gedanken und Empfangen transformierter Antworten – entsteht dort, wo ihr als Führungskräfte gemeinsam mit euren Teams lernt, mit KI zu arbeiten. Wir befähigen euch, diese Kompetenz durch alle Ebenen eurer Organisation zu tragen. Ihr schafft Raum, in dem eure Teams diese Fähigkeiten entwickeln können.
              </p>
              <p className="leading-relaxed">
                Eure Mitarbeitenden entwickeln bei uns die Fähigkeit, selbstständig zu erkennen, wo KI-Unterstützung ihre Arbeit verbessert. Sie lernen, präzise zu benennen, welche Unterstützung sie brauchen – gegenüber Entwicklern, Systemgestaltern, jenen, die Agenten bauen. Diffuse Wünsche werden zu sonaren Signalen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-4">
                Unser Ansatz
              </h2>
              <p className="leading-relaxed mb-6">
                Drei Säulen tragen eure KI-Integration:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Befähigung eurer Menschen
                  </h3>
                  <blockquote className="mb-4 pl-4 border-l-2 border-primary/30 italic text-foreground-secondary text-sm">
                    "Wenn man das Gefühl hat, dieses System kontrollieren zu können, macht es den meisten Spaß, damit umzugehen. Diese Kontrolle entsteht, wenn ihr versteht, wie das Gespräch mit KI funktioniert." — Christian Pessing
                  </blockquote>
                  <p className="leading-relaxed mb-3">
                    Wir zeigen euren Teams, wie sie mit KI kommunizieren - als Dialogpartner, der auf Fragen antwortet, Feedback verarbeitet, sich anpassen lässt. Vom ersten "Was kannst du für mich tun?" bis zur selbstständigen Erstellung eigener Assistenten entwickelt sich diese Fähigkeit. Jeder findet seinen Einstieg dort, wo er gerade steht. Sessions dauern 90-120 Minuten, wirken nachhaltig durch praktische Anwendung.
                  </p>
                  <p className="leading-relaxed">
                    Dabei arbeiten wir mit dem System als wäre es ein Assistent: Welche Aufgaben kann es übernehmen? Welches Feedback verbessert die Ergebnisse? Wie lassen sich Erinnerungen und Profile gestalten, damit der Output von Anfang an stimmt? Diese dialogische Herangehensweise trainiert nicht nur den Umgang mit KI, sondern schärft auch die eigene Kommunikationsfähigkeit. Aus guter Arbeitsvorbereitung entsteht weniger Nacharbeit - wie bei jeder guten Maschine.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Sichere technische Grundlage
                  </h3>
                  <blockquote className="mb-4 pl-4 border-l-2 border-primary/30 italic text-foreground-secondary text-sm">
                    "Die Plattform muss bereichsübergreifend tragen - von Marketing über Vertrieb bis Engineering. Wenn verschiedene Abteilungen auf der gleichen Grundlage arbeiten können, entstehen die eigentlichen Synergien." — Oliver Andrees
                  </blockquote>
                  <p className="leading-relaxed mb-3">
                    DSGVO-konforme Plattformen fügen sich in eure bestehende Infrastruktur ein. Wir arbeiten primär mit LangDoc, einer Lösung, die eure Anforderungen an Datenschutz und Funktionalität erfüllt. Die Technik formt sich um eure Bedarfe, wächst mit euren Möglichkeiten.
                  </p>
                  <p className="leading-relaxed">
                    Dabei prüfen wir eure bestehende Systemlandschaft: Welches ERP nutzt ihr? Wo liegen eure Daten? Wie sind eure Abteilungen organisiert? Diese Bestandsaufnahme zeigt, wie sich LangDoc nahtlos integrieren lässt. Wir empfehlen auf Basis unserer Erfahrung, ihr entscheidet nach euren Prioritäten. Die Plattform dient eurem Arbeitsfluss, unterstützt die Zusammenarbeit zwischen Abteilungen, ermöglicht gemeinsamen Zugriff auf Assistenten und Wissenspools.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Identifikation echter Potenziale
                  </h3>
                  <blockquote className="mb-4 pl-4 border-l-2 border-primary/30 italic text-foreground-secondary text-sm">
                    "Ihr habt bereits Early Adopters, die das Thema voranbringen wollen. Mit denen fangen wir an, schaffen die ersten Erfolge. Diese Wellen tragen dann weiter ins Unternehmen." — Lukas Sontheimer
                  </blockquote>
                  <p className="leading-relaxed mb-3">
                    Wir analysieren eure Prozesse, finden Ansatzpunkte wo KI-Unterstützung Wert schafft. Repetitive Aufgaben, Wissensdokumentation, Kommunikationsabläufe. Niedrigschwellig beginnend, systematisch vertiefend, messbar in Zeitgewinn und Arbeitsqualität.
                  </p>
                  <p className="leading-relaxed">
                    Dabei beginnen wir mit euren 10-15 Menschen, die vorangehen wollen - Führungskräfte, Teamleiter, jene die bereits experimentieren. Diese Gruppe schafft die ersten messbaren Erfolge, wird sichtbar für andere Abteilungen, weckt Neugier. Parallel identifizieren wir in Marketing, Vertrieb, Engineering jene Prozesse, wo Wiederholungen Zeit fressen oder dokumentiertes Wissen fehlt. Hier entstehen eure ersten KI-gestützten Workflows - konkret, im Alltag verankert, von den Teams selbst mitgestaltet.
                  </p>
                </div>
              </div>

              <p className="leading-relaxed mt-6">
                Diese drei Säulen bauen wir mit euch in 30-Tage-Zyklen auf. Jeder Zyklus beginnt mit Bestandsaufnahme, entwickelt sich durch eure realen Bedarfe, mündet in konkrete Fortschritte. Nach jedem Zyklus entscheidet ihr neu über die Fortsetzung. Diese sonare Resonanz zwischen Angebot und Bedarf hält die Arbeit lebendig.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-4">
                Unsere Arbeitsweise
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong className="font-semibold text-foreground">Ihr bleibt beweglich.</strong> Jeden Monat zeigen wir euch neu, dass die Zusammenarbeit trägt. Euer Vertrag ist monatlich kündbar, und ein Anruf genügt. Diese Freiheit gibt euch Sicherheit – und gibt uns den Ansporn, kontinuierlich Wert zu liefern.
                </p>
                <p className="leading-relaxed">
                  <strong className="font-semibold text-foreground">Wir konzipieren für eure Situation.</strong> Wir klären zunächst, wie viele Menschen und welche Abteilungen beteiligt sind und welche Schmerzpunkte Priorität haben; erst dann entsteht euer Konzept. Jede Organisation hat ihre eigene Topografie – unsere Beratung knüpft an diese Landschaft an, erweitert sie um klare Strukturen und macht Potenziale sichtbar.
                </p>
                <p className="leading-relaxed">
                  <strong className="font-semibold text-foreground">Wir lieben Tools – mit Maß.</strong> Neue Möglichkeiten faszinieren uns, manchmal sogar zu sehr; deshalb gilt die Regel: Erst das Vorhandene nutzen lernen, dann erweitern. Wir zeigen euch die passende Option für jetzt; wenn sie sich bewährt, folgt die nächste. Neuronale Netze lernen Schicht für Schicht – ob biologisch oder künstlich.
                </p>
                <p className="leading-relaxed">
                  <strong className="font-semibold text-foreground">Wir zeigen, während wir sprechen.</strong> Bildschirmteilung. Ihr nennt einen Use Case, wir öffnen die Plattform, ihr seht die Umsetzung. Diese unmittelbare Erfahrung öffnet Türen, die sich durch Beschreibungen nicht öffnen lassen. Das Verstehen geschieht beim Zusehen.
                </p>
                <p className="leading-relaxed">
                  <strong className="font-semibold text-foreground">Wir benennen, was nicht geht.</strong> Wenn ein Tool an Grenzen stößt, sagen wir es. Wenn eine Integration Entwicklungsarbeit braucht, sprechen wir darüber. Wenn wir selbst noch lernen, erwähnen wir es. KI transformiert Arbeitswelten – sie erweitert Möglichkeiten erheblich, hat aber auch ihre Grenzen.
                </p>
                <p className="leading-relaxed">
                  <strong className="font-semibold text-foreground">Ihr testet ohne Risiko.</strong> 30 Tage LangDoc-Demo. Assistenten bauen, Integrationen prüfen, Wissensordner befüllen. Was ihr erstellt, bleibt eures. Wenn die Plattform überzeugt, arbeitet ihr weiter damit. Wenn nicht, habt ihr trotzdem Kompetenz aufgebaut. Dieser Test übersetzt unser Vertrauen in die Technologie in ein konkretes Angebot.
                </p>
                <p className="leading-relaxed">
                  <strong className="font-semibold text-foreground">Wir rechnen nach Pauschale.</strong> Monatlicher Betrag, Fair-Use-Prinzip. Nach intensiven Sessions braucht ihr Zeit zum Integrieren – wir wissen das. Deshalb messen wir Fortschritt. Falls ihr unsere Kapazität überstrapaziert, erwähnen wir es. Das kam bisher nicht vor.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-4">
                Vision
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <strong className="font-semibold text-foreground">Wir kartieren Kommunikationsräume, die sich gerade erst bilden.</strong> Zwischen menschlicher Intuition und maschineller Präzision entsteht ein Resonanzfeld – das dritte Kommunikationssystem. Ein Dialog, in dem beide Seiten ihre Muster miteinander anpassen.
                </p>
                <p className="leading-relaxed">
                  <strong className="font-semibold text-foreground">Arbeit orchestriert sich neu.</strong> KI verschiebt Frequenzen im Alltag. Was zunächst als Effizienzgewinn erscheint, gibt kognitive Kapazität frei. Diese Kapazität ermöglicht tiefere strategische Arbeit und reichere Koordination zwischen Menschen. Wir bereiten eure Organisationen darauf vor – durch Befähigung.
                </p>
                <p className="leading-relaxed">
                  <strong className="font-semibold text-foreground">Jede Organisation entwickelt ihre eigene Signatur mit intelligenten Systemen.</strong> Diese Signatur entsteht durch kontinuierliche Anpassung, durch das Erlernen einer Sprache, die biologische und synthetische Intelligenz verbindet. Wir begleiten diese Entwicklung, indem wir zeigen, wie das Neue ins Bestehende hineinwächst.
                </p>
                <p className="leading-relaxed">
                  <strong className="font-semibold text-foreground">In fünf Jahren wird KI-Kompetenz selbstverständlich sein.</strong> So natürlich wie heute digitale Kommunikation. Wir gestalten mit euch die Übergangsphase – die Phase, in der ihr lernt, mit Systemen zu denken, die zurückdenken. Jeder Assistent, den ihr aufbaut, jede Integration, die ihr testet, verschiebt eure Intelligenz ein Stück weiter. Wir bewegen uns dabei zwischen pragmatischer Umsetzung und systemischem Verständnis.
                </p>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20">
            <h2 className="text-2xl font-bold text-headline mb-4">
              Bereit, die Möglichkeiten zu erkunden?
            </h2>
            <p className="text-body mb-6">
              Lasst uns gemeinsam herausfinden, wie KI eure bereichsübergreifende Zusammenarbeit 
              stärken kann.
            </p>
            <Link to="/">
              <Button className="interactive-hover bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/50">
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
};

export default AboutSonaris;
