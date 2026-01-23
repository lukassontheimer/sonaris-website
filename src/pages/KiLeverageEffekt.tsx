import { useEffect, useMemo, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type DepthId = "surface" | "reality" | "gap" | "leverage" | "core";

const KiLeverageEffekt = () => {
  const [active, setActive] = useState<DepthId>("surface");
  const sectionRefs = useRef<Record<DepthId, HTMLElement | null>>({
    surface: null,
    reality: null,
    gap: null,
    leverage: null,
    core: null,
  });

  const navItems = useMemo(
    () =>
      [
        { id: "surface" as const, label: "SURFACE", pos: 5 },
        { id: "reality" as const, label: "REALITY", pos: 25 },
        { id: "gap" as const, label: "THE GAP", pos: 50 },
        { id: "leverage" as const, label: "LEVERAGE", pos: 75 },
        { id: "core" as const, label: "CORE", pos: 95 },
      ] as const,
    []
  );

  useEffect(() => {
    const sections = navItems
      .map((i) => sectionRefs.current[i.id])
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = (entry.target as HTMLElement).dataset.depthId as DepthId | undefined;
          if (id) setActive(id);
        }
      },
      {
        root: null,
        rootMargin: "-10% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [navItems]);

  const markerTop = navItems.find((n) => n.id === active)?.pos ?? 5;

  const scrollTo = (id: DepthId) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-20">
        <div className="px-4 sm:px-6 py-10 sm:py-14">
          <div className="mx-auto w-full max-w-6xl">
            <div className="relative overflow-hidden rounded-lg border border-border bg-background-secondary/60 shadow-2xl">
              {/* Background FX */}
              <div className="pointer-events-none absolute inset-0 hero-grid opacity-60" />
              <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(hsl(var(--foreground)/0.18)_1px,transparent_1px)] [background-size:30px_30px]" />

              <div className="relative z-10 flex">
                {/* Sidebar (desktop) */}
                <aside className="hidden lg:flex w-[260px] shrink-0 flex-col border-r border-border/60 bg-background/60 backdrop-blur-md">
                  <div className="pt-12 pb-10 text-center">
                    <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full border border-primary/60 shadow-[0_0_20px_hsl(var(--primary)/0.25)]">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div className="text-xs font-bold tracking-[0.25em] text-foreground">SONARIS</div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.2em] text-primary">SYSTEM TIEFE</div>
                  </div>

                  <div className="relative flex-1">
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border/60" />

                    {/* marker */}
                    <div
                      className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_15px_hsl(var(--primary)/0.7)] transition-[top] duration-500"
                      style={{ top: `${markerTop}%` }}
                      aria-hidden
                    />

                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollTo(item.id)}
                        className={
                          "absolute left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] tracking-[0.2em] transition-all" +
                          (active === item.id
                            ? " text-primary opacity-100 [text-shadow:0_0_18px_hsl(var(--primary)/0.55)]"
                            : " text-primary/60 hover:text-primary hover:opacity-90")
                        }
                        style={{ top: `${item.pos}%` }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </aside>

                {/* Content */}
                <div className="flex-1 px-5 sm:px-8 lg:px-12 py-10 sm:py-12">
                  <div className="flex flex-col gap-16 sm:gap-20">
                    {/* 1. SURFACE */}
                    <section
                      ref={(el) => {
                        sectionRefs.current.surface = el;
                      }}
                      data-depth-id="surface"
                    >
                      <header>
                        <h1 className="text-headline text-3xl sm:text-4xl lg:text-5xl font-light">
                          Der <span className="font-semibold text-primary">Leverage-Effekt.</span>
                        </h1>
                        <p className="mt-3 text-body text-base sm:text-lg">
                          Warum KI der nächste Arbeitsstandard ist
                        </p>
                      </header>

                      <div className="mt-6 rounded-md border-l-4 border-primary/60 bg-gradient-to-r from-primary/10 to-transparent px-4 py-4">
                        <p className="text-foreground text-sm sm:text-base leading-relaxed">
                          <span className="font-semibold">These:</span> Produktivität ist historisch nie linear gestiegen.
                          Sie ist gesprungen. Nicht, weil Menschen schneller gearbeitet haben, sondern weil sich der{" "}
                          <span className="font-semibold">Arbeitsstandard</span> verändert hat.
                        </p>
                      </div>

                      <div className="mt-6 rounded-lg border border-border/70 bg-background/40 p-4 sm:p-5">
                        <div className="mb-3 font-mono text-[10px] tracking-[0.2em] text-primary">
                          &gt;&gt; ANALYSIS: LINEAR ILLUSION VS. EXPONENTIAL REALITY
                        </div>

                        <svg
                          className="w-full h-auto max-h-[220px]"
                          viewBox="0 0 400 160"
                          role="img"
                          aria-label="Diagramm: lineare Illusion vs exponentielle Realität"
                        >
                          <defs>
                            <pattern
                              id="diagonalHatch"
                              width="6"
                              height="6"
                              patternTransform="rotate(45 0 0)"
                              patternUnits="userSpaceOnUse"
                            >
                              <line x1="0" y1="0" x2="0" y2="6" stroke="hsl(var(--destructive))" strokeWidth="1" opacity="0.25" />
                            </pattern>
                          </defs>

                          {/* Axes */}
                          <line x1="40" y1="140" x2="380" y2="140" stroke="hsl(var(--border))" strokeWidth="1" />
                          <line x1="40" y1="40" x2="40" y2="140" stroke="hsl(var(--border))" strokeWidth="1" />
                          <text
                            x="20"
                            y="140"
                            fill="hsl(var(--muted-foreground))"
                            fontFamily="monospace"
                            fontSize="10"
                            transform="rotate(-90 20,140)"
                          >
                            IMPACT
                          </text>
                          <text
                            x="360"
                            y="155"
                            fill="hsl(var(--muted-foreground))"
                            fontFamily="monospace"
                            fontSize="10"
                          >
                            TIME
                          </text>

                          {/* Gap Area */}
                          <path
                            d="M50,130 C150,130 250,120 300,80 S350,0 380,10 L380,80 L50,130 Z"
                            fill="url(#diagonalHatch)"
                            stroke="none"
                          />

                          {/* Linear Line */}
                          <path d="M50,130 L380,80" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4,4" fill="none" />
                          <text
                            x="300"
                            y="95"
                            fill="hsl(var(--muted-foreground))"
                            fontFamily="monospace"
                            fontSize="9"
                            transform="rotate(-9 300,95)"
                          >
                            LINEAR ILLUSION
                          </text>

                          {/* Exponential Curve */}
                          <path
                            d="M50,130 C150,130 250,120 300,80 S350,0 380,10"
                            fill="none"
                            stroke="hsl(var(--primary))"
                            strokeWidth="3"
                            strokeLinecap="round"
                            className="[stroke-dasharray:1000] [stroke-dashoffset:1000] motion-safe:animate-[draw_2s_cubic-bezier(0.5,0,0.1,1)_forwards]"
                          />

                          {/* Gap label */}
                          <line x1="330" y1="25" x2="330" y2="90" stroke="hsl(var(--destructive))" strokeWidth="1" strokeDasharray="2,2" />
                          <text
                            x="325"
                            y="30"
                            fill="hsl(var(--destructive))"
                            fontFamily="monospace"
                            fontSize="10"
                            textAnchor="end"
                            fontWeight="bold"
                          >
                            REALITY GAP
                          </text>

                          <circle
                            cx="300"
                            cy="80"
                            r="4"
                            fill="hsl(var(--background))"
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                            className="opacity-0 motion-safe:animate-[pop_0.5s_ease-out_0.6s_forwards]"
                          />
                        </svg>
                      </div>

                      <div className="mt-5 rounded-md border border-border/60 bg-background/50 px-4 py-3 font-mono text-xs text-muted-foreground">
                        <span className="text-primary">* KERNBOTSCHAFT:</span> KI ist kein weiteres Werkzeug. Sie ist ein neuer Layer für kognitive Entlastung.
                      </div>
                    </section>

                    {/* 2. REALITY */}
                    <section
                      ref={(el) => {
                        sectionRefs.current.reality = el;
                      }}
                      data-depth-id="reality"
                    >
                      <div className="mb-5 font-mono text-xs tracking-[0.2em] text-primary border-b border-border/70 pb-3">
                        &gt;&gt; CURRENT SYSTEM STATUS: OVERLOAD
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          {
                            status: "FULL",
                            title: "KALENDER",
                            desc: "Back-to-Back Meetings. Keine Zeitfenster für Fokus-Arbeit oder strategisches Denken.",
                            tone: "warn",
                          },
                          {
                            status: "HIGH",
                            title: "PROJEKTE",
                            desc: "Zu viele parallele Initiativen. Operative Überlastung verhindert sauberen Abschluss.",
                            tone: "crit",
                          },
                          {
                            status: "LOW",
                            title: "GESTALTUNG",
                            desc: "Permanenter Reaktions-Modus (\"Firefighting\") statt aktiver Zukunftsgestaltung.",
                            tone: "warn",
                          },
                          {
                            status: "CRIT",
                            title: "MINDSET",
                            desc: "Glaubenssatz: \"Wir haben keine Zeit für KI.\" Paradoxon: Weil keine Zeit für neue Standards ist, bleibt die Überlastung.",
                            tone: "crit",
                          },
                        ].map((c) => (
                          <div
                            key={c.title}
                            className="rounded-lg border border-border/70 bg-card/70 backdrop-blur-sm p-5 transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/60"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="text-xs font-semibold tracking-wider text-foreground">{c.title}</div>
                              <span
                                className={
                                  "font-mono text-[10px] rounded border px-2 py-0.5 " +
                                  (c.tone === "crit"
                                    ? "border-destructive/70 text-destructive bg-destructive/10"
                                    : "border-primary/40 text-primary bg-primary/10")
                                }
                              >
                                {c.status}
                              </span>
                            </div>
                            <p className="mt-3 text-body text-sm leading-relaxed">{c.desc}</p>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* 3. GAP */}
                    <section
                      ref={(el) => {
                        sectionRefs.current.gap = el;
                      }}
                      data-depth-id="gap"
                    >
                      <div className="mb-5 font-mono text-xs tracking-[0.2em] text-primary border-b border-border/70 pb-3">
                        &gt;&gt; DIAGNOSTIC: THE COGNITIVE BOTTLENECK
                      </div>

                      <div className="rounded-lg border border-border/70 bg-background/40 p-5 flex gap-4 items-start">
                        <div className="mt-0.5 shrink-0 rounded-md border border-border/70 bg-background p-2">
                          <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                          </svg>
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">
                          <span className="font-semibold">Die entscheidende Frage:</span> Wie hoch ist Ihr Auslastungsgrad? Unsere Erfahrung zeigt, dass die meisten
                          Organisationen dauerhaft bei <span className="font-semibold">90–110 %</span> laufen. In diesem Zustand ist Innovation physiologisch unmöglich.
                        </p>
                      </div>

                      <div className="mt-5 rounded-md border border-destructive/40 bg-destructive/5 border-l-4 border-l-destructive p-4">
                        <div className="flex items-start justify-between gap-4 font-mono text-[10px] tracking-[0.2em] text-destructive mb-3">
                          <span>DETECTED: KOGNITIVER_ENGPASS</span>
                          <span>IMPACT: CRITICAL</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="text-body md:border-r md:border-border/50 md:pr-4">
                            Das Problem ist kein Fachkräftemangel. Das Problem ist kognitiv.
                            <br />
                            Zu viele Informationen. Zu viele Entscheidungen. Zu viele Abstimmungen.
                          </div>
                          <div className="text-foreground">
                            Bisherige Lösung: Mehr Personal (linear).
                            <br />
                            Neue Lösung: <span className="font-semibold text-primary">Reduktion kognitiver Last (Leverage).</span>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* 4. LEVERAGE */}
                    <section
                      ref={(el) => {
                        sectionRefs.current.leverage = el;
                      }}
                      data-depth-id="leverage"
                    >
                      <div className="mb-5 font-mono text-xs tracking-[0.2em] text-primary border-b border-border/70 pb-3">
                        &gt;&gt; ACTIVATING LEVERAGE LAYER
                      </div>

                      <div className="rounded-md border-l-4 border-primary bg-primary/10 px-4 py-4">
                        <p className="text-foreground text-sm sm:text-base leading-relaxed">
                          KI ist kein Werkzeug für bestehende Arbeit. Richtig eingesetzt wirkt sie wie ein{" "}
                          <span className="font-semibold">Entlastungs-Layer.</span>
                        </p>
                      </div>

                      <div className="mt-6 rounded-lg border border-border/70 bg-background/40 p-5">
                        <div className="text-center font-mono text-[10px] tracking-[0.2em] text-primary mb-4">
                          SYSTEM ARCHITECTURE: THE MULTIPLIER EFFECT
                        </div>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 flex-wrap">
                          <div className="flex-1 min-w-[220px] rounded-md border border-border/70 bg-background/40 px-4 py-4 text-center">
                            <div className="mx-auto mb-2 grid h-8 w-8 place-items-center rounded-md border border-border/70 text-muted-foreground">
                              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="3" />
                                <circle cx="12" cy="12" r="8" strokeDasharray="2 2" />
                                <path d="M12 2v2 M12 20v2 M2 12h2 M20 12h2" />
                              </svg>
                            </div>
                            <div className="font-mono text-xs text-muted-foreground leading-tight">
                              INPUT
                              <br />
                              <span className="text-[11px] opacity-80">1h Focus</span>
                            </div>
                          </div>

                          <div className="hidden sm:block text-primary/60 font-mono">→</div>

                          <div className="flex-1 min-w-[240px] rounded-md border border-primary/50 bg-primary/10 px-4 py-4 text-center shadow-[0_0_20px_hsl(var(--primary)/0.15)]">
                            <div className="mx-auto mb-2 grid h-8 w-8 place-items-center rounded-md border border-primary/50 text-primary">
                              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 2l8 4.5v9l-8 4.5-8-4.5v-9z" />
                                <path d="M12 12l8-4.5 M12 12v9 M12 12l-8-4.5" />
                                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                              </svg>
                            </div>
                            <div className="font-mono text-xs leading-tight">
                              <div className="font-semibold text-primary">AI LAYER</div>
                              <div className="mt-1 text-foreground">
                                PROCESSING
                                <br />
                                <span className="text-[11px] opacity-80">(Draft/Struct)</span>
                              </div>
                            </div>
                          </div>

                          <div className="hidden sm:block text-primary/60 font-mono">→</div>

                          <div className="flex-1 min-w-[220px] rounded-md border border-border/70 bg-background/40 px-4 py-4 text-center">
                            <div className="mx-auto mb-2 grid h-8 w-8 place-items-center rounded-md border border-border/70 text-primary">
                              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M12 12l6 -6" />
                                <path d="M12 12l6 6" />
                                <path d="M12 12l-6 6" />
                                <path d="M12 12l-6 -6" />
                                <path d="M12 2l0 4" />
                                <path d="M12 18l0 4" />
                                <path d="M2 12l4 0" />
                                <path d="M18 12l4 0" />
                              </svg>
                            </div>
                            <div className="font-mono text-xs text-muted-foreground leading-tight">
                              OUTPUT
                              <br />
                              <span className="text-[11px] font-semibold text-primary">5x Impact</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-4">
                        {[
                          {
                            num: "01",
                            head: "Vorstrukturierung",
                            desc: "Informationen werden verdichtet und aufbereitet, bevor sie den Menschen erreichen.",
                            badge: "EFFEKT: KLARHEIT",
                          },
                          {
                            num: "02",
                            head: "Entscheidungsvorbereitung",
                            desc: "Optionen werden analysiert und Szenarien simuliert. Der Mensch entscheidet, die KI bereitet vor.",
                            badge: "EFFEKT: GESCHWINDIGKEIT",
                          },
                          {
                            num: "03",
                            head: "Kommunikations-Verdichtung",
                            desc: "Routinen in E-Mail und Reporting werden übernommen. Der Fokus wandert auf echte Interaktion.",
                            badge: "EFFEKT: FREIRAUM",
                          },
                        ].map((s) => (
                          <div key={s.num} className="flex overflow-hidden rounded-lg border border-border/70 bg-card/70">
                            <div className="grid w-16 place-items-center border-r border-border/70 bg-primary/10 font-mono text-xl font-bold text-primary">
                              {s.num}
                            </div>
                            <div className="p-4 sm:p-5 flex-1">
                              <div className="text-sm font-semibold tracking-wide text-foreground uppercase">{s.head}</div>
                              <p className="mt-2 text-body text-sm">{s.desc}</p>
                              <div className="mt-3 inline-block rounded border border-primary/40 px-2 py-0.5 font-mono text-[10px] tracking-[0.2em] text-primary">
                                {s.badge}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* 5. CORE */}
                    <section
                      ref={(el) => {
                        sectionRefs.current.core = el;
                      }}
                      data-depth-id="core"
                    >
                      <div className="mb-5 font-mono text-xs tracking-[0.2em] text-primary border-b border-border/70 pb-3">
                        &gt;&gt; TARGET STATE ACQUIRED
                      </div>

                      <blockquote className="rounded-lg border border-border/70 bg-background/40 p-5 text-foreground italic">
                        „Das eigentliche Ziel ist nicht Tempo, sondern eine agierende Organisation statt einer dauerhaft reagierenden.“
                      </blockquote>

                      <div className="mt-6 rounded-lg border border-primary/50 bg-gradient-to-b from-transparent to-primary/10 p-6 text-center">
                        <p className="text-foreground text-sm sm:text-base">
                          KI ist kein Projekt. KI ist der nächste Arbeitsstandard.
                          <br />
                          Die Frage ist nicht, ob er kommt, sondern wie bewusst er gestaltet wird.
                        </p>

                        <div className="mt-5 flex flex-wrap justify-center gap-3">
                          <a
                            href="mailto:oliver@sonaris.de"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:shadow-[0_0_20px_hsl(var(--primary)/0.35)]"
                          >
                            ✉️ DIALOG STARTEN
                          </a>
                          <a
                            href="https://meetings-eu1.hubspot.com/oliver-andrees/meeting-link-"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-md border border-border/80 bg-background/40 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/60 hover:bg-background/60"
                          >
                            📅 POTENTIAL ANALYSIEREN
                          </a>
                        </div>

                        <div className="mt-5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                          OLIVER ANDREES // KONTAKTARCHITEKT @ SONARIS
                          <br />
                          DIRECT LINE: +49 30 120 877 14
                        </div>
                      </div>

                      <div className="mt-8 flex items-center justify-between gap-4 border-t border-border/70 pt-5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                        <span>SONARIS AI CONSULTING</span>
                        <span>SYSTEM LEVERAGE ACTIVATED</span>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scoped keyframes (only for this page) */}
        <style>
          {`
            @keyframes draw { to { stroke-dashoffset: 0; } }
            @keyframes pop { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
          `}
        </style>
      </main>

      <Footer />
    </div>
  );
};

export default KiLeverageEffekt;
