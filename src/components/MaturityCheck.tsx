import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const questions = [
  {
    id: 1,
    question: "Wie vertraut ist dein Team mit KI-Tools?",
    labels: ["Gar nicht", "Grundlagen", "Regelmäßig", "Expertenwissen"]
  },
  {
    id: 2,
    question: "Wie strukturiert sind eure Daten?",
    labels: ["Chaotisch", "Teilweise", "Meist gut", "Vollständig"]
  },
  {
    id: 3,
    question: "Wie klar sind eure KI-Ziele?",
    labels: ["Unklar", "Grobe Ideen", "Konkret", "Sehr spezifisch"]
  },
  {
    id: 4,
    question: "Wie ist die Führungsunterstützung?",
    labels: ["Skeptisch", "Zurückhaltend", "Unterstützend", "Voll dabei"]
  },
  {
    id: 5,
    question: "Wie ist euer Budget für KI-Projekte?",
    labels: ["Kein Budget", "Begrenzt", "Angemessen", "Großzügig"]
  }
];

const MaturityCheck = () => {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleSliderChange = (questionId: number, value: number[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: value[0] }));
  };

  const calculateMaturity = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 100;
    return Math.round((totalScore / maxScore) * 100);
  };

  const getRecommendation = (maturity: number) => {
    if (maturity < 25) {
      return {
        level: "Starter",
        description: "KI-Grundlagen und erste Anwendungsfälle erkunden",
        color: "text-yellow-400"
      };
    } else if (maturity < 50) {
      return {
        level: "Explorer",
        description: "Strategische Planung und Pilotprojekte starten",
        color: "text-blue-400"
      };
    } else if (maturity < 75) {
      return {
        level: "Implementer",
        description: "Skalierung und Integration bestehender KI-Lösungen",
        color: "text-green-400"
      };
    } else {
      return {
        level: "Innovator",
        description: "Fortgeschrittene KI-Strategien und eigene Entwicklung",
        color: "text-primary"
      };
    }
  };

  const maturityScore = calculateMaturity();
  const recommendation = getRecommendation(maturityScore);

  return (
    <section id="maturity-check" className="py-32 px-6 animated-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-headline leading-tight max-w-4xl mx-auto">
            Was brauchst du, damit KI dich im Alltag{" "}
            <span className="gradient-text">wirklich unterstützt?</span>
          </h2>
        </div>

        <Card className="card-hover bg-card border-border">
          <CardContent className="p-8">
            {!showResults ? (
              <div className="space-y-8">
                {questions.map((q) => (
                  <div key={q.id} className="space-y-4">
                    <h3 className="text-lg font-medium text-foreground">
                      {q.question}
                    </h3>
                    
                    <div className="px-4">
                      <Slider
                        value={[answers[q.id] || 0]}
                        onValueChange={(value) => handleSliderChange(q.id, value)}
                        max={100}
                        step={25}
                        className="w-full"
                      />
                      
                      <div className="flex justify-between mt-2 text-sm text-foreground-secondary">
                        {q.labels.map((label, index) => (
                          <span key={index} className="text-xs">
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button
                  onClick={() => setShowResults(true)}
                  disabled={Object.keys(answers).length < questions.length}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-8"
                >
                  Auswertung anzeigen
                </Button>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="hsl(var(--border))"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="hsl(var(--primary))"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(maturityScore / 100) * 314} 314`}
                      className="drop-shadow-[0_0_6px_hsl(var(--primary))]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{maturityScore}%</span>
                  </div>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-bold ${recommendation.color} mb-2`}>
                    {recommendation.level}
                  </h3>
                  <p className="text-body mb-6">
                    {recommendation.description}
                  </p>
                </div>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Empfohlener nächster Schritt:
                  </h4>
                  <p className="text-body mb-4">
                    Ein 15-minütiges Gespräch hilft uns, deine spezifische Situation zu verstehen 
                    und den optimalen Einstiegspunkt für eure KI-Journey zu finden.
                  </p>
                  
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    15 Minuten, die dir Klarheit bringen
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MaturityCheck;