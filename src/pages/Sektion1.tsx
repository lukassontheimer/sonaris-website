import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Sektion1 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-20 sm:pt-24">
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-4 sm:mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary text-xs sm:text-sm">
                Sektion 1
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-4 sm:mb-6 leading-tight">
                Menschen befähigen
              </h1>
              
              <p className="text-base sm:text-lg text-body max-w-3xl mx-auto">
                Teams schulen und KI-Kompetenzen aufbauen
              </p>
            </div>

            <div className="space-y-8">
              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                    Inhalt folgt
                  </h2>
                  <p className="text-sm sm:text-base text-body leading-relaxed">
                    Der detaillierte Inhalt für Sektion 1 wird hier eingefügt.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sektion1;
