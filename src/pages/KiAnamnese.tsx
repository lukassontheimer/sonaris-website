import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Share2, X, Copy, Check } from "lucide-react";

const KiAnamnese = () => {
  const [activeDepth, setActiveDepth] = useState(0);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const pageUrl = typeof window !== "undefined" 
    ? `${window.location.origin}/ki-anamnese` 
    : "https://sonaris.de/ki-anamnese";

  const setDepth = (level: number) => {
    setActiveDepth(level);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const depthLabels = [
    { id: "surface", label: "SURFACE", position: "5%" },
    { id: "shallow", label: "SHALLOW", position: "25%" },
    { id: "mid", label: "MID", position: "50%" },
    { id: "deep", label: "DEEP", position: "70%" },
    { id: "core", label: "CORE", position: "95%" },
  ];

  return (
    <>
      <style>{`
        .anamnese-page {
          --bg-deep: #020617;
          --glass-bg: rgba(15, 23, 42, 0.65);
          --glass-border: rgba(34, 211, 238, 0.2);
          --cyan-glow: #22d3ee;
          --cyan-dim: #0891b2;
          --color-warn: #fbbf24;
          --color-offline: #64748b;
          --color-safe: #10b981;
          --color-safe-dim: #064e3b;
          --text-white: #f8fafc;
          --text-mute: #94a3b8;
          --font-ui: 'Segoe UI', Inter, Helvetica, Arial, sans-serif;
          --font-mono: 'Courier New', monospace;
          --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
        }

        .anamnese-page {
          font-family: var(--font-ui);
          background-color: #000;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .anamnese-page .sheet {
          width: 100%;
          max-width: 210mm;
          min-height: 100vh;
          background-color: var(--bg-deep);
          background-image: radial-gradient(circle at 80% 10%, #1e293b 0%, var(--bg-deep) 60%);
          color: var(--text-white);
          position: relative;
          box-shadow: 0 0 60px rgba(0,0,0,0.8);
          display: flex;
          flex-direction: row;
        }

        .anamnese-page .sonar-grid {
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

        .anamnese-page .particulate {
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

        .anamnese-page .sidebar {
          width: 50mm;
          background: rgba(2, 6, 23, 0.95);
          border-right: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
          padding-top: 15mm;
          position: relative;
          z-index: 10;
          backdrop-filter: blur(12px);
          align-self: stretch;
        }

        .anamnese-page .logo-area {
          text-align: center;
          margin-bottom: 15mm;
          padding: 0 10px;
        }

        .anamnese-page .sonar-logo {
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

        .anamnese-page .sonar-logo::after {
          content: '';
          width: 6px;
          height: 6px;
          background: var(--cyan-glow);
          border-radius: 50%;
        }

        .anamnese-page .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid var(--cyan-glow);
          border-radius: 50%;
          opacity: 0;
          animation: ripple 3s infinite;
        }

        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        .anamnese-page .brand-name {
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 2px;
          color: white;
          margin-bottom: 2px;
        }

        .anamnese-page .brand-sub {
          font-size: 9px;
          color: var(--cyan-glow);
          letter-spacing: 1px;
          font-family: var(--font-mono);
        }

        .anamnese-page .depth-track-container {
          flex: 1;
          position: relative;
          margin-left: 25mm;
          border-left: 1px solid rgba(255,255,255,0.1);
        }

        .anamnese-page .depth-marker {
          position: absolute;
          left: -5px;
          transition: top 0.6s var(--ease-out);
          width: 9px;
          height: 9px;
          background: var(--cyan-glow);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--cyan-glow);
        }

        .anamnese-page .depth-label {
          position: absolute;
          left: 15px;
          transform: translateY(-50%);
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--cyan-glow);
          transition: all 0.3s;
          opacity: 0.4;
        }

        .anamnese-page .depth-label.active {
          opacity: 1;
          font-weight: bold;
          text-shadow: 0 0 10px var(--cyan-glow);
          font-size: 11px;
        }

        .anamnese-page .main-content {
          flex: 1;
          padding: 15mm 25mm 25mm 25mm;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 22mm;
        }

        .anamnese-page h1 {
          font-weight: 300;
          font-size: 42px;
          margin: 0 0 10px 0;
          line-height: 1.1;
          color: var(--text-white);
        }

        .anamnese-page h1 strong {
          color: var(--cyan-glow);
          font-weight: 700;
          text-shadow: 0 0 30px rgba(34, 211, 238, 0.2);
        }

        .anamnese-page .sub-headline {
          font-size: 18px;
          color: var(--text-mute);
          margin-bottom: 30px;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        .anamnese-page .intro-lead {
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

        .anamnese-page .section-header {
          font-family: var(--font-mono);
          color: var(--cyan-glow);
          font-size: 11px;
          letter-spacing: 1px;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 10px;
          margin-bottom: 25px;
          display: block;
        }

        .anamnese-page .evolution-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
          position: relative;
          margin-top: 20px;
        }

        .anamnese-page .evo-line {
          position: absolute;
          top: 40px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: linear-gradient(to right, var(--color-offline), var(--color-warn), var(--cyan-glow));
          z-index: 0;
          opacity: 0.3;
        }

        .anamnese-page .evo-card {
          background: var(--glass-bg);
          border: 1px solid;
          border-radius: 8px;
          padding: 25px 20px;
          position: relative;
          z-index: 2;
          backdrop-filter: blur(5px);
          transition: all 0.3s;
          cursor: pointer;
          min-height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .anamnese-page .evo-card .entry-point {
          margin-top: auto;
          padding-top: 15px;
          border-top: 1px dashed rgba(255,255,255,0.2);
          font-size: 10px;
          color: var(--text-white);
          opacity: 0.5;
          transition: opacity 0.3s;
        }

        .anamnese-page .evo-card:hover .entry-point {
          opacity: 1;
        }

        .anamnese-page .evo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .anamnese-page .evo-1 { border-color: var(--color-offline); }
        .anamnese-page .evo-1 .e-head { color: var(--color-offline); }
        .anamnese-page .evo-2 { border-color: var(--color-warn); }
        .anamnese-page .evo-2 .e-head { color: var(--color-warn); }
        .anamnese-page .evo-3 { border-color: var(--cyan-glow); }
        .anamnese-page .evo-3 .e-head { color: var(--cyan-glow); }

        .anamnese-page .e-head {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .anamnese-page .e-title {
          font-weight: bold;
          font-size: 14px;
          color: white;
          margin-bottom: 8px;
        }

        .anamnese-page .e-desc {
          font-size: 12px;
          color: var(--text-mute);
          line-height: 1.5;
          margin-bottom: 15px;
        }

        .anamnese-page .e-status {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: bold;
          display: block;
          margin-bottom: 10px;
        }

        .anamnese-page .scan-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
        }

        .anamnese-page .scan-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--glass-border);
          padding: 25px;
          border-radius: 6px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
        }

        .anamnese-page .scan-card:hover {
          border-color: var(--cyan-glow);
          background: rgba(34, 211, 238, 0.05);
        }

        .anamnese-page .s-visual {
          height: 40px;
          width: 100%;
          margin-bottom: 20px;
          position: relative;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .anamnese-page .wf-chip {
          width: 24px;
          height: 24px;
          border: 1px solid var(--cyan-glow);
          position: absolute;
          top: 5px;
          left: 0;
          box-shadow: 0 0 5px var(--cyan-glow);
        }

        .anamnese-page .wf-chip::after {
          content: '';
          position: absolute;
          top: 4px;
          left: 4px;
          width: 14px;
          height: 14px;
          border: 1px dashed var(--cyan-dim);
        }

        .anamnese-page .wf-bio {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid var(--color-warn);
          position: absolute;
          top: 5px;
          left: 0;
        }

        .anamnese-page .wf-bio::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--color-warn);
        }

        .anamnese-page .wf-bio::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          height: 100%;
          width: 1px;
          background: var(--color-warn);
        }

        .anamnese-page .wf-shield {
          width: 22px;
          height: 26px;
          border: 1px solid var(--color-safe);
          position: absolute;
          top: 5px;
          left: 0;
          border-radius: 0 0 11px 11px;
        }

        .anamnese-page .wf-shield::after {
          content: '';
          position: absolute;
          top: 4px;
          left: 4px;
          width: 12px;
          height: 8px;
          border: 1px solid var(--color-safe);
        }

        .anamnese-page .s-title {
          font-weight: bold;
          font-size: 13px;
          color: white;
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        .anamnese-page .s-method {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--cyan-dim);
          margin-bottom: 10px;
          display: block;
        }

        .anamnese-page .s-list {
          margin: 0;
          padding-left: 15px;
          font-size: 12px;
          line-height: 1.6;
          color: var(--text-mute);
        }

        .anamnese-page .workflow-container {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          padding: 25px;
        }

        .anamnese-page .wf-row {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
          position: relative;
        }

        .anamnese-page .wf-row:last-child {
          margin-bottom: 0;
        }

        .anamnese-page .wf-row:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 15px;
          top: 35px;
          bottom: -25px;
          width: 1px;
          background: linear-gradient(to bottom, var(--cyan-dim), transparent);
        }

        .anamnese-page .wf-num {
          width: 30px;
          height: 30px;
          border: 1px solid var(--cyan-glow);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--cyan-glow);
          margin-right: 20px;
          flex-shrink: 0;
          background: var(--bg-deep);
          z-index: 2;
        }

        .anamnese-page .wf-content {
          flex: 1;
          padding-top: 5px;
        }

        .anamnese-page .wf-head {
          font-weight: bold;
          color: white;
          font-size: 13px;
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        .anamnese-page .wf-text {
          color: var(--text-mute);
          font-size: 13px;
          line-height: 1.5;
        }

        .anamnese-page .roi-container {
          display: flex;
          gap: 60px;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(90deg, var(--color-safe-dim) 0%, transparent 100%);
          border: 1px solid var(--color-safe);
          border-radius: 8px;
          padding: 35px;
        }

        .anamnese-page .triangle-vis {
          width: 160px;
          height: 160px;
          position: relative;
          flex-shrink: 0;
        }

        .anamnese-page .tri-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 2px var(--color-safe));
        }

        .anamnese-page .roi-content {
          flex: 1;
        }

        .anamnese-page .roi-content h4 {
          margin: 0 0 10px 0;
          color: var(--color-safe);
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 1px;
        }

        .anamnese-page .roi-content p {
          margin: 0;
          font-size: 13px;
          color: var(--text-mute);
          line-height: 1.6;
        }

        .anamnese-page .roi-badges {
          margin-top: 20px;
          display: flex;
          gap: 15px;
        }

        .anamnese-page .roi-badge {
          background: rgba(16, 185, 129, 0.1);
          color: var(--color-safe);
          padding: 6px 12px;
          font-size: 10px;
          border-radius: 4px;
          font-weight: bold;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .anamnese-page .facts-bar {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 60px;
          padding-top: 30px;
          border-top: 1px solid var(--glass-border);
        }

        .anamnese-page .fact-group {
          display: flex;
          gap: 50px;
        }

        .anamnese-page .fact {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .anamnese-page .f-label {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--cyan-dim);
          letter-spacing: 1px;
        }

        .anamnese-page .f-val {
          font-size: 20px;
          font-weight: bold;
          color: var(--text-white);
        }

        .anamnese-page .f-sub {
          font-size: 10px;
          color: var(--text-mute);
          font-style: italic;
        }

        .anamnese-page .cta-btn {
          background: var(--cyan-glow);
          color: #000;
          text-decoration: none;
          padding: 12px 30px;
          font-weight: bold;
          border-radius: 4px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .anamnese-page .cta-btn:hover {
          background: white;
          box-shadow: 0 0 20px var(--cyan-glow);
        }

        @media (max-width: 768px) {
          .anamnese-page .sidebar {
            display: none;
          }
          
          .anamnese-page .main-content {
            padding: 20px;
          }
          
          .anamnese-page .evolution-container,
          .anamnese-page .scan-grid {
            grid-template-columns: 1fr;
          }
          
          .anamnese-page .roi-container {
            flex-direction: column;
            gap: 30px;
          }
          
          .anamnese-page .facts-bar {
            flex-direction: column;
            gap: 30px;
            align-items: flex-start;
          }
          
          .anamnese-page .fact-group {
            flex-direction: column;
            gap: 20px;
          }
        }

        .anamnese-page .share-btn {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 100;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          backdrop-filter: blur(10px);
        }

        .anamnese-page .share-btn:hover {
          border-color: var(--cyan-glow);
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
        }

        .anamnese-page .share-btn svg {
          color: var(--cyan-glow);
        }

        .anamnese-page .share-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .anamnese-page .share-modal {
          background: var(--bg-deep);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          padding: 40px;
          max-width: 400px;
          width: 90%;
          text-align: center;
          position: relative;
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .anamnese-page .share-modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-mute);
          transition: color 0.2s;
        }

        .anamnese-page .share-modal-close:hover {
          color: white;
        }

        .anamnese-page .share-modal h3 {
          color: var(--cyan-glow);
          font-size: 14px;
          letter-spacing: 2px;
          margin: 0 0 30px 0;
          text-transform: uppercase;
        }

        .anamnese-page .qr-container {
          background: white;
          padding: 20px;
          border-radius: 8px;
          display: inline-block;
          margin-bottom: 25px;
        }

        .anamnese-page .share-url {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 6px;
          padding: 12px 15px;
        }

        .anamnese-page .share-url input {
          flex: 1;
          background: none;
          border: none;
          color: var(--text-white);
          font-family: var(--font-mono);
          font-size: 12px;
          outline: none;
        }

        .anamnese-page .copy-btn {
          background: var(--cyan-glow);
          border: none;
          border-radius: 4px;
          padding: 8px 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          color: #000;
          font-size: 11px;
          font-weight: bold;
          transition: all 0.2s;
        }

        .anamnese-page .copy-btn:hover {
          background: white;
        }

        .anamnese-page .copy-btn.copied {
          background: var(--color-safe);
        }
      `}</style>

      <div className="anamnese-page">
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
                  className={`depth-label ${activeDepth === index ? "active" : ""}`}
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
            <div className="section-intro" onMouseEnter={() => setDepth(0)}>
              <h1>
                KI-Anamnese: <strong>Deine Ortung.</strong>
              </h1>
              <div className="sub-headline">
                Bestandsaufnahme & Roadmap für den Mittelstand
              </div>

              <div className="intro-lead">
                Klarheit statt Vermutung. Wir liefern die exakten Koordinaten
                deines Unternehmens. Eine strukturierte Diagnose des
                KI-Reifegrades als verlässliche Entscheidungsgrundlage.
              </div>
            </div>

            {/* 2. EVOLUTION (3-PHASEN) */}
            <div onMouseEnter={() => setDepth(1)}>
              <span className="section-header">
                {">> REIFEGRAD-ORTUNG & EINSTIEG"}
              </span>
              <div className="evolution-container">
                <div className="evo-line"></div>

                {/* Phase 1 */}
                <div className="evo-card evo-1">
                  <div>
                    <div className="e-head">PHASE 1</div>
                    <div className="e-title">Initiierung</div>
                    <div className="e-desc">
                      Traditionelles Arbeiten. KI findet nicht statt. Gefahr des
                      Anschlussverlusts.
                    </div>
                    <span
                      className="e-status"
                      style={{ color: "var(--color-offline)" }}
                    >
                      OFFLINE
                    </span>
                  </div>
                  <div className="entry-point">
                    <strong>SONARIS EINSTIEG:</strong>
                    <br />
                    Initialzündung & Setup
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="evo-card evo-2">
                  <div>
                    <div className="e-head">PHASE 2</div>
                    <div className="e-title">Anarchie</div>
                    <div className="e-desc">
                      Wildwuchs. KI übernimmt Aufgaben (ungesteuert). Hohes
                      Risiko durch Schatten-IT.
                    </div>
                    <span
                      className="e-status"
                      style={{ color: "var(--color-warn)" }}
                    >
                      UNGESTEUERT
                    </span>
                  </div>
                  <div className="entry-point">
                    <strong>SONARIS EINSTIEG:</strong>
                    <br />
                    Konsolidierung & Sicherheit
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="evo-card evo-3">
                  <div>
                    <div className="e-head">PHASE 3</div>
                    <div className="e-title">Strukturierung</div>
                    <div className="e-desc">
                      Professionalisierung. Governance & Sicherheit. Mensch & KI
                      arbeiten Hand in Hand.
                    </div>
                    <span
                      className="e-status"
                      style={{
                        color: "var(--color-safe)",
                        border: "1px solid var(--color-safe)",
                      }}
                    >
                      HYBRIDER FLOW
                    </span>
                  </div>
                  <div className="entry-point">
                    <strong>SONARIS EINSTIEG:</strong>
                    <br />
                    Skalierung & Deep Dive
                  </div>
                </div>
              </div>
            </div>

            {/* 3. DER SCAN */}
            <div onMouseEnter={() => setDepth(2)}>
              <span className="section-header">
                {">> 3-DIMENSIONALER TIEFEN-SCAN"}
              </span>
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
                    <div className="wf-bio"></div>
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

            {/* 4. WORKFLOW */}
            <div onMouseEnter={() => setDepth(3)}>
              <span className="section-header">
                {">> ABLAUF DER UNTERSUCHUNG"}
              </span>
              <div className="workflow-container">
                <div className="wf-row">
                  <div className="wf-num">01</div>
                  <div className="wf-content">
                    <div className="wf-head">Schriftliche Befragung</div>
                    <div className="wf-text">
                      Erste Datenerhebung im Team via Online-Tool. Erfassung des
                      Status Quo.
                    </div>
                  </div>
                </div>

                <div className="wf-row">
                  <div className="wf-num">02</div>
                  <div className="wf-content">
                    <div className="wf-head">Deep Dive Interviews</div>
                    <div className="wf-text">
                      Persönliche Gespräche mit Key-Playern, um kulturelle
                      Blockaden zu finden.
                    </div>
                  </div>
                </div>

                <div className="wf-row">
                  <div className="wf-num">03</div>
                  <div className="wf-content">
                    <div className="wf-head">Analyse & Einordnung</div>
                    <div className="wf-text">
                      Auswertung aller Datenpunkte und Verortung im Phasenmodell.
                    </div>
                  </div>
                </div>

                <div className="wf-row">
                  <div className="wf-num">04</div>
                  <div className="wf-content">
                    <div className="wf-head">Ergebnis & Roadmap</div>
                    <div className="wf-text">
                      Präsentation der Findings und Übergabe der konkreten
                      Handlungsempfehlung.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. DELIVERABLES & FACTS */}
            <div onMouseEnter={() => setDepth(4)}>
              <span className="section-header">
                {">> OUTPUT: DEINE POTENZIALE"}
              </span>

              <div className="roi-container">
                {/* Triangle SVG */}
                <div className="triangle-vis">
                  <svg viewBox="0 0 100 100" className="tri-svg">
                    <polygon
                      points="50,5 95,95 5,95"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="0.8"
                      strokeLinejoin="round"
                    />
                    <circle cx="50" cy="5" r="1.5" fill="#10b981" />
                    <circle cx="95" cy="95" r="1.5" fill="#10b981" />
                    <circle cx="5" cy="95" r="1.5" fill="#10b981" />
                    <text
                      x="50"
                      y="65"
                      fontFamily="Courier New"
                      fontSize="6"
                      fill="#e0e0e0"
                      textAnchor="middle"
                      fontWeight="bold"
                      letterSpacing="1"
                    >
                      POTENZIAL
                    </text>
                    <text
                      x="50"
                      y="-2"
                      fontFamily="Courier New"
                      fontSize="6"
                      fill="#10b981"
                      textAnchor="middle"
                    >
                      QUALITÄT
                    </text>
                    <text
                      x="0"
                      y="105"
                      fontFamily="Courier New"
                      fontSize="6"
                      fill="#10b981"
                      textAnchor="start"
                    >
                      KOSTEN
                    </text>
                    <text
                      x="100"
                      y="105"
                      fontFamily="Courier New"
                      fontSize="6"
                      fill="#10b981"
                      textAnchor="end"
                    >
                      ZEIT
                    </text>
                  </svg>
                </div>

                <div className="roi-content">
                  <h4>Klarheit für Entscheider</h4>
                  <p>
                    Du erhältst eine konkrete Berechnung deiner
                    Optimierungspotenziale. Wir balancieren Kosten, Qualität und
                    Zeitersparnis für deinen Case.
                  </p>
                  <div className="roi-badges">
                    <span className="roi-badge">STATUS-BERICHT</span>
                    <span className="roi-badge">180-TAGE-FAHRPLAN</span>
                    <span className="roi-badge">ROI-ANALYSE</span>
                  </div>
                </div>
              </div>

              {/* FOOTER FACTS */}
              <div className="facts-bar">
                <div className="fact-group">
                  <div className="fact">
                    <span className="f-label">INVESTITION (FESTPREIS)</span>
                    <span className="f-val">6.500 € *</span>
                    <span className="f-sub">
                      *je nach Unternehmensgröße & Tiefe
                    </span>
                  </div>
                  <div className="fact">
                    <span className="f-label">DURCHLAUFZEIT</span>
                    <span className="f-val">ca. 4 Wochen</span>
                    <span className="f-sub">Effizienter Prozess</span>
                  </div>
                </div>

                <a href="mailto:oliver@sonaris.de" className="cta-btn">
                  <span>✉️</span> E-MAIL SENDEN
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Share Button */}
        <button 
          className="share-btn" 
          onClick={() => setShowShareModal(true)}
          title="Seite teilen"
        >
          <Share2 size={20} />
        </button>

        {/* Share Modal */}
        {showShareModal && (
          <div className="share-modal-overlay" onClick={() => setShowShareModal(false)}>
            <div className="share-modal" onClick={(e) => e.stopPropagation()}>
              <button className="share-modal-close" onClick={() => setShowShareModal(false)}>
                <X size={20} />
              </button>
              <h3>Seite teilen</h3>
              <div className="qr-container">
                <QRCodeSVG 
                  value={pageUrl} 
                  size={180}
                  level="H"
                  includeMargin={false}
                />
              </div>
              <div className="share-url">
                <input 
                  type="text" 
                  value={pageUrl} 
                  readOnly 
                />
                <button 
                  className={`copy-btn ${copied ? "copied" : ""}`}
                  onClick={copyToClipboard}
                >
                  {copied ? <><Check size={14} /> Kopiert</> : <><Copy size={14} /> Kopieren</>}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default KiAnamnese;
