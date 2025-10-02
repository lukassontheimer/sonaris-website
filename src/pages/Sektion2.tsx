import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Sektion2 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-20 sm:pt-24">
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-4 sm:mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary text-xs sm:text-sm">
                Sektion 2
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-4 sm:mb-6 leading-tight">
                Ein Fundament aus rechtlicher Klarheit schaffen
              </h1>
              
              <p className="text-base sm:text-lg text-body max-w-3xl mx-auto">
                EU AI Act und Compliance-Anforderungen verstehen
              </p>
            </div>

            <div className="space-y-8">
              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8">
                  <p className="text-sm sm:text-base text-body leading-relaxed mb-6">
                    Mit befähigten Teams als Basis könnt ihr jetzt die rechtlichen Grundlagen für eure KI-Nutzung schaffen. Diese Sektion führt euch durch die komplexe Landschaft der EU-KI-Verordnung und zeigt, wie ihr sie systematisch auf euer Unternehmen anwendet.
                  </p>
                  <p className="text-sm sm:text-base text-body leading-relaxed mb-6">
                    Die EU-KI-Verordnung ist mehr als ein Regelwerk - sie ist eine neue Sprache für den Umgang mit KI-Risiken. Eure Teams müssen diese Sprache verstehen und sprechen können. Gleichzeitig braucht ihr klare Strukturen, um den Überblick über eure KI-Landschaft zu behalten und Governance-Prozesse zu etablieren, die mit euren Anforderungen wachsen.
                  </p>
                  <p className="text-sm sm:text-base text-body leading-relaxed">
                    Wir zeigen euch, wie ihr ein systematisches Regulierungs-Radar aufbaut, eure KI-Anwendungen vollständig erfasst und dokumentiert, und Governance-Strukturen etabliert, die sowohl compliance-konform als auch praktikabel sind. Am Ende dieser Sektion verfügt ihr über eine solide rechtliche Grundlage für alle weiteren KI-Projekte.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-6">
                    Checkpoint 4: Regulierungs-Radar aktivieren
                  </h2>
                  
                  <p className="text-base sm:text-lg font-semibold text-foreground mb-6 italic">
                    Statt Regulierung zu ignorieren, entwickelt ihr systematisches Verständnis für die EU-KI-Verordnung und ihre Auswirkungen
                  </p>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-6">
                    Die EU-KI-Verordnung tritt nicht schlagartig in Kraft - sie entwickelt sich in Phasen, mit unterschiedlichen Fristen für verschiedene Systemtypen. Eure Organisation braucht ein klares Verständnis dieser Zeitlinien und der konkreten Anforderungen für eure Anwendungsfälle.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Die Struktur der EU-KI-Verordnung verstehen
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Die Verordnung arbeitet mit einem risikobasierten Ansatz. KI-Systeme werden in vier Kategorien eingeteilt: unannehmbares Risiko (verboten), hohes Risiko (strenge Auflagen), begrenztes Risiko (Transparenzpflichten) und minimales Risiko (keine besonderen Auflagen). Diese Klassifizierung bestimmt, welche Pflichten für euch gelten.
                  </p>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Hochrisiko-KI-Systeme sind besonders relevant für viele Unternehmen. Dazu gehören Systeme für Personalauswahl, Kreditbewertung, Bildungsbeurteilung oder Sicherheitskomponenten. Wenn ihr solche Systeme nutzt oder entwickelt, unterliegt ihr umfangreichen Dokumentations-, Test- und Überwachungspflichten.
                  </p>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-6">
                    KI-Systeme mit begrenztem Risiko umfassen vor allem Chatbots und andere Systeme, die mit Menschen interagieren. Hier müsst ihr transparent machen, dass Nutzer mit einem KI-System kommunizieren. Diese Transparenzpflicht klingt einfach, erfordert aber durchdachte Umsetzung in euren Benutzeroberflächen und Kommunikationsprozessen.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Zeitplan und Meilensteine strategisch nutzen
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Wir helfen euch dabei, den Implementierungsfahrplan der EU-KI-Verordnung in eure Unternehmensplanung zu integrieren:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Sofortige Maßnahmen (bereits in Kraft)
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Verbotene KI-Praktiken müssen sofort eingestellt werden. Dazu gehören Systeme zur Manipulation menschlichen Verhaltens, Social Scoring oder biometrische Kategorisierung in Echtzeit im öffentlichen Raum. Prüft eure aktuellen KI-Anwendungen auf solche Praktiken.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        August 2025: Foundation Models
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Anbieter von Foundation Models mit mehr als 10^25 FLOPs müssen erste Compliance-Maßnahmen umsetzen. Falls ihr solche Modelle nutzt, solltet ihr von euren Anbietern entsprechende Dokumentation und Sicherheitsmaßnahmen einfordern.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        August 2026: Hochrisiko-Systeme
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Alle Hochrisiko-KI-Systeme müssen vollständig compliant sein. Das bedeutet: Risikomanagement-System, Datenqualitäts-Governance, technische Dokumentation, Aufzeichnungen, Transparenz, menschliche Aufsicht, Genauigkeit und Robustheit.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        August 2027: Vollständige Umsetzung
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Alle Bestimmungen der Verordnung sind in Kraft. Bis dahin müssen auch bestehende Systeme nachgerüstet oder außer Betrieb genommen werden.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Risikoklassifizierung für eure Anwendungsfälle
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Die korrekte Einordnung eurer KI-Systeme ist entscheidend für die Compliance-Anforderungen:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Systematische Bewertung etablieren
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Wir entwickeln mit euch einen strukturierten Bewertungsprozess für eure KI-Anwendungen. Jedes System wird anhand der Kriterien der EU-Verordnung bewertet: Anwendungsbereich, Zweck, betroffene Personengruppen, potenzielle Auswirkungen. Diese Bewertung erfolgt interdisziplinär - IT, Recht und Fachbereiche arbeiten zusammen.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Grenzfälle identifizieren
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Viele KI-Anwendungen lassen sich nicht eindeutig einer Risikoklasse zuordnen. Ein Chatbot für Kundenservice kann je nach Funktionsumfang unterschiedlich eingestuft werden. Wir helfen euch dabei, solche Grenzfälle zu identifizieren und konservative, rechtssichere Entscheidungen zu treffen.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Dokumentation der Klassifizierung
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Jede Risikoklassifizierung wird nachvollziehbar dokumentiert. Ihr könnt gegenüber Aufsichtsbehörden belegen, warum ihr ein System bestimmten Kategorien zugeordnet habt. Diese Dokumentation wird regelmäßig überprüft und bei Systemänderungen aktualisiert.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Branchenspezifische Anforderungen integrieren
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Die EU-KI-Verordnung interagiert mit sektorspezifischen Regelungen:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Finanzdienstleistungen
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Zusätzliche Anforderungen durch MiFID II, PSD2 oder Basel-Regelwerk. KI-Systeme für Kreditentscheidungen oder Anlageberatung unterliegen besonderen Transparenz- und Dokumentationspflichten.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Gesundheitswesen
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Medizinprodukte-Verordnung (MDR) und KI-Verordnung überschneiden sich. KI-gestützte Diagnosesysteme müssen beide Regelwerke erfüllen, was komplexe Zertifizierungsprozesse zur Folge hat.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Kritische Infrastrukturen
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Energie-, Transport- oder Telekommunikationsunternehmen haben zusätzliche Sicherheitsanforderungen. KI-Systeme in diesen Bereichen müssen besonders robuste Sicherheitsmaßnahmen implementieren.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Kontinuierliches Monitoring der Rechtsentwicklung
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Die rechtliche Landschaft entwickelt sich kontinuierlich weiter:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Durchführungsverordnungen verfolgen
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Die EU-Kommission veröffentlicht laufend konkretisierende Regelungen. Diese Durchführungsverordnungen präzisieren abstrakte Anforderungen der Hauptverordnung und sind für eure praktische Umsetzung entscheidend.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Leitlinien der Aufsichtsbehörden
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Nationale und europäische Aufsichtsbehörden publizieren regelmäßig Auslegungshilfen und Best Practices. Diese Leitlinien geben wichtige Hinweise für die praktische Umsetzung.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Rechtsprechung beobachten
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Erste Gerichtsurteile zur KI-Verordnung werden die Auslegung prägen. Ihr solltet relevante Entscheidungen verfolgen und deren Auswirkungen auf eure Compliance-Strategie bewerten.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
                    <p className="text-sm sm:text-base font-semibold text-foreground mb-2">
                      Checkpoint erreicht, wenn:
                    </p>
                    <p className="text-sm sm:text-base text-body leading-relaxed">
                      Ihr habt ein systematisches Verständnis der EU-KI-Verordnung entwickelt und könnt eure KI-Systeme korrekt klassifizieren. Eure Teams kennen die relevanten Fristen und Anforderungen. Ihr verfügt über Prozesse zur kontinuierlichen Beobachtung der Rechtsentwicklung und könnt neue Anforderungen zeitnah in eure Compliance-Strategie integrieren.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-6">
                    Checkpoint 5: KI-Landkarte erstellen
                  </h2>
                  
                  <p className="text-base sm:text-lg font-semibold text-foreground mb-6 italic">
                    Statt den Überblick zu verlieren, entwickelt ihr ein systematisches Inventar aller KI-Anwendungen
                  </p>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-6">
                    Ohne vollständige Transparenz über eure KI-Landschaft ist Compliance unmöglich. Viele Unternehmen sind überrascht, wie viele KI-Systeme bereits im Einsatz sind - oft ohne zentrale Koordination oder Dokumentation.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Die versteckte KI-Nutzung aufdecken
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    KI-Systeme verbreiten sich oft organisch in Organisationen. Marketing nutzt AI-Tools für Content-Erstellung, HR experimentiert mit CV-Screening-Software, der Vertrieb testet Chatbots für Lead-Qualifizierung. Diese dezentrale Nutzung macht es schwer, den Überblick zu behalten.
                  </p>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-6">
                    Gleichzeitig sind viele Standard-Software-Lösungen mittlerweile KI-gestützt, ohne dass dies explizit kommuniziert wird. Euer CRM-System nutzt möglicherweise Machine Learning für Lead-Scoring, eure E-Mail-Software hat AI-basierte Spam-Filter, euer ERP-System optimiert Lagerhaltung mit Algorithmen. Diese "versteckten" KI-Anwendungen müssen ebenfalls erfasst und bewertet werden.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Systematische Inventarisierung durchführen
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Wir entwickeln mit euch einen strukturierten Ansatz zur vollständigen Erfassung eurer KI-Landschaft:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Bottom-Up-Erfassung
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Jede Abteilung dokumentiert ihre KI-Nutzung systematisch. Wir stellen Fragebögen und Checklisten zur Verfügung, die auch Nicht-Techniker verwenden können. Wichtig: Wir fragen nicht nur nach expliziten "KI-Tools", sondern nach allen Systemen, die automatisierte Entscheidungen treffen oder Muster in Daten erkennen.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Top-Down-Analyse
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Parallel analysieren wir eure IT-Infrastruktur systematisch. Welche Software-Lizenzen habt ihr? Welche Cloud-Services nutzt ihr? Welche APIs sind angebunden? Diese technische Analyse deckt oft KI-Funktionen auf, die den Nutzern nicht bewusst sind.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Vendor-Assessment
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Wir entwickeln standardisierte Fragebögen für eure Software-Anbieter. Diese müssen offenlegen, welche KI-Technologien in ihren Produkten verwendet werden, welche Daten verarbeitet werden und welche Compliance-Maßnahmen implementiert sind.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Strukturierte Dokumentation etablieren
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Jede KI-Anwendung wird nach einem einheitlichen Schema dokumentiert:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Grunddaten erfassen
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        System-Name, Anbieter, Version, Einsatzbereich, verantwortliche Abteilung, technische Ansprechpartner. Diese Basisdaten schaffen Transparenz und ermöglichen effiziente Kommunikation bei Compliance-Fragen.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Funktionalität beschreiben
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Was macht das System konkret? Welche Entscheidungen trifft es? Welche Daten nutzt es als Input? Welche Outputs generiert es? Diese funktionale Beschreibung ist Grundlage für die Risikoklassifizierung.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Datenflüsse dokumentieren
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Welche personenbezogenen Daten werden verarbeitet? Woher stammen diese Daten? An wen werden Ergebnisse weitergegeben? Diese Dokumentation ist sowohl für DSGVO- als auch für KI-Verordnungs-Compliance erforderlich.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Risikobewertung durchführen
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Basierend auf der EU-KI-Verordnung wird jedes System einer Risikoklasse zugeordnet. Diese Bewertung bestimmt die weiteren Compliance-Anforderungen und wird bei Systemänderungen aktualisiert.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Zentrale Registrierung implementieren
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Alle Informationen fließen in ein zentrales KI-Register:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Tool-Auswahl
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Ihr könnt spezialisierte Governance-Tools nutzen oder das Register in bestehende Systeme integrieren. Wichtig ist die Benutzerfreundlichkeit - wenn die Dokumentation zu aufwendig ist, wird sie nicht gepflegt.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Zugriffsrechte definieren
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Verschiedene Rollen brauchen unterschiedliche Informationen. Fachbereiche sehen ihre eigenen Systeme detailliert, die Geschäftsführung erhält Übersichts-Dashboards, Compliance-Teams haben Vollzugriff für Audit-Zwecke.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Workflow-Integration
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Das Register wird in eure bestehenden Prozesse integriert. Neue KI-Projekte müssen registriert werden, bevor sie produktiv gehen. Änderungen an bestehenden Systemen lösen automatisch Aktualisierungen aus.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Kontinuierliche Pflege sicherstellen
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Ein KI-Register ist nur so gut wie seine Aktualität:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Regelmäßige Reviews
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Quartalsweise Überprüfung aller Einträge durch die verantwortlichen Teams. Haben sich Funktionen geändert? Sind neue Systeme hinzugekommen? Wurden alte Systeme abgeschaltet?
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Automatisierte Erkennung
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Wo möglich, implementiert ihr automatisierte Systeme zur Erkennung neuer KI-Anwendungen. API-Monitoring kann neue Integrationen aufdecken, Lizenz-Management-Tools zeigen neue Software-Käufe an.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Change-Management-Integration
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Alle IT-Änderungen durchlaufen einen KI-Check: Enthält die neue Software KI-Funktionen? Ändert sich die Risikoklassifizierung bestehender Systeme? Diese Integration verhindert, dass KI-Anwendungen "unter dem Radar" eingeführt werden.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Governance und Verantwortlichkeiten
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Klare Rollen und Prozesse sind entscheidend für ein funktionierendes KI-Register:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Data Owner definieren
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Jede KI-Anwendung hat einen klar definierten Verantwortlichen. Diese Person ist für die Aktualität der Dokumentation verantwortlich und Ansprechpartner für Compliance-Fragen.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Approval-Workflows
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Neue Einträge und wesentliche Änderungen durchlaufen definierte Freigabeprozesse. Je nach Risikoklasse sind unterschiedliche Stakeholder involviert - von der Abteilungsleitung bis zum Compliance-Board.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Audit-Trails
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Alle Änderungen am Register werden protokolliert. Ihr könnt jederzeit nachvollziehen, wer wann welche Informationen geändert hat. Diese Nachvollziehbarkeit ist für behördliche Prüfungen essentiell.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
                    <p className="text-sm sm:text-base font-semibold text-foreground mb-2">
                      Checkpoint erreicht, wenn:
                    </p>
                    <p className="text-sm sm:text-base text-body leading-relaxed">
                      Ihr habt vollständige Transparenz über eure KI-Landschaft. Alle KI-Systeme sind erfasst, klassifiziert und dokumentiert. Eure Teams nutzen das KI-Register aktiv für Planung und Compliance. Neue KI-Anwendungen werden systematisch erfasst, bevor sie produktiv gehen. Das Register ist aktuell und wird kontinuierlich gepflegt.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-6">
                    Checkpoint 6: Governance-Rahmen etablieren
                  </h2>
                  
                  <p className="text-base sm:text-lg font-semibold text-foreground mb-6 italic">
                    Statt Prozesse dem Zufall zu überlassen, entwickelt ihr strukturierte Governance für den gesamten KI-Lifecycle
                  </p>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-6">
                    Rechtssichere KI-Nutzung braucht klare Prozesse für Auswahl, Einführung, Betrieb und Überwachung von KI-Systemen. Diese Governance-Strukturen müssen sowohl Compliance-Anforderungen erfüllen als auch praktikabel für eure Teams sein.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Governance-Strukturen designen
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Effektive KI-Governance balanciert zentrale Kontrolle mit dezentraler Flexibilität:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        KI-Governance-Board etablieren
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Ein interdisziplinäres Gremium aus IT, Recht, Compliance, Datenschutz und Fachbereichen trifft strategische Entscheidungen zur KI-Nutzung. Dieses Board definiert Richtlinien, genehmigt Hochrisiko-Systeme und eskaliert kritische Probleme. Wichtig: Das Board hat echte Entscheidungsbefugnis und trifft sich regelmäßig.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Dezentrale KI-Koordinatoren
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Jede Abteilung benennt KI-Koordinatoren, die als Schnittstelle zum Governance-Board fungieren. Diese Personen verstehen sowohl die fachlichen Anforderungen ihrer Abteilung als auch die übergreifenden Compliance-Anforderungen. Sie unterstützen ihre Teams bei KI-Projekten und eskalieren bei Bedarf.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Center of Excellence aufbauen
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Ein zentrales Team entwickelt Standards, Best Practices und Schulungsmaterialien für KI-Nutzung. Dieses Center of Excellence unterstützt Fachbereiche bei der Implementierung und sorgt für einheitliche Qualitätsstandards.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Lifecycle-Prozesse definieren
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Jede Phase der KI-Nutzung erhält strukturierte Prozesse:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Bedarfsanalyse und Planung
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Bevor KI-Systeme eingeführt werden, erfolgt eine systematische Bedarfsanalyse. Welches Problem soll gelöst werden? Welche Alternativen gibt es? Welche Risiken entstehen? Diese Analyse verhindert den Einsatz von KI als "Lösung auf der Suche nach einem Problem".
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Vendor-Assessment und Auswahl
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Standardisierte Bewertungskriterien für KI-Anbieter: technische Capabilities, Compliance-Maßnahmen, Datenschutz, Support-Qualität, finanzielle Stabilität. Diese Kriterien werden gewichtet und führen zu objektiven Auswahlentscheidungen.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Pilot- und Testphasen
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Neue KI-Systeme durchlaufen strukturierte Testphasen, bevor sie produktiv gehen. Diese Tests umfassen technische Funktionalität, Compliance-Konformität, Nutzerakzeptanz und Risikobewertung. Klare Go/No-Go-Kriterien entscheiden über den Produktivbetrieb.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Produktivbetrieb und Monitoring
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Laufende Überwachung der KI-Systeme auf technische Performance, Compliance-Konformität und Qualität der Ergebnisse. Regelmäßige Reviews bewerten, ob die Systeme noch den ursprünglichen Anforderungen entsprechen.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Change Management und Updates
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Strukturierte Prozesse für Systemänderungen: Wie werden Updates bewertet? Wann ist eine neue Risikobewertung erforderlich? Wie werden Nutzer über Änderungen informiert? Diese Prozesse verhindern, dass Updates unbemerkt Compliance-Risiken schaffen.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        End-of-Life und Dekommissionierung
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Klare Prozesse für die Außerbetriebnahme von KI-Systemen: Datenlöschung, Dokumentationsarchivierung, Nutzerinformation, Migrationspfade zu Nachfolgesystemen.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Rollen und Verantwortlichkeiten
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Klare Zuständigkeiten sind entscheidend für funktionierende Governance:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        RACI-Matrix entwickeln
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Für jeden Governance-Prozess wird definiert, wer verantwortlich (Responsible), rechenschaftspflichtig (Accountable), zu konsultieren (Consulted) und zu informieren (Informed) ist. Diese Klarheit verhindert Verantwortungsdiffusion und Kommunikationslücken.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Eskalationspfade definieren
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Klare Regeln, wann und wie Entscheidungen eskaliert werden. Routineentscheidungen können dezentral getroffen werden, kritische Fragen gehen an das Governance-Board, existenzielle Risiken erreichen die Geschäftsführung.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Schulung und Befähigung
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Alle Beteiligten werden für ihre Governance-Rollen geschult. KI-Koordinatoren lernen Risikobewertung, Board-Mitglieder verstehen rechtliche Anforderungen, Fachbereiche können Compliance-Checks durchführen.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Dokumentation und Nachvollziehbarkeit
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Governance-Entscheidungen müssen nachvollziehbar sein:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Entscheidungsdokumentation
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Alle wesentlichen Governance-Entscheidungen werden dokumentiert: Begründung, beteiligte Personen, Bewertungskriterien, Alternativen, Risiken. Diese Dokumentation ist für Audits und behördliche Prüfungen essentiell.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Prozess-Dokumentation
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Alle Governance-Prozesse sind schriftlich dokumentiert und für alle Beteiligten zugänglich. Regelmäßige Updates stellen sicher, dass die Dokumentation aktuell bleibt.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Audit-Trails
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Lückenlose Protokollierung aller Governance-Aktivitäten. Ihr könnt jederzeit nachvollziehen, welche Entscheidungen wann von wem getroffen wurden und welche Informationen dabei verwendet wurden.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4">
                    Kontinuierliche Verbesserung
                  </h3>

                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Eure Governance-Strukturen entwickeln sich kontinuierlich weiter:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Regelmäßige Governance-Reviews
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Halbjährliche Bewertung der Governance-Prozesse: Was funktioniert gut? Wo gibt es Verzögerungen oder Probleme? Welche neuen Anforderungen sind entstanden? Diese Reviews führen zu kontinuierlichen Verbesserungen.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Lessons Learned Integration
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Erkenntnisse aus KI-Projekten fließen in die Verbesserung der Governance-Prozesse. Wenn ein Projekt scheitert oder unerwartete Probleme auftreten, werden die Governance-Prozesse entsprechend angepasst.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        Benchmark und Best Practices
                      </h4>
                      <p className="text-sm sm:text-base text-body leading-relaxed">
                        Regelmäßiger Austausch mit anderen Unternehmen, Branchenverbänden und Experten. Welche Governance-Ansätze haben sich bewährt? Welche neuen Herausforderungen entstehen? Dieser Austausch hilft bei der kontinuierlichen Weiterentwicklung.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
                    <p className="text-sm sm:text-base font-semibold text-foreground mb-2">
                      Checkpoint erreicht, wenn:
                    </p>
                    <p className="text-sm sm:text-base text-body leading-relaxed">
                      Ihr habt funktionierende Governance-Strukturen für den gesamten KI-Lifecycle etabliert. Eure Teams kennen ihre Rollen und Verantwortlichkeiten. Entscheidungen werden strukturiert getroffen und nachvollziehbar dokumentiert. Die Governance-Prozesse sind sowohl compliance-konform als auch praktikabel. Ihr könnt flexibel auf neue Anforderungen reagieren, ohne die Governance-Qualität zu gefährden.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-headline mb-6">
                    Sektion 2 – Zusammenfassung: Rechtliche Grundlagen geschaffen
                  </h2>
                  
                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Mit diesen drei Checkpoints habt ihr eine solide rechtliche Basis für eure KI-Nutzung geschaffen. Ihr versteht die EU-KI-Verordnung und ihre Auswirkungen, habt vollständige Transparenz über eure KI-Landschaft und verfügt über strukturierte Governance-Prozesse. Diese Grundlagen ermöglichen es euch, KI-Projekte rechtssicher zu planen und umzusetzen.
                  </p>
                  
                  <p className="text-sm sm:text-base text-body leading-relaxed">
                    In Sektion 3 sichern wir eure Vertragsbeziehungen ab: Ihr lernt, wie ihr rechtssichere Verträge mit KI-Anbietern gestaltet, Urheberrechts- und IP-Risiken managt und klare Haftungsstrukturen etabliert.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sektion2;
