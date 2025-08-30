import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dr. Sarah Weber",
    role: "KI-Strategin",
    bio: "Spezialistin für KI-Transformation in mittelständischen Unternehmen mit 8 Jahren Erfahrung in der Strategieberatung."
  },
  {
    name: "Marcus Richter",
    role: "Lead Developer",
    bio: "Experte für DSGVO-konforme KI-Systeme und Integration bestehender Unternehmensstrukturen."
  },
  {
    name: "Anna Hoffmann",
    role: "Training & Change",
    bio: "Führt Teams durch Veränderungsprozesse und macht KI-Technologien für alle Mitarbeiter zugänglich."
  },
  {
    name: "Thomas Müller",
    role: "Solutions Architect",
    bio: "Entwickelt maßgeschneiderte KI-Lösungen, die nahtlos in bestehende Unternehmensprozesse integrieren."
  }
];

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="team" className="py-32 px-6 bg-background-secondary/50 animated-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <Badge className="bg-card/60 backdrop-blur-md border-border text-foreground-secondary">
            Wir mit dir und für dich
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-headline leading-tight max-w-4xl mx-auto">
            Fünf <span className="gradient-text">Perspektiven</span>
          </h2>
          
          <p className="text-lg text-body max-w-2xl mx-auto">
            Training, Beratung, Entwicklung - plus ein digitales Gegenüber. 
            So entsteht ein System, das dich bei der Integration von KI unterstützt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="card-hover bg-card border-border cursor-pointer group"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <CardContent className="p-6">
                {/* Placeholder avatar with cyan border */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 mx-auto mb-4 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
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