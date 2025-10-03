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
              Was ist der ROI von KI?
            </h1>
            
            <p className="text-lg sm:text-xl text-body leading-relaxed mb-8">
              Wir definieren messbare Erfolgsmetriken und begleiten die Umsetzung, sodass du den Mehrwert transparent nachvollziehen kannst.
            </p>
          </div>

          {/* Add your content here */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-4">
                Messbare Erfolgsmetriken
              </h2>
              <p className="text-body leading-relaxed">
                {/* Add your content here */}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-4">
                Transparente Umsetzung
              </h2>
              <p className="text-body leading-relaxed">
                {/* Add your content here */}
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
