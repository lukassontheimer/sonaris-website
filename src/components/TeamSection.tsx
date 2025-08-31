import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Lukas Sontheimer",
    role: "KI-Strategist",
    bio: "Spezialist für KI-Transformation in mittelständischen Unternehmen mit umfassender Erfahrung in der Strategieberatung."
  },
  {
    name: "Lorenz Surkemper",
    role: "Lead Developer",
    bio: "Experte für DSGVO-konforme KI-Systeme und Integration bestehender Unternehmensstrukturen."
  },
  {
    name: "Oliver Andrees",
    role: "Solutions Architect",
    bio: "Entwickelt maßgeschneiderte KI-Lösungen, die nahtlos in bestehende Unternehmensprozesse integrieren."
  },
  {
    name: "Christian Pessing",
    role: "Training & Change",
    bio: "Führt Teams durch Veränderungsprozesse und macht KI-Technologien für alle Mitarbeiter zugänglich."
  }
];

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="team" className="py-24 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary">
            Wir mit dir und für dich
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-headline mb-6 leading-tight">
            Fünf <span className="gradient-text">Perspektiven</span>
          </h2>
          
          <p className="text-lg text-body max-w-3xl mx-auto">
            Training, Beratung, Entwicklung - plus ein digitales Gegenüber. 
            So entsteht ein System, das dich bei der Integration von KI unterstützt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="interactive-glow bg-card border-card-border hover:border-primary/20 transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <CardContent className="p-6">
                {/* Profile picture or avatar fallback */}
                <div className="mx-auto mb-4 w-20 h-20">
                  <Avatar className="w-20 h-20 border-2 border-primary/30 group-hover:border-primary/50 transition-colors duration-300">
                    {index === 0 ? (
                      <AvatarImage src="/lovable-uploads/cd70301f-650c-4fa0-8d91-f24e87a9405c.png" alt={member.name} />
                    ) : index === 1 ? (
                      <AvatarImage src="/lovable-uploads/64310054-52e7-48af-ba44-b16e7e1a919f.png" alt={member.name} />
                    ) : index === 2 ? (
                      <AvatarImage src="/lovable-uploads/2978bf0f-c48a-4252-99b2-0c893e569892.png" alt={member.name} />
                    ) : index === 3 ? (
                      <AvatarImage src="/lovable-uploads/2197ae50-ed87-4061-8a5f-6e7bf3bdf5f3.png" alt={member.name} />
                    ) : null}
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/5 text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground text-center mb-2">
                  {member.name}
                </h3>
                
                <p className="text-primary text-sm text-center font-medium mb-3">
                  {member.role}
                </p>
                
                {/* Bio slide-in effect */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredMember === index ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-body text-sm leading-relaxed text-center">
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