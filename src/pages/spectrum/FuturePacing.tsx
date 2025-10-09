import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const FuturePacing = () => {
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Future Pacing: Mit der Entwicklung Schritt halten
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground-secondary">
            <p className="text-xl mb-8 italic">
              "KI-Technologie entwickelt sich wöchentlich weiter. Neue Möglichkeiten entstehen, Anwendungsumgebungen verändern sich. Future Pacing hält euch auf dem Stand der Dinge – während eure Teams das Gelernte im Arbeitsalltag verankern."
            </p>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Worum es geht</h2>
              <p className="mb-4">
                Zwischen Workshop-Sessions und Arbeitsalltag liegt eine Brücke. Eure Mitarbeitenden lernen neue Techniken, entwickeln Ideen, wollen ausprobieren. Doch die Zeit dafür ist begrenzt. Gleichzeitig verändert sich die KI-Landschaft kontinuierlich – neue Features, neue Möglichkeiten, neue Ansatzpunkte.
              </p>
              <p className="mb-4">
                <strong>Future Pacing begleitet diese Phase.</strong> Wir geben euren Teams Raum zum Anwenden, Experimentieren, Vertiefen. Wir bauen gemeinsam einen Wissenspool auf, aus dem sich alle bedienen können. Wir halten euch auf dem Stand der Entwicklung – während ihr das Gelernte in eure Arbeit integriert.
              </p>
              <p className="mb-4">
                <strong>Das Ziel: Kontinuierliche Entwicklung statt punktueller Schulung.</strong> Eure Teams bleiben beweglich, können neue Möglichkeiten nutzen, entwickeln eigene Ideen weiter. Schicht für Schicht, im Arbeitsalltag verankert, mit Blick auf das, was kommt.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Für wen wir das entwickelt haben</h2>
              <p className="mb-4">
                Für Teams, die nach den ersten Workshops weitergehen wollen. Für Organisationen, die verstehen, dass KI-Integration ein Prozess ist – kein einmaliges Event. Für alle, die auf dem Stand bleiben wollen, ohne dass jeder die Zeit hat, wöchentliche Entwicklungen zu verfolgen.
              </p>
              <p className="mb-4">
                <strong>Ihr wollt das Gelernte verankern.</strong> Wir empfehlen, dass eure Mitarbeitenden zu Beginn fünf bis zehn Prozent ihrer wöchentlichen Arbeitszeit für intensives Anwenden, Ausprobieren, Experimentieren nutzen können. Future Pacing begleitet diese Phase.
              </p>
              <p className="mb-4">
                <strong>Ihr wollt einen gemeinsamen Wissenspool.</strong> Von Anfang an bauen wir mit euch eine Struktur auf, in die Erkenntnisse, bewährte Prompts, Assistenten, Workflows einfließen. Alle können sich bedienen, alle tragen bei.
              </p>
              <p className="mb-4">
                <strong>Ihr wollt auf dem Stand bleiben.</strong> Wöchentlich verändern sich Anwendungsmöglichkeiten und Umgebungen. Wir übernehmen diese Arbeit – wir sind immer up to date, erkennen frühzeitig, wann es sich lohnt, etwas zusätzlich zu wissen, zu nutzen, zu implementieren.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Was im Future Pacing geschieht</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Wöchentliche Begleitung</h3>
                <p className="mb-4">
                  <strong>Anwendung im Arbeitsalltag unterstützen.</strong> Eure Mitarbeitenden setzen das Gelernte um, stoßen auf Fragen, entwickeln neue Ideen. Wir sind verfügbar – für kurze Klärungen, für Feedback, für Impulse.
                </p>
                <p className="mb-4">
                  <strong>Wissenspool kontinuierlich aufbauen.</strong> Bewährte Prompts, funktionierende Assistenten, nützliche Workflows – wir dokumentieren gemeinsam, was trägt. Dieser Pool wächst mit eurer Erfahrung.
                </p>
                <p className="mb-4">
                  <strong>Neue Entwicklungen einordnen.</strong> Jede Woche entstehen neue Features, neue Möglichkeiten. Wir filtern, bewerten, zeigen euch, was für eure Arbeit relevant ist. Ihr müsst nicht selbst jeden Newsletter lesen, jedes Update verfolgen.
                </p>
                <p className="mb-4">
                  <strong>Technische Umsetzung ermöglichen.</strong> Eure Mitarbeitenden entwickeln Ideen für Agenten, Workflows, Automatisierungen. Wir zeigen ihnen, wie sie technisch Verantwortliche briefen können – präzise, umsetzbar, mit klaren Anforderungen.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Monatliche Vertiefungs-Sessions (90–120 Min)</h3>
                <p className="mb-4">
                  <strong>Erfahrungen sammeln und auswerten.</strong> Was hat im Arbeitsalltag funktioniert? Wo gab es Hürden? Welche neuen Ideen sind entstanden? Wir gehen gemeinsam fünf Schritte voraus, drehen uns um und schauen zurück zum Ausgangspunkt. Diese Perspektive zeigt, wie weit ihr gekommen seid.
                </p>
                <p className="mb-4">
                  <strong>Neue Möglichkeiten praktisch zeigen.</strong> Bildschirmteilung. Wir demonstrieren neue Features, neue Techniken, neue Ansätze – immer mit Blick auf eure konkreten Use-Cases.
                </p>
                <p className="mb-4">
                  <strong>Ideen weiterentwickeln.</strong> Eure Mitarbeitenden bringen eigene Vorschläge ein. Wir entwickeln sie gemeinsam weiter, klären technische Machbarkeit, skizzieren Umsetzungswege.
                </p>
                <p className="mb-4">
                  <strong>Wissenspool pflegen.</strong> Was gehört hinein? Was ist überholt? Wie organisieren wir das Wissen so, dass es auffindbar bleibt? Wir gestalten diese Struktur gemeinsam.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Qualitätssicherung als Grundprinzip</h3>
                <p className="mb-4">
                  <strong>Kontrolle bleibt bei euch.</strong> Wir arbeiten mit einer relativ neuen Technologie. Alle Beteiligten bauen sie mit auf, bringen sie zum Arbeiten. Deshalb gilt: Alle kontrollieren, was herauskommt und was weitergegeben wird. Diese Verantwortung vermitteln wir von Anfang an.
                </p>
                <p className="mb-4">
                  <strong>Verlässlichkeit aufbauen.</strong> Welche Outputs können direkt genutzt werden? Wo braucht es menschliche Überprüfung? Wir entwickeln gemeinsam Routinen für Qualitätssicherung – praktisch, im Arbeitsalltag verankert.
                </p>
                <p className="mb-4">
                  <strong>Grenzen erkennen.</strong> Wann stößt KI an ihre Grenzen? Wann ist menschliches Urteil unersetzbar? Wir schärfen diese Wahrnehmung kontinuierlich.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Was ihr durch Future Pacing gewinnt</h2>
              <p className="mb-4">
                Eure Teams verankern das Gelernte im Arbeitsalltag – mit Raum zum Experimentieren, mit Unterstützung bei Fragen. Ein wachsender Wissenspool, aus dem sich alle bedienen können. Klarheit über neue Entwicklungen, ohne dass jeder die Zeit investieren muss, sie zu verfolgen.
              </p>
              <p className="mb-4">
                <strong>Eure Mitarbeitenden</strong> entwickeln eigene Ideen weiter, lernen, wie sie technische Umsetzung briefen können. <strong>Eure Organisation</strong> bleibt auf dem Stand der Entwicklung, kann neue Möglichkeiten nutzen, wenn sie relevant werden.
              </p>
              <p className="mb-4">
                <strong>Vor allem:</strong> Kontinuität statt Stillstand. Die Brücke zwischen Workshop und Arbeitsalltag trägt – wöchentlich, monatlich, so lange ihr sie braucht.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Warum Future Pacing jetzt</h2>
              <p className="mb-4">
                Nach Workshops entsteht oft Begeisterung – und dann Alltag. Die Zeit für Experimente wird knapp, neue Entwicklungen bleiben unbemerkt, Schwung geht verloren. Future Pacing hält die Bewegung aufrecht.
              </p>
              <p className="mb-4">
                <strong>Diese Begleitung schafft Kontinuität.</strong> Eure Teams integrieren KI Schritt für Schritt in ihre Arbeit, während wir den Blick auf das Kommende halten. Ihr bleibt beweglich.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Unsere Rolle</h2>
              <p className="mb-4">
                <strong>Wir begleiten eure Anwendung.</strong> Wöchentlich verfügbar für Fragen, Feedback, Impulse. Wir unterstützen, wo eure Teams es brauchen.
              </p>
              <p className="mb-4">
                <strong>Wir halten euch auf dem Stand.</strong> Neue Features, neue Möglichkeiten, neue Ansätze – wir filtern, bewerten, zeigen euch, was relevant ist. Diese Arbeit übernehmen wir, damit eure Teams sich auf ihre Arbeit konzentrieren können.
              </p>
              <p className="mb-4">
                <strong>Wir bauen den Wissenspool mit euch.</strong> Gemeinsam dokumentieren wir, was trägt. Gemeinsam pflegen wir diese Struktur. Sie wächst mit eurer Erfahrung.
              </p>
              <p className="mb-4">
                <strong>Wir gehen fünf Schritte voraus.</strong> Dann drehen wir uns um und schauen zurück zu eurem Ausgangspunkt. Diese Perspektive zeigt, wie weit ihr gekommen seid – und wohin die nächsten Schritte führen können.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Format und Durchführung</h2>
              <p className="mb-4">
                Future Pacing passt sich eurem Rhythmus an. Typischerweise:
              </p>
              <p className="mb-4">
                <strong>Wöchentliche Verfügbarkeit</strong> für kurze Klärungen, Feedback, Impulse (asynchron oder in kurzen Calls)
              </p>
              <p className="mb-4">
                <strong>Monatliche Vertiefungs-Sessions</strong> (90–120 Min) für gemeinsame Auswertung, neue Entwicklungen, Ideenentwicklung
              </p>
              <p className="mb-4">
                <strong>Kontinuierlicher Wissenspool-Aufbau</strong> – gemeinsam gepflegt, für alle verfügbar
              </p>
              <p className="mb-4">
                <strong>Dauer:</strong> So lange, wie eure Teams die Begleitung brauchen. Monatlich kündbar. Ein Anruf genügt.
              </p>
              <p className="mb-4">
                <strong>Ein Anruf genügt.</strong> Wir klären gemeinsam, in welcher Phase eure Teams stehen und welche Begleitung sie brauchen. Dann gestalten wir Future Pacing passgenau für euch.
              </p>
            </section>

            <section className="mb-12 p-6 bg-card border border-border rounded-lg">
              <p className="text-lg font-semibold text-foreground mb-2">
                Bereit anzufangen?
              </p>
              <p>
                Kontaktiert uns für ein unverbindliches Gespräch. Wir zeigen euch, wie die Brücke zwischen Workshop und Arbeitsalltag trägt – kontinuierlich, beweglich, mit Blick auf das, was kommt.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FuturePacing;
