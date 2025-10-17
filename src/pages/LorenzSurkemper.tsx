import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LorenzSurkemper = () => {
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
              Lorenz Surkemper
            </h1>
            <p className="text-xl text-primary font-semibold">
              Technologie-Experte
            </p>
          </div>
          
          <div className="space-y-6 text-foreground/90">
            <p className="text-xl leading-relaxed font-semibold">
              Ich finde den Weg, damit eure Ideen auch technisch Wirklichkeit werden.
            </p>
            
            <p className="text-lg leading-relaxed">
              Als Technologie-Experte mit Wirtschaftsinformatik-Hintergrund bringe ich seit 2012 die Fähigkeit mit, mich in jede technische Herausforderung einzuarbeiten. Meine Spezialisierung liegt darin, komplexe Anforderungen zu analysieren und funktionierende Lösungen zu entwickeln – besonders dort, wo es knifflig wird.
            </p>

            <p className="text-lg leading-relaxed">
              Meine Arbeitsweise ist geprägt von außergewöhnlicher Geduld und Ausdauer. Wenn ich an einer technischen Lösung arbeite, bin ich im Tunnel. Ich arbeite häufig abends und nachts, um konzentriert und ungestört zu bleiben – manchmal bis die Sonne aufgeht. Ich arbeite stur weiter, bis das Problem gelöst ist. Diese Hartnäckigkeit gibt meinen Kunden das Gefühl, dass ich mich wirklich kümmere und Lösungen hinbekomme.
            </p>

            <p className="text-lg leading-relaxed">
              Mein Ansatz ist unvoreingenommen und systemübergreifend. Ich analysiere immer, was tatsächlich gemacht werden muss, und wähle dann die passende Technologie. Ich kann mich sehr gut in Fremdcode einarbeiten, Datenbankabfragen optimieren und Proof of Concepts entwickeln. Diese Fähigkeit, Dinge zu analysieren und mich reinzufuchsen, ermöglicht es mir, zwischen verschiedenen Systemen zu navigieren und Brücken zu bauen.
            </p>

            <p className="text-lg leading-relaxed">
              Seit 2017 arbeite ich mit Kunden zusammen, die sehr langfristige Beziehungen mit mir pflegen. Ich habe 2018 mutig eine Tochterfirma in Weißrussland gegründet, um Entwickler fest anzustellen und kostengünstige, qualitativ hochwertige Softwareentwicklung anzubieten. Ich gehe andere Wege und suche Optimierungen.
            </p>

            <p className="text-lg leading-relaxed">
              Technisch bewege ich mich sicher in der KI-Plattform-Entwicklung, insbesondere mit Open Web UI, Datenbankintegration und API-Schnittstellen. Wenn es eine technische Herausforderung gibt, setze ich meinen Ehrgeiz an, zu schauen, wie es geht. Mein Fokus liegt zunächst auf der Qualität und Machbarkeit – im Dreieck von Preis, Qualität und Zeit.
            </p>

            <p className="text-lg leading-relaxed">
              Ich arbeite mit mittelständischen Unternehmen, die konkrete technische Umsetzungen brauchen und jemanden suchen, der sagt: "Das können wir machen" – und dann auch liefert.
            </p>

            <p className="text-lg leading-relaxed">
              Persönlich: Ich hatte schon immer unternehmerische Interessen. Ich arbeite remote, meist aus meinem Homeoffice, und schätze die Flexibilität, die mir erlaubt, konzentriert und effektiv zu arbeiten.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default LorenzSurkemper;
