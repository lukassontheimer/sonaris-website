import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Transmission = () => {
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
              Transmission: Euren Wissenspool aufbauen und nutzen
            </h1>
            
            <div className="space-y-6 text-foreground/90">
              <p className="text-xl leading-relaxed font-semibold">
                "Wissen entsteht in Gesprächen, in Projekten, in der täglichen Arbeit. Transmission zeigt euch, wie ihr dieses Wissen sammelt, strukturiert und zugänglich macht – als lebendigen Pool, aus dem sich alle bedienen können."
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Worum es geht
              </h2>

              <p className="text-lg leading-relaxed">
                In euren Teams entsteht täglich wertvolles Wissen. Lösungen für Probleme, bewährte Vorgehensweisen, Erkenntnisse aus Projekten, Antworten auf wiederkehrende Fragen. Dieses Wissen lebt in Köpfen, in E-Mails, in Chat-Verläufen – oft schwer auffindbar, wenn man es braucht.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Transmission macht dieses Wissen verfügbar.</strong> Ihr lernt, wie ihr einen eigenen Wissenspool aufbaut – strukturiert, durchsuchbar, lebendig. Wie ihr Informationen sammelt, aufbereitet und so organisiert, dass andere darauf zugreifen können. Wie ihr Large Language Models nutzt, um diesen Pool nutzbar zu machen.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Das Ziel: Wissen wird übertragbar.</strong> Neue Teammitglieder finden Antworten. Bewährte Lösungen bleiben auffindbar. Erfahrung wird zum gemeinsamen Gut – zugänglich, wachsend, im Arbeitsalltag verankert.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Für wen wir das entwickelt haben
              </h2>

              <p className="text-lg leading-relaxed">
                Für Teams, die ihr Wissen systematisch bewahren wollen. Für Organisationen, die verstehen, dass Wissensmanagement kein IT-Projekt ist, sondern eine Kulturfrage. Für alle, die lernen wollen, wie man Wissenspools aufbaut, die wirklich genutzt werden.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Ihr habt Wissen, das verloren geht.</strong> Mitarbeitende gehen, Projekte enden, Erkenntnisse verschwinden. Ein strukturierter Wissenspool bewahrt, was sonst verschwindet.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Ihr habt Wissen, das schwer auffindbar ist.</strong> E-Mail-Archive, Ordnerstrukturen, Dokumentensammlungen – das Wissen ist da, aber niemand findet es rechtzeitig. Transmission zeigt, wie ihr es zugänglich macht.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Ihr wollt Wissen aktiv nutzen.</strong> Ein Wissenspool, der nur liegt, trägt nichts. Ihr lernt, wie Large Language Models diesen Pool lebendig machen – als Assistenten, die Fragen beantworten, Zusammenhänge zeigen, Wissen vermitteln.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Was in Transmission geschieht
              </h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                Phase 1: Wissensquellen identifizieren (1–2 Sessions à 90–120 Min)
              </h3>

              <p className="text-lg leading-relaxed">
                <strong>Was ist euer Wissen?</strong> Wir sammeln gemeinsam: Wo entsteht bei euch wertvolles Wissen? In Projekten? In Kundengesprächen? In technischen Lösungen? In Prozessdokumentationen? Wir erstellen eine Landkarte eurer Wissensquellen.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Wer braucht welches Wissen?</strong> Neue Mitarbeitende brauchen anderes Wissen als erfahrene Kollegen. Vertrieb braucht anderes als Engineering. Wir klären, wer welche Informationen braucht – und in welcher Form.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Erste Prioritäten setzen.</strong> Welches Wissen ist am dringendsten? Wo entsteht der größte Wert durch bessere Verfügbarkeit? Wir beginnen dort, wo der Hebel am größten ist.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Ergebnis:</strong> Eine Karte eurer Wissensquellen. Klarheit über Bedarfe. Erste Prioritäten für den Aufbau eures Pools.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                Phase 2: Wissen sammeln und strukturieren (2–3 Sessions à 90–120 Min)
              </h3>

              <p className="text-lg leading-relaxed">
                <strong>Sammeltechniken lernen.</strong> Wie haltet ihr Wissen fest? Transkripte aus Gesprächen, Dokumentationen aus Projekten, strukturierte Interviews mit Wissensträgerinnen. Wir zeigen euch verschiedene Techniken – ihr wählt, was zu eurer Arbeitsweise passt.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Strukturierung entwickeln.</strong> Wie organisiert ihr das gesammelte Wissen? Thematisch? Nach Bereichen? Nach Aufgaben? Wir entwickeln gemeinsam eine Struktur, die für euer Team Sinn ergibt.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Large Language Models als Werkzeug.</strong> Wir zeigen, wie LLMs beim Strukturieren helfen können. Transkripte zusammenfassen, Themen identifizieren, Zusammenhänge erkennen. Diese Werkzeuge beschleunigen den Aufbau erheblich.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Erste Inhalte aufbereiten.</strong> Wir nehmen echte Beispiele aus eurer Arbeit und bereiten sie gemeinsam auf. So entsteht euer erster Wissenspool – klein, aber nutzbar.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Ergebnis:</strong> Bewährte Sammeltechniken für euer Team. Eine funktionierende Struktur. Erste aufbereitete Inhalte in eurem Pool.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                Phase 3: Wissenspool zugänglich machen (2–3 Sessions à 90–120 Min)
              </h3>

              <p className="text-lg leading-relaxed">
                <strong>Assistenten für euren Pool bauen.</strong> Jetzt wird der Pool lebendig. Wir bauen gemeinsam Assistenten, die auf euer gesammeltes Wissen zugreifen können. Fragen beantworten, Zusammenhänge zeigen, relevante Informationen finden.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Antwortcharakteristik gestalten.</strong> Wie soll der Assistent antworten? Technisch präzise? Einführend für neue Mitarbeitende? Mit Beispielen aus der Praxis? Wir gestalten die Charakteristik passend zu euren Bedarfen.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Nutzung im Team etablieren.</strong> Wie führt ihr euer Team an den Wissenspool heran? Wir entwickeln Routinen: Wann nutzt man ihn? Wie stellt man gute Fragen? Wie trägt man neues Wissen bei?
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Bildschirmteilung.</strong> Ihr nennt eine Frage, wir zeigen live, wie der Assistent darauf zugreift, antwortet, Wissen vermittelt. Diese unmittelbare Erfahrung zeigt das Potenzial.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Ergebnis:</strong> Ein funktionierender Assistent, der auf euren Wissenspool zugreift. Etablierte Routinen für die Nutzung im Team. Erste Erfahrungen mit lebendigem Wissensmanagement.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                Phase 4: Wissenspool pflegen und wachsen lassen (optional, 1–2 Sessions)
              </h3>

              <p className="text-lg leading-relaxed">
                <strong>Pflegeprozesse entwickeln.</strong> Ein Wissenspool lebt, wenn er wächst. Wer trägt neue Erkenntnisse ein? Wann wird aktualisiert? Wie bleibt die Qualität erhalten? Wir entwickeln Prozesse, die im Arbeitsalltag funktionieren.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Qualitätssicherung etablieren.</strong> Welches Wissen gehört in den Pool? Wie wird es überprüft? Wer ist verantwortlich? Wir klären diese Fragen gemeinsam.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Skalierung vorbereiten.</strong> Wenn der erste Pool trägt: Wie erweitert ihr ihn? Welche Bereiche kommen hinzu? Wie organisiert ihr das Wachstum? Wir entwickeln einen Fahrplan.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Ergebnis:</strong> Funktionierende Pflegeprozesse. Qualitätssicherung, die trägt. Vorbereitung für weiteres Wachstum.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Was ihr durch Transmission gewinnt
              </h2>

              <p className="text-lg leading-relaxed">
                Einen lebendigen Wissenspool, der wächst und genutzt wird. Die Fähigkeit, Wissen systematisch zu sammeln, zu strukturieren und zugänglich zu machen. Assistenten, die euer Wissen vermitteln – jederzeit verfügbar, präzise antwortend.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Neue Mitarbeitende</strong> finden Antworten schneller. Einarbeitungszeiten verkürzen sich. <strong>Erfahrene Kolleginnen und Kollegen</strong> müssen wiederkehrende Fragen seltener beantworten. Ihre Zeit wird frei für neue Aufgaben.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Euer gesamtes Team</strong> profitiert von gesammelter Erfahrung. Bewährte Lösungen bleiben auffindbar. Wissen geht bei Wechseln weniger verloren.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Vor allem:</strong> Wissen wird zum gemeinsamen Gut. Transmission trägt eure Erkenntnisse weiter – strukturiert, zugänglich, lebendig.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Warum Transmission jetzt
              </h2>

              <p className="text-lg leading-relaxed">
                Wissen ist euer wertvollstes Gut. Wenn es in Köpfen bleibt oder in Archiven verschwindet, kann es nicht wirken. Large Language Models bieten eine neue Möglichkeit: Wissen zugänglich machen, durchsuchbar, nutzbar – als Assistenten, die antworten wie erfahrene Kolleginnen und Kollegen.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Transmission zeigt euch, wie das geht.</strong> Ihr baut euren eigenen Pool auf, gestaltet ihn nach euren Bedarfen, macht ihn zu einem lebendigen Teil eurer Arbeitskultur.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Unsere Rolle
              </h2>

              <p className="text-lg leading-relaxed">
                <strong>Wir analysieren mit euch.</strong> Eure Wissensquellen, eure Bedarfe, eure Prioritäten. Gemeinsam entwickeln wir die Landkarte.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Wir zeigen die Techniken.</strong> Wie sammelt man Wissen? Wie strukturiert man es? Wie macht man es zugänglich? Wir vermitteln Methoden, die im Arbeitsalltag funktionieren.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Wir bauen mit euch.</strong> Euren ersten Pool, eure ersten Assistenten, eure ersten Routinen. Gemeinsam entsteht, was trägt.
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Wir begleiten das Wachstum.</strong> Pflege, Qualitätssicherung, Skalierung – wir zeigen euch, wie euer Pool lebendig bleibt.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                Format und Durchführung
              </h2>

              <p className="text-lg leading-relaxed">
                Transmission passt sich euren Bedarfen an. Typischerweise:
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Phase 1: Wissensquellen identifizieren</strong> (1–2 Sessions à 90–120 Min)<br />
                <strong>Phase 2: Wissen sammeln und strukturieren</strong> (2–3 Sessions à 90–120 Min)<br />
                <strong>Phase 3: Wissenspool zugänglich machen</strong> (2–3 Sessions à 90–120 Min)<br />
                <strong>Phase 4: Wissenspool pflegen und wachsen lassen</strong> (optional, 1–2 Sessions)
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Ein Anruf genügt.</strong> Wir klären gemeinsam, welches Wissen bei euch bewahrt werden soll und wie ihr es nutzen wollt. Dann gestalten wir Transmission passgenau für euch.
              </p>

              <p className="text-xl leading-relaxed font-semibold mt-12">
                Bereit anzufangen?<br />
                Kontaktiert uns für ein unverbindliches Gespräch. Wir zeigen euch, wie Wissen übertragbar wird – strukturiert, zugänglich, im Arbeitsalltag verankert.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Transmission;
