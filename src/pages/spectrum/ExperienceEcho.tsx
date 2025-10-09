import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ExperienceEcho = () => {
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
              Experience Echo: Wissen bewahren, Erfahrung weitergeben
            </h1>
            
            <div className="text-muted-foreground space-y-6">
              <p className="text-xl italic border-l-4 border-primary pl-4 my-8">
                "Jahrzehntelange Erfahrung verschwindet nicht einfach – sie kann weiterklingen. Experience Echo macht das Wissen langjähriger Mitarbeitender zugänglich, bevor sie in den Ruhestand gehen. Ihr Know-how wird zum lebendigen Begleiter für die nächste Generation."
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Worum es geht</h2>
              
              <p>
                In euren Teams gibt es Mitarbeitende, die über jahrzehntelange Erfahrung verfügen. Bauleiter, die jede Herausforderung kennen. Techniker, die Systeme im Schlaf verstehen. Fachkräfte, deren Wissen in keinem Handbuch steht. Viele von ihnen gehen in den nächsten Jahren in Pension.
              </p>

              <p>
                <strong>Dieses Wissen kann erhalten bleiben.</strong> Experience Echo hilft, Erfahrung zu digitalisieren – auf eine Art, die der Person und ihrer Expertise gerecht wird. Kein steriles Handbuch. Kein Faktenarchiv. Ein Assistent, der antwortet wie jemand, der Jahrzehnte Praxis hat.
              </p>

              <p>
                <strong>Das Ziel: Erfahrung wird zum Echo.</strong> Jüngere Kolleginnen und Kollegen können auf dieses Wissen zugreifen, Fragen stellen, Hinweise bekommen – formuliert in der Art, wie ein erfahrener Kollege es tun würde. Das gesammelte Ergebnis einer Lebensarbeitsleistung bleibt zugänglich.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Für wen wir das entwickelt haben</h2>
              
              <p>
                Für Organisationen, die verstehen, dass mit langjährigen Mitarbeitenden auch Wissen geht – wenn man es nicht bewahrt. Für erfahrene Fachkräfte, die ihr Know-how weitergeben möchten. Für Teams, die von dieser Erfahrung lernen wollen.
              </p>

              <p>
                <strong>Manche eurer Mitarbeitenden freuen sich über diese Möglichkeit.</strong> Endlich jemand, der zeigt, wie sie ihr Fachwissen mit einfachen Mitteln digitalisieren können. Andere sitzen ungern am Computer – das Zehn-Finger-System fehlt, Tippen dauert zu lange. Wir holen beide dort ab, wo sie stehen.
              </p>

              <p>
                <strong>Ihr wollt Wissen erhalten, das sonst verloren geht.</strong> Experience Echo schafft die Brücke zwischen Generationen – würdevoll, praktisch, im Arbeitsalltag nutzbar.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Was in Experience Echo geschieht</h2>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Phase 1: Dialog beginnen (2–3 Sessions à 90–120 Min)</h3>
              
              <p>
                <strong>Einfacher Einstieg in den Dialog mit KI.</strong> Wir holen eure erfahrenen Mitarbeitenden da ab, wo sie stehen. Angenehm, manchmal spielerisch, in jedem Fall experimentell. Sie lernen, in einen Dialog mit einem Large Language Model zu gehen – ohne tippen zu müssen.
              </p>

              <p>
                <strong>Wissen im Gespräch festhalten.</strong> Christian sitzt in Online-Sessions mit ihnen zusammen. Bildschirmteilung. Gespräche entstehen. Transkripte werden erstellt. Das Wissen, das diese Mitarbeitenden haben, wird festgehalten – in ihrer Sprache, mit ihren Beispielen, aus ihrer Praxis.
              </p>

              <p>
                <strong>Vertrauen aufbauen.</strong> Diese Phase zeigt: Das geht. Das ist nicht kompliziert. Mein Wissen hat Wert. Es kann weitergegeben werden.
              </p>

              <p>
                <strong>Ergebnis:</strong> Erste Transkripte mit wertvollem Fachwissen. Vertrauen in den Prozess. Klarheit darüber, wie es weitergeht.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Phase 2: Wissen strukturieren (2–3 Sessions à 90–120 Min)</h3>
              
              <p>
                <strong>Systematisierung demonstrieren.</strong> Wir zeigen, wie das gesammelte Wissen strukturiert und aufbereitet werden kann. Themen ordnen sich. Zusammenhänge werden sichtbar. Aus Gesprächen wird ein durchsuchbares Archiv.
              </p>

              <p>
                <strong>Entscheidung über Verantwortung.</strong> In dieser Phase entscheidet sich: Machen die Mitarbeitenden diese Strukturierung selbst? Oder wird diese Arbeit an jemanden delegiert? Beides ist möglich. Wir zeigen beide Wege.
              </p>

              <p>
                <strong>Wissenspool wächst.</strong> Session für Session entsteht mehr Material. Die Breite und Tiefe der Erfahrung wird sichtbar.
              </p>

              <p>
                <strong>Ergebnis:</strong> Strukturiertes, aufbereitetes Wissen. Klarheit über die weitere Verantwortung. Ein wachsender Pool, der nutzbar wird.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Phase 3: Assistenten gestalten (2–4 Sessions à 90–120 Min)</h3>
              
              <p>
                <strong>Technische Möglichkeiten ausreifen.</strong> Jetzt entsteht der Assistent oder Agent. Alle Informationen, die der Mitarbeitende eingebracht hat, werden verarbeitet, aufbereitet, archiviert. Der Agent wird zum Wissensspeicher.
              </p>

              <p>
                <strong>Antwortcharakteristik gestalten.</strong> Hier liegt unser besonderer Fokus: Zahlen, Daten, Fakten in einen Agenten eingeben – das kann jeder. Wir legen Wert darauf, dass die Antwortcharakteristik dem Aufgabenbereich entspricht und die Person würdigt.
              </p>

              <p>
                Ein erfahrener Bauleiter kommuniziert anders als ein Techniker. Ein Meister gibt Hinweise anders als ein Projektmanager. Wir gestalten den Agenten so, dass er antwortet wie jemand mit Jahrzehnten Praxis – präzise, kontextbewusst, mit dem richtigen Ton.
              </p>

              <p>
                <strong>Namen geben.</strong> In besonders positiven Fällen kann der Mitarbeitende entscheiden, wie dieser Assistent heißen soll. Das schafft Verbindung, Würdigung, Anerkennung.
              </p>

              <p>
                <strong>Ergebnis:</strong> Ein funktionierender Assistent, der das Wissen zugänglich macht. Antworten, die klingen wie von einem erfahrenen Kollegen. Ein Echo, das weiterträgt.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Nach dem Ruhestand: Weiterbeteiligung (optional)</h3>
              
              <p>
                <strong>Das Wissen lebt weiter.</strong> Langgediente Mitarbeitende freuen sich oft darüber, dass ihr Wissen – das gesammelte Ergebnis ihrer Lebensarbeitsleistung – für andere aufbereitet und zugänglich bleibt.
              </p>

              <p>
                <strong>Möglichkeit zur Mitgestaltung.</strong> Nach dem Eintritt in den Ruhestand können sie sich weiter beteiligen. Den Informationspool erweitern. Neue Fragen beantworten. Das Echo verfeinern.
              </p>

              <p>
                Diese Beteiligung ist freiwillig, flexibel, wertschätzend gestaltet.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Was ihr durch Experience Echo gewinnt</h2>
              
              <p>
                Wissen, das sonst verloren ginge, bleibt erhalten. Jüngere Kolleginnen und Kollegen können darauf zugreifen – jederzeit, strukturiert, in der Sprache der Praxis.
              </p>

              <p>
                <strong>Eure erfahrenen Mitarbeitenden</strong> erleben Würdigung ihrer Lebensarbeitsleistung. Ihr Know-how wird nicht vergessen, sondern weitergegeben. <strong>Eure jüngeren Teams</strong> lernen von Jahrzehnten Erfahrung – auch wenn die Person selbst schon im Ruhestand ist.
              </p>

              <p>
                <strong>Eure Organisation</strong> bewahrt Wissen, das schwer zu ersetzen ist. Einarbeitungszeiten verkürzen sich. Fehler, die erfahrene Kolleginnen und Kollegen vermieden hätten, können vermieden werden.
              </p>

              <p>
                <strong>Vor allem:</strong> Eine Brücke zwischen Generationen – gebaut aus Respekt, Technologie und der Einsicht, dass Erfahrung weiterklingen kann.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Warum Experience Echo jetzt</h2>
              
              <p>
                Die Pensionierungswelle kommt. Erfahrene Fachkräfte gehen. Ihr Wissen geht mit – wenn ihr nicht handelt. Handbücher und Dokumentationen erfassen nur einen Bruchteil dessen, was Jahrzehnte Praxis ausmacht.
              </p>

              <p>
                <strong>Experience Echo bewahrt dieses Wissen.</strong> Rechtzeitig begonnen, würdevoll gestaltet, praktisch nutzbar für die nächste Generation.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Unsere Rolle</h2>
              
              <p>
                <strong>Wir holen eure Mitarbeitenden ab.</strong> Dort, wo sie stehen. Ohne Druck, ohne technische Hürden. Wir zeigen, dass es einfach geht.
              </p>

              <p>
                <strong>Wir führen die Gespräche.</strong> Christian sitzt mit ihnen zusammen, erstellt Transkripte, hält das Wissen fest. Diese Gespräche sind der Kern von Experience Echo.
              </p>

              <p>
                <strong>Wir strukturieren und gestalten.</strong> Aus Gesprächen wird ein durchsuchbares Archiv. Aus Archiven werden Assistenten. Aus Assistenten wird ein Echo, das antwortet wie jemand mit Jahrzehnten Erfahrung.
              </p>

              <p>
                <strong>Wir würdigen die Person.</strong> Die Antwortcharakteristik, der Ton, die Art der Hinweise – wir gestalten sie so, dass sie dem Aufgabenbereich und der Person entsprechen. Das ist kein anonymes Datenarchiv. Das ist ein Assistent, der trägt, was diese Person ausmacht.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Format und Durchführung</h2>
              
              <p>
                Experience Echo passt sich dem Tempo und den Bedürfnissen eurer Mitarbeitenden an. Typischerweise:
              </p>

              <p>
                <strong>Phase 1: Dialog beginnen</strong> (2–3 Sessions à 90–120 Min)<br />
                <strong>Phase 2: Wissen strukturieren</strong> (2–3 Sessions à 90–120 Min)<br />
                <strong>Phase 3: Assistenten gestalten</strong> (2–4 Sessions à 90–120 Min)
              </p>

              <p>
                <strong>Optional:</strong> Weiterbeteiligung nach dem Ruhestand – flexibel, freiwillig, wertschätzend.
              </p>

              <p>
                <strong>Ein Anruf genügt.</strong> Wir klären gemeinsam, welche Mitarbeitenden ihr im Blick habt und wann der richtige Zeitpunkt ist. Dann gestalten wir Experience Echo passgenau für euch.
              </p>

              <p className="text-xl font-semibold mt-12 text-foreground">
                Bereit anzufangen?
              </p>
              
              <p>
                Kontaktiert uns für ein unverbindliches Gespräch. Wir zeigen euch, wie Erfahrung weiterklingen kann – würdevoll, praktisch, für die nächste Generation zugänglich.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExperienceEcho;
