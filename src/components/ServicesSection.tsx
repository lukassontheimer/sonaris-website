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
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary">
            Unser Angebot
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-headline mb-6 leading-tight">
            Bedarfsorientierte{" "}
            <span className="gradient-text">KI-Integration</span>
          </h2>
          
          <p className="text-lg text-body max-w-3xl mx-auto">
            Von der ersten Idee bis zum praktischen Einsatz – wir geben dir Struktur, 
            Impulse und Raum für eigene Schritte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="interactive-glow bg-card border-card-border hover:border-primary/20 transition-all duration-500 group"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-body leading-relaxed">
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