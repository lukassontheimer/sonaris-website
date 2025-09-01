import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Lukas Sontheimer",
    role: "KI-Stratege",
    bio: "Spezialist für KI-Transformation in mittelständischen Unternehmen mit umfassender Erfahrung in der Strategieberatung."
  },
  {
    name: "Lorenz Surkemper",
    role: "Technologie-Experte",
    bio: "Experte für DSGVO-konforme KI-Systeme und Integration bestehender Unternehmensstrukturen."
  },
  {
    name: "Oliver Andrees",
    role: "Solutions Architect",
    bio: "Entwickelt maßgeschneiderte KI-Lösungen, die nahtlos in bestehende Unternehmensprozesse integrieren."
  },
  {
    name: "Christian Pessing",
    role: "Sales & Training",
    bio: "Christian trainiert die Geometrie der Gesprächsführung – eine systematische Methode, die Kommunikation klar strukturiert und anschlussfähig macht. Sein Schwerpunkt liegt auf der Interaktion mit KI- und LLM-Systemen, sodass Verständigung zwischen Menschen und Modellen verlässlich gelingt."
  }
];

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 sm:mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary text-xs sm:text-sm">
            Wir mit dir und für dich
          </Badge>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-headline mb-4 sm:mb-6 leading-tight">
            Fünf <span className="gradient-text">Perspektiven</span>
          </h2>
          
          <p className="text-base sm:text-lg text-body max-w-3xl mx-auto">
            Training, Beratung, Entwicklung - plus ein digitales Gegenüber. 
            So entsteht ein System, das dich bei der Integration von KI unterstützt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="interactive-glow bg-card border-card-border hover:border-primary/20 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <CardContent className="p-4 sm:p-6">
                {/* Profile picture or avatar fallback */}
                <div className="mx-auto mb-3 sm:mb-4 w-16 h-16 sm:w-20 sm:h-20">
                  <Avatar className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-primary/30 group-hover:border-primary/50 transition-colors duration-300">
                    {index === 0 ? (
                      <AvatarImage src="/lovable-uploads/cd70301f-650c-4fa0-8d91-f24e87a9405c.webp" alt={member.name} />
                    ) : index === 1 ? (
                      <AvatarImage src="/lovable-uploads/64310054-52e7-48af-ba44-b16e7e1a919f.webp" alt={member.name} />
                    ) : index === 2 ? (
                      <AvatarImage src="/lovable-uploads/2978bf0f-c48a-4252-99b2-0c893e569892.webp" alt={member.name} />
                    ) : index === 3 ? (
                      <AvatarImage src="/lovable-uploads/6ecd5e1b-5938-4825-83a1-6463e2b7075b.webp" alt={member.name} />
                    ) : null}
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/5 text-lg sm:text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold text-foreground text-center mb-1 sm:mb-2">
                  {member.name}
                </h3>
                
                <p className="text-primary text-xs sm:text-sm text-center font-medium mb-2 sm:mb-3">
                  {member.role}
                </p>
                
                {/* Bio slide-in effect */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredMember === index ? "max-h-32 sm:max-h-24 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-body text-xs sm:text-sm leading-relaxed text-center">
                    {member.bio}
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

export default TeamSection;