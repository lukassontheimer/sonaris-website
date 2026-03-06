import { useEffect, useState, useRef } from "react";
import { Target, Settings, BookOpen, Shield, Sparkles, Send, X, Loader2, Menu } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Message = { role: 'user' | 'assistant'; content: string };

const renderMessageContent = (content: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = content.split(urlRegex);
  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-[#22d3ee] underline hover:text-white transition-colors">
          Termin vereinbaren
        </a>
      );
    }
    return part;
  });
};

const KiCoaching = () => {
  const [activeNav, setActiveNav] = useState("summary");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [faqSectionOpen, setFaqSectionOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Willkommen, ich bin dein persönlicher KI-Assistent für das KI Coaching. Übrigens: Diese Unterhaltung wird nicht gespeichert.\n\nWas möchtest du heute mit KI erreichen?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    document.title = "KI Coaching | SONARIS";

    const handleScroll = () => {
      const sections = ['summary', 'team', 'curriculum', 'timeline', 'tech', 'invest'];
      let current = '';
      sections.forEach(sec => {
        const element = document.getElementById(sec);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = sec;
        }
      });
      if (current) setActiveNav(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    const userMessage: Message = { role: 'user', content: inputValue.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('ceo-chat', {
        body: { messages: updatedMessages }
      });
      if (error) {
        toast({ title: "Fehler", description: "Es gab ein Problem mit der Verbindung zum Assistenten.", variant: "destructive" });
        return;
      }
      if (data?.error) {
        toast({ title: "Fehler", description: data.error, variant: "destructive" });
        return;
      }
      if (data?.message) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
      }
    } catch {
      toast({ title: "Fehler", description: "Ein unerwarteter Fehler ist aufgetreten.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const navItems = [
    { id: 'summary', label: 'SUMMARY' },
    { id: 'team', label: 'TEAM' },
    { id: 'curriculum', label: 'CURRICULUM' },
    { id: 'timeline', label: 'TIMELINE' },
    { id: 'tech', label: 'TECH' },
    { id: 'invest', label: 'INVEST' },
  ];

  const summaryCards = [
    { icon: <Target className="w-8 h-8" />, title: 'Persönliche KI-Begleitung', hover: 'Individuelles 1:1 Coaching, das auf deine konkreten Ziele und deinen Arbeitsalltag zugeschnitten ist.' },
    { icon: <Settings className="w-8 h-8" />, title: 'Praxisnahe Use Cases', hover: 'Wir identifizieren gemeinsam, wo KI bei dir sofort Wirkung entfaltet – und setzen es direkt um.' },
    { icon: <BookOpen className="w-8 h-8" />, title: 'Wissenstransfer & Dokumentation', hover: 'Alles, was du lernst, wird greifbar gemacht: Playbooks, Prompts und Dokumentation inklusive.' },
    { icon: <Shield className="w-8 h-8" />, title: 'DSGVO-konformer Einsatz', hover: 'Du arbeitest von Anfang an datenschutzkonform – mit Tools, die in Deutschland gehostet werden.' },
  ];

  const team = [
    { initials: 'O', name: 'Oliver Andrees', title: 'Kontaktarchitekt', focus: 'Strategie, Vertrieb & Human Factor. Dein Anker für geschäftliche Relevanz.' },
    { initials: 'L', name: 'Lukas Sontheimer', title: 'Strategenpilot', focus: 'Frameworks & Prozesse. Er strukturiert das Chaos in klare Handlungsfelder.' },
    { initials: 'L', name: 'Lorenz Surkemper', title: 'Systemingenieur', focus: 'Tech Stack & Integration. Sorgt dafür, dass die PS auf die Straße kommen.' },
  ];

  const timelineEvents = [
    { time: 'SESSION 1 – 2', desc: 'Standortbestimmung & Zieldefinition. Wo stehst du? Was willst du mit KI erreichen?' },
    { time: 'SESSION 3 – 5', desc: 'Grundlagen & erste Anwendungen. Werkzeuge kennenlernen, erste Prompts bauen.' },
    { time: 'SESSION 6 – 8', desc: 'Use Case Entwicklung. Eigene Assistenten und Workflows aufbauen.' },
    { time: 'SESSION 9 – 10', desc: 'Review & nächste Schritte. Dokumentation, Übergabe und Ausblick.' },
  ];

  const faqs = [
    { q: 'Brauche ich technisches Vorwissen?', a: 'Nein. Das Coaching startet genau dort, wo du heute stehst. Keine Vorkenntnisse notwendig – nur die Bereitschaft, KI auszuprobieren.' },
    { q: 'Wie läuft das Coaching ab?', a: 'Wir arbeiten in regelmäßigen 1:1 Sessions (online oder vor Ort). Dazwischen hast du Zeit, das Gelernte im Alltag auszuprobieren.' },
    { q: 'Wie viel Zeit muss ich pro Woche investieren?', a: 'Für die Sessions ca. 1–2 Stunden. Dazu kommt, was du selbst im Alltag ausprobieren möchtest – ganz ohne Druck.' },
    { q: 'Welche Tools nutzen wir?', a: 'Das hängt von deinen Zielen ab. Wir arbeiten mit gängigen KI-Tools wie ChatGPT, Claude, Langdock oder Microsoft Copilot – je nach Situation.' },
    { q: 'Ist das Coaching für Einzelpersonen oder Teams?', a: 'Beides ist möglich. Das Einzel-Coaching ist sehr persönlich und intensiv. Für Teams gibt es angepasste Formate.' },
    { q: 'Was passiert nach dem Coaching?', a: 'Du gehst mit konkreten Werkzeugen, Playbooks und Prompts raus – und weißt genau, wie du KI weiter ausbaust. Optional: weitere Begleitung möglich.' },
  ];

  return (
    <>
      <style>{`
        .ki-coaching {
          --bg-deep: #020617;
          --glass-bg: rgba(15, 23, 42, 0.8);
          --glass-border: rgba(34, 211, 238, 0.25);
          --glass-active: rgba(34, 211, 238, 0.1);
          --cyan-glow: #22d3ee;
          --cyan-dim: #0891b2;
          --text-white: #f8fafc;
          --text-mute: #94a3b8;
          --font-mono: 'Courier New', monospace;
        }

        .ki-coaching .sonar-grid {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-image: linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px);
          background-size: 100% 60px;
          pointer-events: none;
          z-index: 0;
        }

        .ki-coaching .exec-card:hover .exec-hover,
        .ki-coaching .expert-card:hover .expert-hover,
        .ki-coaching .baustein:hover .b-hover {
          opacity: 1;
          visibility: visible;
        }

        .ki-coaching .expert-card:hover .expert-hover {
          transform: scale(1.05);
          box-shadow: 0 10px 40px rgba(0,0,0,0.8);
        }

        @keyframes sonar-coaching {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .ki-coaching .chat-toggler::before {
          content: '';
          position: absolute;
          width: 100%; height: 100%;
          border-radius: 50%;
          border: 1px solid #22d3ee;
          opacity: 0;
          animation: sonar-coaching 2s infinite;
        }
      `}</style>

      <div className="ki-coaching min-h-screen bg-[#000] flex justify-center overflow-x-hidden">
        <div className="sonar-grid" />

        <div className="w-full max-w-[1200px] min-h-screen bg-[#020617] text-[#f8fafc] relative shadow-[0_0_60px_rgba(0,0,0,0.8)] flex flex-row" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, #111827 0%, #020617 80%)' }}>

          {/* Mobile Header */}
          <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[rgba(2,6,23,0.98)] backdrop-blur-[12px] border-b border-[rgba(34,211,238,0.25)] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-[#22d3ee] rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#22d3ee] rounded-full" />
              </div>
              <div>
                <div className="font-extrabold text-sm tracking-[2px] text-white">SONARIS</div>
                <div className="text-[9px] text-[#22d3ee] tracking-[1px] font-mono">KI COACHING</div>
              </div>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#22d3ee] p-2 bg-transparent border-none cursor-pointer">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-40 bg-[rgba(2,6,23,0.98)] pt-20 px-6">
              <div className="flex flex-col gap-6">
                {navItems.map(item => (
                  <a key={item.id} href={`#${item.id}`} onClick={() => { setActiveNav(item.id); setMobileMenuOpen(false); }}
                    className={`font-mono text-lg text-[#22d3ee] no-underline transition-opacity duration-300 ${activeNav === item.id ? 'opacity-100 font-bold' : 'opacity-50'}`}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Sidebar */}
          <div className="hidden lg:flex w-[250px] min-w-[250px] bg-[rgba(2,6,23,0.95)] border-r border-[rgba(34,211,238,0.25)] flex-col pt-16 sticky top-0 h-screen z-10 backdrop-blur-[12px]">
            <div className="text-center mb-16">
              <div className="w-14 h-14 mx-auto mb-3 border-2 border-[#22d3ee] rounded-full relative flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <div className="w-2 h-2 bg-[#22d3ee] rounded-full" />
              </div>
              <div className="font-extrabold text-lg tracking-[2px] text-white">SONARIS</div>
              <div className="text-[11px] text-[#22d3ee] tracking-[1px] font-mono">KI COACHING</div>
            </div>
            <div className="flex flex-col gap-6 pl-16 mt-6 border-l border-[rgba(255,255,255,0.1)] ml-5">
              {navItems.map(item => (
                <a key={item.id} href={`#${item.id}`} onClick={() => setActiveNav(item.id)}
                  className={`font-mono text-[13px] text-[#22d3ee] relative cursor-pointer transition-opacity duration-300 no-underline ${activeNav === item.id ? 'opacity-100 font-bold' : 'opacity-50 hover:opacity-100'}`}
                  style={{ textShadow: activeNav === item.id ? '0 0 5px #22d3ee' : 'none' }}>
                  {activeNav === item.id && (
                    <span className="absolute -left-[22px] top-0.5 w-[9px] h-[9px] bg-[#22d3ee] rounded-full shadow-[0_0_10px_#22d3ee]" />
                  )}
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 sm:p-6 lg:p-12 z-[2] flex flex-col gap-12 lg:gap-20 pt-20 lg:pt-12">

            {/* Title */}
            <div>
              <h1 className="font-light text-2xl sm:text-3xl lg:text-[48px] m-0 mb-3 leading-[1.1] text-[#f8fafc]">
                KI Coaching: <strong className="text-[#22d3ee] font-bold" style={{ textShadow: '0 0 30px rgba(34, 211, 238, 0.2)' }}>Klarheit.</strong>
              </h1>
              <div className="text-sm sm:text-base lg:text-lg text-[#94a3b8]">Von der ersten Idee zur täglichen KI-Praxis. Persönlich. Pragmatisch. Wirksam.</div>
            </div>

            {/* Summary */}
            <div id="summary">
              <span className="font-mono text-[#22d3ee] text-xs border-b border-[rgba(34,211,238,0.25)] pb-1.5 mb-6 lg:mb-8 block tracking-[1px]">&gt;&gt; SUMMARY</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {summaryCards.map((card, i) => (
                  <div key={i} className="exec-card bg-[rgba(15,23,42,0.8)] border border-[rgba(34,211,238,0.25)] p-5 lg:p-8 rounded-md transition-all duration-300 relative overflow-hidden min-h-[120px] lg:min-h-[150px] hover:border-[#22d3ee] hover:bg-[rgba(34,211,238,0.1)] hover:-translate-y-0.5 cursor-default">
                    <div className="text-[#22d3ee] mb-3 lg:mb-5">{card.icon}</div>
                    <div className="text-sm lg:text-base leading-[1.5] text-[#f8fafc] font-semibold">{card.title}</div>
                    <div className="exec-hover absolute top-0 left-0 w-full h-full bg-[#0f172a] p-4 lg:p-6 z-10 opacity-0 invisible transition-all duration-300 border border-[#22d3ee] rounded-md flex flex-col justify-center items-start text-left box-border">
                      <p className="text-[#f8fafc] text-xs lg:text-sm leading-[1.5] m-0">{card.hover}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div id="team">
              <span className="font-mono text-[#22d3ee] text-xs border-b border-[rgba(34,211,238,0.25)] pb-1.5 mb-6 lg:mb-8 block tracking-[1px]">&gt;&gt; DEIN COACHING TEAM</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                {team.map((member, i) => (
                  <div key={i} className="expert-card bg-[rgba(255,255,255,0.03)] border border-[rgba(34,211,238,0.25)] rounded-md p-5 lg:p-8 relative transition-all duration-300 min-h-[180px] lg:min-h-[220px] flex flex-col items-center text-center z-[1] hover:border-[#22d3ee] hover:z-50">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#111] border border-[#0891b2] mb-3 lg:mb-5 flex items-center justify-center text-lg lg:text-xl font-bold text-[#22d3ee]">{member.initials}</div>
                    <span className="text-sm lg:text-base font-bold text-white block mb-2 leading-tight">{member.name}</span>
                    <span className="font-mono text-[9px] lg:text-[10px] text-[#0891b2] uppercase tracking-wider block">{member.title}</span>
                    <div className="expert-hover absolute top-0 left-0 w-full h-full bg-[#0f172a] p-5 lg:p-8 flex flex-col justify-center items-start text-left opacity-0 invisible transition-all duration-300 border border-[#22d3ee] rounded-md box-border z-[100]">
                      <strong className="text-[#22d3ee] block mb-2 font-mono text-xs uppercase">Fokus:</strong>
                      <p className="text-[#f8fafc] text-xs lg:text-sm leading-[1.5] m-0">{member.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div id="curriculum">
              <span className="font-mono text-[#22d3ee] text-xs border-b border-[rgba(34,211,238,0.25)] pb-1.5 mb-6 lg:mb-8 block tracking-[1px]">&gt;&gt; CURRICULUM & INHALTE</span>

              {/* Phase I */}
              <div className="mb-8 lg:mb-12">
                <div className="text-base lg:text-lg font-bold text-white mb-4 lg:mb-5 border-l-[3px] border-[#22d3ee] pl-4 lg:pl-5">I. EINSTIEG & ORIENTIERUNG</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                  {[
                    { num: '01', title: 'Standortbestimmung', hover: 'Wo stehst du heute? Ziele, Erwartungen und erste KI-Erfahrungen klären.' },
                    { num: '02', title: 'KI-Grundlagen', hover: 'Was sind LLMs? Wie kommuniziere ich effektiv? Erste Anwendungen ausprobieren.' },
                    { num: '03', title: 'Werkzeuge kennenlernen', hover: 'ChatGPT, Claude, Langdock – die wichtigsten Tools im Überblick.' },
                  ].map((item, i) => (
                    <div key={i} className="baustein bg-[rgba(15,23,42,0.8)] border border-[rgba(34,211,238,0.25)] p-4 lg:p-6 rounded-md relative transition-all duration-300 cursor-default min-h-[140px] lg:min-h-[180px] text-left hover:border-[#22d3ee]">
                      <span className="font-mono text-xs text-[#0891b2] mb-2 block">{item.num}</span>
                      <span className="text-xs lg:text-sm font-bold text-[#f8fafc] leading-[1.4] block">{item.title}</span>
                      <div className="b-hover absolute top-0 left-0 w-full h-full bg-[#0f172a] p-4 lg:p-5 z-10 text-xs text-[#f8fafc] rounded-md opacity-0 invisible transition-all duration-300 flex flex-col justify-center items-start border border-[#22d3ee] text-left box-border">
                        <p className="m-0 leading-[1.5]">{item.hover}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 lg:mt-5 border border-dashed border-[rgba(255,255,255,0.2)] p-4 lg:p-5 rounded font-mono text-xs lg:text-sm text-[#94a3b8] bg-[rgba(0,0,0,0.3)] text-left">
                  <strong className="text-[#22d3ee] block mb-2">DELIVERABLES:</strong>
                  Klarheit über Ziele, erstes KI-Werkzeugset, funktionierende erste Prompts.
                </div>
              </div>

              {/* Phase II */}
              <div className="mb-8 lg:mb-12">
                <div className="text-base lg:text-lg font-bold text-white mb-4 lg:mb-5 border-l-[3px] border-[#22d3ee] pl-4 lg:pl-5">II. USE CASES ENTWICKELN</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {[
                    { num: '04', title: 'Eigene Anwendungsfälle', hover: ['Texte & E-Mails automatisieren', 'Recherche & Zusammenfassungen', 'Präsentationen vorbereiten'] },
                    { num: '05', title: 'Eigene Assistenten bauen', hover: ['System-Prompts entwickeln', 'Wissensbasis aufbauen', 'DSGVO-konform arbeiten'] },
                  ].map((item, i) => (
                    <div key={i} className="baustein bg-[rgba(15,23,42,0.8)] border border-[rgba(34,211,238,0.25)] p-4 lg:p-6 rounded-md relative transition-all duration-300 cursor-default min-h-[140px] lg:min-h-[200px] text-left hover:border-[#22d3ee]">
                      <span className="font-mono text-xs text-[#0891b2] mb-2 block">{item.num}</span>
                      <span className="text-xs lg:text-sm font-bold text-[#f8fafc] leading-[1.4] block">{item.title}</span>
                      <div className="b-hover absolute top-0 left-0 w-full h-full bg-[#0f172a] p-4 lg:p-5 z-10 text-[#f8fafc] rounded-md opacity-0 invisible transition-all duration-300 flex flex-col justify-center items-start border border-[#22d3ee] text-left box-border">
                        <ul className="m-0 pl-4 text-[#22d3ee] text-[10px] lg:text-[11px] leading-[1.6] space-y-1">
                          {item.hover.map((h, j) => <li key={j}><span className="text-[#f8fafc]">{h}</span></li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 lg:mt-5 border border-dashed border-[rgba(255,255,255,0.2)] p-4 lg:p-5 rounded font-mono text-xs lg:text-sm text-[#94a3b8] bg-[rgba(0,0,0,0.3)] text-left">
                  <strong className="text-[#22d3ee] block mb-2">DELIVERABLES:</strong>
                  Eigene Use-Case-Sammlung, funktionierende Assistenten, Prompt-Bibliothek.
                </div>
              </div>

              {/* Phase III */}
              <div className="mb-8 lg:mb-12">
                <div className="text-base lg:text-lg font-bold text-white mb-4 lg:mb-5 border-l-[3px] border-[#22d3ee] pl-4 lg:pl-5">III. ABSCHLUSS & ÜBERGABE</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 text-xs lg:text-sm text-[#f8fafc]">
                  {['Persönliches KI-Playbook', 'Dokumentierte Prompt-Bibliothek', 'Empfehlungen für nächste Schritte', 'Optionale weitere Begleitung'].map((item, i) => (
                    <div key={i} className="border border-[rgba(34,211,238,0.25)] p-3">{item}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div id="timeline">
              <span className="font-mono text-[#22d3ee] text-xs border-b border-[rgba(34,211,238,0.25)] pb-1.5 mb-6 lg:mb-8 block tracking-[1px]">&gt;&gt; ABLAUF (MEILENSTEINE)</span>
              <div className="relative mt-3">
                <div className="absolute left-[14px] lg:left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#22d3ee] to-transparent" />
                {timelineEvents.map((event, i) => (
                  <div key={i} className="flex mb-6 lg:mb-8 relative">
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-[#020617] border-2 border-[#22d3ee] rounded-full mt-1.5 mx-2 lg:mx-4 z-[2] flex-shrink-0" />
                    <div className="flex-1 bg-[rgba(255,255,255,0.02)] border border-[rgba(34,211,238,0.25)] p-4 lg:p-5 rounded text-left">
                      <span className="font-mono text-[#22d3ee] text-xs lg:text-sm font-bold block mb-2">{event.time}</span>
                      <div className="text-sm lg:text-base text-[#f8fafc] leading-[1.5] font-bold">{event.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech */}
            <div id="tech">
              <span className="font-mono text-[#22d3ee] text-xs border-b border-[rgba(34,211,238,0.25)] pb-1.5 mb-6 lg:mb-8 block tracking-[1px]">&gt;&gt; TOOLS & PLATTFORMEN</span>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                <div className="border border-[rgba(34,211,238,0.25)] p-5 lg:p-8 rounded-md text-left" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.02) 0%, transparent 100%)' }}>
                  <div className="font-bold text-white text-sm lg:text-base border-b border-[rgba(255,255,255,0.1)] pb-3 mb-4 lg:mb-5 uppercase">LANGDOCK – ENTERPRISE READY</div>
                  <ul className="list-none p-0 m-0">
                    {['DSGVO-konform & Serverstandort Deutschland', 'Modell-agnostisch (GPT, Claude & mehr)', 'Kein Training mit deinen Daten', 'Team-Funktionen & Rechteverwaltung'].map((item, i) => (
                      <li key={i} className="text-xs lg:text-sm text-[#94a3b8] mb-2 lg:mb-3 relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-[#0891b2] before:font-mono">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="border border-[rgba(34,211,238,0.25)] p-5 lg:p-8 rounded-md text-left" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.02) 0%, transparent 100%)' }}>
                  <div className="font-bold text-white text-sm lg:text-base border-b border-[rgba(255,255,255,0.1)] pb-3 mb-4 lg:mb-5 uppercase">CHATGPT / CLAUDE / COPILOT</div>
                  <ul className="list-none p-0 m-0">
                    {['Wir wählen das Tool, das zu dir passt', 'Direkte Anwendung im Alltag', 'Microsoft 365 Integration möglich', 'Einstieg ohne Vorkenntnisse'].map((item, i) => (
                      <li key={i} className="text-xs lg:text-sm text-[#94a3b8] mb-2 lg:mb-3 relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-[#0891b2] before:font-mono">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-6 lg:mt-10">
                <span className="font-mono text-[#22d3ee] text-xs border-b border-[rgba(34,211,238,0.25)] pb-1.5 mb-4 lg:mb-6 block tracking-[1px]">&gt;&gt; FAQ</span>
                {!faqSectionOpen && (
                  <button onClick={() => setFaqSectionOpen(true)} className="bg-transparent border border-[rgba(34,211,238,0.25)] text-[#22d3ee] px-5 py-3 rounded font-mono text-xs uppercase tracking-wider cursor-pointer transition-all duration-300 hover:bg-[rgba(34,211,238,0.1)] hover:border-[#22d3ee]">
                    Häufige Fragen anzeigen
                  </button>
                )}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${faqSectionOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                      <div key={i} className={`bg-[rgba(255,255,255,0.02)] border border-[rgba(34,211,238,0.25)] rounded overflow-hidden transition-colors duration-300 ${openFaq === i ? 'border-[#0891b2]' : 'hover:border-[#0891b2]'}`}>
                        <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-4 lg:p-5 bg-transparent border-none text-left flex justify-between items-center cursor-pointer text-[#f8fafc] text-xs lg:text-sm font-bold outline-none">
                          {faq.q}
                          <span className={`text-[#22d3ee] text-lg transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[300px]' : 'max-h-0'}`}>
                          <div className="px-4 lg:px-5 pb-4 lg:pb-5 text-xs lg:text-sm text-[#94a3b8] leading-[1.5] text-left">{faq.a}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Investment */}
            <div id="invest" className="bg-[rgba(34,211,238,0.05)] border border-[#22d3ee] p-6 lg:p-10 rounded-lg text-center mt-4 lg:mt-6">
              <div className="font-mono text-xs lg:text-sm text-[#0891b2] uppercase tracking-[1px]">INVESTITION (PAUSCHAL)</div>
              <span className="text-3xl lg:text-5xl font-bold text-white my-3 lg:my-4 block">XY Euro*</span>
              <div className="font-mono text-xs lg:text-sm text-[#0891b2] uppercase tracking-[1px]">NETTO (zzgl. 19% MwSt.)</div>
            </div>

            <p className="text-xs text-white/70 text-center mt-3">*Preiskalkulation in Abhängigkeit von Anzahl Sessions und Umfang</p>

            {/* CTA */}
            <div className="flex justify-center mt-6">
              <a href="https://meetings-eu1.hubspot.com/oliver-andrees/meeting-link-?uuid=55e61166-a55a-4de9-a31f-f964e507a90e" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-[#22d3ee] text-[#22d3ee] px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                📅 VIRTUELLEN ESPRESSO BUCHEN
              </a>
            </div>

            {/* Footer */}
            <footer className="mt-6 lg:mt-10 pt-6 lg:pt-10 border-t border-[rgba(34,211,238,0.25)] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm lg:text-base text-[#94a3b8]">
              <span>SONARIS AI CONSULTING</span>
              <a href="https://sonaris.de/impressum" target="_blank" rel="noopener noreferrer" className="text-[#22d3ee] hover:underline">Impressum</a>
            </footer>
          </div>
        </div>

        {/* Chatbot Toggler */}
        <button onClick={() => setChatOpen(!chatOpen)}
          className="chat-toggler fixed bottom-4 lg:bottom-[30px] right-4 lg:right-[50px] w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-full bg-[#1e293b] border-2 border-[#22d3ee] shadow-[0_0_20px_rgba(34,211,238,0.2)] flex items-center justify-center cursor-pointer transition-all duration-300 z-[9999] hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
          {chatOpen ? <X className="w-5 h-5 lg:w-6 lg:h-6 text-[#22d3ee]" /> : <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-[#22d3ee]" />}
        </button>

        {/* Chat Window */}
        <div className={`fixed left-4 right-4 sm:left-auto sm:right-4 lg:right-[50px] bottom-20 lg:bottom-[110px] sm:w-[320px] lg:w-[400px] h-[350px] sm:h-[450px] lg:h-[550px] bg-[rgba(30,41,59,0.98)] backdrop-blur-[10px] border border-[rgba(34,211,238,0.3)] rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5),0_0_10px_rgba(34,211,238,0.1)] overflow-hidden flex flex-col z-[9999] transition-all duration-300 ${chatOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-5 scale-95 pointer-events-none'}`}>
          <div className="bg-[rgba(255,255,255,0.03)] px-4 lg:px-5 py-3 lg:py-4 flex items-center justify-between border-b border-[rgba(34,211,238,0.3)]">
            <h2 className="text-[#f8fafc] text-base lg:text-[1.1rem] font-semibold m-0 tracking-[0.5px]">SONARIS Assistant</h2>
            <button onClick={() => setChatOpen(false)} className="text-[#22d3ee] cursor-pointer text-2xl transition-colors duration-200 hover:text-white bg-transparent border-none">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 p-4 lg:p-5 overflow-y-auto flex flex-col gap-3 lg:gap-[15px]">
            {messages.map((msg, i) => (
              <div key={i} className={`max-w-[85%] lg:max-w-[80%] p-2.5 lg:p-3 px-3 lg:px-4 rounded-xl text-sm lg:text-[0.95rem] leading-[1.5] whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'self-end bg-[#22d3ee] text-[#020617] font-medium shadow-[0_0_15px_rgba(34,211,238,0.2)] rounded-br-sm'
                  : 'self-start bg-[rgba(255,255,255,0.05)] text-[#f8fafc] border border-[rgba(255,255,255,0.1)] rounded-bl-sm'
              }`}>
                {renderMessageContent(msg.content)}
              </div>
            ))}
            {isLoading && (
              <div className="self-start flex items-center gap-2 text-[#94a3b8] text-sm">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Denkt nach...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 lg:p-[15px_20px] border-t border-[rgba(34,211,238,0.3)] flex gap-2.5 bg-[rgba(0,0,0,0.2)]">
            <input type="text" placeholder="Schreibe eine Nachricht..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress} disabled={isLoading}
              className="flex-1 bg-transparent border-none outline-none text-[#f8fafc] text-sm lg:text-[0.95rem] h-6 p-0 placeholder:text-[rgba(255,255,255,0.3)] disabled:opacity-50" />
            <button onClick={sendMessage} disabled={isLoading || !inputValue.trim()}
              className="bg-transparent border-none outline-none text-[#22d3ee] cursor-pointer text-xl transition-transform duration-200 p-0 flex items-center hover:translate-x-[3px] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0">
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default KiCoaching;
