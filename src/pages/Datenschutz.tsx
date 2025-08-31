import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <main className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>
          
          <p className="text-muted-foreground leading-relaxed mb-8">
            Ihre Privatsphäre ist uns wichtig. Diese Datenschutzerklärung erklärt, welche Daten wir erheben und wie wir sie verwenden.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Verantwortlicher</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="space-y-2 mb-4">
              <p className="font-semibold text-foreground">Remote Sourcing GmbH</p>
              <p className="text-muted-foreground">Am Felsenkeller 38a</p>
              <p className="text-muted-foreground">31867 Lauenau</p>
              <p className="text-muted-foreground">Telefon: +49 (0) 5723 98390 10</p>
              <p className="text-muted-foreground">E-Mail: hallo@remotesourcing.de</p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">Datenschutzbeauftragter: Lorenz Surkemper</p>
              <p className="text-muted-foreground">E-Mail: hallo@remotesourcing.de</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck der Verwendung</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">a) Beim Besuch der Website</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Beim Aufrufen unserer Website www.systemicai.io werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website</li>
                <li>Gewährleistung einer komfortablen Nutzung unserer Website</li>
                <li>Auswertung der Systemsicherheit und -stabilität</li>
                <li>Weitere administrative Zwecke</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">b) HubSpot Terminbuchungs-Tool</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Auf unserer Website verwenden wir das Terminbuchungs-Tool von HubSpot. Wenn Sie einen Termin über unser Buchungstool vereinbaren, werden folgende Daten an HubSpot übermittelt und verarbeitet:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Name und E-Mail-Adresse</li>
                <li>Telefonnummer (falls angegeben)</li>
                <li>Gewählter Termin und Zeitraum</li>
                <li>Ggf. weitere Angaben im Buchungsformular</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diese Daten werden zur Terminvereinbarung und -verwaltung sowie zur Kontaktaufnahme im Rahmen unserer Beratungsleistungen verwendet.
              </p>
              <div className="space-y-2 mb-4">
                <p className="font-semibold text-foreground">HubSpot Inc.</p>
                <p className="text-muted-foreground">25 First Street, 2nd Floor</p>
                <p className="text-muted-foreground">Cambridge, MA 02141, USA</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                HubSpot verfügt über eine Zertifizierung nach dem EU-US Data Privacy Framework. Die Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. a DSGVO (Ihre Einwilligung bei der Terminbuchung).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Weitere Informationen zum Datenschutz bei HubSpot finden Sie unter: <a href="https://legal.hubspot.com/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://legal.hubspot.com/privacy-policy</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">c) Bei Kontaktaufnahme per E-Mail</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bei einer Kontaktaufnahme mit uns per E-Mail werden die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns gespeichert, um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Weitergabe von Daten</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben</li>
              <li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist</li>
              <li>für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Unsere Website verwendet nur technisch notwendige Cookies. Diese sind erforderlich, um die grundlegenden Funktionen der Website zu gewährleisten. Wir verwenden keine Tracking-Cookies oder Cookies für Werbezwecke.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Betroffenenrechte</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Sie haben das Recht:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
              <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten</li>
              <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Datensicherheit</h2>
            <p className="text-muted-foreground leading-relaxed">
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Alle Daten werden verschlüsselt übertragen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p className="text-muted-foreground leading-relaxed">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </section>

          <div className="p-6 bg-muted/30 rounded-lg">
            <p className="text-muted-foreground text-center">
              <strong>Fragen zum Datenschutz?</strong> Kontaktieren Sie uns gerne unter{" "}
              <a href="mailto:hallo@remotesourcing.de" className="text-primary hover:underline">
                hallo@remotesourcing.de
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Datenschutz;