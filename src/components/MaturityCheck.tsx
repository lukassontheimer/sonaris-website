import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
const questions = [{
  id: 1,
  question: "Wie vertraut ist dein Team mit KI-Tools?",
  labels: ["Gar nicht", "Grundlagen", "Regelmäßig", "Expertenwissen"]
}, {
  id: 2,
  question: "Wie strukturiert sind eure Daten?",
  labels: ["Chaotisch", "Teilweise", "Meist gut", "Vollständig"]
}, {
  id: 3,
  question: "Wie klar sind eure KI-Ziele?",
  labels: ["Unklar", "Grobe Ideen", "Konkret", "Sehr spezifisch"]
}, {
  id: 4,
  question: "Wie ist die Führungsunterstützung?",
  labels: ["Skeptisch", "Zurückhaltend", "Unterstützend", "Voll dabei"]
}, {
  id: 5,
  question: "Wie ist euer Budget für KI-Projekte?",
  labels: ["Kein Budget", "Begrenzt", "Angemessen", "Großzügig"]
}];
const MaturityCheck = () => {
  const [answers, setAnswers] = useState<{
    [key: number]: number;
  }>({});
  const [showResults, setShowResults] = useState(false);
  const handleSliderChange = (questionId: number, value: number[]) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value[0]
    }));
  };
  const calculateMaturity = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 100;
    return Math.round(totalScore / maxScore * 100);
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
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-headline mb-4">
            KI-Reifegrad Check
          </h2>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Finde heraus, wo dein Unternehmen bei der KI-Adoption steht
          </p>
        </div>

        {!showResults ? (
          <Card className="p-8">
            <CardContent className="space-y-8">
              {questions.map((question) => (
                <div key={question.id} className="space-y-4">
                  <h3 className="text-lg font-semibold text-headline">
                    {question.question}
                  </h3>
                  <div className="space-y-2">
                    <Slider
                      value={[answers[question.id] || 0]}
                      onValueChange={(value) => handleSliderChange(question.id, value)}
                      max={100}
                      step={25}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-body">
                      {question.labels.map((label, index) => (
                        <span key={index}>{label}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              <Button 
                onClick={() => setShowResults(true)}
                disabled={Object.keys(answers).length < questions.length}
                className="w-full mt-8"
              >
                Ergebnis anzeigen
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="p-8 text-center">
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="text-6xl font-bold text-primary">
                  {maturityScore}%
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {recommendation.level}
                </Badge>
                <p className="text-lg text-body">
                  {recommendation.description}
                </p>
              </div>
              
              <Button onClick={() => setShowResults(false)} variant="outline">
                Nochmal versuchen
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};
export default MaturityCheck;