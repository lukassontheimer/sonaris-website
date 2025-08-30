import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const challenges = [
  {
    question: "Wo fange ich mit KI an?",
    answer: "Wir identifizieren gemeinsam konkrete Anwendungsfälle in deinem Arbeitsalltag und entwickeln einen strukturierten Einführungsplan."
  },
  {
    question: "Welche Tools sind DSGVO-konform?",
    answer: "Wir arbeiten ausschließlich mit europäischen oder DSGVO-zertifizierten Lösungen und bieten eigene konforme KI-Infrastruktur."
  },
  {
    question: "Wie sichere ich die Akzeptanz im Team?",
    answer: "Durch praxisnahe Schulungen, schrittweise Einführung und die Demonstration konkreter Vorteile für den Arbeitsalltag jedes Einzelnen."
  },
  {
    question: "Was ist der ROI von KI?",
    answer: "Wir definieren messbare Erfolgsmetriken und begleiten die Umsetzung, sodass du den Mehrwert transparent nachvollziehen kannst."
  }
];

const ChallengesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary">
            Wo viele beginnen
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-headline mb-6 leading-tight">
            Von ein bisschen KI für eine E-Mail zu einem ersten{" "}
            <span className="gradient-text">echten Anwendungsfall</span>
          </h2>
          
          <p className="text-lg text-body max-w-3xl mx-auto">
            Wähle die Themen, die dich weiterbringen – wir geben dir die passenden Impulse dazu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <Card
              key={index}
              className="interactive-glow bg-card border-card-border hover:border-primary/20 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {challenge.question}
                  </h3>
                  <ChevronRight 
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${
                      hoveredCard === index ? "rotate-90" : ""
                    }`}
                  />
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredCard === index ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-body text-sm leading-relaxed">
                    {challenge.answer}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;