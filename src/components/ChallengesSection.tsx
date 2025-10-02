import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const challenges = [
  {
    question: "First Contact, einfach beginnen",
    answer: "Übungen mit einem Sprachmodell – vier Sektoren zum direkten Ausprobieren am Bildschirm."
  },
  {
    question: "Welche Tools sind DSGVO-konform?",
    answer: "Wir arbeiten ausschließlich mit europäischen oder DSGVO-zertifizierten Lösungen und bieten eigene konforme KI-Infrastruktur."
  },
  {
    question: "Rechtssicher mit KI-Plattformen arbeiten.",
    answer: "KI-Risiken erkennen, Compliance-Anforderungen verstehen und rechtssichere Entscheidungen treffen"
  },
  {
    question: "Was ist der ROI von KI?",
    answer: "Wir definieren messbare Erfolgsmetriken und begleiten die Umsetzung, sodass du den Mehrwert transparent nachvollziehen kannst."
  }
];

const ChallengesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 sm:mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary text-xs sm:text-sm">
            Wo wir mit euch beginnen
          </Badge>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-headline mb-4 sm:mb-6 leading-tight">
            Von der ersten Anwendung zur Integration
          </h2>
          
          <p className="text-base sm:text-lg text-body max-w-3xl mx-auto">
            KI-Nutzung beginnt mit einzelnen Momenten: eine einfache Anwendung, eine schnellere Recherche. Wir zeigen euch, wie sich diese Momente zu tragfähigen Mustern verdichten, die eure Organisation erweitern.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {challenges.map((challenge, index) => {
            const cardContent = (
              <Card
                className="interactive-glow bg-card border-card-border hover:border-primary/20 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">
                      {challenge.question}
                    </h3>
                    <ChevronRight 
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-primary transition-transform duration-300 flex-shrink-0 ml-2 ${
                        hoveredCard === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      hoveredCard === index ? "max-h-40 sm:max-h-32 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-body text-xs sm:text-sm leading-relaxed">
                      {challenge.answer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
            
            if (index === 0) {
              return (
                <Link key={index} to="/first-contact">
                  {cardContent}
                </Link>
              );
            } else if (index === 1) {
              return (
                <Link key={index} to="/dsgvo-tools">
                  {cardContent}
                </Link>
              );
            } else {
              return (
                <div key={index}>
                  {cardContent}
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;