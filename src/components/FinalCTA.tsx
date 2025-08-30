import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FinalCTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-primary/20">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-[1px] rounded-lg">
            <div className="h-full w-full bg-card rounded-lg"></div>
          </div>
          
          <CardContent className="relative z-10 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-headline mb-6">
              Bereit für den <span className="gradient-text">nächsten Schritt?</span>
            </h2>
            
            <p className="text-lg text-body mb-8 max-w-2xl mx-auto">
              15 Minuten Gespräch mit uns können der Anfang deiner KI-Journey sein.
            </p>
            
            <Button className="interactive-hover bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg border border-primary/50 animate-pulse">
              Termin vereinbaren
            </Button>
            
            <div className="mt-8 text-sm text-foreground-secondary">
              Unverbindlich • DSGVO-konform • Praxisorientiert
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCTA;