import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LukasSontheimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/#team">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zum Team
            </Button>
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Lukas Sontheimer - KI-Stratege
            </h1>
            
            <div className="space-y-6 text-foreground/90">
              <p className="text-xl leading-relaxed font-semibold">
                Ich schaffe Klarheit im KI-Chaos durch systematische Prozessintegration.
              </p>
              
              <p className="text-lg leading-relaxed">
                Als KI-Stratege mit technischem Hintergrund erkannte ich früh: Erfolgreiche KI-Implementierung beginnt mit dem Verständnis bestehender Prozesse. Meine Spezialisierung liegt darin, die Brücke zwischen organisationalen Strukturen und KI-Möglichkeiten zu bauen – pragmatisch, bedarfsorientiert und immer mit Blick auf das Wesentliche.
              </p>
              
              <p className="text-lg leading-relaxed">
                Meine Arbeitsweise folgt einem klaren Prinzip: Funktionierende Prozesse sind die Grundlage für erfolgreiche KI-Integration. Deshalb beginne ich mit der kritischen Analyse dessen, was wirklich funktioniert. Gemeinsam mit Unternehmen identifiziere ich Use Cases, die technisch machbar und ökonomisch sinnvoll sind. Von Quick Wins wie automatisierten Meeting-Protokollen bis hin zu komplexen Wissensdatenbanken: Ich bewerte nach Risiko, technischer Komplexität und tatsächlichem Nutzen.
              </p>
              
              <p className="text-lg leading-relaxed">
                Mein Ansatz ist iterativ und systematisch. Ich arbeite mit dem Drei-Säulen-Modell: Training der Mitarbeitenden, technische Plattform-Integration und Use-Case-Identifikation. Dabei verstehe ich mich als Prozess- und Change-Manager, der die technischen Möglichkeiten mit den organisationalen Realitäten verbindet. Besonders wichtig ist mir die Vorbereitung: Je klarer definiert ist, welches Wissen benötigt wird und woran Qualität gemessen wird, desto erfolgreicher die Implementierung.
              </p>
              
              <p className="text-lg leading-relaxed">
                Technisch bewege ich mich sicher zwischen verschiedenen Systemen – von Microsoft-Umgebungen über LangDoc bis zu Open-Source-Lösungen wie Open Web UI. Ich kenne die Stärken jeder Plattform und kann einschätzen, welche Lösung für welches Unternehmen passt. Mein Fokus liegt auf funktionierenden, planbaren Lösungen, die tatsächlich Mehrwert schaffen.
              </p>
              
              <p className="text-lg leading-relaxed">
                Ich arbeite mit mittelständischen Unternehmen, die KI als strategisches Werkzeug verstehen wollen. Meine Kunden schätzen, dass ich technische Komplexität auf das Wesentliche reduziere und ihnen zeige, wo sie ihre Ressourcen wirklich investieren sollten.
              </p>
              
              <p className="text-lg leading-relaxed font-semibold">
                Persönlich: Ich arbeite aus der Überzeugung, dass die meiste Arbeit bei KI-Projekten in der Vorbereitung und im Testing liegt. Diese Erkenntnis teile ich konsequent mit meinen Kunden.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LukasSontheimer;
