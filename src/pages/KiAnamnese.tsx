import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Send, X, Loader2, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

type Message = { role: 'user' | 'assistant'; content: string };

// Helper function to render text with clickable links
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

const KiAnamnese = () => {
  const [activeDepth, setActiveDepth] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Willkommen, ich bin dein persönlicher KI-Assistent für den CEO AI Accelerator. Übrigens: Diese Unterhaltung wird nicht gespeichert. Lass uns jetzt gemeinsam herausfinden, wo du mit deinen KI-Initiativen stehst.\n\nWas ist deine Rolle im Unternehmen?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const depthLabels = [
    { id: 'start', label: 'START', position: '5%' },
    { id: 'status', label: 'STATUS', position: '25%' },
    { id: 'scan', label: 'SCAN', position: '50%' },
    { id: 'ablauf', label: 'ABLAUF', position: '70%' },
    { id: 'potenzial', label: 'POTENZIAL', position: '95%' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
        .ki-anamnese-page {
          --bg-deep: #020617;
          --glass-bg: rgba(15, 23, 42, 0.7);
          --glass-border: rgba(34, 211, 238, 0.2);
          --cyan-glow: #22d3ee;
          --cyan-dim: #0891b2;
          --color-warn: #fbbf24;
          --color-offline: #64748b;
          --color-safe: #10b981;
          --text-white: #f8fafc;
          --text-mute: #94a3b8;
          --font-ui: 'Segoe UI', Inter, Helvetica, Arial, sans-serif;
          --font-mono: 'Courier New', monospace;
          --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
          --sidebar-width: 180px;
        }

        .ki-anamnese-page {
          font-family: var(--font-ui);
          background-color: #000;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .ki-anamnese-page .sheet {
          width: 100%;
          min-height: 100vh;
          background-color: var(--bg-deep);
          background-image: radial-gradient(circle at 80% 10%, #1e293b 0%, var(--bg-deep) 60%);
          color: var(--text-white);
          position: relative;
        }

        .ki-anamnese-page .sonar-grid {
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

        .ki-anamnese-page .particulate {
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

        .ki-anamnese-page .sidebar {
          width: var(--sidebar-width);
          background: rgba(2, 6, 23, 0.95);
          border-right: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
          padding-top: 60px;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          height: 100vh;
          z-index: 100;
          backdrop-filter: blur(10px);
          overflow-y: auto;
        }

        .ki-anamnese-page .logo-area {
          text-align: center;
          margin-bottom: 60px;
          padding: 0 10px;
          flex-shrink: 0;
        }

        .ki-anamnese-page .sonar-logo {
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
        }

        .ki-anamnese-page .sonar-logo::after {
          content: '';
          width: 6px;
          height: 6px;
          background: var(--cyan-glow);
          border-radius: 50%;
        }

        .ki-anamnese-page .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid var(--cyan-glow);
          border-radius: 50%;
          opacity: 0;
          animation: ki-anamnese-ripple 3s infinite;
        }

        @keyframes ki-anamnese-ripple {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        .ki-anamnese-page .brand-name {
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 2px;
          color: white;
          margin-bottom: 2px;
        }

        .ki-anamnese-page .brand-sub {
          font-size: 9px;
          color: var(--cyan-glow);
          letter-spacing: 1px;
          font-family: var(--font-mono);
        }

        .ki-anamnese-page .depth-track-container {
          flex: 1;
          position: relative;
          margin-left: 90px;
          border-left: 1px solid rgba(255,255,255,0.1);
        }

        .ki-anamnese-page .depth-marker {
          position: absolute;
          left: -5px;
          transition: top 0.6s var(--ease-out);
          width: 9px;
          height: 9px;
          background: var(--cyan-glow);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--cyan-glow);
        }

        .ki-anamnese-page .depth-label {
          position: absolute;
          left: 15px;
          transform: translateY(-50%);
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--cyan-glow);
          transition: all 0.3s;
          opacity: 0.4;
        }

        .ki-anamnese-page .depth-label.active {
          opacity: 1;
          font-weight: bold;
          text-shadow: 0 0 10px var(--cyan-glow);
          font-size: 11px;
        }

        .ki-anamnese-page .main-content {
          margin-left: var(--sidebar-width);
          width: calc(100% - var(--sidebar-width));
          padding: 60px 80px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 80px;
          box-sizing: border-box;
        }

        .ki-anamnese-page h1 {
          font-weight: 300;
          font-size: 42px;
          margin: 0 0 10px 0;
          line-height: 1.1;
          color: var(--text-white);
        }

        .ki-anamnese-page h1 strong {
          color: var(--cyan-glow);
          font-weight: 700;
          text-shadow: 0 0 30px rgba(34, 211, 238, 0.2);
        }

        .ki-anamnese-page .sub-headline {
          font-size: 18px;
          color: var(--text-mute);
          margin-bottom: 30px;
          font-weight: 400;
        }

        .ki-anamnese-page .intro-lead {
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

        .ki-anamnese-page .section-header {
          font-family: var(--font-mono);
          color: var(--cyan-glow);
          font-size: 11px;
          letter-spacing: 1px;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 10px;
          margin-bottom: 20px;
          display: block;
        }

        .ki-anamnese-page .evolution-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 15px;
          position: relative;
          margin-top: 20px;
        }

        .ki-anamnese-page .evo-line {
          position: absolute;
          top: 40px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: linear-gradient(to right, var(--color-offline), var(--color-warn), var(--color-safe));
          z-index: 0;
          opacity: 0.3;
        }

        .ki-anamnese-page .evo-card {
          background: var(--glass-bg);
          border: 1px solid;
          border-radius: 8px;
          padding: 20px 15px;
          position: relative;
          z-index: 2;
          backdrop-filter: blur(5px);
          transition: all 0.3s;
          cursor: default;
          min-height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .ki-anamnese-page .entry-point {
          margin-top: auto;
          padding-top: 15px;
          border-top: 1px dashed rgba(255,255,255,0.2);
          font-size: 10px;
          color: var(--text-white);
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s;
        }

        .ki-anamnese-page .entry-point strong {
          display: block;
          color: var(--cyan-glow);
          margin-bottom: 3px;
        }

        .ki-anamnese-page .evo-card:hover .entry-point {
          opacity: 1;
          transform: translateY(0);
        }

        .ki-anamnese-page .evo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .ki-anamnese-page .evo-1 {
          border-color: var(--color-offline);
          opacity: 0.8;
        }

        .ki-anamnese-page .evo-1 .e-head {
          color: var(--color-offline);
        }

        .ki-anamnese-page .evo-1:hover {
          opacity: 1;
          border-color: var(--text-white);
        }

        .ki-anamnese-page .evo-2 {
          border-color: var(--color-warn);
        }

        .ki-anamnese-page .evo-2 .e-head {
          color: var(--color-warn);
        }

        .ki-anamnese-page .evo-2:hover {
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.2);
        }

        .ki-anamnese-page .evo-3 {
          border-color: var(--color-safe);
        }

        .ki-anamnese-page .evo-3 .e-head {
          color: var(--color-safe);
        }

        .ki-anamnese-page .evo-3:hover {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
        }

        .ki-anamnese-page .e-head {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .ki-anamnese-page .e-title {
          font-weight: bold;
          font-size: 13px;
          color: white;
          margin-bottom: 5px;
        }

        .ki-anamnese-page .e-desc {
          font-size: 11px;
          color: var(--text-mute);
          line-height: 1.4;
          margin-bottom: 10px;
        }

        .ki-anamnese-page .e-status {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: bold;
        }

        .ki-anamnese-page .scan-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
        }

        .ki-anamnese-page .scan-card {
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--glass-border);
          padding: 20px;
          border-radius: 6px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
        }

        .ki-anamnese-page .scan-card:hover {
          border-color: var(--cyan-glow);
          background: rgba(34, 211, 238, 0.05);
        }

        .ki-anamnese-page .s-visual {
          height: 50px;
          width: 100%;
          margin-bottom: 15px;
          position: relative;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .ki-anamnese-page .wf-chip {
          width: 30px;
          height: 30px;
          border: 1px solid var(--cyan-glow);
          position: absolute;
          top: 10px;
          left: 0;
          box-shadow: 0 0 5px var(--cyan-glow);
        }

        .ki-anamnese-page .wf-chip::after {
          content: '';
          position: absolute;
          top: 5px;
          left: 5px;
          width: 18px;
          height: 18px;
          border: 1px dashed var(--cyan-dim);
        }

        .ki-anamnese-page .wf-finger {
          width: 30px;
          height: 30px;
          border: 1px solid var(--color-warn);
          border-radius: 50%;
          position: absolute;
          top: 10px;
          left: 0;
        }

        .ki-anamnese-page .wf-finger::after {
          content: '';
          position: absolute;
          top: 5px;
          left: 5px;
          width: 18px;
          height: 18px;
          border: 1px solid var(--color-warn);
          border-radius: 50%;
          opacity: 0.5;
        }

        .ki-anamnese-page .wf-shield {
          width: 26px;
          height: 32px;
          border: 1px solid var(--color-safe);
          position: absolute;
          top: 5px;
          left: 0;
          border-radius: 0 0 13px 13px;
        }

        .ki-anamnese-page .wf-shield::after {
          content: '';
          position: absolute;
          top: 5px;
          left: 5px;
          width: 14px;
          height: 10px;
          border: 1px solid var(--color-safe);
        }

        .ki-anamnese-page .s-title {
          font-weight: bold;
          font-size: 13px;
          color: white;
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        .ki-anamnese-page .s-method {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--cyan-dim);
          margin-bottom: 8px;
          display: block;
        }

        .ki-anamnese-page .s-list {
          margin: 0;
          padding-left: 15px;
          font-size: 11px;
          color: var(--text-mute);
          line-height: 1.4;
        }

        .ki-anamnese-page .flow-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .ki-anamnese-page .flow-item {
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 10px;
        }

        .ki-anamnese-page .fi-num {
          font-family: var(--font-mono);
          color: var(--cyan-glow);
          font-weight: bold;
          margin-right: 20px;
          font-size: 12px;
          width: 30px;
          height: 30px;
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ki-anamnese-page .fi-content strong {
          color: white;
          font-size: 13px;
          display: block;
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .ki-anamnese-page .fi-content span {
          color: var(--text-mute);
          font-size: 12px;
        }

        .ki-anamnese-page .roi-container {
          display: flex;
          gap: 40px;
          align-items: center;
          background: linear-gradient(90deg, rgba(16, 185, 129, 0.05) 0%, transparent 100%);
          border: 1px solid var(--color-safe);
          border-radius: 8px;
          padding: 20px;
        }

        .ki-anamnese-page .triangle-vis {
          width: 100px;
          height: 100px;
          position: relative;
          flex-shrink: 0;
        }

        .ki-anamnese-page .tri-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 5px var(--color-safe));
        }

        .ki-anamnese-page .roi-content h4 {
          margin: 0 0 5px 0;
          color: var(--color-safe);
          text-transform: uppercase;
          font-size: 13px;
        }

        .ki-anamnese-page .roi-content p {
          margin: 0;
          font-size: 12px;
          color: var(--text-mute);
          line-height: 1.5;
        }

        .ki-anamnese-page .facts-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: auto;
          padding-top: 30px;
          border-top: 1px solid var(--glass-border);
        }

        .ki-anamnese-page .fact-group {
          display: flex;
          gap: 40px;
        }

        .ki-anamnese-page .fact {
          display: flex;
          flex-direction: column;
        }

        .ki-anamnese-page .f-label {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--cyan-dim);
          margin-bottom: 2px;
        }

        .ki-anamnese-page .f-val {
          font-size: 18px;
          font-weight: bold;
          color: var(--text-white);
        }

        .ki-anamnese-page .f-sub {
          font-size: 9px;
          color: var(--text-mute);
          font-style: italic;
        }

        .ki-anamnese-page .cta-btn {
          background: var(--cyan-glow);
          color: #000;
          text-decoration: none;
          padding: 6px 12px;
          font-weight: bold;
          border-radius: 4px;
          font-size: 11px;
          transition: all 0.2s;
          display: inline-block;
          line-height: 1;
          box-shadow: 0 4px 10px rgba(34, 211, 238, 0.1);
        }

        .ki-anamnese-page .cta-btn:hover {
          background: white;
          box-shadow: 0 0 20px var(--cyan-glow);
          transform: translateY(-2px);
        }

        .ki-anamnese-page .footer-impressum {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid var(--glass-border);
          text-align: center;
        }

        .ki-anamnese-page .footer-impressum a {
          color: var(--text-mute);
          font-size: 11px;
          text-decoration: none;
          font-family: var(--font-mono);
        }

        .ki-anamnese-page .footer-impressum a:hover {
          color: var(--cyan-glow);
        }

        @media (max-width: 900px) {
          .ki-anamnese-page .sidebar {
            display: none;
          }
          .ki-anamnese-page .main-content {
            margin-left: 0;
            width: 100%;
            padding: 24px 16px;
            gap: 32px;
          }
          .ki-anamnese-page .evolution-container {
            grid-template-columns: 1fr;
          }
          .ki-anamnese-page .evo-line {
            display: none;
          }
          .ki-anamnese-page .scan-grid {
            grid-template-columns: 1fr;
          }
          .ki-anamnese-page h1 {
            font-size: 24px;
          }
          .ki-anamnese-page .sub-headline {
            font-size: 14px;
          }
          .ki-anamnese-page .intro-lead {
            font-size: 13px;
            padding-left: 12px;
          }
          .ki-anamnese-page .section-header {
            font-size: 10px;
          }
          .ki-anamnese-page .evo-card {
            min-height: 140px;
            padding: 16px 12px;
          }
          .ki-anamnese-page .e-title {
            font-size: 12px;
          }
          .ki-anamnese-page .e-desc {
            font-size: 10px;
          }
          .ki-anamnese-page .entry-point {
            opacity: 1;
            transform: translateY(0);
          }
          .ki-anamnese-page .scan-card {
            padding: 16px;
          }
          .ki-anamnese-page .s-title {
            font-size: 12px;
          }
          .ki-anamnese-page .s-list {
            font-size: 10px;
          }
          .ki-anamnese-page .flow-item {
            padding-bottom: 8px;
          }
          .ki-anamnese-page .fi-num {
            width: 26px;
            height: 26px;
            font-size: 10px;
            margin-right: 12px;
          }
          .ki-anamnese-page .fi-content strong {
            font-size: 11px;
          }
          .ki-anamnese-page .fi-content span {
            font-size: 10px;
          }
          .ki-anamnese-page .facts-bar {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }
          .ki-anamnese-page .fact-group {
            flex-direction: column;
            gap: 12px;
          }
          .ki-anamnese-page .f-val {
            font-size: 16px;
          }
          .ki-anamnese-page .roi-container {
            flex-direction: column;
            text-align: center;
            padding: 16px;
            gap: 20px;
          }
          .ki-anamnese-page .triangle-vis {
            width: 80px;
            height: 80px;
          }
          .ki-anamnese-page .roi-content h4 {
            font-size: 12px;
          }
          .ki-anamnese-page .roi-content p {
            font-size: 11px;
          }
        }

        @media (max-width: 480px) {
          .ki-anamnese-page .main-content {
            padding: 20px 12px;
            gap: 24px;
          }
          .ki-anamnese-page h1 {
            font-size: 20px;
          }
          .ki-anamnese-page .sub-headline {
            font-size: 12px;
            margin-bottom: 20px;
          }
        }
      `}</style>

      <div className="ki-anamnese-page">
        <div className="sonar-grid"></div>
        <div className="particulate"></div>

        <div className="sheet">
          {/* SIDEBAR */}
          <div className="sidebar">
            <div className="logo-area">
              <div className="sonar-logo">
                <div className="pulse-ring"></div>
              </div>
              <div className="brand-name">SONARIS</div>
              <div className="brand-sub">ANAMNESE</div>
            </div>
            <div className="depth-track-container">
              <div 
                className="depth-marker" 
                style={{ top: depthLabels[activeDepth].position }}
              ></div>
              {depthLabels.map((item, index) => (
                <div
                  key={item.id}
                  className={`depth-label ${activeDepth === index ? 'active' : ''}`}
                  style={{ top: item.position }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="main-content">
            {/* 1. INTRO */}
            <div className="section-intro" onMouseEnter={() => setActiveDepth(0)}>
              <h1>KI-Anamnese: <strong>Deine Ortung.</strong></h1>
              <div className="sub-headline">Bestandsaufnahme & Roadmap für den Mittelstand</div>
              <div className="intro-lead">
                Klarheit statt Vermutung. Wir liefern die exakten Koordinaten deines Unternehmens. 
                Eine strukturierte Diagnose des KI-Reifegrades als verlässliche Entscheidungsgrundlage.
              </div>
            </div>

            {/* 2. EVOLUTION (3-PHASEN) */}
            <div onMouseEnter={() => setActiveDepth(1)}>
              <span className="section-header">&gt;&gt; REIFEGRAD-ORTUNG & EINSTIEG</span>
              <div className="evolution-container">
                <div className="evo-line"></div>
                
                {/* Phase 1 */}
                <div className="evo-card evo-1">
                  <div>
                    <div className="e-head">PHASE 1</div>
                    <div className="e-title">Initiierung</div>
                    <div className="e-desc">Stillstand. KI findet nicht statt. Gefahr des Anschlussverlusts.</div>
                    <span className="e-status" style={{ color: 'var(--color-offline)' }}>OFFLINE</span>
                  </div>
                  <div className="entry-point">
                    <strong>SONARIS START:</strong><br/>Initialzündung & Setup
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="evo-card evo-2">
                  <div>
                    <div className="e-head">PHASE 2</div>
                    <div className="e-title">Anarchie</div>
                    <div className="e-desc">Wildwuchs. KI erledigt Arbeit (ungesteuert). Risiko durch Schatten-IT.</div>
                    <span className="e-status" style={{ color: 'var(--color-warn)' }}>UNGESTEUERT</span>
                  </div>
                  <div className="entry-point">
                    <strong>SONARIS START:</strong><br/>Konsolidierung & Sicherheit
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="evo-card evo-3">
                  <div>
                    <div className="e-head">PHASE 3</div>
                    <div className="e-title">Strukturierung</div>
                    <div className="e-desc">Zielbild. Governance & Sicherheit. Mensch & KI arbeiten Hand in Hand.</div>
                    <span className="e-status" style={{ color: 'var(--color-safe)' }}>HYBRIDER FLOW</span>
                  </div>
                  <div className="entry-point">
                    <strong>SONARIS START:</strong><br/>Skalierung & Deep Dive
                  </div>
                </div>
              </div>
            </div>

            {/* 3. DER SCAN */}
            <div onMouseEnter={() => setActiveDepth(2)}>
              <span className="section-header">&gt;&gt; 3-DIMENSIONALER TIEFEN-SCAN</span>
              <div className="scan-grid">
                {/* Tech Scan */}
                <div className="scan-card">
                  <div className="s-visual">
                    <div className="wf-chip"></div>
                  </div>
                  <div className="s-title">Tech-Scan</div>
                  <span className="s-method">METHODE: TECHNISCHE INVENTUR</span>
                  <ul className="s-list">
                    <li>Infrastruktur-Check</li>
                    <li>Datenzugang prüfen</li>
                    <li>Tool-Inventur</li>
                  </ul>
                </div>

                {/* People Scan */}
                <div className="scan-card">
                  <div className="s-visual">
                    <div className="wf-finger"></div>
                  </div>
                  <div className="s-title">People-Scan</div>
                  <span className="s-method">METHODE: INTERVIEWS</span>
                  <ul className="s-list">
                    <li>Kompetenz & Haltung</li>
                    <li>Ängste identifizieren</li>
                    <li>Prompting-Skills</li>
                  </ul>
                </div>

                {/* Legal Scan */}
                <div className="scan-card">
                  <div className="s-visual">
                    <div className="wf-shield"></div>
                  </div>
                  <div className="s-title">Legal-Scan</div>
                  <span className="s-method">METHODE: COMPLIANCE CHECK</span>
                  <ul className="s-list">
                    <li>Datenschutz-Status</li>
                    <li>Governance-Regeln</li>
                    <li>Risiko-Bewertung</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. ABLAUF */}
            <div onMouseEnter={() => setActiveDepth(3)}>
              <span className="section-header">&gt;&gt; ABLAUF</span>
              <div className="flow-list">
                <div className="flow-item">
                  <div className="fi-num">01</div>
                  <div className="fi-content">
                    <strong>Schriftliche Befragung</strong>
                    <span>Erste Datenerhebung im Team via Online-Tool.</span>
                  </div>
                </div>
                <div className="flow-item">
                  <div className="fi-num">02</div>
                  <div className="fi-content">
                    <strong>Deep Dive Interviews</strong>
                    <span>Persönliche Gespräche mit Key-Playern zur Tiefe der Nutzung.</span>
                  </div>
                </div>
                <div className="flow-item">
                  <div className="fi-num">03</div>
                  <div className="fi-content">
                    <strong>Analyse & Einordnung</strong>
                    <span>Auswertung aller Datenpunkte und Verortung im Phasenmodell.</span>
                  </div>
                </div>
                <div className="flow-item">
                  <div className="fi-num">04</div>
                  <div className="fi-content">
                    <strong>Ergebnis & Roadmap</strong>
                    <span>Präsentation der Findings und Übergabe der konkreten Handlungsempfehlung.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. OUTPUT & FACTS */}
            <div onMouseEnter={() => setActiveDepth(4)}>
              <span className="section-header">&gt;&gt; OUTPUT: DEINE POTENZIALE</span>
              
              <div className="roi-container">
                <div className="triangle-vis">
                  <svg viewBox="0 0 100 100" className="tri-svg">
                    <polygon points="50,15 85,85 15,85" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round"/>
                    <circle cx="50" cy="15" r="2" fill="#10b981"/>
                    <circle cx="85" cy="85" r="2" fill="#10b981"/>
                    <circle cx="15" cy="85" r="2" fill="#10b981"/>
                    <text x="50" y="60" fontFamily="Courier New" fontSize="6" fill="white" textAnchor="middle" fontWeight="bold" letterSpacing="1">POTENZIAL</text>
                    <text x="50" y="10" fontFamily="Courier New" fontSize="6" fill="#10b981" textAnchor="middle">QUALITÄT</text>
                    <text x="10" y="95" fontFamily="Courier New" fontSize="6" fill="#10b981" textAnchor="start">KOSTEN</text>
                    <text x="90" y="95" fontFamily="Courier New" fontSize="6" fill="#10b981" textAnchor="end">ZEIT</text>
                  </svg>
                </div>
                
                <div className="roi-content">
                  <h4>Klarheit für Entscheider</h4>
                  <p>Du erhältst eine konkrete Berechnung deiner Optimierungspotenziale. Wir balancieren Kosten, Qualität und Zeitersparnis für deinen Case.</p>
                </div>
              </div>

              {/* FOOTER FACTS */}
              <div className="facts-bar">
                <div className="fact-group">
                  <div className="fact">
                    <span className="f-label">INVESTITION (FESTPREIS)</span>
                    <span className="f-val">6.500 € *</span>
                    <span className="f-sub">*je nach Unternehmensgröße & Tiefe</span>
                  </div>
                  <div className="fact">
                    <span className="f-label">DURCHLAUFZEIT</span>
                    <span className="f-val">30 Tage</span>
                    <span className="f-sub">Effizienter Prozess</span>
                  </div>
                </div>
                
                <a 
                  href="https://meetings-eu1.hubspot.com/oliver-andrees/meeting-link-?uuid=55e61166-a55a-4de9-a31f-f964e507a90e" 
                  className="cta-btn" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  STARTEN
                </a>
              </div>
            </div>

            {/* IMPRESSUM LINK */}
            <div className="footer-impressum">
              <Link to="/impressum">Impressum</Link>
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

export default KiAnamnese;
