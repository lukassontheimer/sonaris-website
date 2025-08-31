import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Impressum = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-8">Impressum</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Remote Sourcing GmbH</p>
              <p className="text-muted-foreground">Am Felsenkeller 38a</p>
              <p className="text-muted-foreground">31867 Lauenau</p>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Kontakt</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">Telefon: +49 (0) 5723 98390 10</p>
              <p className="text-muted-foreground">E-Mail: hallo@remotesourcing.de</p>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Umsatzsteuer-ID</h3>
            <p className="text-muted-foreground">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p className="text-muted-foreground">DE322588403</p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Registereintrag</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">Eintragung im Handelsregister</p>
              <p className="text-muted-foreground">Registergericht: Amtsgericht Stadthagen</p>
              <p className="text-muted-foreground">Registernummer: HRB 201565</p>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Vertreten durch</h3>
            <p className="text-muted-foreground">Lorenz Surkemper (Geschäftsführer)</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Haftungsausschluss</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Haftung für Inhalte</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Haftung für Links</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Urheberrecht</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Impressum;