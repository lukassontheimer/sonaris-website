import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const OliverAndrees = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/#team">
          <Button variant="ghost" className="mb-8 hover:bg-accent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zum Team
          </Button>
        </Link>

        <article className="bg-card border border-card-border rounded-lg p-8 sm:p-12">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-headline mb-4">
              Oliver Andrees
            </h1>
            <p className="text-xl text-primary font-semibold">
              Sales & Strategy
            </p>
          </div>
          
          <div className="space-y-6 text-foreground/90">
            <p className="text-xl leading-relaxed font-semibold">
              Ich öffne Türen zur praktischen KI-Nutzung – mit 35 Jahren Verkaufserfahrung und der Überzeugung, dass Technologie vom Menschen aus gedacht werden muss.
            </p>
            
            <p className="text-lg leading-relaxed">
              Als Sales-Stratege mit dreieinhalb Jahrzehnten Erfahrung in Vertrieb, Führungskräfteentwicklung und Kommunikation erkannte ich 2021 sofort: KI wird dann erfolgreich, wenn Geschäftsführer und Führungskräfte vorangehen. Seitdem verbinde ich wirtschaftliche Argumente mit technischem Verständnis und zeige Unternehmen, wo sich KI-Investitionen wirklich rechnen.
            </p>

            <p className="text-lg leading-relaxed">
              Meine Überzeugung: KI beginnt bei den Führungskräften. Deshalb arbeite ich mit CEOs und Geschäftsführern, entwickle mit ihnen die Expertise, fundierte Entscheidungen über KI-Implementierungen zu treffen, und baue ihre Fähigkeit auf, das Thema in ihren Organisationen zu verankern.
            </p>

            <p className="text-lg leading-relaxed">
              Meine Arbeitsweise ist iterativ und beziehungsorientiert. Mit dem "Virtuellen Espresso"-Format schaffe ich in 30-50 Minuten fokussierte Erstgespräche, die schnell auf den Punkt kommen. Ich arbeite nach dem On-Demand-Prinzip: bedarfsorientiert, mengenmäßig flexibel, in 30-Tage-Zyklen. Dabei setze ich auf persönliche Präsenz und echte Begleitung. Mit kleinen Ambassadoren-Gruppen von idealerweise vier Personen beginne ich, arbeite in Abständen von 7-14 Tagen und gebe zunächst kleine Arbeitsproben ab, bevor wir uns in die nächste Stufe iterieren.
            </p>

            <p className="text-lg leading-relaxed">
              Als HubSpot-Solution-Partner bringe ich Training, Coaching und CRM-Expertise zusammen. Ich dokumentiere Beziehungsaufbau systematisch, nutze Transkripte zur Auswertung von Verkaufsgesprächen und entwickle daraus kontinuierlich bessere Strategien. Dabei bin ich transparent: Wenn ich ein Verkaufsgespräch führe, kommuniziere ich das klar.
            </p>

            <p className="text-lg leading-relaxed">
              Gleichzeitig bewahre ich kritische Distanz. Ich spreche offen über Datenschutzbedenken, Überwachungsmöglichkeiten und die Grenzen der KI. Meine Erkenntnis: "Arbeit mit KI ist eine homöopathische Erstverschlimmerung im Hinblick auf Zeit." Die erste Säule – das Verständnis der Menschen – bildet das Fundament für jede erfolgreiche Technologie-Implementierung.
            </p>

            <p className="text-lg leading-relaxed">
              Ich arbeite mit mittelständischen Unternehmen und deren Führungskräften, die KI als strategisches Werkzeug verstehen wollen und bereit sind, selbst voranzugehen. Meine Kunden schätzen meine Ehrlichkeit, meine Fähigkeit, komplexe Themen verständlich zu machen, und dass ich Modernität mit Bodenhaftung verbinde.
            </p>

            <p className="text-lg leading-relaxed">
              Persönlich: Ich komme aus Berlin, arbeite mobil von Meeting zu Meeting und bin bekannt für meine Begeisterungsfähigkeit bei neuen Tools. Diese Begeisterung kanalisiere ich in strukturierte Verkaufsprozesse, die funktionieren.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default OliverAndrees;
