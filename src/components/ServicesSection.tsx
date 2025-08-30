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
    <section id="services" className="py-32 px-6 animated-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <Badge className="bg-card/60 backdrop-blur-md border-border text-foreground-secondary">
            Unser Angebot
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-headline leading-tight max-w-4xl mx-auto">
            Bedarfsorientierte{" "}
            <span className="gradient-text">KI-Integration</span>
          </h2>
          
          <p className="text-lg text-body max-w-2xl mx-auto">
            Von der ersten Idee bis zum praktischen Einsatz – wir geben dir Struktur, 
            Impulse und Raum für eigene Schritte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-hover bg-card border-border group"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <service.icon className="w-10 h-10 text-primary group-hover:scale-105 transition-transform duration-200" />
                </div>
                
                <h3 className="text-lg font-medium text-headline mb-4">
                  {service.title}
                </h3>
                
                <p className="text-body text-sm leading-relaxed">
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