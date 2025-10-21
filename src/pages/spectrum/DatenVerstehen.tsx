import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

const DatenVerstehen = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 150) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const tocSections = [
    { id: "ueberblick", title: "Überblick" },
    { id: "einfuehrung", title: "Einführung in moderne Datenkonzepte" },
    { id: "datenanalyse", title: "Wie funktioniert Datenanalyse?" },
    { id: "visualisierung", title: "Datenvisualisierungen" },
    { id: "data-science", title: "Theorie und Methoden der Data Science" },
    { id: "anwendung", title: "Anwendung der Data Science" },
    { id: "tools", title: "Datentools und Programmiersprachen" },
    { id: "joblandschaft", title: "Die Daten-Joblandschaft" },
    { id: "ausblick", title: "Ausblick" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/spectrum/ki-grundlagen">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to KI Grundlagen
            </Button>
          </Link>

          <div className="flex gap-8">
            {/* Sticky Table of Contents */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h2 className="text-sm font-semibold text-foreground mb-4">
                  Inhaltsverzeichnis
                </h2>
                <nav className="space-y-2">
                  {tocSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left text-sm py-1.5 px-3 rounded transition-colors ${
                        activeSection === section.id
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 prose prose-lg max-w-none prose-invert">
              <h1 className="text-4xl font-bold mb-8">Daten verstehen</h1>
            
              <p className="text-xl mb-6">Grundlagen für die Arbeit mit KI</p>

              <section id="ueberblick">
                <h2 className="text-3xl font-bold mt-12 mb-6">Überblick: Warum Daten das Herzstück der digitalen Welt sind</h2>

            <p className="mb-4">
              Daten sind das Herzstück der digitalen Welt – doch wie entstehen sie, was steckt dahinter und wie können wir sie sinnvoll nutzen? Diese Frage begleitet uns durch eine Zeit, in der digitale Technologien nicht mehr Randerscheinung, sondern Grundlage unseres Alltags sind. Ob ihr morgens euer Smartphone entsperrt, eine Suchanfrage stellt oder mit einem Sprachassistenten interagiert – hinter jeder dieser Handlungen stehen Daten. Sie werden erhoben, verarbeitet, analysiert und in Entscheidungen übersetzt.
            </p>

            <p className="mb-4">
              In diesem Artikel lernt ihr die Grundlagen moderner Datentechnologien kennen: von der Datenerhebung und -analyse über Big Data und Künstliche Intelligenz bis hin zu Datenvisualisierung und Data Science. Ihr erfahrt, wie Daten unsere Gesellschaft, Wirtschaft und Entscheidungsprozesse prägen – und welche spannenden Berufsfelder sich daraus ergeben. Ob ihr neu in die Welt der Daten eintaucht oder eure digitalen Kompetenzen erweitern wollt – dieser Artikel bietet den idealen Einstieg.
            </p>

            <p className="mb-4">
              Besonders wichtig: Wir nähern uns dem Thema aus einer Perspektive, die für eure praktische Arbeit relevant ist. Viele von euch haben vielleicht schon erste Erfahrungen mit ChatGPT, Gemini, Grok oder anderen Large Language Models (LLMs) gemacht. Ihr habt Fragen gestellt, Texte erstellen lassen, erste Ergebnisse erzielt. Doch zwischen diesen ersten Versuchen und einem fundierten Verständnis dessen, was dort eigentlich passiert, liegt eine wichtige Lernstrecke. Dieser Artikel baut diese Brücke.
            </p>

                <p className="mb-4">
                  Wir beginnen mit den Grundlagen: Was sind Daten überhaupt? Wie werden sie erhoben und strukturiert? Von dort aus bewegen wir uns Schritt für Schritt zu komplexeren Konzepten – immer mit dem Ziel, dass ihr versteht, wie moderne KI-Systeme funktionieren und wie ihr sie sinnvoll in euren Arbeitsalltag integrieren könnt.
                </p>
              </section>

              <hr className="my-8" />

              <section id="einfuehrung">
                <h2 className="text-3xl font-bold mt-12 mb-6">Einführung in moderne Datenkonzepte</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Was sind Daten?</h3>

            <p className="mb-4">
              Beginnen wir ganz am Anfang. Daten sind zunächst einmal Informationen, die in einer Form vorliegen, die erfasst, gespeichert und verarbeitet werden kann. Das klingt abstrakt, wird aber sofort konkret, wenn wir uns Beispiele anschauen:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li><strong>Strukturierte Daten</strong>: Eine Excel-Tabelle mit Kundendaten – Name, Adresse, Kaufdatum, Betrag. Jede Information hat ihren festen Platz in einer Spalte.</li>
              <li><strong>Unstrukturierte Daten</strong>: Ein E-Mail-Text, ein Foto, eine Sprachnachricht. Hier gibt es keine feste Struktur, die Information liegt "frei" vor.</li>
              <li><strong>Semi-strukturierte Daten</strong>: Eine JSON-Datei oder ein XML-Dokument – sie haben eine gewisse Struktur, sind aber flexibler als eine klassische Datenbanktabelle.</li>
            </ul>

            <p className="mb-4">
              Diese Unterscheidung ist wichtig, denn unterschiedliche Datentypen erfordern unterschiedliche Werkzeuge und Methoden zur Verarbeitung. Eine klassische Datenbank ist perfekt für strukturierte Daten – Namen, Zahlen, Datumsangaben. Aber was macht ihr mit tausenden E-Mails, Kundenrezensionen oder Bildern? Hier kommen moderne Technologien ins Spiel.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Von Daten zu Informationen zu Wissen</h3>

            <p className="mb-4">
              Daten allein sind noch nicht wertvoll. Erst wenn wir sie in einen Kontext setzen, werden sie zu Informationen. Und erst wenn wir Informationen verstehen, interpretieren und anwenden können, entsteht Wissen.
            </p>

            <p className="mb-4">
              Ein Beispiel: Die Zahl "42" ist ein Datum. Erst wenn ihr wisst, dass es sich um die Anzahl verkaufter Produkte am gestrigen Tag handelt, wird daraus eine Information. Und erst wenn ihr diese Information mit den Verkaufszahlen der Vorwoche vergleicht, einen Trend erkennt und daraus eine Entscheidung ableitet – etwa mehr Personal für den Kundenservice einzuplanen – entsteht Wissen.
            </p>

            <p className="mb-4">
              Dieser Prozess – von Daten über Informationen zu Wissen – ist der Kern dessen, was wir mit Datenanalyse, Data Science und letztlich auch mit KI erreichen wollen. Wir wollen nicht einfach nur Daten sammeln, sondern sie so verarbeiten, dass sie uns helfen, bessere Entscheidungen zu treffen.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Datenquellen: Woher kommen die Daten?</h3>

            <p className="mb-4">In der digitalen Welt entstehen Daten auf vielfältige Weise:</p>

            <ul className="list-disc pl-6 mb-4">
              <li><strong>Transaktionsdaten</strong>: Jeder Kauf, jede Buchung, jede Überweisung erzeugt Daten.</li>
              <li><strong>Sensordaten</strong>: Smartphones, Fitnesstracker, Industriemaschinen – überall messen Sensoren Temperatur, Bewegung, Standort.</li>
              <li><strong>Interaktionsdaten</strong>: Jeder Klick auf einer Website, jede Suchanfrage, jedes "Like" in sozialen Medien wird erfasst.</li>
              <li><strong>Textdaten</strong>: E-Mails, Dokumente, Chat-Verläufe, Kundenbewertungen.</li>
              <li><strong>Bild- und Videodaten</strong>: Fotos, Überwachungskameras, medizinische Bildgebung.</li>
              <li><strong>Sprachdaten</strong>: Telefonate, Sprachassistenten, Podcasts.</li>
            </ul>

            <p className="mb-4">
              Die Menge dieser Daten wächst exponentiell. Schätzungen zufolge werden weltweit jeden Tag mehrere Exabyte (1 Exabyte = 1 Million Terabyte) an Daten erzeugt. Diese schiere Menge hat einen eigenen Begriff geprägt: Big Data.
            </p>

            {/* Remaining content continues below */}
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Big Data: Wenn die Datenmenge zur Herausforderung wird</h3>

            <p className="mb-4">
              Big Data beschreibt Datenmengen, die so groß, komplex oder schnelllebig sind, dass herkömmliche Datenverarbeitungsmethoden an ihre Grenzen stoßen. Drei Eigenschaften prägen Big Data – oft als die "3 Vs" bezeichnet:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li><strong>Volume (Volumen)</strong>: Die schiere Menge an Daten.</li>
              <li><strong>Velocity (Geschwindigkeit)</strong>: Wie schnell Daten erzeugt und verarbeitet werden müssen.</li>
              <li><strong>Variety (Vielfalt)</strong>: Die unterschiedlichen Datentypen und -formate.</li>
            </ul>

            <p className="mb-4">
              Manche fügen noch weitere Vs hinzu: Veracity (Wahrhaftigkeit, Qualität der Daten) und Value (Wert, den die Daten liefern können).
            </p>

            <p className="mb-4">
              Ein praktisches Beispiel: Stellt euch eine Wissensplattform in einem Unternehmen vor. Täglich entstehen dort Hunderte von Dokumenten, E-Mails, Chat-Nachrichten, Meeting-Notizen. Diese Daten sind vielfältig (Text, Tabellen, Präsentationen), sie entstehen schnell (in Echtzeit während der Arbeit) und ihre Menge wächst kontinuierlich. Eine klassische Ablagestruktur – Ordner und Unterordner – stößt hier schnell an Grenzen. Wie findet ihr in tausenden Dokumenten die eine Information, die ihr gerade braucht?
            </p>

            <p className="mb-4">
              Hier kommen moderne Technologien ins Spiel: Suchmaschinen, die nicht nur nach Stichworten suchen, sondern Bedeutungen verstehen. Systeme, die automatisch Zusammenhänge erkennen, Dokumente kategorisieren, Duplikate identifizieren. Und genau hier beginnt die Verbindung zu Künstlicher Intelligenz.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Der Unterschied zwischen deterministischer Software und KI</h3>

            <p className="mb-4">
              Um zu verstehen, warum KI-Systeme – insbesondere Large Language Models – so anders funktionieren als klassische Software, müssen wir einen grundlegenden Unterschied klären: den zwischen deterministischen und stochastischen Systemen.
            </p>

            <p className="mb-4">
              <strong>Deterministische Software</strong> folgt festen Regeln. Wenn ihr in einem Taschenrechner "2 + 2" eingebt, bekommt ihr immer "4". Das Programm folgt einer eindeutigen Anweisung: "Addiere diese beiden Zahlen." Es gibt keine Unsicherheit, keine Variation. Klassische Datenbanksysteme funktionieren genauso: Ihr stellt eine Anfrage ("Zeige mir alle Kunden aus Berlin"), und das System liefert exakt die Datensätze, die diesem Kriterium entsprechen.
            </p>

            <p className="mb-4">
              <strong>Stochastische Systeme</strong> hingegen arbeiten mit Wahrscheinlichkeiten. Ein Large Language Model wie ChatGPT "weiß" nicht im klassischen Sinne, was die richtige Antwort auf eure Frage ist. Stattdessen berechnet es, welches Wort mit welcher Wahrscheinlichkeit als nächstes kommen sollte – basierend auf Mustern, die es aus riesigen Textmengen gelernt hat.
            </p>

            <p className="mb-4">
              Das ist ein fundamentaler Unterschied. Wenn ihr ein LLM fragt "Was ist die Hauptstadt von Frankreich?", dann durchsucht es nicht eine Datenbank mit Fakten. Es erkennt das Muster der Frage und generiert eine Antwort, die mit hoher Wahrscheinlichkeit korrekt ist: "Paris". Aber diese Antwort entsteht durch statistische Vorhersage, nicht durch Nachschlagen.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Was bedeutet das für die Praxis?</h3>

            <p className="mb-4">Dieser Unterschied hat wichtige Konsequenzen:</p>

            <ol className="list-decimal pl-6 mb-4">
              <li className="mb-2"><strong>Keine Garantie für Korrektheit</strong>: Ein LLM kann falsche Informationen mit großer Überzeugung präsentieren. Es "halluziniert" manchmal – erfindet Fakten, die plausibel klingen, aber nicht stimmen.</li>
              <li className="mb-2"><strong>Qualität der Eingabe bestimmt die Ausgabe</strong>: Weil ein LLM auf Muster reagiert, ist die Art eurer Frage entscheidend. Eine präzise, gut formulierte Anfrage führt zu besseren Ergebnissen als eine vage Formulierung.</li>
              <li className="mb-2"><strong>Kontext ist entscheidend</strong>: LLMs arbeiten mit dem Kontext, den ihr ihnen gebt. Je mehr relevante Informationen ihr in eure Anfrage einbaut, desto besser kann das System antworten.</li>
              <li className="mb-2"><strong>Variabilität der Ergebnisse</strong>: Stellt ihr dieselbe Frage mehrmals, könnt ihr leicht unterschiedliche Antwortformulierungen erhalten – alle statistisch plausibel, aber nicht identisch.</li>
            </ol>

                <p className="mb-4">
                  Diese Eigenschaften machen LLMs zu mächtigen Werkzeugen für bestimmte Aufgaben – insbesondere dort, wo es um Sprache, Kommunikation und das Verstehen von Zusammenhängen geht. Aber sie erfordern auch ein anderes Arbeiten: kritisches Prüfen der Ergebnisse, bewusstes Gestalten der Eingaben, Verständnis für die Grenzen des Systems.
                </p>

                <p className="mb-8 text-sm italic">
                  *Dieser Artikel ist der erste Teil einer Serie über die Grundlagen der Arbeit mit Daten und Künstlicher Intelligenz. Die kommenden Artikel vertiefen einzelne Aspekte und zeigen konkrete Anwendungsmöglichkeiten.*
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DatenVerstehen;
