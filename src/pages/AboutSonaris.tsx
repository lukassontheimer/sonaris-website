import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AboutSonaris = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-50 nav-glass border-b border-nav-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex flex-col hover:opacity-80 transition-opacity duration-300">
              <span className="text-xl sm:text-2xl font-bold text-foreground">sonaris</span>
              <div className="frequency-line w-12 sm:w-16 mt-1"></div>
            </Link>
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Zurück
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-headline mb-8">
            Über Sonaris
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-body">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-4">
                Unsere Mission
              </h2>
              <p className="leading-relaxed">
                Sonaris steht für die intelligente Integration von KI in bestehende Arbeitsabläufe. 
                Wir verbinden menschliche Expertise mit maschineller Intelligenz, um bereichsübergreifende 
                Zusammenarbeit zu stärken und nachhaltige Kompetenzentwicklung zu ermöglichen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-4">
                Unser Ansatz
              </h2>
              <p className="leading-relaxed">
                Wir verwandeln mit unserem Wissen eure Neugier in Können – bedarfsorientiert geführt 
                und dialogorientiert umgesetzt. Unsere Methoden kombinieren bewährte Kommunikationstechniken 
                mit systematischen KI-Interaktionsstrategien, um nicht nur Tools, sondern echte 
                Kommunikationspartner zu entwickeln.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-4">
                Was uns auszeichnet
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Interdisziplinäre Expertise
                  </h3>
                  <p className="leading-relaxed">
                    Unser Team vereint Kommunikationsexpertise, technisches Know-how und künstlerische 
                    Perspektiven, um ganzheitliche Lösungen zu entwickeln.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Partnerschaftlicher Dialog
                  </h3>
                  <p className="leading-relaxed">
                    Wir arbeiten nicht für euch, sondern mit euch – in einem kontinuierlichen Austausch, 
                    der eure spezifischen Bedürfnisse und Kontexte berücksichtigt.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Nachhaltige Kompetenzentwicklung
                  </h3>
                  <p className="leading-relaxed">
                    Unser Ziel ist nicht nur die Implementierung von KI-Tools, sondern die Entwicklung 
                    verlässlicher Routinen und dauerhafter Kompetenzen in euren Teams.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-4">
                Unsere Vision
              </h2>
              <p className="leading-relaxed">
                Wir glauben an eine Zukunft, in der KI-Systeme nicht als isolierte Werkzeuge, sondern 
                als integrierte Kommunikationspartner verstanden werden. Eine Zukunft, in der die 
                Zusammenarbeit zwischen menschlicher Intuition und maschineller Präzision neue 
                Möglichkeiten der Kompetenzentfaltung eröffnet.
              </p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20">
            <h2 className="text-2xl font-bold text-headline mb-4">
              Bereit, die Möglichkeiten zu erkunden?
            </h2>
            <p className="text-body mb-6">
              Lasst uns gemeinsam herausfinden, wie KI eure bereichsübergreifende Zusammenarbeit 
              stärken kann.
            </p>
            <Link to="/">
              <Button className="interactive-hover bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/50">
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
};

export default AboutSonaris;
