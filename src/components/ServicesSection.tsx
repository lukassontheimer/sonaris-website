import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, Settings } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "KI-Training und Kompetenzaufbau",
    description: "Du verstehst, wie KI funktioniert – und gibst dieses Verständnis an dein Team weiter. Wenn du magst, übernehmen wir das gemeinsam mit dir."
  },
  {
    icon: Target,
    title: "Strategische KI-Beratung",
    description: "Gemeinsam gestalten wir deine KI-Strategie – schrittweise, strategisch und ausgerichtet auf das, was in deinem Arbeitsalltag funktionieren kann."
  },
  {
    icon: Settings,
    title: "KI-Entwicklung & Integration",
    description: "Wir bieten eine DSGVO-konforme KI-Infrastruktur und integrieren Systeme, die verlässlich zusammenpassen und deinen Arbeitsalltag sinnvoll ergänzen."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 sm:mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary text-xs sm:text-sm">
            Unser Angebot
          </Badge>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-headline mb-4 sm:mb-6 leading-tight">
            Bedarfsorientierte{" "}
            <span className="gradient-text">KI-Integration</span>
          </h2>
          
          <p className="text-base sm:text-lg text-body max-w-3xl mx-auto">
            Von der ersten Idee bis zum praktischen Einsatz – wir geben dir Struktur, 
            Impulse und Raum für eigene Schritte.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="interactive-glow bg-card border-card-border hover:border-primary/20 transition-all duration-500 group"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="mb-4 sm:mb-6">
                  <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  {service.title}
                </h3>
                
                <p className="text-body leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;