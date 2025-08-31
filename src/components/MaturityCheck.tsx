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
  return;
};
export default MaturityCheck;