import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FinalCTA = () => {
  return (
    <section className="py-32 px-6 animated-bg">
      <div className="max-w-4xl mx-auto">
        <Card className="relative overflow-hidden bg-card border-primary/20 card-hover">
          {/* Subtle gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-px rounded-lg">
            <div className="h-full w-full bg-card rounded-lg"></div>
          </div>
          
          <CardContent className="relative z-10 p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-headline">
              Bereit für den <span className="gradient-text">nächsten Schritt?</span>
            </h2>
            
            <p className="text-lg text-body max-w-xl mx-auto">
              15 Minuten Gespräch mit uns können der Anfang deiner KI-Journey sein.
            </p>
            
            <Button className="interactive-hover bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-base font-medium border border-primary/30">
              Termin vereinbaren
            </Button>
            
            <div className="text-xs text-foreground-secondary">
              Unverbindlich • DSGVO-konform • Praxisorientiert
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCTA;