import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ResonatingEcho = () => {
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
          
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Resonating Echo: Kommunikation abstimmen, Verbindung schaffen
            </h1>
            
            <div className="space-y-6 text-foreground/90">
              <p className="text-xl leading-relaxed font-medium">
                "Kommunikation gelingt dort, wo Signale ankommen. Resonating Echo hilft euch, eure eigenen Sprach- und Verhaltensmuster zu erkennen – und sie kongruent auf die Kommunikationssysteme anderer abzustimmen. Missverständnisse verwandeln sich in Resonanz."
              </p>

              <section className="mt-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Worum es geht</h2>
                
                <p className="mb-4">
                  Manche in euren Teams sitzen lange an einer E-Mail. Sie suchen nach genau dem richtigen Ton, der richtigen Formulierung. Wie schreibe ich, damit der Empfänger wohlwollend annimmt, zustimmt, gut informiert ist? Diese Suche kostet Zeit – und Energie.
                </p>

                <p className="mb-4">
                  <strong>Der Grund liegt in unterschiedlichen Kommunikationssystemen.</strong> Manche Menschen sind detailorientiert, andere denken im Überblick. Manche eröffnen Meetings mit persönlichen Fragen, andere gehen direkt zur Agenda. Manche brauchen Kontext, andere wollen Ergebnisse. Diese Unterschiede sind Muster.
                </p>

                <p className="mb-4">
                  <strong>Resonating Echo macht diese Muster sichtbar.</strong> Ihr lernt, euer eigenes Kommunikationssystem im Detail zu erkennen. Ihr lernt, die Systeme anderer zu verstehen. Und ihr lernt, eure Kommunikation so abzustimmen, dass sie ankommt – präzise, kongruent, authentisch.
                </p>

                <p className="mb-4">
                  <strong>Das Ziel: Kommunikation, die resoniert.</strong> Klarheit wächst. Zeit an E-Mails verkürzt sich. Verbindung entsteht, Wirkung verstärkt sich.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Für wen wir das entwickelt haben</h2>
                
                <p className="mb-4">
                  Für Teams, die viel kommunizieren – intern, mit Kunden, zwischen Bereichen. Für Führungskräfte, die verstehen wollen, warum manche Botschaften ankommen. Für alle, die ihre Kommunikation wirksamer machen wollen.
                </p>

                <p className="mb-4">
                  <strong>Ihr wollt Reibung in Kommunikation auflösen.</strong> E-Mails werden präziser verstanden. Meetings laufen synchroner. Alle fühlen sich gehört und informiert. Diese Verbesserung entsteht durch das Verstehen unterschiedlicher Muster.
                </p>

                <p className="mb-4">
                  <strong>Ihr wollt eure eigenen Muster verstehen.</strong> Wie kommuniziere ich? Was ist meine natürliche Art? Wo liegen meine Stärken? Large Language Models helfen dabei, diese Muster zu erkennen – präzise, wertfrei.
                </p>

                <p className="mb-4">
                  <strong>Ihr wollt auf andere abstimmen.</strong> Kongruent kommunizieren heißt: verstehen, wie der andere denkt, und die eigene Botschaft so gestalten, dass sie in seinem System ankommt. Resonating Echo zeigt, wie das geht.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Was in Resonating Echo geschieht</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">Phase 1: Eigene Muster erkennen (2 Sessions à 90–120 Min)</h3>
                    
                    <p className="mb-4">
                      <strong>Sprach- und Verhaltensmuster analysieren.</strong> Wir arbeiten mit echten Beispielen aus eurer Kommunikation – E-Mails, Protokolle, Chat-Verläufe. Large Language Models analysieren: Welche Muster zeigen sich? Wie strukturiert ihr Informationen? Welcher Ton dominiert? Wo liegt euer Fokus?
                    </p>

                    <p className="mb-4">
                      <strong>Metaprogramme sichtbar machen.</strong> Seid ihr detailorientiert oder überblicksorientiert? Startet ihr mit Beziehung oder mit Aufgabe? Sucht ihr Optionen oder Strukturen? Diese Metaprogramme steuern, wie ihr kommuniziert – oft unbewusst. Wir machen sie bewusst.
                    </p>

                    <p className="mb-4">
                      <strong>Eigenes Kommunikationssystem verstehen.</strong> Am Ende dieser Phase wisst ihr: So kommuniziere ich. Das ist meine natürliche Art. Das sind meine Stärken. Hier liegen meine Entwicklungsmöglichkeiten.
                    </p>

                    <p className="mb-4">
                      <strong>Ergebnis:</strong> Ein persönliches Kommunikationsprofil. Klarheit über eure eigenen Muster. Verständnis dafür, warum manche Situationen leicht fallen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">Phase 2: Muster anderer erkennen (2 Sessions à 90–120 Min)</h3>
                    
                    <p className="mb-4">
                      <strong>Kommunikation anderer analysieren.</strong> Wir nehmen Beispiele von Kolleginnen, Kollegen, Kunden – E-Mails, Nachrichten, Gesprächsprotokolle. Large Language Models helfen dabei, deren Muster zu erkennen: Wie strukturieren sie? Welcher Ton? Welche Metaprogramme?
                    </p>

                    <p className="mb-4">
                      <strong>Unterschiede verstehen.</strong> Warum hat diese E-Mail einen bestimmten Ton? Wie denkt dieser Kollege? Warum kommt diese Botschaft so an, wie sie ankommt? Oft liegt es an unterschiedlichen Mustern – an verschiedenen Kommunikationssystemen.
                    </p>

                    <p className="mb-4">
                      <strong>Empathie durch Analyse.</strong> Wenn ihr versteht, wie jemand denkt und kommuniziert, entsteht Empathie. Als Einsicht: Aha, so funktioniert dieses System.
                    </p>

                    <p className="mb-4">
                      <strong>Ergebnis:</strong> Klarheit über die Kommunikationssysteme anderer. Verständnis für Unterschiede. Verständigung wird leichter.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">Phase 3: Kongruent abstimmen (2–3 Sessions à 90–120 Min)</h3>
                    
                    <p className="mb-4">
                      <strong>Kommunikation anpassen lernen.</strong> Jetzt kommt die Praxis: Wie schreibe ich eine E-Mail, die bei einem detailorientierten Empfänger ankommt? Wie gestalte ich ein Meeting für jemanden, der direkt zur Sache kommen will? Wie gebe ich Feedback an jemanden, der Optionen braucht?
                    </p>

                    <p className="mb-4">
                      <strong>Large Language Models als Übungspartner.</strong> Wir nutzen LLMs, um verschiedene Kommunikationsstile zu simulieren. Ihr schreibt eine E-Mail – das Modell antwortet aus der Perspektive eines bestimmten Musters. Ihr passt an, probiert, verfeinert. Diese Übung schärft eure Fähigkeit, kongruent abzustimmen.
                    </p>

                    <p className="mb-4">
                      <strong>Vorlagen und Routinen entwickeln.</strong> Für wiederkehrende Situationen entwickelt ihr Vorlagen – flexibel anpassbar. Eine E-Mail-Struktur für detailorientierte Empfänger. Eine Meeting-Eröffnung für aufgabenorientierte Kollegen. Diese Routinen sparen Zeit und erhöhen Wirkung.
                    </p>

                    <p className="mb-4">
                      <strong>Ergebnis:</strong> Die Fähigkeit, eure Kommunikation kongruent auf andere abzustimmen. Zeit an E-Mails verkürzt sich. Klarheit in Meetings wächst. Botschaften kommen an.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">Phase 4: Im Arbeitsalltag verankern (optional, 1–2 Sessions)</h3>
                    
                    <p className="mb-4">
                      <strong>Erfahrungen auswerten.</strong> Was hat funktioniert? Wo gab es Überraschungen? Welche Muster haben sich bestätigt? Wir sammeln eure Erfahrungen aus dem Arbeitsalltag.
                    </p>

                    <p className="mb-4">
                      <strong>Feinabstimmung.</strong> Manche Situationen brauchen besondere Aufmerksamkeit – anspruchsvolle Gespräche, kritisches Feedback, Verhandlungen. Wir verfeinern eure Fähigkeit, auch hier kongruent zu kommunizieren.
                    </p>

                    <p className="mb-4">
                      <strong>Wissenspool aufbauen.</strong> Bewährte Formulierungen, funktionierende Strukturen, hilfreiche Vorlagen – wir dokumentieren, was trägt. Dieser Pool wird für euer Team nutzbar.
                    </p>

                    <p className="mb-4">
                      <strong>Ergebnis:</strong> Verankerte Routinen. Wachsende Sicherheit in der Kommunikation. Ein Wissenspool, aus dem sich alle bedienen können.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Was ihr durch Resonating Echo gewinnt</h2>
                
                <p className="mb-4">
                  Klarheit über eure eigenen Kommunikationsmuster. Verständnis für die Muster anderer. Die Fähigkeit, kongruent abzustimmen – authentisch und wirksam.
                </p>

                <p className="mb-4">
                  <strong>Eure Mitarbeitenden</strong> brauchen weniger Zeit für E-Mails. Sie wissen, wie sie formulieren, damit die Botschaft ankommt. <strong>Eure Teams</strong> erleben präzisere Verständigung. Meetings werden effizienter. Feedback kommt an.
                </p>

                <p className="mb-4">
                  <strong>Eure Führungskräfte</strong> verstehen, warum manche Kommunikation funktioniert. Sie können ihre Botschaften so gestalten, dass sie in unterschiedlichen Systemen resonieren.
                </p>

                <p className="mb-4">
                  <strong>Vor allem:</strong> Kommunikation, die verbindet. Resonanz statt Reibung. Echo statt Leere.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Warum Resonating Echo jetzt</h2>
                
                <p className="mb-4">
                  Kommunikation ist der Kern eurer Zusammenarbeit. Wenn sie fließt, fließt alles. Verständigung spart Zeit, Energie, stärkt Vertrauen. Large Language Models bieten eine neue Möglichkeit: Muster erkennen, analysieren, abstimmen – präzise, wertfrei, praktisch nutzbar.
                </p>

                <p className="mb-4">
                  <strong>Resonating Echo macht diese Möglichkeit zugänglich.</strong> Ihr lernt, eure Kommunikation so zu gestalten, dass sie ankommt – bei jedem, in jeder Situation.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Unsere Rolle</h2>
                
                <p className="mb-4">
                  <strong>Wir analysieren mit euch.</strong> Eure Kommunikation, eure Muster, eure Metaprogramme. Large Language Models helfen dabei – wir interpretieren die Ergebnisse, machen sie verständlich.
                </p>

                <p className="mb-4">
                  <strong>Wir zeigen die Unterschiede.</strong> Zwischen eurem System und dem anderer. Wir machen sichtbar, wo Reibung entsteht – und wie Resonanz wächst.
                </p>

                <p className="mb-4">
                  <strong>Wir üben mit euch.</strong> Kommunikation abstimmen ist eine Fähigkeit. Sie entsteht durch Praxis. Wir schaffen Raum dafür – mit echten Beispielen, mit LLMs als Übungspartnern, mit Feedback.
                </p>

                <p className="mb-4">
                  <strong>Wir verankern die Routinen.</strong> Vorlagen, Strukturen, Wissenspool – wir bauen gemeinsam, was im Arbeitsalltag trägt.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Format und Durchführung</h2>
                
                <p className="mb-4">
                  Resonating Echo passt sich euren Bedarfen an. Typischerweise:
                </p>

                <p className="mb-4">
                  <strong>Phase 1: Eigene Muster erkennen</strong> (2 Sessions à 90–120 Min)<br />
                  <strong>Phase 2: Muster anderer erkennen</strong> (2 Sessions à 90–120 Min)<br />
                  <strong>Phase 3: Kongruent abstimmen</strong> (2–3 Sessions à 90–120 Min)<br />
                  <strong>Phase 4: Im Arbeitsalltag verankern</strong> (optional, 1–2 Sessions)
                </p>

                <p className="mb-4">
                  <strong>Ein Anruf genügt.</strong> Wir klären gemeinsam, wo in eurer Kommunikation Entwicklungspotenzial liegt und was ihr erreichen wollt. Dann gestalten wir Resonating Echo passgenau für euch.
                </p>
              </section>

              <section className="mt-12 p-8 bg-card rounded-lg border border-border">
                <p className="text-xl font-semibold text-foreground">
                  Bereit anzufangen?
                </p>
                <p className="mt-4">
                  Kontaktiert uns für ein unverbindliches Gespräch. Wir zeigen euch, wie Kommunikation resoniert – kongruent, klar, im Arbeitsalltag verankert.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResonatingEcho;
