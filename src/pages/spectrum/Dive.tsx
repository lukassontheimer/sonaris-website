import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Dive = () => {
  const [selectedCore, setSelectedCore] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/spectrum/transmission">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Transmission
            </Button>
          </Link>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-foreground">DIVE</h1>
            <p className="text-xl text-muted-foreground">Deep Interactive Visual Experience</p>
            <p className="text-sm text-muted-foreground mt-2">Select a core to explore</p>
          </div>

          {/* Three Cores */}
          {!selectedCore && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div
                onClick={() => setSelectedCore(1)}
                className="group relative p-8 rounded-xl bg-card border-2 border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 text-cyan-500">◇</div>
                  <h3 className="text-2xl font-bold mb-2 text-cyan-500">SERVICES</h3>
                  <p className="text-sm text-muted-foreground">Training, Strategy & Integration</p>
                </div>
              </div>

              <div
                onClick={() => setSelectedCore(2)}
                className="group relative p-8 rounded-xl bg-card border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 text-purple-500">◆</div>
                  <h3 className="text-2xl font-bold mb-2 text-purple-500">SPECTRUM</h3>
                  <p className="text-sm text-muted-foreground">Complete Journey Framework</p>
                </div>
              </div>

              <div
                onClick={() => setSelectedCore(3)}
                className="group relative p-8 rounded-xl bg-card border-2 border-amber-500/30 hover:border-amber-500 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 text-amber-500">◈</div>
                  <h3 className="text-2xl font-bold mb-2 text-amber-500">ESSENTIALS</h3>
                  <p className="text-sm text-muted-foreground">Quick Start Resources</p>
                </div>
              </div>
            </div>
          )}

          {/* Core 1: Services */}
          {selectedCore === 1 && (
            <div className="space-y-4 animate-fade-in">
              <Button variant="outline" onClick={() => setSelectedCore(null)} className="mb-4">
                ← Back to Cores
              </Button>
              <h2 className="text-3xl font-bold mb-6 text-cyan-500">Services</h2>
              <div className="grid gap-4">
                <div className="p-6 rounded-lg bg-card border border-cyan-500/30 hover:border-cyan-500 transition-all">
                  <h3 className="text-xl font-bold mb-2">📖 Training & Kompetenz</h3>
                  <p className="text-muted-foreground">Wir befähigen Ihr Team. Keine Blackboxen, sondern echte Kompetenz durch interaktive Workshops.</p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-cyan-500/30 hover:border-cyan-500 transition-all">
                  <h3 className="text-xl font-bold mb-2">🎯 Strategische Beratung</h3>
                  <p className="text-muted-foreground">Ihre Roadmap zum Erfolg. Wir analysieren Potentiale und minimieren Risiken.</p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-cyan-500/30 hover:border-cyan-500 transition-all">
                  <h3 className="text-xl font-bold mb-2">⚙️ Entwicklung & Integration</h3>
                  <p className="text-muted-foreground">Maßgeschneiderte Systeme. Wir bauen die Infrastruktur, die Sie wirklich brauchen.</p>
                </div>
              </div>
            </div>
          )}

          {/* Core 2: Spectrum */}
          {selectedCore === 2 && (
            <div className="space-y-4 animate-fade-in">
              <Button variant="outline" onClick={() => setSelectedCore(null)} className="mb-4">
                ← Back to Cores
              </Button>
              <h2 className="text-3xl font-bold mb-6 text-purple-500">Spectrum</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'First Contact', desc: 'Der erste Schritt in den Sonaris Orbit.' },
                  { title: 'Onboarding', desc: 'Wir holen Ihr Team an Bord.' },
                  { title: 'Bridge Building', desc: 'Die Brücke zwischen IT und KI-Zukunft.' },
                  { title: 'Future Pacing', desc: 'Ein Blick in die Zukunft mit KI.' },
                  { title: 'Experience Echo', desc: 'Feedback-Schleifen etablieren.' },
                  { title: 'Resonating Echo', desc: 'Skalierung auf das ganze Unternehmen.' },
                  { title: 'Transmission', desc: 'Vollständige Übergabe. Autark.' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-lg bg-card border border-purple-500/30 hover:border-purple-500 transition-all">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Core 3: Essentials */}
          {selectedCore === 3 && (
            <div className="space-y-4 animate-fade-in">
              <Button variant="outline" onClick={() => setSelectedCore(null)} className="mb-4">
                ← Back to Cores
              </Button>
              <h2 className="text-3xl font-bold mb-6 text-amber-500">Essentials</h2>
              <div className="grid gap-4">
                {[
                  { title: 'First Contact, einfach beginnen', desc: 'KI-Nutzung beginnt mit einzelnen Momenten.' },
                  { title: 'Welche Tools sind DSGVO-konform?', desc: 'Überblick über datenschutzkonforme Tools.' },
                  { title: 'Rechtssicher arbeiten', desc: 'EU AI Act und Urheberrecht verstehen.' },
                  { title: 'Was ist der ROI von KI?', desc: 'Konkreten Return on Investment berechnen.' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-lg bg-card border border-amber-500/30 hover:border-amber-500 transition-all">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dive;
