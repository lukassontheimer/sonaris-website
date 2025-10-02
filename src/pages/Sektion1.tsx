import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const Sektion1 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-20 sm:pt-24">
        <article className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12 sm:mb-16">
              <Badge className="mb-4 sm:mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary text-xs sm:text-sm">
                Sektion 1
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-4 sm:mb-6 leading-tight">
                Menschen befähigen
              </h1>
              
              <p className="text-xl sm:text-2xl text-foreground-secondary mb-8 font-medium">
                KI-Kompetenz aufbauen und organisieren
              </p>
              
              <div className="space-y-4 text-base sm:text-lg text-body leading-relaxed">
                <p>
                  Rechtssichere KI-Nutzung beginnt bei euren Menschen. Eure Teams entscheiden täglich über KI-Einsatz, bewerten Risiken und setzen Compliance-Anforderungen um. Ohne diese Kompetenz bleiben selbst die besten rechtlichen Strukturen wirkungslos.
                </p>
                <p>
                  Wir erleben in unserer Arbeit immer wieder dasselbe Muster: Unternehmen investieren Monate in Rechtsberatung, entwickeln detaillierte Richtlinien und kaufen teure Compliance-Software. Dann scheitern sie daran, dass ihre Mitarbeitenden diese Werkzeuge nicht verstehen oder falsch anwenden. Die Lösung liegt in systematischer Befähigung - von der Führungsebene bis zu den Anwendern.
                </p>
                <p>
                  Diese Sektion zeigt euch, wie ihr eure Organisation von innen heraus auf KI-Compliance vorbereitet. Ihr entwickelt AI-Literacy in euren Teams, etabliert Change-Prozesse für die sich schnell wandelnde KI-Landschaft und baut Qualitäts-Governance auf, die mit euren Anforderungen wächst.
                </p>
              </div>
            </header>

            <div className="space-y-16">
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-6">
                  Checkpoint 1: Kompetenz-Ökosystem aufbauen
                </h2>
                
                <p className="text-lg text-foreground-secondary mb-6 italic">
                  Statt KI-Kompetenz zu unterschätzen, entwickelt ihr systematisch die Fähigkeiten, die eure Teams brauchen
                </p>

                <div className="space-y-6 text-base sm:text-lg text-body leading-relaxed">
                  <p>
                    Eure Mitarbeitenden nutzen bereits KI-Tools - oft ohne zu verstehen, welche rechtlichen Risiken dabei entstehen. Ein Marketingteam lädt Kundendaten in ChatGPT hoch, um Texte zu optimieren. Die Entwicklungsabteilung nutzt GitHub Copilot für Code-Generierung. Der Vertrieb experimentiert mit AI-gestützten E-Mail-Assistenten. Jede dieser Anwendungen berührt Datenschutz, Urheberrecht oder Haftungsfragen.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Unser Ansatz: Dialogische AI-Literacy
                  </h3>

                  <p>
                    Wir entwickeln AI-Literacy als praktische Gesprächsfähigkeit. Eure Teams lernen, präzise zu benennen, was sie von KI-Systemen brauchen und welche Risiken dabei entstehen. Sie verstehen die Funktionsweise von Large Language Models, erkennen Halluzinationen und Bias, bewerten Datenqualität und können rechtliche Anforderungen in ihre tägliche Arbeit übersetzen.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Konkrete Bausteine für euer Kompetenz-Ökosystem:
                  </h3>

                  <div className="space-y-6 ml-4 border-l-2 border-primary/30 pl-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Führungsebene: Strategic AI Governance
                      </h4>
                      <p>
                        Eure Führungskräfte brauchen strategisches Verständnis für KI-Compliance. In 120-minütigen Sessions entwickeln sie die Fähigkeit, KI-Projekte rechtlich zu bewerten, Budgets für Compliance-Maßnahmen zu planen und Risiken gegenüber Aufsichtsbehörden oder Investoren zu kommunizieren. Wir arbeiten mit realen Szenarien aus eurem Geschäftsbereich: Welche KI-Anwendungen plant ihr? Welche Risikoklassen sind betroffen? Welche Ressourcen braucht ihr für die Umsetzung bis 2027?
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Teamleiter: Operational AI Compliance
                      </h4>
                      <p>
                        Eure Teamleiter übersetzen strategische Vorgaben in operative Prozesse. Sie lernen, KI-Use-Cases zu dokumentieren, Risikobewertungen durchzuführen und ihre Teams bei der rechtssicheren Nutzung zu begleiten. Praktische Übungen zeigen, wie sie KI-Experimente strukturieren, Freigabeprozesse etablieren und bei Compliance-Verstößen reagieren. Diese Kompetenz macht sie zu Multiplikatoren in eurer Organisation.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Anwender: Practical AI Literacy
                      </h4>
                      <p>
                        Eure Mitarbeitenden entwickeln praktische Kompetenz im Umgang mit KI-Systemen. Sie verstehen, wie Prompting funktioniert, welche Daten sie eingeben dürfen und wie sie KI-Outputs bewerten. Wichtiger noch: Sie lernen, wann sie Rückfragen stellen müssen und wo sie Unterstützung finden. Diese Fähigkeiten entstehen in kurzen, praxisnahen Sessions direkt am Arbeitsplatz.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Spezialistenebene: Technical AI Governance
                      </h4>
                      <p>
                        Eure IT-, Rechts- und Compliance-Spezialisten brauchen tiefes technisches Verständnis. Sie bewerten KI-Systeme nach EU-Verordnung, führen Conformity Assessments durch und entwickeln interne Standards. Wir zeigen ihnen, wie sie KI-Dokumentation erstellen, Audit-Trails aufbauen und mit Behörden kommunizieren.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Messbare Erfolgskriterien für euer Kompetenz-Ökosystem:
                  </h3>

                  <ul className="list-disc ml-6 space-y-2">
                    <li>Kompetenz-Assessment: Regelmäßige Bewertung der AI-Literacy in verschiedenen Rollen</li>
                    <li>Use-Case-Qualität: Anteil korrekt dokumentierter und bewerteter KI-Anwendungen</li>
                    <li>Incident-Reduktion: Weniger Compliance-Verstöße durch besseres Verständnis</li>
                    <li>Selbstständigkeit: Teams können eigenständig einfache Risikobewertungen durchführen</li>
                    <li>Kommunikationsqualität: Präzisere Anfragen an IT, Recht und externe Dienstleister</li>
                  </ul>

                  <div className="bg-primary/5 border-l-4 border-primary p-4 mt-6">
                    <p className="font-semibold text-foreground">
                      Checkpoint erreicht, wenn:
                    </p>
                    <p className="mt-2">
                      Eure Teams können selbstständig erkennen, wann KI-Unterstützung rechtliche Fragen aufwirft. Sie stellen die richtigen Fragen, nutzen die verfügbaren Ressourcen und eskalieren angemessen bei komplexen Situationen. Diffuse Unsicherheit wird zu konkreten, bearbeitbaren Anfragen.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-6">
                  Checkpoint 2: Adaptions-Mechanismen etablieren
                </h2>
                
                <p className="text-lg text-foreground-secondary mb-6 italic">
                  Ihr baut Strukturen für kontinuierliche Anpassung
                </p>

                <div className="space-y-6 text-base sm:text-lg text-body leading-relaxed">
                  <p>
                    KI-Technologie entwickelt sich exponentiell. Was heute als risikoarm gilt, kann morgen neue Compliance-Anforderungen auslösen. Eure Organisation braucht Mechanismen, die diese Dynamik antizipieren und strukturiert darauf reagieren.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Die Herausforderung der KI-Evolution
                  </h3>

                  <p>
                    Ein Beispiel aus unserer Praxis: Ein Unternehmen nutzt seit Monaten einen KI-Assistenten für Kundenservice-E-Mails. Das System gilt als "risikoarm" nach EU-Verordnung. Dann führt der Anbieter ein Update ein: Der Assistent kann jetzt proaktiv Kunden kontaktieren und Termine vorschlagen. Plötzlich verändert sich die Risikoklassifizierung - aus einem einfachen Tool wird möglicherweise ein Hochrisiko-System mit umfangreichen Dokumentationspflichten.
                  </p>

                  <p>
                    Solche Szenarien entstehen täglich. KI-Anbieter erweitern ihre Systeme, fügen neue Features hinzu, ändern Algorithmen oder Trainingsdaten. Gleichzeitig entwickelt sich die Rechtsprechung weiter, Behörden veröffentlichen neue Leitlinien und eure eigenen Anwendungsfälle werden komplexer.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Frühwarnsystem für KI-Veränderungen
                  </h3>

                  <p>
                    Wir helfen euch dabei, ein systematisches Monitoring für KI-Evolution aufzubauen. Ihr etabliert Prozesse, die Veränderungen frühzeitig erkennen und bewerten:
                  </p>

                  <div className="space-y-6 ml-4 border-l-2 border-primary/30 pl-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Technology Radar für KI-Compliance
                      </h4>
                      <p>
                        Eure IT- und Compliance-Teams überwachen systematisch die Entwicklung eurer KI-Anbieter. Welche Updates sind geplant? Welche neuen Features werden eingeführt? Wie ändern sich Nutzungsbedingungen oder Datenschutzerklärungen? Diese Informationen fließen in ein zentrales Dashboard, das Handlungsbedarf sichtbar macht.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Regulatory Monitoring
                      </h4>
                      <p>
                        Ihr verfolgt die Entwicklung der rechtlichen Landschaft: neue Durchführungsverordnungen zur EU-KI-Verordnung, Leitlinien von Aufsichtsbehörden, relevante Gerichtsurteile. Besonders wichtig sind sektorspezifische Entwicklungen - Finanzdienstleistungen, Gesundheitswesen oder kritische Infrastrukturen haben oft zusätzliche Anforderungen.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Internal Use Case Evolution
                      </h4>
                      <p>
                        Eure Teams nutzen KI-Tools oft kreativer, als ursprünglich geplant. Ein Tool für Textgenerierung wird plötzlich für Datenanalyse genutzt. Ein Chatbot entwickelt sich zum Beratungsassistenten. Ihr braucht Prozesse, die solche Nutzungsänderungen erfassen und rechtlich bewerten.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Strukturierte Change-Prozesse
                  </h3>

                  <p>
                    Wenn Veränderungen erkannt werden, braucht ihr klare Abläufe für die Bewertung und Umsetzung:
                  </p>

                  <div className="space-y-6 ml-4 border-l-2 border-primary/30 pl-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Re-Klassifizierungs-Trigger
                      </h4>
                      <p>
                        Ihr definiert konkrete Auslöser, die eine neue Risikobewertung erfordern: Funktionserweiterungen, Zweckänderungen, neue Datenquellen, geänderte Zielgruppen. Bei jedem Trigger durchlauft ihr einen standardisierten Bewertungsprozess.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Impact Assessment Prozess
                      </h4>
                      <p>
                        Jede Veränderung wird systematisch bewertet: Welche neuen Risiken entstehen? Welche Compliance-Anforderungen ändern sich? Welche Dokumentation muss aktualisiert werden? Welche Teams sind betroffen? Diese Bewertung erfolgt interdisziplinär - IT, Recht, Fachbereiche arbeiten zusammen.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Human-in-the-Loop Mechanismen
                      </h4>
                      <p>
                        Besonders bei autonomen KI-Systemen etabliert ihr klare menschliche Kontrollpunkte. Kritische Entscheidungen erfordern menschliche Freigabe. Ihr definiert Eskalationspfade für unerwartetes Systemverhalten und implementiert Kill-Switch-Mechanismen für Notfälle.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Kontinuierliche Lernschleifen
                  </h3>

                  <p>
                    Eure Adaptions-Mechanismen verbessern sich durch Erfahrung:
                  </p>

                  <div className="space-y-6 ml-4 border-l-2 border-primary/30 pl-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Lessons Learned Prozess
                      </h4>
                      <p>
                        Nach jeder größeren Anpassung reflektiert ihr: Was hat gut funktioniert? Wo gab es Verzögerungen oder Probleme? Welche Informationen haben gefehlt? Diese Erkenntnisse fließen in die Verbesserung eurer Prozesse.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Cross-Functional Teams
                      </h4>
                      <p>
                        Ihr etabliert regelmäßige Abstimmungen zwischen IT, Recht, Compliance und Fachbereichen. Diese Teams entwickeln gemeinsames Verständnis für KI-Risiken und können schneller auf Veränderungen reagieren.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        External Expertise Integration
                      </h4>
                      <p>
                        Ihr baut Netzwerke zu externen Experten auf: Rechtsanwälte mit KI-Spezialisierung, Branchenverbände, andere Unternehmen mit ähnlichen Herausforderungen. Dieser Austausch hilft bei der Einordnung komplexer Rechtsfragen.
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 border-l-4 border-primary p-4 mt-6">
                    <p className="font-semibold text-foreground">
                      Checkpoint erreicht, wenn:
                    </p>
                    <p className="mt-2">
                      Ihr könnt Veränderungen in der KI-Landschaft systematisch erkennen, bewerten und darauf reagieren. Eure Teams haben klare Prozesse für Re-Klassifizierungen und können flexibel auf neue Anforderungen eingehen. Veränderung wird von einem Risiko zu einem strukturiert handhabbaren Prozess.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-6">
                  Checkpoint 3: Qualitäts-Governance implementieren
                </h2>
                
                <p className="text-lg text-foreground-secondary mb-6 italic">
                  Ihr etabliert Systeme zur kontinuierlichen Überwachung und Verbesserung eurer KI-Compliance
                </p>

                <div className="space-y-6 text-base sm:text-lg text-body leading-relaxed">
                  <p>
                    Qualität in der KI-Compliance entsteht nicht durch einmalige Maßnahmen, sondern durch kontinuierliche Überwachung und systematische Verbesserung. Eure Organisation braucht Governance-Strukturen, die Qualität messbar machen und nachhaltig sichern.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Warum kontinuierliche Qualitätssicherung bei KI essentiell ist
                  </h3>

                  <p>
                    KI-Systeme verhalten sich anders als traditionelle Software. Sie lernen kontinuierlich, Algorithmen werden aktualisiert, neue Use Cases entstehen spontan. Ein Compliance-Audit, das heute grünes Licht gibt, kann morgen bereits überholt sein.
                  </p>

                  <p>
                    Hinzu kommt die Komplexität der KI-Systeme selbst. Während ihr bei traditioneller Software klar definieren könnt, was sie tut, verhalten sich KI-Systeme oft unvorhersagbar. Ein Sprachmodell kann heute korrekte Antworten geben und morgen bei ähnlichen Fragen halluzinieren. Diese Unberechenbarkeit erfordert neue Ansätze für Qualitätssicherung.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Kontinuierliche Qualitätsmessung
                  </h3>

                  <p>
                    Wir helfen euch dabei, Qualitäts-Governance als kontinuierlichen Prozess zu etablieren:
                  </p>

                  <div className="space-y-6 ml-4 border-l-2 border-primary/30 pl-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Real-Time Monitoring
                      </h4>
                      <p>
                        Eure KI-Systeme werden in Echtzeit überwacht. Ihr messt nicht nur technische Parameter wie Antwortzeiten oder Verfügbarkeit, sondern auch qualitative Aspekte: Wie oft halluziniert das System? Werden Bias-Muster erkennbar? Entsprechen die Outputs euren Qualitätsstandards? Diese Daten fließen in Dashboards, die Probleme frühzeitig sichtbar machen.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Output-Qualitätsbewertung
                      </h4>
                      <p>
                        Ihr etabliert systematische Bewertung der KI-Outputs. Stichprobenartige Überprüfungen durch Fachexperten, automatisierte Qualitätschecks, Nutzerfeedback-Systeme. Besonders wichtig: Ihr dokumentiert nicht nur Fehler, sondern analysiert deren Ursachen und Muster.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Compliance-Drift Detection
                      </h4>
                      <p>
                        KI-Systeme können sich über Zeit von ihren ursprünglichen Spezifikationen entfernen - durch kontinuierliches Lernen, Datenveränderungen oder Algorithmus-Updates. Ihr etabliert Mechanismen, die solche "Compliance-Drifts" erkennen: Verändert sich das Systemverhalten? Werden neue Risikokategorien berührt? Entstehen unerwartete Outputs?
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Strukturierte Governance-Prozesse
                  </h3>

                  <p>
                    Qualitäts-Governance braucht klare Verantwortlichkeiten und Prozesse:
                  </p>

                  <div className="space-y-6 ml-4 border-l-2 border-primary/30 pl-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        KI-Governance-Board
                      </h4>
                      <p>
                        Ihr etabliert ein interdisziplinäres Gremium aus IT, Recht, Compliance und Fachbereichen. Dieses Board trifft sich regelmäßig, bewertet Qualitätsdaten, entscheidet über Anpassungen und eskaliert kritische Probleme. Wichtig: Das Board hat echte Entscheidungsbefugnis und kann KI-Systeme bei Bedarf abschalten.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Quality Gates im KI-Lifecycle
                      </h4>
                      <p>
                        Jede Phase der KI-Nutzung erhält definierte Qualitätsprüfungen: vor der ersten Nutzung, bei größeren Updates, nach Incidents, in regelmäßigen Intervallen. Diese Gates haben klare Kriterien - ein System darf nur weiterlaufen, wenn alle Qualitätsanforderungen erfüllt sind.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Incident Management
                      </h4>
                      <p>
                        Ihr entwickelt spezielle Prozesse für KI-Incidents: Was passiert, wenn ein System falsche Entscheidungen trifft? Wie reagiert ihr auf Bias-Vorwürfe? Welche Meldepflichten bestehen gegenüber Behörden? Diese Prozesse werden regelmäßig geübt und aktualisiert.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Dokumentation und Nachvollziehbarkeit
                  </h3>

                  <p>
                    Qualitäts-Governance erfordert lückenlose Dokumentation:
                  </p>

                  <div className="space-y-6 ml-4 border-l-2 border-primary/30 pl-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Audit Trails
                      </h4>
                      <p>
                        Jede Entscheidung, jede Änderung, jeder Qualitätscheck wird protokolliert. Ihr könnt jederzeit nachvollziehen, warum ein System eine bestimmte Antwort gegeben hat, welche Daten verwendet wurden und wer welche Freigaben erteilt hat. Diese Transparenz ist nicht nur für interne Qualitätssicherung wichtig, sondern auch für behördliche Prüfungen.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Performance Benchmarking
                      </h4>
                      <p>
                        Ihr etabliert klare Leistungskennzahlen für eure KI-Systeme: Genauigkeit, Fairness, Robustheit, Compliance-Konformität. Diese Kennzahlen werden regelmäßig gemessen und mit Branchenstandards verglichen. Verschlechterungen werden frühzeitig erkannt und behoben.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Stakeholder Communication
                      </h4>
                      <p>
                        Qualitätsdaten werden regelmäßig an relevante Stakeholder kommuniziert: Geschäftsführung, Fachbereiche, Aufsichtsbehörden. Diese Kommunikation ist proaktiv und transparent - ihr berichtet nicht nur über Erfolge, sondern auch über Herausforderungen und Verbesserungsmaßnahmen.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Kontinuierliche Verbesserung
                  </h3>

                  <p>
                    Eure Qualitäts-Governance entwickelt sich kontinuierlich weiter:
                  </p>

                  <div className="space-y-6 ml-4 border-l-2 border-primary/30 pl-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Feedback-Integration
                      </h4>
                      <p>
                        Ihr sammelt systematisch Feedback von Nutzern, Kunden und internen Stakeholdern. Dieses Feedback fließt in die Verbesserung eurer KI-Systeme und Governance-Prozesse. Besonders wertvoll: Feedback zu "Near Misses" - Situationen, die beinahe zu Problemen geführt hätten.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Best Practice Sharing
                      </h4>
                      <p>
                        Ihr tauscht euch regelmäßig mit anderen Unternehmen, Branchenverbänden und Experten aus. Welche Governance-Ansätze haben sich bewährt? Welche neuen Herausforderungen entstehen? Dieser Austausch hilft bei der kontinuierlichen Verbesserung eurer Prozesse.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Technology Evolution Integration
                      </h4>
                      <p>
                        Eure Governance-Prozesse passen sich an neue Technologien an. Wenn neue KI-Capabilities verfügbar werden oder sich regulatorische Anforderungen ändern, aktualisiert ihr entsprechend eure Qualitätskriterien und Überwachungsmechanismen.
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 border-l-4 border-primary p-4 mt-6">
                    <p className="font-semibold text-foreground">
                      Checkpoint erreicht, wenn:
                    </p>
                    <p className="mt-2">
                      Ihr habt ein funktionierendes System zur kontinuierlichen Qualitätsüberwachung etabliert. Eure Teams können Qualitätsprobleme frühzeitig erkennen und strukturiert darauf reagieren. Qualität wird von einem abstrakten Ziel zu einem messbaren und steuerbaren Prozess. Eure KI-Governance ist robust genug, um mit der Technologie-Evolution Schritt zu halten.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-card/50 border border-card-border rounded-lg p-8 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-6">
                  Sektion 1 Zusammenfassung: Menschen als Fundament
                </h2>
                
                <div className="space-y-4 text-base sm:text-lg text-body leading-relaxed">
                  <p>
                    Mit diesen drei Checkpoints habt ihr das menschliche Fundament für rechtssichere KI-Nutzung gelegt. Eure Teams verfügen über die nötige AI-Literacy, ihr habt Strukturen für kontinuierliche Anpassung etabliert und Qualitäts-Governance implementiert. Diese Basis trägt alle weiteren Compliance-Maßnahmen.
                  </p>
                  <p>
                    Im Sektion 2 schaffen wir gemeinsam die rechtlichen Grundlagen: Ihr lernt, die EU-KI-Verordnung auf euer Geschäftsmodell anzuwenden, entwickelt ein systematisches KI-Inventar und etabliert Governance-Strukturen, die mit euren Anforderungen wachsen.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Sektion1;
