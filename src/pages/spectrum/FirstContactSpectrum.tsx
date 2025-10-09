import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const FirstContactSpectrum = () => {
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
                Kommunikation mit KI
              </h1>
              <p className="text-xl text-foreground-secondary italic border-l-4 border-primary pl-6 py-4">
                "Die Qualität eurer Arbeit mit KI entsteht aus dem Verständnis, mit wem ihr sprecht – und wie Gespräche funktionieren, wenn einer der Gesprächspartner in Wahrscheinlichkeiten denkt."
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Worum es geht</h2>
              <div className="space-y-4 text-foreground-secondary">
                <p>
                  Die meisten in euren Teams haben Erfahrung mit KI gemacht. Eine Frage in ChatGPT gestellt, ein Dokument zusammengefasst, vielleicht ein Bild erstellt. Zwischen diesem ersten Kontakt und verlässlicher Arbeit im Alltag bauen wir eine Brücke. Diese Brücke trägt einen Namen: Verständnis der Technologie.
                </p>
                <p>
                  <strong className="text-foreground">LLMs funktionieren in Wahrscheinlichkeiten.</strong> Sie sind kulturell geprägt, kontextabhängig, arbeiten mit Mustern statt mit festen Regeln. Dieses Verständnis verwandelt eure Experimente in verlässliche Routinen. Es macht aus Versuchen einen Dialogpartner, der mitdenkt – wenn ihr lernt, präzise zu fragen und zu führen.
                </p>
                <p>
                  <strong className="text-foreground">Diese Workshop-Reihe baut genau diese Brücke.</strong> Wir vermitteln euch die Art zu kommunizieren, die KI-Arbeit verlässlich macht. Kommunikation mit und in LLMs – als Führungskompetenz für euch, als Teamfähigkeit für eure Mitarbeitenden, als Grundlage für alles, was später skaliert.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Für wen wir das entwickelt haben</h2>
              <div className="space-y-4 text-foreground-secondary">
                <p>
                  Eure Teams stehen an unterschiedlichen Punkten. Einige haben erste Versuche hinter sich, andere nutzen KI bereits für Dokumentarbeit. Manche suchen ihren Einstieg. Diese Vielfalt macht den Workshop wertvoll.
                </p>
                <p>
                  <strong className="text-foreground">Wir holen jeden dort ab, wo er steht.</strong> Mit vier Leitfragen zu Beginn – <em>Was weißt du? Was willst du wissen? Was ist interessant? Was sollen wir tun?</em> – klären wir den Wissensstand eurer Gruppe. Daraus entsteht die gemeinsame Agenda.
                </p>
                <p>
                  <strong className="text-foreground">Für euch als Führungskräfte</strong>, die eure Teams sicher durch die KI-Landschaft navigieren wollen. <strong className="text-foreground">Für eure Fachbereiche</strong> – Marketing, Produktentwicklung, Operations – die KI pragmatisch in Kommunikation, Dokumentation, Content einsetzen möchten. <strong className="text-foreground">Für Einsteiger und Fortgeschrittene in euren Teams</strong> – die Tiefe passt sich der Gruppe an.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Was in den Sessions geschieht</h2>
              
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Session 1 (90–120 Min): Wie LLMs denken</h3>
                  <p className="text-foreground-secondary italic">
                    "Ein LLM arbeitet in Wahrscheinlichkeiten, trainiert auf kulturellen Mustern. Dieses Verständnis verändert die Arbeitsweise grundlegend."
                  </p>
                  <div className="space-y-3 text-foreground-secondary">
                    <p>
                      Wir erklären euch, wie LLMs wirklich funktionieren. Warum präzise Aufgabenstellung, Rollen und Kontext die Qualität bestimmen. Warum Nachfragen wirksamer ist als der Versuch perfekter erster Prompts.
                    </p>
                    <p>
                      <strong className="text-foreground">Erste Routinefragen etablieren.</strong> Eure Teilnehmenden lernen, das Modell selbst zu befragen: <em>"Was weißt du über mich? Wie arbeitest du? Was brauchst du von mir, damit du mir helfen kannst?"</em> Diese Fragen schaffen Klarheit.
                    </p>
                    <p>
                      <strong className="text-foreground">Prompting als Dialog.</strong> Wir zeigen euch, wie Feedback-Schleifen direkt im Chat die Antwortqualität verbessern. Strukturierte Gesprächsführung entwickelt sich Schritt für Schritt.
                    </p>
                    <p>
                      <strong className="text-foreground">Erste Dokumentarbeit.</strong> Wie werden eure Transkripte, Protokolle, längere Texte nutzbar? Wir arbeiten mit echten Beispielen aus eurem Arbeitsalltag. Markdown statt PDF. Token-Limits verstehen. Lange Chats managen.
                    </p>
                    <p className="pt-2">
                      <strong className="text-foreground">Ergebnis:</strong> Eine persönliche Prompting-Checkliste für jeden Teilnehmenden. Erste Feedback-Routinen. Klarheit darüber, was bis Session 2 vorbereitet werden soll.
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Session 2 (90–120 Min): Personalisierung und eigene Assistenten</h3>
                  <div className="space-y-3 text-foreground-secondary">
                    <p>
                      <strong className="text-foreground">Review der Praxis.</strong> Was hat in euren Teams funktioniert? Wo gab es Hürden? Wir korrigieren gemeinsam, verfeinern die Techniken.
                    </p>
                    <p>
                      <strong className="text-foreground">Personalisierung mit Bedacht.</strong> Memory-Funktionen, Profile, Erinnerungen – wie steuert ihr das Verhalten des Modells verantwortungsvoll? Wann macht Incognito-Modus Sinn? Wir zeigen euch die Landschaft.
                    </p>
                    <p>
                      <strong className="text-foreground">Custom GPTs bauen.</strong> Aus euren wiederkehrenden Aufgaben entsteht ein eigener Assistent. Wir nehmen einen realen Use-Case aus eurer Arbeit, strukturieren Instruktionen als Markdown, testen, teilen das Ergebnis. Hier wird aus Theorie euer Werkzeug.
                    </p>
                    <p>
                      <strong className="text-foreground">Sichere Dokumentarbeit.</strong> Wie arbeitet ihr mit sensiblen Inhalten? Workspace-Ansätze, Anonymisierung, Gatekeeper-Strategien – Datenschutz wird für euch praktisch.
                    </p>
                    <p className="pt-2">
                      <strong className="text-foreground">Ergebnis:</strong> Ein funktionierender Custom GPT für euren konkreten Use-Case. Ein Anwendungsleitfaden für euer Team. Eine sichere Doku-Routine.
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Session 3 (optional, 90–120 Min): Ausblick auf Agenten-Workflows</h3>
                  <div className="space-y-3 text-foreground-secondary">
                    <p>
                      <strong className="text-foreground">Wann machen Agenten für euch Sinn?</strong> Wenn eure Input-Pools klar sind, Rollen definiert, Prozesse wiederholbar. Wir zeigen euch Entscheidungskriterien – von Content-Pipelines bis Code-Reviews.
                    </p>
                    <p>
                      <strong className="text-foreground">Qualitätssicherung von Anfang an.</strong> Guardrails, Quellenprüfung, Trust Anchors – wie baut ihr Verlässlichkeit in eure automatisierten Workflows ein?
                    </p>
                    <p className="pt-2">
                      <strong className="text-foreground">Ergebnis:</strong> Entwurf eines Agenten-Playbooks oder einer Mini-Pipeline, die euer Team weiterentwickeln kann.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Was eure Teilnehmenden mitnehmen</h2>
              <div className="space-y-4 text-foreground-secondary">
                <p>
                  Verständliche, praxistaugliche Prompt- und Feedbackroutinen – sofort anwendbar in eurem Arbeitsalltag. Klarer Umgang mit Grenzen: Halluzinationen, kulturelle Prägungen, Token-Limits. Sicherer Workflow mit euren Dokumenten und Transkripten, inklusive Markdown-Strategie.
                </p>
                <p>
                  Ein erster eigener Assistent für eure wiederkehrenden Aufgaben. Grundlage für spätere Agenten-Setups, wenn euer Team bereit ist zu skalieren.
                </p>
                <p>
                  <strong className="text-foreground">Vor allem:</strong> Ein gemeinsames Fundament für eure Organisation. Führungskräfte und Teams lernen dieselbe Sprache, dieselben Routinen, dieselben Qualitätskriterien. Diese gemeinsame Basis trägt euren KI-Einsatz später – verlässlich, bereichsübergreifend, im Arbeitsalltag verankert.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Warum dieser Workshop jetzt</h2>
              <div className="space-y-4 text-foreground-secondary">
                <p>
                  Eure Teams experimentieren bereits. Manche erfolgreich, manche suchen noch ihren Weg. Eine gemeinsame Grundlage schafft einheitliche Qualität, einheitliche Sicherheitsstandards, einheitliche Erwartungen in eurer Organisation.
                </p>
                <p>
                  <strong className="text-foreground">Dieser Workshop schafft dieses gemeinsame Fundament für euch.</strong> Die Denkweise, die wir vermitteln, trägt auch dann, wenn neue Modelle kommen oder sich eure Anforderungen ändern. Ihr bleibt beweglich.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Format und Durchführung</h2>
              <div className="space-y-4 text-foreground-secondary">
                <p>
                  Drei Sessions à 90–120 Minuten. Session 3 ist optional. Online, interaktiv, mit Live-Übungen aus eurem Arbeitskontext. Adaptive Tiefe – angepasst an den Wissensstand eurer Gruppe. Konkrete Outputs nach jeder Session.
                </p>
                <p>
                  <strong className="text-foreground">Ein Anruf genügt.</strong> Wir klären gemeinsam, wo eure Teams stehen und was sie brauchen. Dann bauen wir die Workshop-Reihe passgenau für euch.
                </p>
              </div>
            </section>

            <section className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
              <p className="text-xl font-semibold text-foreground mb-4">Bereit anzufangen?</p>
              <p className="text-foreground-secondary">
                Kontaktiert uns für ein unverbindliches Gespräch. Wir zeigen euch, wie Kommunikation mit KI zur Kompetenz wird – Schicht für Schicht, im Arbeitsalltag verankert.
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FirstContactSpectrum;
