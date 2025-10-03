import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const RoiVonKi = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      
      <main className="pt-20 sm:pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-12">
            <Badge className="mb-4 sm:mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary">
              ROI von KI
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-6 leading-tight">
              ROI durch KI-Integration: Was auf euch zukommt
            </h1>
            
            <div className="text-lg text-body leading-relaxed mb-8 space-y-4">
              <p className="font-semibold">Was euch erwartet:</p>
              <p>
                Wir zeigen euch, warum Wiederholungsfragen der perfekte Einstieg in KI-Integration sind und führen euch durch drei systematische Phasen - von den Grundlagen bis zum Verständnis für KI-Agenten. Dabei sprechen wir offen über realistische Zeitschätzungen und Verbindlichkeitsanforderungen, bevor wir gemeinsam nachrechnen: Wie viel Zeit, Geld und Nerven spart euer Team tatsächlich?
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <p className="text-body leading-relaxed">
                Bei der Einführung von KI-gestützten Techniken empfehlen wir allen Beteiligten, ein erstes gemeinsames Projekt durchzuführen. Etwas Konkretes, Messbares, das jeder aus dem Arbeitsalltag kennt. Wiederholungsfragen eignen sich dafür besonders gut.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Ihr habt in euren Teams Menschen, die täglich dieselben Fragen beantworten. Manchmal zur Rückversicherung - obwohl die Antwort bekannt ist, wird lieber nochmal nachgefragt. Manchmal bleiben bestimmte Informationen einfach nicht im Gedächtnis hängen. Zwei bis drei solcher Fragen pro Person, täglich. Zwischen 30 Sekunden und fünf Minuten Antwortzeit, je nach Komplexität. Diese Unterbrechungen summieren sich, kosten Konzentration, erzeugen Stress.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Wir verstehen die Erwartungshaltung: KI-gestützte Routinen und Automatisierungen sollen schnell zu Verbesserungen, Einsparungen und Optimierungen führen. Das klingt verlockend. Dabei handelt es sich um eine völlig neue Technologie, in deren Umgang Kreativität, Flexibilität und Kommunikationsfähigkeiten eine sehr große Rolle spielen. Ein Agent, der Standardfragen beantwortet, entsteht nicht von selbst. Eure Mitarbeitenden müssen systematisch eingearbeitet werden - in drei aufeinander aufbauenden Phasen.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Diese Phasen brauchen Zeit, Geduld und realistische Erwartungen. Dafür entsteht messbarer Return on Investment, der weit über eingesparte Antwortzeit hinausgeht. Wir zeigen euch, wie sich dieser ROI entwickelt, welche Investitionen nötig sind und warum sich der Aufwand bereits bei mittleren Teams im ersten Jahr rechnet.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-6">
                Die drei Phasen der KI-Integration
              </h2>

              <h3 className="text-xl sm:text-2xl font-bold text-headline mb-4 mt-8">
                Phase 1: Grundlagen verstehen - Kommunikation mit Maschinen lernen
              </h3>
              <p className="text-body leading-relaxed">
                "Language" in Large Language Model - das bedeutet Kommunikation. Eure Mitarbeitenden lernen bei uns, wie sie mit diesem System sprechen. Nehmen wir die Wiederholungsfragen aus der Einleitung: Viele von euch kennen FAQs von Websites - statische Frage-Antwort-Paare, die funktionieren, aber starr sind.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Bei einem LLM arbeitet ihr anders. Statt feste Antworten zu hinterlegen, beschäftigt ihr euch mit der Qualität der Fragen und der Art, wie Antworten entstehen sollen. Wie formuliert ihr Guidelines, damit die generierten Antworten konsistent bleiben, aber trotzdem flexibel auf verschiedene Fragestellungen eingehen können? Wie optimiert ihr den Input, um besseren Output zu bekommen?
              </p>
              <p className="text-body leading-relaxed mt-4">
                Dabei vermitteln wir ein grundlegendes Verständnis: Large Language Models funktionieren anders als Excel oder euer CRM-System. Bei Excel führt derselbe Input immer zum gleichen Ergebnis. Ein LLM berechnet Wahrscheinlichkeiten - deshalb entstehen Variationen. Das ist kein Fehler, das ist das Funktionsprinzip.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Eure Teams entwickeln in dieser Phase ihre ersten Prompt-Bibliotheken. Bewährte Eingaben für die häufigsten Fragen, die reproduzierbare, aber flexible Antworten liefern. Diese Bibliotheken werden zur Grundlage für den gemeinsamen Wissenspool in Phase 2.
              </p>

              <h4 className="text-lg sm:text-xl font-bold text-headline mb-3 mt-6">
                Übergang: Verschiedene Kommunikationsstile als Vorteil
              </h4>
              <p className="text-body leading-relaxed">
                In euren Teams kommunizieren Menschen unterschiedlich. Manche sind direkt, andere ausführlich. Manche arbeiten strukturiert, andere intuitiv. Diese Vielfalt wird mit LLMs zum Vorteil. Das System hilft dabei, verschiedene Kommunikationsstile zu verstehen und anzupassen. Die Prompt-Bibliotheken aus Phase 1 zeigen: Jeder findet seinen Weg, mit dem System zu arbeiten.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-headline mb-4 mt-8">
                Phase 2: Wissenssammlung und Ordnerstrukturen - Gemeinsame Datenbasis aufbauen
              </h3>
              <p className="text-body leading-relaxed">
                Eure Prompt-Bibliotheken aus Phase 1 zeigen bereits: Verschiedene Menschen in euren Teams haben unterschiedliche Herangehensweisen. Diese Vielfalt wird jetzt zum Vorteil. Wir zeigen euch, wie ihr eine Ordnerstruktur nutzt, um Informationen systematisch zu sammeln und zu teilen.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Gesprächsprotokolle, Meetingprotokolle, Transkripte, E-Mails, Handbücher - all das fließt in euren gemeinsamen Wissenspool. Dabei empfehlen wir am Anfang: Sammelt nur Informationen, die unternehmensintern entstehen und bleiben dürfen. Datenschutz und Sicherheit haben Vorrang vor Geschwindigkeit.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Aus den Wiederholungsfragen entstehen strukturierte Wissensdokumente. Statt dass einzelne Personen immer wieder dieselben Antworten geben, entsteht eine gemeinsame Basis. Jeder kann beitragen, jeder kann profitieren. Die statischen FAQs von früher werden zu lebendigen, erweiterbaren Wissenssammlungen.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Diese Phase baut systematisch auf Phase 1 auf: Eure Teams wissen bereits, wie sie mit dem System kommunizieren. Jetzt lernen sie, wie sie ihr Wissen so strukturieren, dass es für alle nutzbar wird.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-headline mb-4 mt-8">
                Phase 3: KI-Agenten verstehen - Vom Wissenspool zum handelnden System
              </h3>
              <p className="text-body leading-relaxed">
                Eure strukturierte Wissensbasis aus Phase 2 wird jetzt zur Grundlage für den nächsten Schritt: KI-Agenten. Dabei geht es um ein grundlegendes Verständnis - was ist ein KI-Agent überhaupt? Welche Fragen kann jeder in eurem Team stellen? Welche Hinweise kann jeder geben?
              </p>
              <p className="text-body leading-relaxed mt-4">
                Wir arbeiten mit einer klaren Unterscheidung: Ein KI-Assistent reagiert auf eure Eingaben. Ein KI-Agent plant voraus, verfolgt Ziele über mehrere Schritte, nutzt Tools eigenständig. Bei den Wiederholungsfragen bedeutet das: Der Agent beantwortet nicht nur aus eurer FAQ-Sammlung, er entscheidet auch, wann er weiterleiten muss. Kann er keine Antwort geben, leitet er weiter - im mittelfristigen Aufbau sogar mit dem Wissen, an wen genau weitergeleitet werden muss.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Eure Teams lernen die Architektur kennen, die hinter Agenten steht: Rolle, Ziele, Wissen, Regeln, Gedächtnis, Planung, Tools, Governance. Das klingt technisch, ist aber kommunikativ zu verstehen. Jeder in eurem Team kann lernen, präzise zu formulieren, was ein Agent können soll und was nicht.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Dabei bleiben wir realistisch. Wir zeigen euch, worauf ihr achten müsst, welche Qualitätskriterien gelten und wie ihr Agenten evaluiert. Das Ziel ist nicht, dass ihr selbst Agenten programmiert, sondern dass ihr kompetent mit Technikern zusammenarbeitet und präzise Anforderungen formuliert.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-6">
                Zeitlicher Aufwand und Verbindlichkeit: Was auf euch zukommt
              </h2>
              <p className="text-body leading-relaxed">
                Der zeitliche Aufwand für das Training kann sehr unterschiedlich sein. Wir geben nachfolgend einen kleinen Überblick. Wie viel Zeitaufwand genau notwendig ist, das ermitteln wir in dem, was wir Bestandsaufnahme nennen. Wir finden heraus, wie der Wissensstand ist, aber auch, wie Kreativität und Flexibilität im Hinblick auf den Umgang mit dieser neuen Technologie im Vergleich zum Umgang mit bekannter IT-Infrastruktur ausgerichtet sind.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-headline mb-4 mt-8">
                Verbindlichkeit ist entscheidend
              </h3>
              <p className="text-body leading-relaxed">
                Wir machen immer wieder die Erfahrung: Ab dem zweiten Modul werden Termine verlegt, verändert, abgesagt. Dahinter liegt oft die Annahme, KI-Training funktioniere wie Excel- oder CRM-Schulungen - linear aufgebaut, einzelne Module nachholbar. Das ist ein Trugschluss. Beim gemeinsamen Aufbau eines Wissenspools, der eure betriebsinterne Kommunikation automatisiert und systematisiert, arbeitet ihr an einem gemeinsamen Projekt. Jeder Baustein baut auf dem vorherigen auf, jeder Teilnehmende trägt zum Gesamtergebnis bei.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Deshalb empfehlen wir: Benennt lieber eine kleine Gruppe experimentierfreudiger Vorläufer oder Ambassadoren. Gebt diesem Team einen verbindlichen Zeitrahmen mit höchster Priorität. Alle Beteiligten müssen wissen: In diesen Trainingseinheiten hat nichts anderes Vorrang.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-headline mb-4 mt-8">
                Realistische Zeitschätzungen für die drei Phasen
              </h3>
              <p className="text-body leading-relaxed">
                <strong>Phase 1</strong> benötigt bei konzentrierter Arbeit oft dreimal zwei Stunden. Das reicht meist aus, um das Verständnis für die Kommunikation mit und in einem LLM zu entwickeln.
              </p>
              <p className="text-body leading-relaxed mt-4">
                <strong>Phase 2</strong> braucht ähnlich viel Zeit, hängt aber von euren Qualitätsansprüchen ab. Wollt ihr nur Informationen sammeln? Oder sollen Stil, Grammatik und alle textbezogenen Besonderheiten stimmen? Hochwertige Textausgabe zu prompten ist aufwendiger zu lernen als Standardtext.
              </p>
              <p className="text-body leading-relaxed mt-4">
                <strong>Phase 3</strong> startet ebenfalls mit dreimal zwei Stunden. Dann hängt der weitere Aufwand davon ab, wie intensiv sich jeder Einzelne in seiner Arbeitsumgebung umschaut und Beispiele für automatisierbare Routinen findet. Sind diese identifiziert, bekommen die Teilnehmenden von uns Checklisten für die Agent-Erstellung.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-headline mb-4 mt-8">
                Technische Umsetzung: Nicht jeder baut eigene Agenten
              </h3>
              <p className="text-body leading-relaxed">
                Wir raten davon ab, dass jeder Einzelne beginnt, sich Agenten selbst zusammenzubauen. Stellt euch vor: 30 Mitarbeitende, jeder probiert pro Woche zwei, drei Agenten aus. Das wird chaotisch und zeitaufwendig.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Besser: Benennt jemanden, der die technische Hoheit über die Agent-Erstellung hat. Alle anderen beteiligen sich mit ihrem Fachwissen und ihren Anforderungen. In vielen Fällen werdet ihr externe Hilfe brauchen, um Agenten technisch einwandfrei zum Arbeiten zu bringen.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-6">
                Der Return on Investment: Rechnen wir mal nach
              </h2>
              <p className="text-body leading-relaxed">
                Kommen wir zurück zu dem, worum es von Anfang an ging: dem Return on Investment bei Wiederholungsfragen. Nehmen wir unser Beispiel: Drei Wiederholungsfragen am Tag, jede Beantwortung zwischen 30 Sekunden und drei Minuten.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Was macht das pro Woche an Zeit aus? Pro Monat? Im Jahr? Die Antwort überrascht die meisten: Zwischen 4 und 65 Stunden jährlich - je nachdem, wie ausführlich die Antworten ausfallen und wie hartnäckig nachgefragt wird.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Jetzt brauchst du nur noch den Faktor einzusetzen, mit dem du dich selbst pro Stunde berechnest. Oder den Faktor, mit dem du einen Mitarbeitenden pro Stunde berechnest - falls du nicht derjenige bist, der täglich die gleichen Fragen beantwortet. Für unser Beispiel nehmen wir einen Mitarbeitenden aus einem mittelständischen Unternehmen. Gesamtkosten inklusive Lohnnebenkosten: 65 Euro pro Stunde.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Im Durchschnittsszenario - 2,5 Fragen täglich, durchschnittlich 2,75 Minuten pro Antwort - entstehen jährlich knapp 30 Stunden Zeitaufwand. Das entspricht 1.935 Euro pro Mitarbeiter und Jahr. Bei einem Team von zehn Personen: 19.350 Euro jährlich.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Und das ist nur die reine Antwortzeit. Nicht eingerechnet sind die unterbrochene Konzentration, der Stress bei den häufig Gefragten und die Tatsache, dass manche Fragen auch außerhalb der Arbeitszeit gestellt werden - per WhatsApp, E-Mail oder beim Kaffee.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Ein Agent, der diese Standardfragen filtert, rechnet sich schneller, als die meisten denken. Zeit, Geld und Nerven - bei allen drei Faktoren entsteht messbarer Gewinn. Und das ist nur ein einziger Anwendungsfall von vielen.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RoiVonKi;
