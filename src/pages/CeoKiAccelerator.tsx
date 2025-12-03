import { useEffect, useState, useRef } from "react";
import { Target, Settings, BookOpen, Shield, Sparkles, Send, X, Loader2, Menu } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Message = { role: 'user' | 'assistant'; content: string };

const CeoKiAccelerator = () => {
  const [activeNav, setActiveNav] = useState("summary");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Willkommen! Ich bin dein persönlicher KI-Assistent für den CEO AI Accelerator. Lass uns gemeinsam herausfinden, wo du mit deinen KI-Initiativen stehst. Was ist deine Rolle im Unternehmen?' }
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
    document.title = "CEO AI Accelerator | SONARIS";
    
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
        console.error('Chat error:', error);
        toast({
          title: "Fehler",
          description: "Es gab ein Problem mit der Verbindung zum Assistenten.",
          variant: "destructive"
        });
        return;
      }

      if (data?.error) {
        toast({
          title: "Fehler",
          description: data.error,
          variant: "destructive"
        });
        return;
      }

      if (data?.message) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
      }
    } catch (err) {
      console.error('Chat error:', err);
      toast({
        title: "Fehler",
        description: "Ein unerwarteter Fehler ist aufgetreten.",
        variant: "destructive"
      });
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

  const execCards = [
    { icon: <Target className="w-8 h-8" />, title: 'Individuelle KI-Kompetenzentwicklung', hover: 'Erwerbe praxisnahes Wissen, das direkt auf deine Führungsrolle einzahlt.' },
    { icon: <Settings className="w-8 h-8" />, title: '1-3 Prozessautomatisierungen', hover: 'Identifikation und Umsetzung von High-Impact Use Cases für sofortige Effizienz.' },
    { icon: <BookOpen className="w-8 h-8" />, title: 'Wissenstransfer & Dokumentation', hover: 'Nachhaltige Sicherung des erarbeiteten Wissens durch detaillierte Dokumentation.' },
    { icon: <Shield className="w-8 h-8" />, title: 'DSGVO-konforme Integration', hover: 'Sicherer Einsatz von KI-Technologien unter Einhaltung aller Datenschutzrichtlinien.' },
  ];

  const teamRow1 = [
    { initials: 'O', name: 'Oliver Andrees', title: 'Kontaktarchitekt', focus: 'Strategie, Vertrieb & Human Factor. Dein Anker für die geschäftliche Relevanz.' },
    { initials: 'L', name: 'Lukas Sontheimer', title: 'Strategenpilot', focus: 'Frameworks & Prozesse. Er strukturiert das Chaos in klare Handlungsfelder.' },
    { initials: 'L', name: 'Lorenz Surkemper', title: 'Systemingenieur', focus: 'Tech Stack & Integration. Sorgt dafür, dass die PS auf die Straße kommen.' },
  ];

  const teamRow2 = [
    { initials: 'C', name: 'Christian Pessing', title: 'Wandelsynchronist', focus: 'Training & Change. Er übersetzt komplexe Technologie in verständliche Sprache.' },
    { initials: 'E', name: 'Elysium Echo', title: 'KI-Tutor', focus: '24/7 Support & Wissensdatenbank. Immer verfügbar für deine Fragen.' },
  ];

  const timelineEvents = [
    { time: 'WOCHE 1 - 2', desc: 'Setup & Grundlagen. Einrichtung Langdock, Kick-Off, Start Basistraining.' },
    { time: 'WOCHE 3 - 5', desc: 'Vertiefung & Use Cases. Identifikation und Bau der ersten Assistenten.' },
    { time: 'WOCHE 6 - 9', desc: 'Automatisierung & Integration. Technische Umsetzung der Workflows. Testphase.' },
    { time: 'WOCHE 10 - 12', desc: 'Abschluss & Übergabe. Final Review, Dokumentation, Governance-Richtlinien.' },
  ];

  const faqs = [
    { q: 'Wie viel Zeit muss ich einplanen?', a: 'Rechne mit ca. 1–3 Stunden pro Woche für die gemeinsamen Trainings, Sessions und Feedback inklusive Umsetzung.' },
    { q: 'Technisches Vorwissen?', a: 'Nein, wir holen dich dort ab, wo du stehst.' },
  ];

  return (
    <>
      <style>{`
        .ceo-accelerator {
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
        
        .sonar-grid {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px);
          background-size: 100% 60px;
          pointer-events: none;
          z-index: 0;
        }
        
        .exec-card:hover .exec-hover,
        .expert-card:hover .expert-hover,
        .baustein:hover .b-hover {
          opacity: 1;
          visibility: visible;
        }
        
        .expert-card:hover .expert-hover {
          transform: scale(1.05);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
        }
        
        @keyframes sonar {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        .chat-toggler::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px solid var(--cyan-glow);
          opacity: 0;
          animation: sonar 2s infinite;
        }
      `}</style>
      
      <div className="ceo-accelerator min-h-screen bg-[#000] flex justify-center overflow-x-hidden">
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
                <div className="text-[9px] text-[#22d3ee] tracking-[1px] font-mono">ACCELERATOR</div>
              </div>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#22d3ee] p-2 bg-transparent border-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-40 bg-[rgba(2,6,23,0.98)] pt-20 px-6">
              <div className="flex flex-col gap-6">
                {navItems.map(item => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => { setActiveNav(item.id); setMobileMenuOpen(false); }}
                    className={`font-mono text-lg text-[#22d3ee] no-underline transition-opacity duration-300 ${
                      activeNav === item.id ? 'opacity-100 font-bold' : 'opacity-50'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
          
          {/* Sidebar - Hidden on Mobile */}
          <div className="hidden lg:flex w-[250px] min-w-[250px] bg-[rgba(2,6,23,0.95)] border-r border-[rgba(34,211,238,0.25)] flex-col pt-16 sticky top-0 h-screen z-10 backdrop-blur-[12px]">
            <div className="text-center mb-16">
              <div className="w-14 h-14 mx-auto mb-3 border-2 border-[#22d3ee] rounded-full relative flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <div className="w-2 h-2 bg-[#22d3ee] rounded-full" />
              </div>
              <div className="font-extrabold text-lg tracking-[2px] text-white">SONARIS</div>
              <div className="text-[11px] text-[#22d3ee] tracking-[1px] font-mono">ACCELERATOR</div>
            </div>
            
            <div className="flex flex-col gap-6 pl-16 mt-6 border-l border-[rgba(255,255,255,0.1)] ml-5">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveNav(item.id)}
                  className={`font-mono text-[13px] text-[#22d3ee] relative cursor-pointer transition-opacity duration-300 no-underline ${
                    activeNav === item.id ? 'opacity-100 font-bold' : 'opacity-50 hover:opacity-100'
                  }`}
                  style={{ textShadow: activeNav === item.id ? '0 0 5px #22d3ee' : 'none' }}
                >
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
                CEO AI Accelerator: <strong className="text-[#22d3ee] font-bold" style={{ textShadow: '0 0 30px rgba(34, 211, 238, 0.2)' }}>Souveränität.</strong>
              </h1>
              <div className="text-sm sm:text-base lg:text-lg text-[#94a3b8]">Vom Getriebenen zum Gestalter. Strategische Exzellenz in 12 Wochen.</div>
            </div>
            
            {/* Executive Summary */}
            <div id="summary">
              <span className="font-mono text-[#22d3ee] text-xs border-b border-[rgba(34,211,238,0.25)] pb-1.5 mb-6 lg:mb-8 block tracking-[1px]">&gt;&gt; EXECUTIVE SUMMARY</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {execCards.map((card, i) => (
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
            
            {/* Team Section */}
            <div id="team">
              <span className="font-mono text-[#22d3ee] text-xs border-b border-[rgba(34,211,238,0.25)] pb-1.5 mb-6 lg:mb-8 block tracking-[1px]">&gt;&gt; EXPERTEN TEAM [YOUR TASK FORCE]</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
                {teamRow1.map((member, i) => (
                  <div key={i} className="expert-card bg-[rgba(255,255,255,0.03)] border border-[rgba(34,211,238,0.25)] rounded-md p-5 lg:p-8 relative transition-all duration-300 min-h-[180px] lg:min-h-[220px] flex flex-col items-center text-center z-[1] hover:border-[#22d3ee] hover:z-50">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#111] border border-[#0891b2] mb-3 lg:mb-5 flex items-center justify-center text-lg lg:text-xl font-bold text-[#22d3ee]">{member.initials}</div>
                    <span className="text-sm lg:text-base font-bold text-white block mb-2 leading-tight">{member.name}</span>
                    <span className="font-mono text-[9px] lg:text-[10px] text-[#0891b2] uppercase tracking-wider block break-words">{member.title}</span>
                    <div className="expert-hover absolute top-0 left-0 w-full h-full bg-[#0f172a] p-5 lg:p-8 flex flex-col justify-center items-start text-left opacity-0 invisible transition-all duration-300 border border-[#22d3ee] rounded-md box-border z-[100]">
                      <strong className="text-[#22d3ee] block mb-2 font-mono text-xs uppercase">Fokus:</strong>
                      <p className="text-[#f8fafc] text-xs lg:text-sm leading-[1.5] m-0">{member.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 lg:w-[70%] mx-auto">
                {teamRow2.map((member, i) => (
                  <div key={i} className="expert-card bg-[rgba(255,255,255,0.03)] border border-[rgba(34,211,238,0.25)] rounded-md p-5 lg:p-8 relative transition-all duration-300 min-h-[180px] lg:min-h-[220px] flex flex-col items-center text-center z-[1] hover:border-[#22d3ee] hover:z-50">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#111] border border-[#0891b2] mb-3 lg:mb-5 flex items-center justify-center text-lg lg:text-xl font-bold text-[#22d3ee]">{member.initials}</div>
                    <span className="text-sm lg:text-base font-bold text-white block mb-2 leading-tight">{member.name}</span>
                    <span className="font-mono text-[9px] lg:text-[10px] text-[#0891b2] uppercase tracking-wider block break-words">{member.title}</span>
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
              <span className="font-mono text-[#22d3ee] text-xs border-b border-[rgba(34,211,238,0.25)] pb-1.5 mb-6 lg:mb-8 block tracking-[1px]">&gt;&gt; CURRICULUM & MODULE</span>
              
              {/* Module I */}
              <div className="mb-8 lg:mb-12">
                <div className="text-base lg:text-lg font-bold text-white mb-4 lg:mb-5 border-l-[3px] border-[#22d3ee] pl-4 lg:pl-5">I. KI-GRUNDLAGENTRAINING</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {[
                    { num: '01', title: 'Einführung LLMs', hover: 'Was sind LLMs? Funktionsweise, Grenzen und Potenziale verstehen.' },
                    { num: '02', title: 'Kommunikation mit LLM', hover: 'Die Kunst der richtigen Anweisung. Zero-Shot, Few-Shot, Chain-of-Thought.' },
                    { num: '03', title: 'KI im Führungskontext', hover: 'Wie führe ich in der KI-Ära? Change Management und Vorbildfunktion.' },
                  ].map((item, i) => (
                    <div key={i} className="baustein bg-[rgba(15,23,42,0.8)] border border-[rgba(34,211,238,0.25)] p-4 lg:p-6 rounded-md relative transition-all duration-300 cursor-default min-h-[140px] lg:min-h-[180px] text-left hover:border-[#22d3ee]">
                      <span className="font-mono text-xs text-[#0891b2] mb-2 block text-left">{item.num}</span>
                      <span className="text-xs lg:text-sm font-bold text-[#f8fafc] leading-[1.4] block text-left">{item.title}</span>
                      <div className="b-hover absolute top-0 left-0 w-full h-full bg-[#0f172a] p-4 lg:p-5 z-10 text-xs text-[#f8fafc] rounded-md opacity-0 invisible transition-all duration-300 flex flex-col justify-center items-start border border-[#22d3ee] text-left box-border">
                        <p className="m-0 leading-[1.5]">{item.hover}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 lg:mt-5 border border-dashed border-[rgba(255,255,255,0.2)] p-4 lg:p-5 rounded font-mono text-xs lg:text-sm text-[#94a3b8] bg-[rgba(0,0,0,0.3)] text-left">
                  <strong className="text-[#22d3ee] block mb-2">DELIVERABLES:</strong>
                  fundiertes Verständnis von KI-Technologien, Fähigkeit zur effektiven Kommunikation mit KI-Systemen, Schulungsunterlagen, erste erfolgreiche praktische Anwendungen.
                </div>
              </div>
              
              {/* Module II */}
              <div className="mb-8 lg:mb-12">
                <div className="text-base lg:text-lg font-bold text-white mb-4 lg:mb-5 border-l-[3px] border-[#22d3ee] pl-4 lg:pl-5">II. KI-VERTIEFUNG & USE-CASE IDENTIFIKATION</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {[
                    { num: '04', title: 'Vertiefung', hover: ['Fortgeschrittenes Prompt-Engineering', 'Predictive AI-Anwendungen', 'Komplexe Aufgaben in KI'] },
                    { num: '05', title: 'Praktische Anwendung', hover: ['Geeignete Technik auswählen', 'Aufbau eines Second Brain', 'DSGVO-konforme Nutzung'] },
                  ].map((item, i) => (
                    <div key={i} className="baustein bg-[rgba(15,23,42,0.8)] border border-[rgba(34,211,238,0.25)] p-4 lg:p-6 rounded-md relative transition-all duration-300 cursor-default min-h-[140px] lg:min-h-[200px] text-left hover:border-[#22d3ee]">
                      <span className="font-mono text-xs text-[#0891b2] mb-2 block text-left">{item.num}</span>
                      <span className="text-xs lg:text-sm font-bold text-[#f8fafc] leading-[1.4] block text-left">{item.title}</span>
                      <div className="b-hover absolute top-0 left-0 w-full h-full bg-[#0f172a] p-4 lg:p-5 z-10 text-[#f8fafc] rounded-md opacity-0 invisible transition-all duration-300 flex flex-col justify-center items-start border border-[#22d3ee] text-left box-border">
                        <ul className="m-0 pl-4 list-square text-[#22d3ee] text-left text-[10px] lg:text-[11px] leading-[1.6] space-y-1">
                          {item.hover.map((h, j) => <li key={j}><span className="text-[#f8fafc]">{h}</span></li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 lg:mt-5 border border-dashed border-[rgba(255,255,255,0.2)] p-4 lg:p-5 rounded font-mono text-xs lg:text-sm text-[#94a3b8] bg-[rgba(0,0,0,0.3)] text-left">
                  <strong className="text-[#22d3ee] block mb-2">DELIVERABLES:</strong>
                  Vertieftes KI-Anwendungswissen, Use-Case-Sammlung mit Bewertungsmatrix, priorisierte Roadmap, Second-Brain-Wissensbasis, DSGVO-Leitfaden.
                </div>
              </div>
              
              {/* Module III */}
              <div className="mb-8 lg:mb-12">
                <div className="text-base lg:text-lg font-bold text-white mb-4 lg:mb-5 border-l-[3px] border-[#22d3ee] pl-4 lg:pl-5">III. IMPLEMENTIERUNG VON PROZESSAUTOMATISIERUNG</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {[
                    { num: '06', title: 'Automatisierung & Anwendungsfelder', hover: ['Präsentationen & Visualisierungen', 'Markt- & Wettbewerbsanalysen', 'Meeting-Protokolle & Follow-ups', 'Content & CRM-Workflows', 'Recherche & Dokumentenanalyse'] },
                    { num: '07', title: 'Technischer Ansatz', hover: ['MS Copilot-Infrastruktur', 'Alternative Enterprise-KI (Langdock)', 'Human-in-the-Loop Methodik'] },
                  ].map((item, i) => (
                    <div key={i} className="baustein bg-[rgba(15,23,42,0.8)] border border-[rgba(34,211,238,0.25)] p-4 lg:p-6 rounded-md relative transition-all duration-300 cursor-default min-h-[140px] lg:min-h-[200px] text-left hover:border-[#22d3ee]">
                      <span className="font-mono text-xs text-[#0891b2] mb-2 block text-left">{item.num}</span>
                      <span className="text-xs lg:text-sm font-bold text-[#f8fafc] leading-[1.4] block text-left">{item.title}</span>
                      <div className="b-hover absolute top-0 left-0 w-full h-full bg-[#0f172a] p-4 lg:p-5 z-10 text-[#f8fafc] rounded-md opacity-0 invisible transition-all duration-300 flex flex-col justify-center items-start border border-[#22d3ee] text-left box-border">
                        <ul className="m-0 pl-4 list-square text-[#22d3ee] text-left text-[10px] lg:text-[11px] leading-[1.6] space-y-1">
                          {item.hover.map((h, j) => <li key={j}><span className="text-[#f8fafc]">{h}</span></li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 lg:mt-5 border border-dashed border-[rgba(255,255,255,0.2)] p-4 lg:p-5 rounded font-mono text-xs lg:text-sm text-[#94a3b8] bg-[rgba(0,0,0,0.3)] text-left">
                  <strong className="text-[#22d3ee] block mb-2">DELIVERABLES:</strong>
                  1–3 funktionsfähige Prozessautomatisierungen, dokumentierte System-Prompts, Prompt-Bibliothek, Second-Brain-Wissensdatenbank.
                </div>
              </div>
              
              {/* Module IV */}
              <div className="mb-8 lg:mb-12">
                <div className="text-base lg:text-lg font-bold text-white mb-4 lg:mb-5 border-l-[3px] border-[#22d3ee] pl-4 lg:pl-5">IV. ABSCHLUSS & ÜBERGABE</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 text-xs lg:text-sm text-[#f8fafc]">
                  {['Vollständige Projektdokumentation', 'Best-Practice-Leitfaden', 'KI-Nutzungsrichtlinien', 'Übergabeprotokoll'].map((item, i) => (
                    <div key={i} className="border border-[rgba(34,211,238,0.25)] p-3">{item}</div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Timeline */}
            <div id="timeline">
              <span className="font-mono text-[#22d3ee] text-xs border-b border-[rgba(34,211,238,0.25)] pb-1.5 mb-6 lg:mb-8 block tracking-[1px]">&gt;&gt; PROJEKTVERLAUF (MEILENSTEINE)</span>
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
            
            {/* Tech Stack */}
            <div id="tech">
              <span className="font-mono text-[#22d3ee] text-xs border-b border-[rgba(34,211,238,0.25)] pb-1.5 mb-6 lg:mb-8 block tracking-[1px]">&gt;&gt; TECHNOLOGIE & PLATTFORMEN</span>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                <div className="border border-[rgba(34,211,238,0.25)] p-5 lg:p-8 rounded-md text-left" style={{ background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.02) 0%, transparent 100%)' }}>
                  <div className="font-bold text-white text-sm lg:text-base border-b border-[rgba(255,255,255,0.1)] pb-3 mb-4 lg:mb-5 uppercase">LANGDOCK ENTERPRISE READY PLATTFORM</div>
                  <ul className="list-none p-0 m-0">
                    {['DSGVO-konform & Serverstandort Deutschland', 'Modell-Agnostisch (Alle Top-Modelle)', 'Kein Training mit deinen Daten', 'Umfangreiche Team-Funktionen & Rechteverwaltung'].map((item, i) => (
                      <li key={i} className="text-xs lg:text-sm text-[#94a3b8] mb-2 lg:mb-3 relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-[#0891b2] before:font-mono">{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 text-xs text-[#0891b2]">FAQ: Ist das sicher? Ja. ISO 27001 zertifiziert.</div>
                </div>
                <div className="border border-[rgba(34,211,238,0.25)] p-5 lg:p-8 rounded-md text-left" style={{ background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.02) 0%, transparent 100%)' }}>
                  <div className="font-bold text-white text-sm lg:text-base border-b border-[rgba(255,255,255,0.1)] pb-3 mb-4 lg:mb-5 uppercase">MICROSOFT 365 & COPILOT INTEGRATION</div>
                  <ul className="list-none p-0 m-0">
                    {['Technische Highlights: Nahtlose Office-Integration', 'Semantische Suche im SharePoint', 'Automatisierte Protokolle in Teams', 'Sichere Auth via Active Directory'].map((item, i) => (
                      <li key={i} className="text-xs lg:text-sm text-[#94a3b8] mb-2 lg:mb-3 relative pl-5 before:content-['>'] before:absolute before:left-0 before:text-[#0891b2] before:font-mono">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* FAQ */}
              <div className="mt-6 lg:mt-10 flex flex-col gap-3">
                {faqs.map((faq, i) => (
                  <div key={i} className={`bg-[rgba(255,255,255,0.02)] border border-[rgba(34,211,238,0.25)] rounded overflow-hidden transition-colors duration-300 ${openFaq === i ? 'border-[#0891b2]' : 'hover:border-[#0891b2]'}`}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-4 lg:p-5 bg-transparent border-none text-left flex justify-between items-center cursor-pointer text-[#f8fafc] text-xs lg:text-sm font-bold outline-none"
                    >
                      {faq.q}
                      <span className={`text-[#22d3ee] text-lg transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[200px]' : 'max-h-0'}`}>
                      <div className="px-4 lg:px-5 pb-4 lg:pb-5 text-xs lg:text-sm text-[#94a3b8] leading-[1.5] text-left">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Investment */}
            <div id="invest" className="bg-[rgba(34,211,238,0.05)] border border-[#22d3ee] p-6 lg:p-10 rounded-lg text-center mt-4 lg:mt-6">
              <div className="font-mono text-xs lg:text-sm text-[#0891b2] uppercase tracking-[1px]">INVESTITION (PAUSCHAL)</div>
              <span className="text-3xl lg:text-5xl font-bold text-white my-3 lg:my-4 block">7.500 €</span>
              <div className="font-mono text-xs lg:text-sm text-[#0891b2] uppercase tracking-[1px]">NETTO (zzgl. 19% MwSt. = 8.925 € Brutto)</div>
            </div>
            
            {/* Footer */}
            <footer className="mt-6 lg:mt-10 pt-6 lg:pt-10 border-t border-[rgba(34,211,238,0.25)] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm lg:text-base text-[#94a3b8]">
              <span>SONARIS AI CONSULTING</span>
              <a 
                href="https://sonaris.de/impressum" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#22d3ee] hover:underline"
              >
                Impressum
              </a>
            </footer>
          </div>
        </div>
        
        {/* Chatbot Toggler */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="chat-toggler fixed bottom-4 lg:bottom-[30px] right-4 lg:right-[50px] w-14 h-14 lg:w-[70px] lg:h-[70px] rounded-full bg-[#1e293b] border-2 border-[#22d3ee] shadow-[0_0_20px_rgba(34,211,238,0.2)] flex items-center justify-center cursor-pointer transition-all duration-300 z-[9999] hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
        >
          {chatOpen ? <X className="w-5 h-5 lg:w-6 lg:h-6 text-[#22d3ee]" /> : <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-[#22d3ee]" />}
        </button>
        
        {/* Chat Window */}
        <div className={`fixed right-2 lg:right-[50px] bottom-20 lg:bottom-[110px] w-[calc(100vw-16px)] sm:w-[350px] lg:w-[400px] h-[450px] lg:h-[550px] bg-[rgba(30,41,59,0.98)] backdrop-blur-[10px] border border-[rgba(34,211,238,0.3)] rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5),0_0_10px_rgba(34,211,238,0.1)] overflow-hidden flex flex-col z-[9999] transition-all duration-300 ${chatOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-5 scale-95 pointer-events-none'}`}>
          <div className="bg-[rgba(255,255,255,0.03)] px-4 lg:px-5 py-3 lg:py-4 flex items-center justify-between border-b border-[rgba(34,211,238,0.3)]">
            <h2 className="text-[#f8fafc] text-base lg:text-[1.1rem] font-semibold m-0 tracking-[0.5px]">SONARIS Assistant</h2>
            <button onClick={() => setChatOpen(false)} className="text-[#22d3ee] cursor-pointer text-2xl transition-colors duration-200 hover:text-white bg-transparent border-none">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 p-4 lg:p-5 overflow-y-auto flex flex-col gap-3 lg:gap-[15px]">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`max-w-[85%] lg:max-w-[80%] p-2.5 lg:p-3 px-3 lg:px-4 rounded-xl text-sm lg:text-[0.95rem] leading-[1.5] ${
                  msg.role === 'user' 
                    ? 'self-end bg-[#22d3ee] text-[#020617] font-medium shadow-[0_0_15px_rgba(34,211,238,0.2)] rounded-br-sm' 
                    : 'self-start bg-[rgba(255,255,255,0.05)] text-[#f8fafc] border border-[rgba(255,255,255,0.1)] rounded-bl-sm'
                }`}
              >
                {msg.content}
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
            <textarea 
              placeholder="Schreibe eine Nachricht..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isLoading}
              className="flex-1 bg-transparent border-none outline-none text-[#f8fafc] text-sm lg:text-[0.95rem] resize-none h-6 max-h-[100px] p-0 mt-0.5 placeholder:text-[rgba(255,255,255,0.3)] disabled:opacity-50"
            />
            <button 
              onClick={sendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="bg-transparent border-none outline-none text-[#22d3ee] cursor-pointer text-xl transition-transform duration-200 p-0 flex items-center hover:translate-x-[3px] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CeoKiAccelerator;
