import { useState, useEffect, useRef } from "react";
import { Send, X, Loader2, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

type Message = { role: 'user' | 'assistant'; content: string };

const renderMessageContent = (content: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = content.split(urlRegex);
  
  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a 
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#22d3ee] underline hover:text-white transition-colors"
        >
          Termin vereinbaren
        </a>
      );
    }
    return part;
  });
};

const KiAlsLernprozess = () => {
  const [activeDepth, setActiveDepth] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Willkommen! Ich bin dein SONARIS KI-Assistent. Diese Unterhaltung wird nicht gespeichert.\n\nWie kann ich dir helfen, KI als sozialen Lernprozess in deinem Unternehmen zu verstehen und umzusetzen?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const depthLabels = ["SURFACE", "-50m", "-100m", "-200m", "CORE"];
  const depthPositions = ["5%", "25%", "50%", "75%", "95%"];
  
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute('data-index');
          if (index !== null) {
            setActiveDepth(parseInt(index));
          }
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

  return (
    <>
      <style>{`
        .lernprozess-page {
          --bg-deep: #020617;
          --glass-bg: rgba(15, 23, 42, 0.7);
          --glass-border: rgba(34, 211, 238, 0.2);
          --glass-highlight: rgba(34, 211, 238, 0.1);
          --cyan-glow: #22d3ee;
          --cyan-dim: #0891b2;
          --color-warn: #fbbf24;
          --color-alert: #f87171;
          --color-success: #4ade80;
          --text-white: #f8fafc;
          --text-mute: #94a3b8;
          --font-ui: 'Segoe UI', Inter, Helvetica, Arial, sans-serif;
          --font-mono: 'Courier New', monospace;
          --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
        }

        .lernprozess-page {
          font-family: var(--font-ui);
          background-color: #000;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          min-height: 100vh;
          color: var(--text-white);
        }

        .lernprozess-sheet {
          width: 100%;
          max-width: 210mm;
          min-height: 100vh;
          background-color: var(--bg-deep);
          background-image: radial-gradient(circle at 70% 0%, #1e293b 0%, var(--bg-deep) 60%);
          position: relative;
          box-shadow: 0 0 60px rgba(0,0,0,0.8);
          display: flex;
          flex-direction: row;
        }

        .lernprozess-sonar-grid {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px);
          background-size: 100% 80px;
          pointer-events: none;
          z-index: 0;
        }

        .lernprozess-particulate {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.3;
          pointer-events: none;
          z-index: 0;
        }

        .lernprozess-sidebar {
          width: 50mm;
          background: rgba(2, 6, 23, 0.9);
          border-right: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
          padding-top: 15mm;
          position: sticky;
          top: 0;
          height: 100vh;
          z-index: 10;
          backdrop-filter: blur(10px);
        }

        .lernprozess-logo-area {
          text-align: center;
          margin-bottom: 15mm;
          padding: 0 10px;
        }

        .lernprozess-sonar-logo {
          width: 40px;
          height: 40px;
          margin: 0 auto 10px auto;
          border: 2px solid var(--cyan-glow);
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.2);
          cursor: pointer;
          transition: transform 0.3s;
        }

        .lernprozess-sonar-logo:hover {
          transform: scale(1.1);
        }

        .lernprozess-sonar-logo::after {
          content: '';
          width: 6px;
          height: 6px;
          background: var(--cyan-glow);
          border-radius: 50%;
        }

        .lernprozess-pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid var(--cyan-glow);
          border-radius: 50%;
          opacity: 0;
          animation: lernprozess-ripple 3s infinite;
        }

        @keyframes lernprozess-ripple {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        .lernprozess-brand-name {
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 2px;
          color: white;
          margin-bottom: 2px;
        }

        .lernprozess-brand-sub {
          font-size: 9px;
          color: var(--cyan-glow);
          letter-spacing: 1px;
          font-family: var(--font-mono);
        }

        .lernprozess-depth-track {
          flex: 1;
          position: relative;
          margin-left: 25mm;
          border-left: 1px solid rgba(255,255,255,0.1);
        }

        .lernprozess-depth-marker {
          position: absolute;
          left: -5px;
          transition: top 0.5s var(--ease-out);
          width: 9px;
          height: 9px;
          background: var(--cyan-glow);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--cyan-glow);
        }

        .lernprozess-depth-label {
          position: absolute;
          left: 15px;
          transform: translateY(-50%);
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--cyan-glow);
          transition: all 0.3s;
          opacity: 0.4;
          cursor: pointer;
        }

        .lernprozess-depth-label:hover {
          opacity: 0.8;
        }

        .lernprozess-depth-label.active {
          opacity: 1;
          font-weight: bold;
          text-shadow: 0 0 10px var(--cyan-glow);
          font-size: 11px;
        }

        .lernprozess-main {
          flex: 1;
          padding: 15mm 20mm;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 20mm;
        }

        .lernprozess-h1 {
          font-weight: 300;
          font-size: 42px;
          margin: 0 0 10px 0;
          line-height: 1.1;
          color: var(--text-white);
        }

        .lernprozess-h1 strong {
          color: var(--cyan-glow);
          font-weight: 700;
          text-shadow: 0 0 30px rgba(34, 211, 238, 0.2);
        }

        .lernprozess-sub-headline {
          font-size: 18px;
          color: var(--text-mute);
          margin-bottom: 30px;
          font-weight: 400;
        }

        .lernprozess-intro-lead {
          border-left: 3px solid var(--cyan-dim);
          padding-left: 20px;
          color: var(--text-white);
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 25px;
          background: linear-gradient(90deg, rgba(34, 211, 238, 0.05), transparent);
          padding-top: 10px;
          padding-bottom: 10px;
        }

        .lernprozess-system-note {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-mute);
          padding: 12px;
          border: 1px dashed rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }

        .lernprozess-system-note span {
          color: var(--cyan-glow);
        }

        .lernprozess-section-header {
          font-family: var(--font-mono);
          color: var(--cyan-glow);
          font-size: 11px;
          letter-spacing: 1px;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 10px;
          margin-bottom: 20px;
          display: block;
        }

        .lernprozess-layers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .lernprozess-layer-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          padding: 20px;
          border-radius: 6px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(5px);
        }

        .lernprozess-layer-card:hover {
          border-color: var(--cyan-glow);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          background: rgba(30, 41, 59, 0.8);
        }

        .lernprozess-status {
          position: absolute;
          top: 15px;
          right: 15px;
          font-family: var(--font-mono);
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid;
        }

        .lernprozess-stat-ok {
          color: var(--color-success);
          border-color: var(--color-success);
          background: rgba(74, 222, 128, 0.1);
        }

        .lernprozess-stat-warn {
          color: var(--color-warn);
          border-color: var(--color-warn);
          background: rgba(251, 191, 36, 0.1);
        }

        .lernprozess-stat-crit {
          color: var(--color-alert);
          border-color: var(--color-alert);
          background: rgba(248, 113, 113, 0.1);
        }

        .lernprozess-l-title {
          font-weight: bold;
          font-size: 13px;
          color: var(--text-white);
          margin-bottom: 5px;
          display: block;
          text-transform: uppercase;
        }

        .lernprozess-l-desc {
          font-size: 12px;
          color: var(--text-mute);
          line-height: 1.5;
        }

        .lernprozess-anomaly-card {
          background: rgba(255, 0, 0, 0.05);
          border: 1px solid rgba(248, 113, 113, 0.3);
          border-left: 3px solid var(--color-alert);
          border-radius: 4px;
          padding: 15px;
          margin-bottom: 15px;
          transition: all 0.3s;
        }

        .lernprozess-anomaly-card:hover {
          background: rgba(255, 0, 0, 0.1);
          box-shadow: 0 0 20px rgba(248, 113, 113, 0.15);
        }

        .lernprozess-ac-head {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--color-alert);
        }

        .lernprozess-ac-body {
          display: flex;
          gap: 20px;
          font-size: 12px;
        }

        .lernprozess-ac-problem {
          flex: 1;
          border-right: 1px solid rgba(255,255,255,0.1);
          padding-right: 15px;
          color: var(--text-mute);
        }

        .lernprozess-ac-fix {
          flex: 1;
          color: var(--text-white);
        }

        .lernprozess-ac-fix strong {
          color: var(--cyan-glow);
        }

        .lernprozess-warning-box {
          border: 1px dashed var(--color-warn);
          background: rgba(251, 191, 36, 0.05);
          padding: 20px;
          display: flex;
          gap: 15px;
          align-items: center;
          border-radius: 6px;
        }

        .lernprozess-warn-icon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lernprozess-warn-text {
          color: var(--text-white);
          font-size: 12px;
          line-height: 1.5;
          opacity: 0.9;
        }

        .lernprozess-leadership-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
        }

        .lernprozess-leader-step {
          display: flex;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s;
        }

        .lernprozess-leader-step:hover {
          border-color: var(--cyan-glow);
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.15);
          transform: scale(1.01);
        }

        .lernprozess-ls-num {
          background: rgba(34, 211, 238, 0.05);
          color: var(--cyan-glow);
          font-family: var(--font-mono);
          font-size: 24px;
          font-weight: bold;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid var(--glass-border);
        }

        .lernprozess-ls-content {
          padding: 15px;
          flex: 1;
        }

        .lernprozess-ls-head {
          font-weight: bold;
          color: var(--text-white);
          text-transform: uppercase;
          font-size: 13px;
          margin-bottom: 5px;
        }

        .lernprozess-ls-desc {
          font-size: 12px;
          color: var(--text-mute);
          margin-bottom: 10px;
        }

        .lernprozess-ls-badge {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--cyan-glow);
          border: 1px solid var(--cyan-dim);
          padding: 2px 6px;
          border-radius: 4px;
          display: inline-block;
        }

        .lernprozess-quote-box {
          text-align: center;
          font-style: italic;
          color: var(--text-white);
          padding: 20px;
          border-top: 1px solid var(--glass-border);
          margin-top: 20px;
          font-size: 14px;
          opacity: 0.8;
        }

        .lernprozess-timeline {
          position: relative;
          margin-top: 20px;
        }

        .lernprozess-tl-line {
          position: absolute;
          left: 19px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background: linear-gradient(to bottom, var(--cyan-glow), rgba(34, 211, 238, 0.1));
        }

        .lernprozess-tl-item {
          display: flex;
          margin-bottom: 20px;
          position: relative;
          transition: opacity 0.3s;
        }

        .lernprozess-tl-item:hover .lernprozess-tl-dot {
          box-shadow: 0 0 15px var(--cyan-glow);
          transform: scale(1.2);
          background: var(--cyan-glow);
        }

        .lernprozess-tl-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--bg-deep);
          border: 2px solid var(--cyan-glow);
          margin: 5px 15px 0 15px;
          z-index: 2;
          transition: all 0.3s;
        }

        .lernprozess-tl-content {
          flex: 1;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          padding: 15px;
          border-radius: 6px;
          backdrop-filter: blur(5px);
        }

        .lernprozess-tl-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
        }

        .lernprozess-tl-title {
          font-weight: bold;
          color: var(--text-white);
          font-size: 13px;
        }

        .lernprozess-tl-time {
          font-family: var(--font-mono);
          color: var(--cyan-glow);
          font-size: 11px;
        }

        .lernprozess-tl-text {
          font-size: 12px;
          color: var(--text-mute);
        }

        .lernprozess-cta-box {
          margin-top: 40px;
          text-align: center;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(34, 211, 238, 0.1) 100%);
          border: 1px solid var(--cyan-dim);
          padding: 30px;
          border-radius: 8px;
        }

        .lernprozess-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--cyan-glow);
          color: #000;
          text-decoration: none;
          padding: 12px 25px;
          font-weight: bold;
          border-radius: 4px;
          transition: all 0.2s;
          margin-right: 15px;
          font-size: 13px;
        }

        .lernprozess-cta-btn:hover {
          background: white;
          box-shadow: 0 0 20px var(--cyan-glow);
        }

        .lernprozess-cta-sub {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--text-white);
          text-decoration: none;
          border: 1px solid var(--text-mute);
          padding: 12px 25px;
          font-weight: bold;
          border-radius: 4px;
          font-size: 13px;
          transition: all 0.2s;
        }

        .lernprozess-cta-sub:hover {
          border-color: white;
          background: rgba(255,255,255,0.1);
        }

        .lernprozess-footer {
          margin-top: 30px;
          border-top: 1px solid var(--glass-border);
          padding-top: 20px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-mute);
          display: flex;
          justify-content: space-between;
        }

        .lernprozess-footer a {
          color: var(--text-mute);
          text-decoration: none;
          transition: color 0.2s;
        }

        .lernprozess-footer a:hover {
          color: var(--cyan-glow);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .lernprozess-sidebar {
            display: none;
          }

          .lernprozess-sheet {
            max-width: 100%;
          }

          .lernprozess-main {
            padding: 8mm 5mm;
            gap: 12mm;
          }

          .lernprozess-h1 {
            font-size: 28px;
          }

          .lernprozess-sub-headline {
            font-size: 14px;
            margin-bottom: 20px;
          }

          .lernprozess-intro-lead {
            font-size: 13px;
            padding-left: 15px;
          }

          .lernprozess-layers-grid {
            grid-template-columns: 1fr;
          }

          .lernprozess-ac-body {
            flex-direction: column;
            gap: 10px;
          }

          .lernprozess-ac-problem {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-right: 0;
            padding-bottom: 10px;
          }

          .lernprozess-warning-box {
            flex-direction: column;
            text-align: center;
          }

          .lernprozess-leader-step {
            flex-direction: column;
          }

          .lernprozess-ls-num {
            border-right: none;
            border-bottom: 1px solid var(--glass-border);
            padding: 10px;
          }

          .lernprozess-tl-header {
            flex-direction: column;
            gap: 5px;
          }

          .lernprozess-cta-box {
            padding: 20px;
          }

          .lernprozess-cta-btn,
          .lernprozess-cta-sub {
            display: flex;
            justify-content: center;
            margin: 10px 0;
            width: 100%;
          }

          .lernprozess-footer {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }
      `}</style>

      <div className="lernprozess-page">
        <div className="lernprozess-sonar-grid"></div>
        <div className="lernprozess-particulate"></div>

        <div className="lernprozess-sheet">
          {/* Sidebar */}
          <div className="lernprozess-sidebar">
            <div className="lernprozess-logo-area">
              <a href="/" className="lernprozess-sonar-logo">
                <div className="lernprozess-pulse-ring"></div>
              </a>
              <div className="lernprozess-brand-name">SONARIS</div>
              <div className="lernprozess-brand-sub">SYSTEM TIEFE</div>
            </div>

            <div className="lernprozess-depth-track">
              <div 
                className="lernprozess-depth-marker" 
                style={{ top: depthPositions[activeDepth] }}
              ></div>
              {depthLabels.map((label, index) => (
                <div
                  key={index}
                  className={`lernprozess-depth-label ${activeDepth === index ? 'active' : ''}`}
                  style={{ top: depthPositions[index] }}
                  onClick={() => scrollToSection(index)}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lernprozess-main">
            {/* Section 1: Intro */}
            <div 
              ref={el => sectionRefs.current[0] = el} 
              data-index="0"
            >
              <h1 className="lernprozess-h1">KI als <strong>sozialer Lernprozess.</strong></h1>
              <div className="lernprozess-sub-headline">Strategische Diagnose für den deutschen Mittelstand</div>
              
              <div className="lernprozess-intro-lead">
                <strong>Reality Check:</strong><br/>
                Die Technik ist bereit. Modelle (GPT-4, Claude) sind verfügbar. 
                Dennoch scheitern 90% der KI-Initiativen im "Dauer-Pilotstatus".
                <br/><br/>
                Unsere Diagnose: Sie behandeln KI als IT-Projekt. 
                Erfolgreiche Transformation erfordert jedoch einen <strong>sozialen Lernprozess</strong>.
                Wir schließen die Lücke zwischen technischer Möglichkeit und organisatorischer Realität.
              </div>

              <div className="lernprozess-system-note">
                <span>* PROTOKOLL:</span> Das folgende 180-Tage-Programm ist das Minimal-Setup für eine DSGVO-konforme, nachhaltige Integration.
              </div>
            </div>

            {/* Section 2: Layers */}
            <div 
              ref={el => sectionRefs.current[1] = el} 
              data-index="1"
            >
              <span className="lernprozess-section-header">&gt;&gt; SYSTEM LAYER INSPECTION</span>
              <div className="lernprozess-layers-grid">
                <div className="lernprozess-layer-card">
                  <span className="lernprozess-status lernprozess-stat-ok">READY</span>
                  <span className="lernprozess-l-title">TECHNIK</span>
                  <div className="lernprozess-l-desc"><strong>SONARIS Hub.</strong> Zentrale Plattform statt Tool-Chaos. DSGVO-konform (Langdock). Hosting auf EU-Servern. Die Infrastruktur ist gelöst.</div>
                </div>
                <div className="lernprozess-layer-card">
                  <span className="lernprozess-status lernprozess-stat-warn">TRAIN</span>
                  <span className="lernprozess-l-title">INDIVIDUUM</span>
                  <div className="lernprozess-l-desc"><strong>Kompetenz-Gap.</strong> Mitarbeiter schwanken zwischen Faszination und Angst ("Black Box"). Es fehlt die "KI-Führerschein"-Routine.</div>
                </div>
                <div className="lernprozess-layer-card">
                  <span className="lernprozess-status lernprozess-stat-warn">ADAPT</span>
                  <span className="lernprozess-l-title">ORGANISATION</span>
                  <div className="lernprozess-l-desc"><strong>Governance Latency.</strong> Prozesse sind starr. Gremien entscheiden langsamer als die KI lernt. Es fehlen "Schnellboot"-Prozesse.</div>
                </div>
                <div className="lernprozess-layer-card">
                  <span className="lernprozess-status lernprozess-stat-crit">CRIT</span>
                  <span className="lernprozess-l-title">KULTUR</span>
                  <div className="lernprozess-l-desc"><strong>German Factor.</strong> Der Perfektionsanspruch ("Knapp daneben ist auch vorbei") blockiert probabilistische (lernende) Systeme.</div>
                </div>
              </div>
            </div>

            {/* Section 3: Anomalies */}
            <div 
              ref={el => sectionRefs.current[2] = el} 
              data-index="2"
            >
              <span className="lernprozess-section-header">&gt;&gt; ANOMALY DETECTION: BLOCKER</span>
              
              <div className="lernprozess-anomaly-card">
                <div className="lernprozess-ac-head">
                  <span>DETECTED: PERFECTIONISM_LOOP</span>
                  <span>IMPACT: HIGH</span>
                </div>
                <div className="lernprozess-ac-body">
                  <div className="lernprozess-ac-problem">Wir warten auf 100% Fehlerfreiheit vor dem Go-Live. KI lernt aber nur durch Interaktion im Betrieb.</div>
                  <div className="lernprozess-ac-fix">Lösung: <strong>Mut zur "Beta-Phase".</strong> Geschützte Räume für Fehler schaffen, statt Fehler zu verbieten.</div>
                </div>
              </div>

              <div className="lernprozess-anomaly-card">
                <div className="lernprozess-ac-head">
                  <span>DETECTED: TOOL_FOCUS_SYNDROME</span>
                  <span>IMPACT: MEDIUM</span>
                </div>
                <div className="lernprozess-ac-body">
                  <div className="lernprozess-ac-problem">Fokus auf "Welches Tool ist das beste?" statt "Wie arbeiten wir damit?".</div>
                  <div className="lernprozess-ac-fix">Lösung: <strong>Use-Case First.</strong> Konkrete Probleme lösen, Technologie folgt der Funktion.</div>
                </div>
              </div>

              <div className="lernprozess-warning-box">
                <div className="lernprozess-warn-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fbbf24" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div className="lernprozess-warn-text">
                  <strong>Kulturelle Prägung ist Realität.</strong> Erfolgreiche Einführung ignoriert deutsche Skepsis nicht, sondern integriert sie durch Sicherheit (DSGVO) und klare Governance.
                </div>
              </div>
            </div>

            {/* Section 4: Leadership */}
            <div 
              ref={el => sectionRefs.current[3] = el} 
              data-index="3"
            >
              <span className="lernprozess-section-header">&gt;&gt; LEADERSHIP MIGRATION PROTOCOL</span>
              
              <div className="lernprozess-leadership-grid">
                <div className="lernprozess-leader-step">
                  <div className="lernprozess-ls-num">01</div>
                  <div className="lernprozess-ls-content">
                    <div className="lernprozess-ls-head">Rahmen setzen</div>
                    <div className="lernprozess-ls-desc">Klare Leitplanken statt Mikromanagement. Definition von "No-Go-Areas" (Personaldaten) und "Go-Areas" (Marketing-Entwürfe).</div>
                    <div className="lernprozess-ls-badge">SONARIS: GOVERNANCE WORKSHOP</div>
                  </div>
                </div>
                
                <div className="lernprozess-leader-step">
                  <div className="lernprozess-ls-num">02</div>
                  <div className="lernprozess-ls-content">
                    <div className="lernprozess-ls-head">Lernräume schaffen</div>
                    <div className="lernprozess-ls-desc">Ressourcen für Experimente bereitstellen. Akzeptanz, dass Produktivität in der Lernphase ("Tal der Tränen") kurzfristig sinkt.</div>
                    <div className="lernprozess-ls-badge">SONARIS: USE-CASE-SPRINTS</div>
                  </div>
                </div>

                <div className="lernprozess-leader-step">
                  <div className="lernprozess-ls-num">03</div>
                  <div className="lernprozess-ls-content">
                    <div className="lernprozess-ls-head">Vom Dolmetscher zum Native</div>
                    <div className="lernprozess-ls-desc">Entwicklung nach der KI-Dolmetscher-Methode: Erst Chatten (Vokabeln), dann Assistieren (Sätze), schließlich Workflows (Fließend).</div>
                    <div className="lernprozess-ls-badge">SONARIS: FÜHRUNGSKRÄFTE-TRAINING</div>
                  </div>
                </div>
              </div>

              <div className="lernprozess-quote-box">
                "Führung in der KI-Einführung heißt nicht Antworten haben, sondern Räume schaffen, in denen Antworten entstehen können."
              </div>
            </div>

            {/* Section 5: Timeline */}
            <div 
              ref={el => sectionRefs.current[4] = el} 
              data-index="4"
            >
              <span className="lernprozess-section-header">&gt;&gt; INITIATING 180-DAY PROTOCOL</span>
              
              <div className="lernprozess-timeline">
                <div className="lernprozess-tl-line"></div>
                
                <div className="lernprozess-tl-item">
                  <div className="lernprozess-tl-dot"></div>
                  <div className="lernprozess-tl-content">
                    <div className="lernprozess-tl-header">
                      <span className="lernprozess-tl-title">FUNDAMENT & SETUP</span>
                      <span className="lernprozess-tl-time">TAG 01-30</span>
                    </div>
                    <div className="lernprozess-tl-text"><strong>Enterprise KI Hub (Langdock).</strong> Technisches Onboarding, DSGVO-Settings, Provider-Routing (EU/US). Ergebnis: Sichere Umgebung steht.</div>
                  </div>
                </div>

                <div className="lernprozess-tl-item">
                  <div className="lernprozess-tl-dot"></div>
                  <div className="lernprozess-tl-content">
                    <div className="lernprozess-tl-header">
                      <span className="lernprozess-tl-title">LERNRAUM & PILOTEN</span>
                      <span className="lernprozess-tl-time">TAG 31-90</span>
                    </div>
                    <div className="lernprozess-tl-text"><strong>Erfahrungswerte sammeln.</strong> 3 definierte Use Cases. Begleitete "Flight School". Fehler gemeinsam analysieren statt sanktionieren.</div>
                  </div>
                </div>

                <div className="lernprozess-tl-item">
                  <div className="lernprozess-tl-dot"></div>
                  <div className="lernprozess-tl-content">
                    <div className="lernprozess-tl-header">
                      <span className="lernprozess-tl-title">ROUTINE & SKALIERUNG</span>
                      <span className="lernprozess-tl-time">TAG 91-180</span>
                    </div>
                    <div className="lernprozess-tl-text"><strong>Integration.</strong> Aus Experimenten werden Standard-Prozesse. Aufbau der internen Prompt-Bibliothek. Ongoing Partnership.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="lernprozess-cta-box">
              <div style={{ marginBottom: '20px', fontSize: '14px', color: 'white' }}>
                Starte jetzt die Transformation zur lernenden Organisation.
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <a href="mailto:oliver@sonaris.de" className="lernprozess-cta-btn">✉️ E-MAIL SENDEN</a>
                <a href="https://meetings-eu1.hubspot.com/oliver-andrees/meeting-link-" target="_blank" rel="noopener noreferrer" className="lernprozess-cta-sub">📅 VIRTUELLEN ESPRESSO BUCHEN</a>
              </div>
              <div style={{ marginTop: '20px', fontSize: '10px', color: 'var(--text-mute)', fontFamily: 'var(--font-mono)' }}>
                OLIVER ANDREES // KONTAKTARCHITEKT @ SONARIS<br/>
                DIRECT LINE: +49 30 120 877 14
              </div>
            </div>

            <div className="lernprozess-footer">
              <span>SONARIS AI CONSULTING</span>
              <a href="/impressum">IMPRESSUM</a>
              <span>SYSTEM DIAGNOSTIC COMPLETE</span>
            </div>
          </div>
        </div>

        {/* Chatbot Toggler */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="fixed bottom-4 md:bottom-[30px] right-4 md:right-[50px] w-12 h-12 md:w-[70px] md:h-[70px] rounded-full bg-[#1e293b] border-2 border-[#22d3ee] shadow-[0_0_20px_rgba(34,211,238,0.2)] flex items-center justify-center cursor-pointer transition-all duration-300 z-[9999] hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] touch-manipulation"
        >
          {chatOpen ? <X className="w-5 h-5 md:w-6 md:h-6 text-[#22d3ee]" /> : <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#22d3ee]" />}
        </button>
        
        {/* Chat Window */}
        <div className={`fixed left-3 right-3 md:left-auto md:right-[50px] bottom-[72px] md:bottom-[110px] md:w-[400px] h-[280px] md:h-[550px] max-h-[60vh] md:max-h-[70vh] bg-[rgba(30,41,59,0.98)] backdrop-blur-[10px] border border-[rgba(34,211,238,0.3)] rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5),0_0_10px_rgba(34,211,238,0.1)] overflow-hidden flex flex-col z-[9999] transition-all duration-300 touch-manipulation ${chatOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-5 scale-95 pointer-events-none'}`}>
          <div className="bg-[rgba(255,255,255,0.03)] px-3 md:px-5 py-2.5 md:py-4 flex items-center justify-between border-b border-[rgba(34,211,238,0.3)] shrink-0">
            <h2 className="text-[#f8fafc] text-sm md:text-[1.1rem] font-semibold m-0 tracking-[0.5px]">SONARIS Assistant</h2>
            <button onClick={() => setChatOpen(false)} className="text-[#22d3ee] cursor-pointer text-xl md:text-2xl transition-colors duration-200 hover:text-white bg-transparent border-none touch-manipulation p-1">
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
          <div className="flex-1 p-3 md:p-5 overflow-y-auto flex flex-col gap-2 md:gap-[15px] overscroll-contain">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`max-w-[88%] md:max-w-[80%] p-2 md:p-3 px-2.5 md:px-4 rounded-xl text-xs md:text-[0.95rem] leading-[1.4] md:leading-[1.5] whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'self-end bg-[#22d3ee] text-[#020617] font-medium shadow-[0_0_15px_rgba(34,211,238,0.2)] rounded-br-sm' 
                    : 'self-start bg-[rgba(255,255,255,0.05)] text-[#f8fafc] border border-[rgba(255,255,255,0.1)] rounded-bl-sm'
                }`}
              >
                {renderMessageContent(msg.content)}
              </div>
            ))}
            {isLoading && (
              <div className="self-start flex items-center gap-2 text-[#94a3b8] text-xs md:text-sm">
                <Loader2 className="w-3 h-3 md:w-4 md:h-4 animate-spin" />
                <span>Denkt nach...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-2.5 md:p-[15px_20px] border-t border-[rgba(34,211,238,0.3)] flex gap-2 md:gap-2.5 bg-[rgba(0,0,0,0.2)] shrink-0">
            <input 
              type="text"
              placeholder="Schreibe eine Nachricht..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isLoading}
              className="flex-1 bg-transparent border-none outline-none text-[#f8fafc] text-xs md:text-[0.95rem] h-6 p-0 placeholder:text-[rgba(255,255,255,0.3)] disabled:opacity-50"
              style={{ fontSize: '16px' }}
            />
            <button 
              onClick={sendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="bg-transparent border-none outline-none text-[#22d3ee] cursor-pointer text-lg md:text-xl transition-transform duration-200 p-1 flex items-center hover:translate-x-[3px] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 touch-manipulation"
            >
              {isLoading ? <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" /> : <Send className="w-4 h-4 md:w-5 md:h-5" />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default KiAlsLernprozess;
