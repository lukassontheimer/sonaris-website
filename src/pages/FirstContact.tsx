import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Bereich 1 – Erstkontakt & Kalibrierung",
    description: "Gedächtnisprüfung, Fähigkeitsprüfung, eingeschränkte Zusammenfassungen, Arbeitsanweisung → Kalibrierung",
    link: "/first-contact/bereich-1"
  },
  {
    title: "Bereich 2 – Kalibrierung & tiefergehende Techniken",
    description: "Mehrdeutigkeit erkennen, gemeinsames Verständnis, Bestätigungsschleife, schnelle Verbesserung, Verfeinerungsprotokoll, Annahmenbewusstsein",
    link: "/first-contact/bereich-2"
  },
  {
    title: "Bereich 3 – Musterbewusstsein & Übersetzung",
    description: "Problem- vs. Lösungsorientierung, Übersicht vs. Detail, Reihenfolge vs. Zufall, Hin- und Hergehen vs. Weggehen, Autoren- vs. Leserperspektive, Durchsetzungsvermögen vs. Absicherung",
    link: "/first-contact/bereich-3"
  },
  {
    title: "Bereich 4 – Kritisches Denken & Reflexion",
    description: "Wahrheit vs. Plausibilität, praktisches Denken, Mehrdeutigkeitserkundung, Regressionstest, Anti-Standardformulierung, Redakteursrolle, Zukunftsreflexion",
    link: "/first-contact/bereich-4"
  }
];

const FirstContact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-6 sm:mb-8 text-center">
              First Contact, einfach beginnen
            </h1>
            
            <p className="text-base sm:text-lg text-body max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              Wir identifizieren gemeinsam konkrete Anwendungsfälle in deinem Arbeitsalltag und entwickeln einen strukturierten Einführungsplan.
            </p>

            <div className="grid gap-6 sm:gap-8">
              {sections.map((section, index) => (
                <Link key={index} to={section.link}>
                  <Card className="interactive-glow bg-card border-card-border hover:border-primary/20 transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-grow">
                          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {section.title}
                          </h2>
                          <p className="text-body text-sm sm:text-base leading-relaxed">
                            {section.description}
                          </p>
                        </div>
                        <ChevronRight className="w-6 h-6 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FirstContact;
