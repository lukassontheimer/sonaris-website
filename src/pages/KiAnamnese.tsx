import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Share2, X, Copy, Check } from "lucide-react";

const KiAnamnese = () => {
  const [activeDepth, setActiveDepth] = useState(0);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const pageUrl = typeof window !== "undefined" 
    ? `${window.location.origin}/ki-anamnese` 
    : "https://sonaris.de/ki-anamnese";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const depthLabels = [
    { id: "surface", label: "SURFACE", position: "5%" },
    { id: "dash", label: "-10m", position: "15%" },
    { id: "scan", label: "-50m", position: "30%" },
    { id: "anom", label: "-100m", position: "50%" },
    { id: "lead", label: "-200m", position: "75%" },
    { id: "core", label: "CORE", position: "95%" },
  ];

  // Animate dashboard stats on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const statTech = document.getElementById('stat-tech');
      const statOrg = document.getElementById('stat-org');
      const statCult = document.getElementById('stat-cult');
      if (statTech) statTech.style.width = '100%';
      if (statOrg) statOrg.style.width = '40%';
      if (statCult) statCult.style.width = '20%';
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @page { size: A4; margin: 0; }
        
        :root {
          --bg-deep: #020617;
          --glass-bg: rgba(15, 23, 42, 0.7);
          --glass-border: rgba(34, 211, 238, 0.2);
          --cyan-glow: #22d3ee;
          --cyan-dim: #0891b2;
          --color-warn: #fbbf24;
          --color-alert: #f87171;
          --color-safe: #4ade80;
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
          overflow-x: hidden;
        }

        .anamnese-page .sheet {
          width: 100%;
          max-width: 210mm;
          min-height: 100vh;
          background-color: var(--bg-deep);
          background-image: radial-gradient(circle at 70% 0%, #1e293b 0%, var(--bg-deep) 60%);
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
          transition: top 0.5s var(--ease-out);
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
          padding: 15mm 20mm;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 15mm;
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

        .anamnese-page .system-note {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-mute);
          padding: 12px;
          border: 1px dashed rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }

        .anamnese-page .system-note span {
          color: var(--cyan-glow);
        }

        .anamnese-page .section-header {
          font-family: var(--font-mono);
          color: var(--cyan-glow);
          font-size: 11px;
          letter-spacing: 1px;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 10px;
          margin-bottom: 20px;
          display: block;
        }

        .anamnese-page .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 15px;
          margin-top: 20px;
        }

        .anamnese-page .dash-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          padding: 15px;
          border-radius: 6px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .anamnese-page .dash-card:hover {
          border-color: var(--cyan-glow);
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.15);
        }

        .anamnese-page .db-head {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: bold;
          color: var(--text-white);
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
        }

        .anamnese-page .db-status {
          color: var(--cyan-glow);
        }

        .anamnese-page .db-stat-bar {
          height: 3px;
          width: 100%;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          margin-bottom: 8px;
        }

        .anamnese-page .db-stat-fill {
          height: 100%;
          border-radius: 2px;
          width: 0;
          transition: width 1s ease-out;
        }

        .anamnese-page .db-desc {
          font-size: 11px;
          line-height: 1.4;
          color: var(--text-mute);
        }

        .anamnese-page .layers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .anamnese-page .layer-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          padding: 20px;
          border-radius: 6px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(5px);
        }

        .anamnese-page .layer-card:hover {
          border-color: var(--cyan-glow);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          background: rgba(30, 41, 59, 0.8);
        }

        .anamnese-page .layer-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
          gap: 10px;
        }

        .anamnese-page .l-title {
          font-weight: bold;
          font-size: 13px;
          color: var(--text-white);
          text-transform: uppercase;
          margin: 0;
        }

        .anamnese-page .l-desc {
          font-size: 12px;
          color: var(--text-mute);
          line-height: 1.5;
        }

        .anamnese-page .l-badge {
          font-family: var(--font-mono);
          font-size: 9px;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid;
          white-space: nowrap;
        }

        .anamnese-page .stat-ok {
          color: #4ade80;
          border-color: #4ade80;
          background: rgba(74, 222, 128, 0.1);
        }

        .anamnese-page .stat-warn {
          color: #fbbf24;
          border-color: #fbbf24;
          background: rgba(251, 191, 36, 0.1);
        }

        .anamnese-page .stat-crit {
          color: #f87171;
          border-color: #f87171;
          background: rgba(248, 113, 113, 0.1);
        }

        .anamnese-page .security-box {
          border: 1px solid var(--color-safe);
          background: linear-gradient(135deg, rgba(74, 222, 128, 0.05) 0%, rgba(15, 23, 42, 0.6) 100%);
          border-radius: 8px;
          padding: 25px;
          margin-top: 20px;
          position: relative;
          overflow: hidden;
        }

        .anamnese-page .security-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--color-safe);
        }

        .anamnese-page .sec-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(74, 222, 128, 0.2);
          padding-bottom: 15px;
        }

        .anamnese-page .sec-icon-large {
          color: var(--color-safe);
        }

        .anamnese-page .sec-title-block h4 {
          margin: 0;
          color: var(--color-safe);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .anamnese-page .sec-subtitle {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-mute);
        }

        .anamnese-page .sec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px 30px;
        }

        .anamnese-page .sec-item {
          display: flex;
          gap: 10px;
          font-size: 12px;
          line-height: 1.5;
          color: var(--text-mute);
        }

        .anamnese-page .sec-item strong {
          color: var(--text-white);
        }

        .anamnese-page .sec-check {
          color: var(--color-safe);
          font-weight: bold;
        }

        .anamnese-page .sec-tags {
          display: flex;
          gap: 10px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .anamnese-page .sec-tag {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--color-safe);
          background: rgba(74, 222, 128, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid rgba(74, 222, 128, 0.3);
        }

        .anamnese-page .anomaly-card {
          background: rgba(255, 0, 0, 0.05);
          border: 1px solid rgba(248, 113, 113, 0.3);
          border-left: 3px solid var(--color-alert);
          border-radius: 4px;
          padding: 15px;
          margin-bottom: 15px;
          transition: all 0.3s;
        }

        .anamnese-page .anomaly-card:hover {
          background: rgba(255, 0, 0, 0.1);
          box-shadow: 0 0 20px rgba(248, 113, 113, 0.15);
        }

        .anamnese-page .ac-head {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--color-alert);
        }

        .anamnese-page .ac-body {
          display: flex;
          gap: 20px;
          font-size: 12px;
        }

        .anamnese-page .ac-problem {
          flex: 1;
          border-right: 1px solid rgba(255,255,255,0.1);
          padding-right: 15px;
          color: var(--text-mute);
        }

        .anamnese-page .ac-fix {
          flex: 1;
          color: var(--text-white);
        }

        .anamnese-page .ac-fix strong {
          color: var(--cyan-glow);
        }

        .anamnese-page .warning-box {
          border: 1px dashed var(--color-warn);
          background: rgba(251, 191, 36, 0.05);
          padding: 20px;
          display: flex;
          gap: 15px;
          align-items: center;
          border-radius: 6px;
        }

        .anamnese-page .warn-icon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .anamnese-page .warn-text {
          color: var(--text-white);
          font-size: 12px;
          line-height: 1.5;
          opacity: 0.9;
        }

        .anamnese-page .leadership-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
        }

        .anamnese-page .leader-step {
          display: flex;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s;
        }

        .anamnese-page .leader-step:hover {
          border-color: var(--cyan-glow);
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.15);
          transform: scale(1.01);
        }

        .anamnese-page .ls-num {
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

        .anamnese-page .ls-content {
          padding: 15px;
          flex: 1;
        }

        .anamnese-page .ls-head {
          font-weight: bold;
          color: var(--text-white);
          text-transform: uppercase;
          font-size: 13px;
          margin-bottom: 5px;
        }

        .anamnese-page .ls-desc {
          font-size: 12px;
          color: var(--text-mute);
          margin-bottom: 10px;
          line-height: 1.5;
        }

        .anamnese-page .ls-badge {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--cyan-glow);
          border: 1px solid var(--cyan-dim);
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
          background: rgba(34, 211, 238, 0.05);
        }

        .anamnese-page .ls-badge span {
          font-weight: bold;
          opacity: 0.7;
          margin-right: 5px;
        }

        .anamnese-page .quote-box {
          text-align: center;
          font-style: italic;
          color: var(--text-white);
          padding: 20px;
          border-top: 1px solid var(--glass-border);
          margin-top: 20px;
          font-size: 14px;
          opacity: 0.8;
        }

        .anamnese-page .timeline-container {
          position: relative;
          margin-top: 20px;
        }

        .anamnese-page .tl-line {
          position: absolute;
          left: 19px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background: linear-gradient(to bottom, var(--cyan-glow), rgba(34, 211, 238, 0.1));
        }

        .anamnese-page .tl-item {
          display: flex;
          margin-bottom: 20px;
          position: relative;
          transition: opacity 0.3s;
        }

        .anamnese-page .tl-item:hover .tl-dot {
          box-shadow: 0 0 15px var(--cyan-glow);
          transform: scale(1.2);
          background: var(--cyan-glow);
        }

        .anamnese-page .tl-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--bg-deep);
          border: 2px solid var(--cyan-glow);
          margin: 5px 15px 0 15px;
          z-index: 2;
          transition: all 0.3s;
        }

        .anamnese-page .tl-content {
          flex: 1;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          padding: 15px;
          border-radius: 6px;
          backdrop-filter: blur(5px);
        }

        .anamnese-page .tl-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
        }

        .anamnese-page .tl-title {
          font-weight: bold;
          color: var(--text-white);
          font-size: 13px;
        }

        .anamnese-page .tl-time {
          font-family: var(--font-mono);
          color: var(--cyan-glow);
          font-size: 11px;
        }

        .anamnese-page .tl-text {
          font-size: 12px;
          color: var(--text-mute);
        }

        .anamnese-page .cta-box {
          margin-top: 40px;
          text-align: center;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(34, 211, 238, 0.1) 100%);
          border: 1px solid var(--cyan-dim);
          padding: 30px;
          border-radius: 8px;
        }

        .anamnese-page .cta-btn {
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

        .anamnese-page .cta-btn:hover {
          background: white;
          box-shadow: 0 0 20px var(--cyan-glow);
        }

        .anamnese-page .cta-sub {
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

        .anamnese-page .cta-sub:hover {
          border-color: white;
          background: rgba(255,255,255,0.1);
        }

        .anamnese-page .footer {
          margin-top: 30px;
          border-top: 1px solid var(--glass-border);
          padding-top: 20px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-mute);
          display: flex;
          justify-content: space-between;
        }

        .anamnese-page .share-button {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 100;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          color: var(--cyan-glow);
          padding: 10px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s;
          backdrop-filter: blur(10px);
        }

        .anamnese-page .share-button:hover {
          background: var(--cyan-glow);
          color: #000;
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
        }

        .anamnese-page .share-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }

        .anamnese-page .share-modal-content {
          background: var(--bg-deep);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          padding: 30px;
          max-width: 400px;
          width: 90%;
          text-align: center;
          position: relative;
        }

        .anamnese-page .share-modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          color: var(--text-mute);
          cursor: pointer;
          transition: color 0.3s;
        }

        .anamnese-page .share-modal-close:hover {
          color: var(--text-white);
        }

        .anamnese-page .qr-container {
          background: white;
          padding: 20px;
          border-radius: 8px;
          display: inline-block;
          margin: 20px 0;
        }

        .anamnese-page .share-url {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 6px;
          padding: 10px 15px;
          margin-top: 15px;
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
          background: none;
          border: none;
          color: var(--cyan-glow);
          cursor: pointer;
          padding: 5px;
          transition: all 0.3s;
        }

        .anamnese-page .copy-btn:hover {
          transform: scale(1.1);
        }

        @media print {
          .anamnese-page { background: white; display: block; padding: 0; }
          .anamnese-page .sheet { background: white; color: #000; box-shadow: none; display: block; width: 100%; max-width: 100%; height: auto; }
          .anamnese-page .sonar-grid, .anamnese-page .particulate, .anamnese-page .sidebar, .anamnese-page .share-button { display: none; }
          .anamnese-page .main-content { padding: 20px 40px; display: block; }
          .anamnese-page h1, .anamnese-page h1 strong { color: #000; text-shadow: none; font-size: 28px; }
        }
      `}</style>

      <div className="anamnese-page">
        <div className="sonar-grid"></div>
        <div className="particulate"></div>

        {/* Share Button */}
        <button 
          className="share-button"
          onClick={() => setShowShareModal(true)}
          title="Seite teilen"
        >
          <Share2 size={20} />
        </button>

        {/* Share Modal */}
        {showShareModal && (
          <div className="share-modal" onClick={() => setShowShareModal(false)}>
            <div className="share-modal-content" onClick={e => e.stopPropagation()}>
              <button className="share-modal-close" onClick={() => setShowShareModal(false)}>
                <X size={20} />
              </button>
              <h3 style={{ color: 'var(--cyan-glow)', marginBottom: '10px' }}>Seite teilen</h3>
              <p style={{ color: 'var(--text-mute)', fontSize: '12px' }}>
                Scanne den QR-Code oder kopiere den Link
              </p>
              <div className="qr-container">
                <QRCodeSVG value={pageUrl} size={150} />
              </div>
              <div className="share-url">
                <input type="text" value={pageUrl} readOnly />
                <button className="copy-btn" onClick={copyToClipboard}>
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="sheet">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="logo-area">
              <div className="sonar-logo">
                <div className="pulse-ring"></div>
              </div>
              <div className="brand-name">SONARIS</div>
              <div className="brand-sub">SYSTEM TIEFE</div>
            </div>

            <div className="depth-track-container">
              <div 
                className="depth-marker" 
                style={{ top: depthLabels[activeDepth].position }}
              ></div>
              
              {depthLabels.map((label, index) => (
                <div
                  key={label.id}
                  className={`depth-label ${activeDepth === index ? 'active' : ''}`}
                  style={{ top: label.position }}
                >
                  {label.label}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="main-content">
            {/* 1. INTRO */}
            <div className="section-intro" onMouseEnter={() => setActiveDepth(0)}>
              <h1>KI als <strong>sozialer Lernprozess.</strong></h1>
              <div className="sub-headline">Wie gelingt deine KI-Initiative?</div>
              
              <div className="intro-lead">
                <strong>Management Summary:</strong><br />
                Euer Unternehmen ist bereit für KI. Die Technik ist nicht das Hindernis.
                Unsere Diagnose zeigt jedoch: Ihr steht vor einem <strong>sozialen Lernprozess</strong>, nicht vor einem IT-Projekt.
                Damit KI nicht im "Dauer-Pilotstatus" stecken bleibt, <strong>empfehlen wir die folgende strategische Vorgehensweise.</strong>
              </div>

              <div className="system-note">
                <span>* HINWEIS:</span> Das hier skizzierte 180-Tage-Programm ist beispielhaft und als Mindestanforderung für eine nachhaltige Implementierung zu verstehen.
              </div>
            </div>

            {/* 1.5 DIAGNOSTIC DASHBOARD */}
            <div onMouseEnter={() => setActiveDepth(1)}>
              <span className="section-header">&gt;&gt; DIAGNOSTIC DASHBOARD</span>
              <div className="dashboard-grid">
                <div className="dash-card">
                  <div className="db-head"><span>01 TECHNIK</span><span className="db-status">READY</span></div>
                  <div className="db-stat-bar"><div id="stat-tech" className="db-stat-fill" style={{ background: 'var(--cyan-glow)' }}></div></div>
                  <div className="db-desc">Modelle & Hardware verfügbar. Langdock sichert Basis ab.</div>
                </div>
                <div className="dash-card">
                  <div className="db-head"><span>02 ORG</span><span className="db-status" style={{ color: 'var(--color-warn)' }}>ADAPTING</span></div>
                  <div className="db-stat-bar"><div id="stat-org" className="db-stat-fill" style={{ background: 'var(--color-warn)' }}></div></div>
                  <div className="db-desc">Prozesse starr. Governance fehlt. Unsicherheit bremst.</div>
                </div>
                <div className="dash-card">
                  <div className="db-head"><span>03 KULTUR</span><span className="db-status" style={{ color: 'var(--color-alert)' }}>LOADING</span></div>
                  <div className="db-stat-bar"><div id="stat-cult" className="db-stat-fill" style={{ background: 'var(--color-alert)' }}></div></div>
                  <div className="db-desc">Fehlertoleranz zu niedrig für kreative KI-Systeme.</div>
                </div>
              </div>
            </div>

            {/* 2. LAYERS (-50m) */}
            <div onMouseEnter={() => setActiveDepth(2)}>
              <span className="section-header">&gt;&gt; SYSTEM LAYER INSPECTION</span>
              <div className="layers-grid">
                <div className="layer-card">
                  <div className="layer-header">
                    <span className="l-title">TECHNIK</span>
                    <span className="l-badge stat-ok">READY</span>
                  </div>
                  <div className="l-desc">Das Fundament. Modelle (GPT-5.1, Claude Opus 4.5) via Langdock verfügbar. Die "Hardware" steht.</div>
                </div>
                <div className="layer-card">
                  <div className="layer-header">
                    <span className="l-title">INDIVIDUUM</span>
                    <span className="l-badge stat-warn">TRAIN</span>
                  </div>
                  <div className="l-desc">Kompetenz-Gap. Mitarbeiter schwanken zwischen Faszination und Angst ("Black Box"). Training nötig.</div>
                </div>
                <div className="layer-card">
                  <div className="layer-header">
                    <span className="l-title">ORG</span>
                    <span className="l-badge stat-warn">ADAPT</span>
                  </div>
                  <div className="l-desc">Prozesse sind noch starr. Es fehlen klare Governance-Regeln. Unsicherheit bremst die Anwendung.</div>
                </div>
                <div className="layer-card">
                  <div className="layer-header">
                    <span className="l-title">KULTUR</span>
                    <span className="l-badge stat-crit">CRIT</span>
                  </div>
                  <div className="l-desc">Kritischster Punkt. Fehlertoleranz oft zu niedrig für probabilistische (kreative) KI-Systeme.</div>
                </div>
              </div>

              {/* Security Box */}
              <div className="security-box">
                <div className="sec-header">
                  <div className="sec-icon-large">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div className="sec-title-block">
                    <h4>Secure Data Environment & Compliance</h4>
                    <span className="sec-subtitle">TRUST CENTER PROTOCOL // LANGDOCK</span>
                  </div>
                </div>
                
                <div className="sec-grid">
                  <div className="sec-item">
                    <span className="sec-check">✓</span>
                    <div><strong>Standort & Recht:</strong> Langdock sitzt in der EU. App & Datenbanken werden ausschließlich in der EU gehostet. Volle DSGVO-Konformität.</div>
                  </div>
                  <div className="sec-item">
                    <span className="sec-check">✓</span>
                    <div><strong>Rechtssicherheit (AVV):</strong> Der Auftragsverarbeitungsvertrag (DPA) ist fester Bestandteil der AGB. Keine separaten Verträge nötig.</div>
                  </div>
                  <div className="sec-item">
                    <span className="sec-check">✓</span>
                    <div><strong>Geprüfte Qualität:</strong> Rechtstexte von EU-Anwälten erstellt und durch hunderte Rechtsabteilungen (Konzern bis KMU) validiert.</div>
                  </div>
                  <div className="sec-item">
                    <span className="sec-check">✓</span>
                    <div><strong>Kettenverantwortung:</strong> Datenschutzpflichten werden lückenlos an alle Sub-Unternehmer weitergegeben.</div>
                  </div>
                  <div className="sec-item">
                    <span className="sec-check">✓</span>
                    <div><strong>Interne Sicherheit:</strong> Über 50 interne Kontrollmechanismen für DSGVO-Compliance (Verschlüsselung, Mitarbeiterschulungen).</div>
                  </div>
                </div>

                <div className="sec-tags">
                  <span className="sec-tag">EU-HOSTING</span>
                  <span className="sec-tag">NO-TRAINING POLICY</span>
                  <span className="sec-tag">ENCRYPTED AT REST</span>
                  <span className="sec-tag">SOC 2 / ISO READY</span>
                </div>
              </div>
            </div>

            {/* 3. ANOMALIES (-100m) */}
            <div onMouseEnter={() => setActiveDepth(3)}>
              <span className="section-header">&gt;&gt; ANOMALY DETECTION: GERMAN FACTOR</span>
              
              <div className="anomaly-card">
                <div className="ac-head"><span>DETECTED: PERFECTIONISM_LOOP</span><span>IMPACT: HIGH</span></div>
                <div className="ac-body">
                  <div className="ac-problem">"Knapp daneben ist auch vorbei." Wir warten auf 100% Perfektion vor Go-Live. KI lernt aber erst im Betrieb.</div>
                  <div className="ac-fix">Lösung: <strong>Mut zur "Beta-Phase".</strong> Geschützte Räume für Fehler schaffen.</div>
                </div>
              </div>

              <div className="anomaly-card">
                <div className="ac-head"><span>DETECTED: GOVERNANCE_LATENCY</span><span>IMPACT: MEDIUM</span></div>
                <div className="ac-body">
                  <div className="ac-problem">Gremienbeschlüsse dauern länger als Tech-Zyklen. Bis der Case erlaubt ist, ist er veraltet.</div>
                  <div className="ac-fix">Lösung: <strong>Schnellboote.</strong> Task-Forces mit Mandat für Experimente.</div>
                </div>
              </div>

              <div className="warning-box">
                <div className="warn-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fbbf24" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </div>
                <div className="warn-text">
                  Je stärker diese Muster, desto wichtiger die bewusste Gestaltung. Diese kulturellen Prägungen sind nicht gut oder schlecht – sie sind Realität. Erfolgreiche KI-Einführung ignoriert sie nicht, sondern rechnet mit ihnen und gestaltet Lernräume entsprechend.
                </div>
              </div>
            </div>

            {/* 4. LEADERSHIP (-200m) */}
            <div onMouseEnter={() => setActiveDepth(4)}>
              <span className="section-header">&gt;&gt; LEADERSHIP MIGRATION PROTOCOL</span>
              
              <div className="leadership-grid">
                <div className="leader-step">
                  <div className="ls-num">01</div>
                  <div className="ls-content">
                    <div className="ls-head">Rahmen setzen</div>
                    <div className="ls-desc">Klare Leitplanken statt Mikromanagement. Definition von "No-Go-Areas" (Datenschutz) und "Go-Areas" (Experimente).</div>
                    <div className="ls-badge"><span>SONARIS FORMAT:</span> GOVERNANCE WORKSHOP & HUB SETUP</div>
                  </div>
                </div>
                
                <div className="leader-step">
                  <div className="ls-num">02</div>
                  <div className="ls-content">
                    <div className="ls-head">Lernräume schaffen</div>
                    <div className="ls-desc">Zeit und Ressourcen für Experimente bereitstellen. "Spielwiesen", in denen Produktivität kurzfristig sinken darf.</div>
                    <div className="ls-badge"><span>SONARIS FORMAT:</span> USE-CASE-SPRINTS & PROMPT-LABOR</div>
                  </div>
                </div>

                <div className="leader-step">
                  <div className="ls-num">03</div>
                  <div className="ls-content">
                    <div className="ls-head">Fehlerkultur gestalten</div>
                    <div className="ls-desc">Vorbildfunktion: Eigene Unsicherheit zeigen. Fehler nicht bestrafen, sondern als Datenpunkte behandeln.</div>
                    <div className="ls-badge"><span>SONARIS FORMAT:</span> KI-FÜHRUNGSKRÄFTE-TRAINING</div>
                  </div>
                </div>
              </div>

              <div className="quote-box">
                "Führung in der KI-Einführung heißt nicht Antworten haben, sondern Räume schaffen, in denen Antworten entstehen können."
              </div>
            </div>

            {/* 5. TIMELINE (CORE) */}
            <div onMouseEnter={() => setActiveDepth(5)}>
              <span className="section-header">&gt;&gt; INITIATING 180-DAY PROTOCOL</span>
              
              <div className="timeline-container">
                <div className="tl-line"></div>
                
                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-content">
                    <div className="tl-header"><span className="tl-title">FUNDAMENT</span><span className="tl-time">TAG 01-30</span></div>
                    <div className="tl-text"><strong>Sicherheit & Zugriff.</strong> Setup SONARIS Hub (Langdock). Klären von DSGVO & Governance. Ergebnis: Legale, sichere Umgebung.</div>
                  </div>
                </div>

                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-content">
                    <div className="tl-header"><span className="tl-title">LERNRAUM</span><span className="tl-time">TAG 31-90</span></div>
                    <div className="tl-text"><strong>Erfahrungswerte.</strong> 3 Use Cases (z.B. Marketing, Support). Intensive Begleitung. Fehler gemeinsam analysieren.</div>
                  </div>
                </div>

                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-content">
                    <div className="tl-header"><span className="tl-title">ROUTINE</span><span className="tl-time">TAG 91-180</span></div>
                    <div className="tl-text"><strong>Skalierung.</strong> Aus Experimenten werden Prozesse. Interne Prompt-Bibliothek. KI wird Standard.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="cta-box">
              <div style={{ marginBottom: '20px', fontSize: '14px', color: 'white' }}>
                Starte jetzt die Transformation zur lernenden Organisation.
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href="mailto:oliver@sonaris.de" className="cta-btn">✉️ E-MAIL SENDEN</a>
                <a href="https://meetings-eu1.hubspot.com/oliver-andrees/meeting-link-" target="_blank" rel="noopener noreferrer" className="cta-sub">📅 ESPRESSO BUCHEN</a>
              </div>
              <div style={{ marginTop: '20px', fontSize: '10px', color: 'var(--text-mute)', fontFamily: 'var(--font-mono)' }}>
                DIRECT LINE: +49 30 120 877 14 // OLIVER@SONARIS.DE
              </div>
            </div>

            <div className="footer">
              <span>SONARIS AI CONSULTING</span>
              <span>SYSTEM DIAGNOSTIC COMPLETE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KiAnamnese;
