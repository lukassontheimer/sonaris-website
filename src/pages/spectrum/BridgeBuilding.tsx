import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BridgeBuilding = () => {
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
          
          <article className="space-y-8">
            <header>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Bridge Building: KI in eure Infrastruktur integrieren
              </h1>
              <p className="text-xl text-foreground-secondary italic border-l-4 border-primary pl-6 mb-8">
                "Die wertvollsten KI-Anwendungen entstehen dort, wo bestehende Systeme und neue Möglichkeiten sich verbinden. Diese Brücken zu bauen erfordert Verständnis für beide Seiten – eure gewachsene Infrastruktur und die Potenziale von KI."
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Worum es geht</h2>
              <p className="text-foreground-secondary leading-relaxed">
                Eure IT-Infrastruktur ist gewachsen. ERP-Systeme, Datenbanken, Kommunikationstools, Dokumentenmanagement – jedes System erfüllt seine Funktion. Jetzt kommt KI hinzu. Diese Welten können sich verbinden.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                <strong className="text-foreground">Bridge Building schafft diese Verbindung.</strong> Wir analysieren eure bestehende Infrastruktur, identifizieren Ansatzpunkte, zeigen Möglichkeiten. Einzelne Mitarbeitende automatisieren Routinen. Bereichsübergreifend entsteht Wert durch besseren Informationsfluss. Infrastrukturelle Anpassungen tragen diese Integration.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                <strong className="text-foreground">Das Ziel: Eure Systeme arbeiten zusammen.</strong> KI fügt sich ein, erweitert Möglichkeiten, macht Informationen verfügbar. Eure gewachsenen Strukturen bleiben das Fundament. Schicht für Schicht, praktisch umsetzbar, von euren Teams mitgestaltet.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Für wen wir das entwickelt haben</h2>
              <p className="text-foreground-secondary leading-relaxed">
                Für Organisationen, die KI in ihre bestehende Systemlandschaft integrieren möchten. Für IT-Verantwortliche, die verstehen wollen, welche Anpassungen sinnvoll sind. Für Führungskräfte, die bereichsübergreifende Zusammenarbeit stärken wollen.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                <strong className="text-foreground">Ihr habt bereits Systeme, die funktionieren.</strong> Wir bauen Brücken, die eure vorhandene Infrastruktur mit KI-gestützten Möglichkeiten verbinden.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                <strong className="text-foreground">Ihr wollt Klarheit über Machbarkeit.</strong> Wir analysieren gemeinsam mit euch: Was ist unter den gegebenen Bedingungen möglich? Welche infrastrukturellen Veränderungen sind sinnvoll? Welche tragen besonderen Wert? Wir sprechen konkrete Empfehlungen aus.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                <strong className="text-foreground">Ihr braucht Vermittlung zwischen Bereichen.</strong> Wir können diejenigen sein, die zwischen Fachabteilungen und IT vermitteln. Wir sprechen beide Sprachen – die eurer Prozesse und die der Technologie.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Was im Bridge Building geschieht</h2>
              
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Phase 1: Bestandsaufnahme (90–120 Min)</h3>
                <p className="text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">Eure Systemlandschaft verstehen.</strong> Welches ERP nutzt ihr? Wo liegen eure Daten? Welche Kommunikationstools sind im Einsatz? Wie sind eure Abteilungen organisiert? Wir führen gemeinsam eine strukturierte Bestandsaufnahme durch.
                </p>
                <p className="text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">Ansatzpunkte identifizieren.</strong> Wo können Routinen automatisiert werden? Wo lässt sich Wissen besser dokumentieren? Wo kann der Informationsfluss zwischen Bereichen wachsen? Wir sammeln konkrete Beispiele aus eurem Arbeitsalltag.
                </p>
                <p className="text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">Erste Potenziale sichtbar machen.</strong> Wo entstehen Zeitgewinne für einzelne Mitarbeitende? Wo entsteht bereichsübergreifender Wert? Wir zeigen erste Ansatzpunkte.
                </p>
                <p className="text-foreground leading-relaxed font-medium">
                  <strong>Ergebnis:</strong> Eine Karte eurer Infrastruktur. Eine Liste konkreter Ansatzpunkte. Erste identifizierte Potenziale.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Phase 2: Möglichkeiten entwickeln (2–3 Sessions à 90–120 Min)</h3>
                <p className="text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">Technische Machbarkeit klären.</strong> Wir arbeiten direkt mit euren IT-Verantwortlichen zusammen. Welche Schnittstellen existieren bereits? Welche APIs sind verfügbar? Welche Sicherheitsanforderungen gelten? Was lässt sich mit bestehenden Mitteln umsetzen?
                </p>
                <p className="text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">Use-Cases konkretisieren.</strong> Wir nehmen eure identifizierten Potenziale und entwickeln daraus konkrete Anwendungsfälle. Dokumentenautomatisierung, Wissensmanagement, bereichsübergreifende Workflows – wo entsteht der größte Wert?
                </p>
                <p className="text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">Infrastrukturelle Anpassungen bewerten.</strong> Welche Veränderungen sind sinnvoll? Welche tragen besonderen Nutzen? Wir sprechen konkrete Empfehlungen aus – mit Blick auf Aufwand, Nutzen, Umsetzbarkeit.
                </p>
                <p className="text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">Bildschirmteilung.</strong> Ihr nennt einen Use-Case, wir zeigen die technische Umsetzung. Diese unmittelbare Erfahrung öffnet Türen, die sich durch Beschreibungen allein nicht öffnen lassen. Das Verstehen geschieht beim Zusehen.
                </p>
                <p className="text-foreground leading-relaxed font-medium">
                  <strong>Ergebnis:</strong> Konkrete Use-Cases mit technischer Machbarkeitsbewertung. Empfehlungen für infrastrukturelle Anpassungen. Klarheit über nächste Schritte.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Phase 3: Erste Brücken bauen (2–4 Sessions à 90–120 Min)</h3>
                <p className="text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">Pilotprojekte umsetzen.</strong> Wir wählen gemeinsam einen oder zwei Use-Cases aus und setzen sie um. Kleine, messbare Erfolge schaffen Vertrauen und zeigen den Weg für weitere Integration.
                </p>
                <p className="text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">Bereichsübergreifende Workflows gestalten.</strong> Wie fließen Informationen zwischen Marketing, Vertrieb, Engineering? Wie werden Wissenspools befüllt und nutzbar gemacht? Wir bauen die Strukturen, die Zusammenarbeit tragen.
                </p>
                <p className="text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">Vermittlung zwischen Bereichen.</strong> Wir übersetzen zwischen Fachabteilungen und IT. Wir klären Anforderungen, moderieren Abstimmungen, halten die Kommunikation klar.
                </p>
                <p className="text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">Teams befähigen.</strong> Während wir Brücken bauen, zeigen wir euren Teams, wie sie diese nutzen. Schulung geschieht parallel zur Umsetzung.
                </p>
                <p className="text-foreground leading-relaxed font-medium">
                  <strong>Ergebnis:</strong> Funktionierende Pilotprojekte. Erste bereichsübergreifende Workflows. Teams, die verstehen, wie die Integration funktioniert.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Phase 4: Skalierung vorbereiten (optional, 1–2 Sessions)</h3>
                <p className="text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">Erkenntnisse dokumentieren.</strong> Was haben wir gelernt? Welche Muster tragen? Welche Erfahrungen sind wertvoll für die weitere Integration? Wir dokumentieren gemeinsam für die Skalierung.
                </p>
                <p className="text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">Nächste Schritte planen.</strong> Welche Use-Cases folgen? Welche Bereiche kommen hinzu? Wie organisiert ihr die weitere Integration? Wir entwickeln einen Fahrplan.
                </p>
                <p className="text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">Übergabe vorbereiten.</strong> Wann übernehmen eure internen Teams? Was brauchen sie dafür? Wir gestalten den Übergang so, dass Kontinuität gewährleistet bleibt.
                </p>
                <p className="text-foreground leading-relaxed font-medium">
                  <strong>Ergebnis:</strong> Dokumentierte Erkenntnisse. Fahrplan für Skalierung. Vorbereitete Übergabe.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Was ihr durch Bridge Building gewinnt</h2>
              <p className="text-foreground-secondary leading-relaxed">
                Klare Sicht auf eure Infrastruktur und ihre Potenziale. Konkrete, umsetzbare Empfehlungen für Integration. Funktionierende Pilotprojekte, die Wert schaffen.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                <strong className="text-foreground">Einzelne Mitarbeitende</strong> können Routinen automatisieren – Zeitgewinn im Arbeitsalltag. <strong className="text-foreground">Bereichsübergreifende Zusammenarbeit</strong> wird effizienter – Informationen fließen sicherer, schneller, strukturierter.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                <strong className="text-foreground">Eure IT-Verantwortlichen</strong> verstehen, welche Anpassungen sinnvoll sind und warum. <strong className="text-foreground">Eure Fachabteilungen</strong> sehen, wie KI ihre konkrete Arbeit verbessert.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                <strong className="text-foreground">Vor allem:</strong> Eine Brücke zwischen gewachsener Infrastruktur und neuen Möglichkeiten – tragfähig, skalierbar, von euren Teams mitgestaltet.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Warum Bridge Building jetzt</h2>
              <p className="text-foreground-secondary leading-relaxed">
                Viele Organisationen experimentieren mit KI. Integration in bestehende Systeme schafft den Unterschied zwischen Experiment und Transformation. Eure Infrastruktur und KI-Möglichkeiten können zusammenwachsen.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                <strong className="text-foreground">Bridge Building verbindet eure Welten.</strong> Die Brücken, die wir gemeinsam bauen, tragen auch dann, wenn neue Technologien kommen oder sich eure Anforderungen ändern. Ihr bleibt beweglich.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Unsere Rolle</h2>
              <p className="text-foreground-secondary leading-relaxed">
                <strong className="text-foreground">Wir analysieren mit euch.</strong> Eure Infrastruktur, eure Prozesse, eure Potenziale – gemeinsam entwickeln wir die Landkarte.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                <strong className="text-foreground">Wir vermitteln zwischen Bereichen.</strong> Fachabteilungen und IT sprechen oft unterschiedliche Sprachen. Wir übersetzen, moderieren, halten die Kommunikation klar.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                <strong className="text-foreground">Wir arbeiten mit euren IT-Verantwortlichen zusammen.</strong> Direkt, auf Augenhöhe, mit Respekt für eure gewachsenen Strukturen.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                <strong className="text-foreground">Wir bauen mit euch.</strong> Gemeinsam gestalten eure Teams die Integration mit – so entsteht Verständnis und Eigenverantwortung.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Format und Durchführung</h2>
              <p className="text-foreground-secondary leading-relaxed">
                Bridge Building passt sich eurer Situation an. Jede Organisation hat ihre eigene Topografie. Wir gestalten Umfang, Tiefe und Dauer nach euren Bedarfen.
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground font-semibold mb-3">Typischer Ablauf:</p>
                <ul className="space-y-2 text-foreground-secondary">
                  <li>• Phase 1: Bestandsaufnahme (1 Session)</li>
                  <li>• Phase 2: Möglichkeiten entwickeln (2–3 Sessions)</li>
                  <li>• Phase 3: Erste Brücken bauen (2–4 Sessions)</li>
                  <li>• Phase 4: Skalierung vorbereiten (optional, 1–2 Sessions)</li>
                </ul>
              </div>
              <p className="text-foreground-secondary leading-relaxed">
                <strong className="text-foreground">Ein Anruf genügt.</strong> Wir klären gemeinsam, wo eure Infrastruktur steht und was ihr erreichen wollt. Dann entwickeln wir das Bridge-Building-Format passgenau für euch.
              </p>
            </section>

            <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Bereit anzufangen?</h2>
              <p className="text-foreground-secondary leading-relaxed max-w-3xl mx-auto">
                Kontaktiert uns für ein unverbindliches Gespräch. Wir zeigen euch, wie eure bestehende Infrastruktur und KI-Möglichkeiten sich verbinden – Schicht für Schicht, tragfähig, im Arbeitsalltag verankert.
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BridgeBuilding;
