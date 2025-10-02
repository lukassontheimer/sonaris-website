import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const DsgvoTools = () => {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow pt-20 sm:pt-24">
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-4 sm:mb-6 bg-card/50 backdrop-blur-sm border-primary/20 text-foreground-secondary text-xs sm:text-sm">
                DSGVO & Datenschutz
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-headline mb-4 sm:mb-6 leading-tight">
                Welche Tools sind DSGVO-konform?
              </h1>
              
              <p className="text-base sm:text-lg text-body max-w-2xl mx-auto leading-relaxed">
                Wir arbeiten ausschließlich mit europäischen oder DSGVO-zertifizierten Lösungen und bieten eigene konforme KI-Infrastruktur.
              </p>
            </div>

            <Card className="bg-card border-card-border">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                      Ihre Notizen und Anforderungen
                    </h2>
                    <p className="text-sm sm:text-base text-body mb-4">
                      Nutzen Sie diesen Bereich, um Ihre spezifischen Anforderungen, Fragen oder Notizen zu DSGVO-konformen Tools festzuhalten.
                    </p>
                  </div>

                  <div>
                    <Textarea
                      placeholder="Schreiben Sie hier Ihre Gedanken, Anforderungen oder Fragen..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      className="min-h-[300px] resize-y"
                    />
                  </div>

                  <div className="flex gap-3 justify-end">
                    <Button
                      variant="outline"
                      onClick={() => setText("")}
                    >
                      Löschen
                    </Button>
                    <Button
                      onClick={() => {
                        // Here you could add functionality to save or process the text
                        console.log("Text saved:", text);
                      }}
                    >
                      Speichern
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 sm:mt-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                Unsere DSGVO-konformen Lösungen
              </h2>
              <div className="space-y-4">
                <Card className="bg-card border-card-border">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Langdock</h3>
                    <p className="text-sm sm:text-base text-body">
                      Eine DSGVO-konforme Plattform, die sich nahtlos in Ihre bestehende Infrastruktur einfügt und höchste Datenschutzstandards erfüllt.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-card-border">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Europäische Cloud-Infrastruktur</h3>
                    <p className="text-sm sm:text-base text-body">
                      Alle Daten bleiben in Europa und unterliegen strengen europäischen Datenschutzrichtlinien.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-card-border">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Transparente Datenverarbeitung</h3>
                    <p className="text-sm sm:text-base text-body">
                      Volle Kontrolle und Transparenz darüber, wie und wo Ihre Daten verarbeitet werden.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DsgvoTools;
