import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Sektion3 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-20 sm:pt-24">
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-4 sm:mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary text-xs sm:text-sm">
                Sektion 3
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-4 sm:mb-6 leading-tight">
                Verträge und Verantwortung klären
              </h1>
              
              <p className="text-base sm:text-lg text-body max-w-3xl mx-auto mb-6">
                Rechtssichere Partnerschaften und klare Haftungsstrukturen aufbauen
              </p>
            </div>

            <div className="space-y-8 text-body">
              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8 space-y-4">
                  <p className="text-sm sm:text-base leading-relaxed">
                    Mit soliden rechtlichen Grundlagen könnt ihr jetzt eure Vertragsbeziehungen systematisch absichern. Diese Sektion zeigt euch, wie ihr rechtssichere Partnerschaften mit KI-Anbietern aufbaut, Urheberrechts- und IP-Risiken proaktiv managt und klare Haftungsstrukturen etabliert.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Die EU-KI-Verordnung schafft neue Pflichten, aber sie definiert nicht automatisch, wer diese Pflichten erfüllt. Hier kommen Verträge ins Spiel: Sie übersetzen abstrakte rechtliche Anforderungen in konkrete Vereinbarungen zwischen euch und euren Partnern. Gleichzeitig entstehen durch KI-Nutzung neue Risiken im Bereich des geistigen Eigentums und der Haftung, die traditionelle Vertragsmodelle oft nicht abdecken.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Wir zeigen euch, wie ihr eure Vertragsarchitektur für das KI-Zeitalter optimiert, eine durchdachte IP-Schutzstrategie entwickelt und Haftungsrisiken strukturiert managt. Am Ende dieser Sektion verfügt ihr über rechtssichere Vertragsgrundlagen, die euch vor den wichtigsten KI-spezifischen Risiken schützen.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                      Checkpoint 7: Vertragsarchitektur optimieren
                    </h2>
                    <p className="text-sm sm:text-base italic text-body mb-4">
                      Statt auf unvollständige Standardverträge zu vertrauen, entwickelt ihr KI-spezifische Vertragsstrukturen
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-4">
                      Die EU-KI-Verordnung schafft komplexe Verantwortlichkeiten zwischen Anbietern, Betreibern und Nutzern von KI-Systemen. Eure Verträge müssen diese Verantwortlichkeiten klar regeln und sicherstellen, dass ihr alle nötigen Informationen und Unterstützung für eure Compliance-Pflichten erhaltet.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Neue Verantwortlichkeiten in der KI-Wertschöpfungskette
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Die traditionellen Rollen von Softwareanbietern und -nutzern reichen bei KI-Systemen nicht aus. Die EU-KI-Verordnung definiert spezifische Rollen mit jeweils eigenen Pflichten:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Anbieter (Provider)</strong> entwickeln oder modifizieren KI-Systeme und bringen sie in Verkehr. Sie tragen die Hauptverantwortung für Compliance, müssen Konformitätsbewertungen durchführen und CE-Kennzeichnungen anbringen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Betreiber (Deployer)</strong> nutzen KI-Systeme unter ihrer Verantwortung. Sie müssen sicherstellen, dass die Systeme ordnungsgemäß verwendet werden, und haben eigene Überwachungs- und Dokumentationspflichten.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      <strong>Bevollmächtigte (Authorized Representatives)</strong> vertreten Anbieter aus Drittländern in der EU und übernehmen deren Compliance-Verantwortung.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      Diese Rollen können sich überschneiden oder ändern, wenn ihr KI-Systeme anpasst oder weiterentwickelt. Eure Verträge müssen diese Komplexität abbilden und Klarheit über Zuständigkeiten schaffen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Informationspflichten vertraglich sichern
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Die EU-KI-Verordnung verpflichtet Anbieter zur Bereitstellung bestimmter Informationen, aber sie definiert nicht immer, in welcher Form oder Detailtiefe. Hier müsst ihr vertraglich nachschärfen:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Technische Dokumentation einfordern:</strong> Ihr braucht detaillierte Informationen über die KI-Systeme, die ihr nutzt: Funktionsweise, Trainingsdaten, Algorithmen, Risikobewertungen, Testverfahren. Diese Informationen sind für eure eigene Compliance-Bewertung essentiell und müssen vertraglich zugesichert werden.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Kontinuierliche Updates sicherstellen:</strong> KI-Systeme entwickeln sich kontinuierlich weiter. Eure Verträge müssen sicherstellen, dass ihr über alle relevanten Änderungen informiert werdet: Updates der Algorithmen, neue Trainingsdaten, geänderte Risikobewertungen, modifizierte Einsatzbereiche.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Compliance-Status transparent machen:</strong> Ihr müsst wissen, welche Compliance-Maßnahmen eure Anbieter implementiert haben und wie sich deren Compliance-Status entwickelt. Regelmäßige Reports und Zugang zu relevanten Zertifizierungen müssen vertraglich vereinbart werden.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Audit-Rechte und Kooperationspflichten
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Eure Compliance-Verantwortung erfordert oft Einblicke in die Systeme und Prozesse eurer Anbieter:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Audit-Rechte definieren:</strong> Ihr braucht das Recht, die Compliance-Maßnahmen eurer Anbieter zu überprüfen - entweder selbst oder durch beauftragte Dritte. Diese Audit-Rechte müssen praktikabel gestaltet werden: angemessene Vorlaufzeiten, Schutz von Geschäftsgeheimnissen, klare Kostentragung.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Kooperationspflichten bei Behördenanfragen:</strong> Wenn Aufsichtsbehörden Informationen anfordern oder Untersuchungen durchführen, müssen eure Anbieter kooperieren. Diese Kooperationspflicht sollte vertraglich vereinbart und mit konkreten Fristen und Verfahren hinterlegt werden.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Incident-Response-Prozesse:</strong> Bei Compliance-Verstößen oder Sicherheitsvorfällen müssen eure Anbieter euch unverzüglich informieren und bei der Problembehebung unterstützen. Diese Prozesse sollten detailliert vereinbart werden, einschließlich Eskalationswegen und Kommunikationsprotokollen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Haftung und Risikoteilung
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      KI-spezifische Risiken erfordern neue Ansätze für Haftungsverteilung:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Compliance-Haftung strukturieren:</strong> Wer haftet, wenn KI-Systeme nicht compliant sind? Eure Verträge müssen klar regeln, welche Compliance-Risiken bei Anbietern liegen und für welche ihr als Betreiber verantwortlich seid. Besonders wichtig: Haftung bei nachträglichen Änderungen der Rechtslage.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Produkthaftung bei KI-Fehlern:</strong> Wenn KI-Systeme falsche Entscheidungen treffen oder Schäden verursachen, entstehen komplexe Haftungsfragen. Eure Verträge sollten klare Regelungen für solche Fälle enthalten, einschließlich Versicherungsschutz und Schadenersatzverfahren.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Regressansprüche und Freistellungen:</strong> Strukturierte Regelungen für Regressansprüche zwischen den Beteiligten der KI-Wertschöpfungskette. Wenn ihr aufgrund von Anbieterfehlern haftbar gemacht werdet, braucht ihr entsprechende Freistellungsansprüche.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Service Level Agreements für KI-Systeme
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Traditionelle SLAs greifen bei KI-Systemen oft zu kurz:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Performance-Metriken definieren:</strong> Neben technischen Kennzahlen wie Verfügbarkeit und Antwortzeiten braucht ihr KI-spezifische Metriken: Genauigkeit, Fairness, Robustheit gegen Adversarial Attacks. Diese Metriken müssen messbar und vertraglich vereinbart werden.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Qualitätssicherung kontinuierlich überwachen:</strong> KI-Systeme können sich über Zeit verschlechtern - durch Concept Drift, veränderte Datenqualität oder Algorithmus-Updates. Eure SLAs müssen kontinuierliche Qualitätsüberwachung und entsprechende Korrekturmaßnahmen vorsehen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Eskalationsprozesse bei Qualitätsproblemen:</strong> Klare Verfahren für den Fall, dass KI-Systeme die vereinbarten Qualitätsstandards nicht erfüllen: Benachrichtigungsfristen, Korrekturmaßnahmen, Kompensationen, Kündigungsrechte.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Datenverarbeitung und Datenschutz
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      KI-Systeme verarbeiten oft große Mengen personenbezogener Daten:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Auftragsverarbeitung strukturieren:</strong> Wenn eure Anbieter personenbezogene Daten verarbeiten, benötigt ihr DSGVO-konforme Auftragsverarbeitungsverträge. Diese müssen die spezifischen Anforderungen der KI-Datenverarbeitung berücksichtigen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Datenqualität und -integrität sichern:</strong> KI-Systeme sind nur so gut wie ihre Trainingsdaten. Eure Verträge müssen Datenqualitätsstandards definieren und Verfahren für den Umgang mit fehlerhaften oder veralteten Daten vorsehen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Datenlöschung und Portabilität:</strong> Klare Regelungen für die Löschung von Daten bei Vertragsende und für die Portabilität von Daten zu anderen Anbietern. Diese Regelungen müssen die technischen Besonderheiten von KI-Systemen berücksichtigen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Vertragsmuster und Standardisierung
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Effiziente Vertragsgestaltung erfordert standardisierte Bausteine:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Modulare Vertragsarchitektur entwickeln:</strong> Statt für jeden KI-Anbieter individuelle Verträge zu entwickeln, erstellt ihr modulare Vertragsbausteine, die je nach Anwendungsfall kombiniert werden können. Diese Standardisierung reduziert Aufwand und erhöht Rechtssicherheit.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Branchenstandards nutzen:</strong> Wo verfügbar, nutzt ihr etablierte Branchenstandards für KI-Verträge. Diese Standards entwickeln sich kontinuierlich weiter und bieten bewährte Lösungen für typische Herausforderungen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Regelmäßige Vertragsreviews:</strong> Eure Vertragsstandards werden regelmäßig überprüft und an neue rechtliche Anforderungen und Marktentwicklungen angepasst. Diese Reviews erfolgen systematisch und beziehen Erfahrungen aus der Vertragspraxis ein.
                    </p>
                  </div>

                  <div className="bg-card-accent/20 p-4 rounded-lg mt-6">
                    <p className="text-sm sm:text-base font-semibold text-foreground mb-2">
                      Checkpoint erreicht, wenn:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      Ihr habt eine systematische Vertragsarchitektur für KI-Anbieter entwickelt. Eure Verträge regeln klar die Verantwortlichkeiten nach EU-KI-Verordnung, sichern euch die nötigen Informationen für eure Compliance und strukturieren Haftungsrisiken angemessen. Ihr verfügt über standardisierte Vertragsbausteine, die effiziente Verhandlungen ermöglichen und gleichzeitig Rechtssicherheit bieten.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                      Checkpoint 8: IP-Schutzstrategie entwickeln
                    </h2>
                    <p className="text-sm sm:text-base italic text-body mb-4">
                      Statt Urheberrechts- und IP-Risiken zu ignorieren, etabliert ihr systematischen Schutz für Input, Training und Output
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-4">
                      KI-Systeme schaffen neue Dimensionen von Urheberrechts- und IP-Risiken. Diese entstehen auf allen Ebenen: bei den Trainingsdaten, den verwendeten Modellen, den Eingabedaten und den generierten Outputs. Eure IP-Schutzstrategie muss diese gesamte Wertschöpfungskette absichern.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      IP-Risiken in der KI-Wertschöpfungskette verstehen
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Traditionelle IP-Risiken werden durch KI-Technologie komplexer und vielschichtiger:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Trainingsdaten-Problematik:</strong> Viele KI-Modelle wurden mit urheberrechtlich geschützten Inhalten trainiert - Texte, Bilder, Code, Musik. Diese Nutzung erfolgte oft ohne explizite Lizenzierung. Wenn ihr solche Modelle nutzt, könntet ihr indirekt von Urheberrechtsverletzungen profitieren, was rechtliche Risiken schafft.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Model-IP und Algorithmus-Schutz:</strong> KI-Modelle selbst können urheberrechtlich geschützt sein. Wenn ihr Modelle anpasst, fine-tuned oder in eigene Systeme integriert, entstehen komplexe Fragen zu abgeleiteten Werken und Lizenzrechten.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Input-Output-Dynamik:</strong> Eure Eingaben in KI-Systeme können urheberrechtlich geschützt sein. Gleichzeitig können die Outputs der KI-Systeme Urheberrechte Dritter verletzen oder selbst schutzfähig sein. Diese Dynamik erfordert durchdachte Strategien für beide Richtungen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Systematisches Input-Management
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Kontrolle über eure Eingaben ist der erste Schritt für IP-Sicherheit:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Input-Klassifizierung etablieren:</strong> Alle Daten, die ihr in KI-Systeme eingebt, werden systematisch klassifiziert: eigene Inhalte, lizenzierte Inhalte, öffentlich verfügbare Inhalte, potentiell geschützte Inhalte. Diese Klassifizierung bestimmt, welche Eingaben zulässig sind und welche Vorsichtsmaßnahmen erforderlich sind.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Lizenz-Clearing-Prozesse:</strong> Bevor geschützte Inhalte in KI-Systeme eingegeben werden, erfolgt ein systematisches Lizenz-Clearing. Welche Rechte habt ihr an den Inhalten? Erlauben eure Lizenzen die KI-Nutzung? Sind zusätzliche Genehmigungen erforderlich?
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Anonymisierung und Pseudonymisierung:</strong> Wo möglich, anonymisiert oder pseudonymisiert ihr Eingabedaten, um IP-Risiken zu reduzieren. Diese Techniken müssen jedoch sorgfältig implementiert werden, da unvollständige Anonymisierung neue Risiken schaffen kann.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Output-Qualitätskontrolle und IP-Prüfung
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      KI-Outputs müssen systematisch auf IP-Verletzungen geprüft werden:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Plagiatserkennung implementieren:</strong> Alle relevanten KI-Outputs werden durch spezialisierte Plagiatssoftware geprüft. Diese Tools erkennen nicht nur wörtliche Übernahmen, sondern auch paraphrasierte Inhalte und strukturelle Ähnlichkeiten.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Originality-Assessment:</strong> Neben der Plagiatsprüfung bewertet ihr die Originalität der KI-Outputs. Sind die Inhalte ausreichend transformiert? Entstehen neue kreative Elemente? Diese Bewertung ist für die Schutzfähigkeit eurer eigenen Outputs relevant.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Source-Attribution-Systeme:</strong> Wo möglich, implementiert ihr Systeme zur Nachverfolgung der Quellen von KI-Outputs. Wenn ein Output auf bestimmten Trainingsdaten basiert, solltet ihr das nachvollziehen und entsprechende Attributionen vornehmen können.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Eigene IP-Rechte sichern und schützen
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Eure eigenen geistigen Eigentumsrechte brauchen besonderen Schutz im KI-Kontext:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Proprietary Data Protection:</strong> Eure wertvollen Daten - Kundenlisten, Geschäftsgeheimnisse, proprietäre Algorithmen - dürfen nicht ungeschützt in externe KI-Systeme eingegeben werden. Ihr braucht klare Richtlinien, welche Daten wie verwendet werden dürfen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Trade Secret Management:</strong> Geschäftsgeheimnisse können durch unvorsichtige KI-Nutzung preisgegeben werden. Wenn ihr vertrauliche Informationen in KI-Systeme eingebt, müssen entsprechende Schutzmaßnahmen implementiert sein - von technischen Sicherheitsmaßnahmen bis zu vertraglichen Geheimhaltungspflichten.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Patent-Landscape-Monitoring:</strong> Die KI-Patentlandschaft entwickelt sich rasant. Ihr müsst kontinuierlich überwachen, ob eure KI-Nutzung neue Patentrisiken schafft oder ob ihr selbst patentierbare Innovationen entwickelt.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Lizenzmanagement und Compliance
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Strukturiertes Management aller IP-Lizenzen:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Lizenz-Portfolio-Management:</strong> Zentrale Verwaltung aller IP-Lizenzen, die für eure KI-Nutzung relevant sind. Diese umfasst Software-Lizenzen, Content-Lizenzen, Daten-Lizenzen und Model-Lizenzen. Regelmäßige Reviews stellen sicher, dass alle Lizenzen aktuell und ausreichend sind.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Usage-Tracking und Compliance-Monitoring:</strong> Kontinuierliche Überwachung, ob eure KI-Nutzung im Rahmen der verfügbaren Lizenzen bleibt. Automatisierte Systeme können Lizenz-Überschreitungen erkennen und entsprechende Warnungen ausgeben.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Renewal- und Expansion-Management:</strong> Proaktives Management von Lizenzerneuerungen und -erweiterungen. Wenn eure KI-Nutzung wächst oder sich ändert, müssen entsprechende Lizenzanpassungen zeitnah erfolgen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Risikobewertung und Mitigation
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Systematische Bewertung und Minimierung von IP-Risiken:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>IP-Risk-Assessment-Framework:</strong> Strukturierte Bewertung der IP-Risiken für alle KI-Anwendungen. Diese Bewertung berücksichtigt die Art der verwendeten Modelle, die Herkunft der Trainingsdaten, die Sensitivität der Eingabedaten und die geplante Nutzung der Outputs.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Risk-Mitigation-Strategien:</strong> Für identifizierte Risiken entwickelt ihr spezifische Minimierungsstrategien: alternative Modelle mit klareren Lizenzen, zusätzliche Lizenzierungen, technische Schutzmaßnahmen, Versicherungslösungen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Insurance und Legal Protection:</strong> Prüfung, ob eure bestehenden Versicherungen IP-Risiken aus KI-Nutzung abdecken. Gegebenenfalls Abschluss spezialisierter KI-IP-Versicherungen. Aufbau von Beziehungen zu spezialisierten IP-Anwälten für komplexe Fälle.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Internationale Compliance-Aspekte
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      IP-Rechte variieren international erheblich:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Jurisdictional Analysis:</strong> Analyse der IP-Rechtslage in allen relevanten Jurisdiktionen. US-amerikanisches Fair Use, europäische Urheberrechtsausnahmen und andere nationale Besonderheiten müssen berücksichtigt werden.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Cross-Border-Data-Flows:</strong> Wenn eure KI-Systeme Daten über Ländergrenzen hinweg verarbeiten, entstehen komplexe IP-Compliance-Anforderungen. Diese müssen systematisch analysiert und abgesichert werden.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>International Licensing Strategies:</strong> Entwicklung von Lizenzstrategien, die internationale Unterschiede berücksichtigen. Globale Lizenzen sind oft teurer, aber rechtssicherer als regionale Lösungen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Emerging Technologies und Future-Proofing
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Eure IP-Strategie muss sich entwickelnde Technologien antizipieren:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Generative AI Evolution:</strong> Die Capabilities von generativen KI-Systemen entwickeln sich rasant. Eure IP-Strategie muss flexibel genug sein, um neue Technologien zu integrieren, ohne bestehende Schutzmaßnahmen zu gefährden.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Regulatory Development Monitoring:</strong> Kontinuierliche Beobachtung der regulatorischen Entwicklung im IP-Bereich. Neue Gesetze und Gerichtsurteile können eure IP-Strategie erheblich beeinflussen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Industry Standards und Best Practices:</strong> Aktive Teilnahme an der Entwicklung von Industriestandards für KI-IP-Management. Diese Standards können eure Compliance-Kosten reduzieren und Rechtssicherheit erhöhen.
                    </p>
                  </div>

                  <div className="bg-card-accent/20 p-4 rounded-lg mt-6">
                    <p className="text-sm sm:text-base font-semibold text-foreground mb-2">
                      Checkpoint erreicht, wenn:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      Ihr habt eine umfassende IP-Schutzstrategie für eure KI-Nutzung entwickelt. Eure Eingaben in KI-Systeme sind systematisch abgesichert, Outputs werden auf IP-Verletzungen geprüft, und eure eigenen IP-Rechte sind geschützt. Ihr verfügt über strukturiertes Lizenzmanagement und könnt IP-Risiken systematisch bewerten und minimieren. Eure Strategie ist flexibel genug, um sich entwickelnde Technologien und Rechtslage zu berücksichtigen.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                      Checkpoint 9: Haftungsmanagement implementieren
                    </h2>
                    <p className="text-sm sm:text-base italic text-body mb-4">
                      Statt Haftungsrisiken dem Zufall zu überlassen, entwickelt ihr strukturierte Ansätze für Risikobewertung und -absicherung
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-4">
                      KI-Systeme schaffen neue Haftungsrisiken, die traditionelle Versicherungen und Risikomanagement-Ansätze oft nicht abdecken. Diese Risiken entstehen durch die Unvorhersagbarkeit von KI-Entscheidungen, die Komplexität der Technologie und die sich entwickelnde Rechtslage.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Neue Haftungsdimensionen durch KI verstehen
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      KI-spezifische Haftungsrisiken unterscheiden sich fundamental von traditionellen IT-Risiken:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Algorithmische Entscheidungshaftung:</strong> Wenn KI-Systeme autonome Entscheidungen treffen, die Schäden verursachen, entstehen komplexe Haftungsfragen. Wer ist verantwortlich, wenn ein KI-System einen qualifizierten Bewerber ablehnt, eine falsche medizinische Diagnose stellt oder eine diskriminierende Kreditentscheidung trifft?
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Produkthaftung bei KI-Outputs:</strong> KI-generierte Inhalte können fehlerhaft, diskriminierend oder schädlich sein. Wenn ihr solche Inhalte nutzt oder weitergebt, könnt ihr haftbar gemacht werden - auch wenn ihr die Fehler nicht erkannt habt oder erkennen konntet.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Compliance-Haftung:</strong> Verstöße gegen die EU-KI-Verordnung können erhebliche Bußgelder zur Folge haben - bis zu 35 Millionen Euro oder 7% des weltweiten Jahresumsatzes. Diese Risiken gehen weit über traditionelle IT-Compliance hinaus.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Systematische Risikobewertung etablieren
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Strukturierte Bewertung aller haftungsrelevanten KI-Risiken:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Risk-Assessment-Framework entwickeln:</strong> Jede KI-Anwendung wird systematisch auf Haftungsrisiken bewertet. Diese Bewertung berücksichtigt die Art der Entscheidungen, die das System trifft, die Auswirkungen auf Betroffene, die Vorhersagbarkeit der Ergebnisse und die verfügbaren Kontrollmechanismen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Stakeholder-Impact-Analyse:</strong> Detaillierte Analyse, welche Stakeholder von euren KI-Systemen betroffen sind und welche Schäden entstehen können: Kunden, Mitarbeitende, Geschäftspartner, die Öffentlichkeit. Diese Analyse hilft bei der Priorisierung von Risikominimierungsmaßnahmen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Scenario-Planning für Haftungsfälle:</strong> Entwicklung konkreter Szenarien für mögliche Haftungsfälle. Was passiert, wenn euer Recruiting-KI diskriminiert? Wie reagiert ihr, wenn euer Kundenservice-Bot falsche Beratung gibt? Diese Szenarien helfen bei der Vorbereitung auf Ernstfälle.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Präventive Risikominimierung
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Proaktive Maßnahmen zur Reduzierung von Haftungsrisiken:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Human-in-the-Loop-Mechanismen:</strong> Für kritische Entscheidungen implementiert ihr obligatorische menschliche Kontrollen. Diese Mechanismen müssen so gestaltet sein, dass sie echte Kontrolle ermöglichen - nicht nur pro-forma-Bestätigungen automatisierter Entscheidungen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Explainability und Transparenz:</strong> Eure KI-Systeme müssen ihre Entscheidungen nachvollziehbar machen können. Diese Erklärbarkeit ist nicht nur für Compliance wichtig, sondern auch für die Haftungsabwehr - ihr müsst belegen können, dass eure Systeme rational und nicht-diskriminierend entscheiden.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Continuous Monitoring und Quality Assurance:</strong> Kontinuierliche Überwachung eurer KI-Systeme auf Qualitätsprobleme, Bias und unerwartetes Verhalten. Frühzeitige Erkennung von Problemen ermöglicht präventive Korrekturen, bevor Schäden entstehen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Versicherungsstrategien für KI-Risiken
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Traditionelle Versicherungen decken KI-Risiken oft unzureichend ab:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>KI-spezifische Versicherungsprodukte:</strong> Der Versicherungsmarkt entwickelt spezialisierte Produkte für KI-Risiken. Diese umfassen Cyber-Liability-Erweiterungen, Professional-Indemnity-Versicherungen für KI-Beratung und spezielle AI-Error-&-Omissions-Policen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Coverage-Gap-Analyse:</strong> Systematische Analyse eurer bestehenden Versicherungen auf KI-bezogene Deckungslücken. Traditionelle Betriebshaftpflicht, Cyber-Versicherungen und D&O-Policen müssen auf KI-Risiken geprüft und gegebenenfalls erweitert werden.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Risk-Pooling und Captive-Lösungen:</strong> Für größere Unternehmen können Risk-Pooling mit anderen Unternehmen oder eigene Captive-Versicherungen sinnvoll sein. Diese Ansätze ermöglichen maßgeschneiderte Deckung für spezifische KI-Risiken.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Incident-Response und Crisis-Management
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Strukturierte Vorbereitung auf Haftungsfälle:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>KI-Incident-Response-Plan:</strong> Spezielle Verfahren für KI-bezogene Incidents. Diese umfassen technische Sofortmaßnahmen (System-Abschaltung, Datenanalyse), rechtliche Schritte (Anwaltskonsultation, Behördenmeldung) und Kommunikationsmaßnahmen (interne und externe Kommunikation).
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Crisis-Communication-Strategien:</strong> Vorbereitung auf öffentliche Aufmerksamkeit bei KI-Problemen. Diskriminierende KI-Systeme oder schwerwiegende KI-Fehler können erhebliche Reputationsschäden verursachen. Eure Kommunikationsstrategie muss transparent, verantwortungsbewusst und proaktiv sein.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Legal-Response-Team:</strong> Aufbau eines spezialisierten Teams für KI-Haftungsfälle. Dieses Team umfasst interne und externe Rechtsexperten, technische Spezialisten und Kommunikationsprofis. Regelmäßige Schulungen und Übungen stellen sicher, dass das Team im Ernstfall effektiv reagieren kann.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Vertragsgestaltung für Haftungsverteilung
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Strukturierte Verteilung von Haftungsrisiken in der KI-Wertschöpfungskette:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Liability-Allocation-Frameworks:</strong> Entwicklung standardisierter Ansätze für die Haftungsverteilung zwischen Anbietern, Betreibern und Nutzern von KI-Systemen. Diese Frameworks berücksichtigen die jeweiligen Einflussmöglichkeiten und Kontrollmechanismen.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Indemnification-Strategien:</strong> Strukturierte Freistellungsvereinbarungen für verschiedene Arten von KI-Risiken. Anbieter sollten für Systemfehler haften, während Betreiber für Anwendungsfehler verantwortlich sind. Diese Abgrenzung muss klar definiert und vertraglich vereinbart werden.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Insurance-Coordination:</strong> Koordination der Versicherungsdeckung zwischen verschiedenen Parteien in der KI-Wertschöpfungskette. Überschneidungen und Deckungslücken müssen vermieden werden, um im Schadensfall effiziente Abwicklung zu gewährleisten.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Regulatorische Compliance und Enforcement
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Vorbereitung auf regulatorische Durchsetzungsmaßnahmen:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Regulatory-Defense-Strategien:</strong> Entwicklung von Strategien für den Umgang mit Aufsichtsbehörden bei KI-Compliance-Problemen. Diese umfassen proaktive Kommunikation, Kooperationsbereitschaft und strukturierte Remediation-Pläne.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Penalty-Mitigation-Ansätze:</strong> Wenn Compliance-Verstöße auftreten, können strukturierte Ansätze zur Strafmilderung die finanziellen Auswirkungen reduzieren. Selbstanzeige, umfassende Remediation und Präventionsmaßnahmen können strafmildernd wirken.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Cross-Border-Enforcement-Coordination:</strong> Bei internationaler KI-Nutzung können Enforcement-Maßnahmen in verschiedenen Jurisdiktionen auftreten. Koordinierte Verteidigungsstrategien und einheitliche Kommunikation sind essentiell für effiziente Abwicklung.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                      Kontinuierliche Risikobewertung und -anpassung
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3">
                      Haftungsrisiken entwickeln sich mit der Technologie und Rechtslage:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Dynamic-Risk-Assessment:</strong> Regelmäßige Neubewertung der Haftungsrisiken basierend auf Technologieentwicklung, Rechtsprechung und Geschäftsentwicklung. Diese Bewertung erfolgt systematisch und führt zu Anpassungen der Risikomanagement-Strategien.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed mb-2">
                      <strong>Legal-Development-Monitoring:</strong> Kontinuierliche Beobachtung der Rechtsentwicklung im Bereich KI-Haftung. Neue Gesetze, Gerichtsurteile und Behördenleitlinien können erhebliche Auswirkungen auf eure Haftungsrisiken haben.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      <strong>Industry-Benchmark und Best-Practice-Sharing:</strong> Regelmäßiger Austausch mit anderen Unternehmen und Branchenexperten über Haftungsrisiken und -management. Dieser Austausch hilft bei der Identifizierung neuer Risiken und der Entwicklung bewährter Lösungsansätze.
                    </p>
                  </div>

                  <div className="bg-card-accent/20 p-4 rounded-lg mt-6">
                    <p className="text-sm sm:text-base font-semibold text-foreground mb-2">
                      Checkpoint erreicht, wenn:
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      Ihr habt ein umfassendes Haftungsmanagement-System für eure KI-Nutzung etabliert. Eure Haftungsrisiken sind systematisch bewertet und durch präventive Maßnahmen minimiert. Ihr verfügt über angemessene Versicherungsdeckung und strukturierte Incident-Response-Prozesse. Eure Verträge verteilen Haftungsrisiken angemessen, und ihr seid auf regulatorische Enforcement-Maßnahmen vorbereitet. Das System entwickelt sich kontinuierlich mit euren Risiken weiter.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-card-border">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                    Sektion 3 Zusammenfassung: Rechtssichere Partnerschaften etabliert
                  </h2>
                  <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                    Mit diesen drei Checkpoints habt ihr eure Vertragsbeziehungen und Haftungsstrukturen systematisch abgesichert. Eure Verträge mit KI-Anbietern regeln Verantwortlichkeiten klar und sichern euch die nötigen Informationen für Compliance. Eure IP-Rechte sind geschützt, und ihr könnt Urheberrechtsrisiken systematisch managen. Strukturiertes Haftungsmanagement minimiert eure Risiken und bereitet euch auf Ernstfälle vor.
                  </p>
                  <p className="text-sm sm:text-base text-body leading-relaxed">
                    In Sektion 4 entwickeln wir eure strategische Zukunftsfähigkeit: Ihr lernt, rechtliche Komplexität zu orchestrieren, technologische Entwicklungen zu antizipieren und eine nachhaltige KI-Integration zu realisieren.
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

export default Sektion3;
