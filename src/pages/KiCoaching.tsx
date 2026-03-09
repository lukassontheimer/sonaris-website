import { useEffect } from "react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Oliver Andrees",
    role: "Sales & Strategy",
    bio: "Ich öffne Türen zur praktischen KI-Nutzung — mit 35 Jahren Sales Expertise.",
    photo: "/lovable-uploads/2978bf0f-c48a-4252-99b2-0c893e569892.png",
    colorClass: "tc-oliver",
  },
  {
    name: "Lukas Sontheimer",
    role: "KI-Stratege",
    bio: "Ich schaffe Klarheit im KI-Chaos durch systematische Prozessintegration.",
    photo: "/lovable-uploads/cd70301f-650c-4fa0-8d91-f24e87a9405c.png",
    colorClass: "tc-lukas",
  },
  {
    name: "Lorenz Surkemper",
    role: "Technologie-Experte",
    bio: "Ich finde den Weg, damit eure Ideen auch technisch Wirklichkeit werden.",
    photo: "/lovable-uploads/64310054-52e7-48af-ba44-b16e7e1a919f.png",
    colorClass: "tc-lorenz",
  },
  {
    name: "Christian Pessing",
    role: "Training & Coaching",
    bio: "Ich stelle Verbindungen zwischen menschlicher und maschineller Kommunikation her.",
    photo: "/lovable-uploads/6ecd5e1b-5938-4825-83a1-6463e2b7075b.png",
    colorClass: "tc-christian",
  },
];

const LogoMark = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="40" fill="rgba(110,145,180,0.04)"/>
    <circle cx="60" cy="30" r="3" fill="rgba(110,145,180,0.6)"/>
    <circle cx="85" cy="48" r="2.5" fill="rgba(110,145,180,0.5)"/>
    <circle cx="80" cy="78" r="2.5" fill="rgba(170,125,85,0.45)"/>
    <circle cx="40" cy="78" r="2.5" fill="rgba(170,125,85,0.5)"/>
    <circle cx="35" cy="48" r="2.5" fill="rgba(110,145,180,0.45)"/>
    <circle cx="60" cy="60" r="2" fill="rgba(110,145,180,0.55)"/>
    <line x1="60" y1="30" x2="85" y2="48" stroke="rgba(110,145,180,0.15)" strokeWidth="0.6"/>
    <line x1="85" y1="48" x2="80" y2="78" stroke="rgba(110,145,180,0.12)" strokeWidth="0.6"/>
    <line x1="80" y1="78" x2="40" y2="78" stroke="rgba(170,125,85,0.12)" strokeWidth="0.6"/>
    <line x1="40" y1="78" x2="35" y2="48" stroke="rgba(170,125,85,0.12)" strokeWidth="0.6"/>
    <line x1="35" y1="48" x2="60" y2="30" stroke="rgba(110,145,180,0.15)" strokeWidth="0.6"/>
    <circle cx="60" cy="30" r="3" fill="rgba(110,145,180,0.6)">
      <animate attributeName="r" values="3;3.5;3" dur="3s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

const KiCoaching = () => {
  useEffect(() => {
    document.title = "KI-Begleitung | Sonaris";
  }, []);

  return (
    <>
      <style>{`
        .kic-body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #0C121A;
          color: #A0B9D7;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 48px 24px 80px;
        }
        .kic-logo-bar {
          position: fixed;
          top: 28px; left: 32px;
          z-index: 100;
          display: flex; align-items: center; gap: 10px;
        }
        .kic-logo-text {
          font-size: 15px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #C8DCF0;
        }
        .kic-header {
          text-align: center;
          margin-bottom: 56px;
          max-width: 760px;
          margin-top: 32px;
        }
        .kic-eyebrow {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #6E91B4; margin-bottom: 16px;
        }
        .kic-h1 {
          font-size: 38px; font-weight: 700;
          line-height: 1.2; color: #C8DCF0;
          margin-bottom: 20px; letter-spacing: -0.02em;
        }
        .kic-h1 span { color: #6E91B4; }
        .kic-subtitle {
          font-size: 16px; font-weight: 400;
          line-height: 1.7; color: #A0B9D7;
          max-width: 620px; margin: 0 auto; opacity: 0.8;
        }
        .kic-section-header {
          text-align: center; margin-bottom: 32px;
        }
        .kic-section-header h2 {
          font-size: 26px; font-weight: 700;
          color: #C8DCF0; margin-bottom: 8px;
        }
        .kic-section-header h2 span { color: #6E91B4; }
        .kic-section-header p {
          font-size: 14px; color: #8CA0BE; line-height: 1.6;
        }
        .kic-team-section {
          max-width: 1100px; width: 100%; margin-bottom: 72px;
        }
        .kic-team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px; margin-top: 28px;
        }
        .kic-team-card {
          background: #151D28;
          border: 1px solid rgba(110,145,180,0.12);
          border-radius: 16px; padding: 32px 20px;
          text-align: center;
          transition: transform 0.35s cubic-bezier(.25,.8,.25,1), border-color 0.35s ease, box-shadow 0.35s ease;
          cursor: default;
        }
        .kic-team-card:hover {
          transform: translateY(-8px);
          border-color: var(--tc-accent-strong, rgba(110,145,180,0.3));
          box-shadow: 0 12px 32px rgba(0,0,0,0.3);
        }
        .kic-avatar {
          width: 96px; height: 96px;
          margin: 0 auto 16px;
          border-radius: 50%; overflow: hidden;
          border: 2px solid var(--tc-accent, rgba(110,145,180,0.25));
          transition: border-color 0.35s ease;
        }
        .kic-team-card:hover .kic-avatar {
          border-color: var(--tc-accent-strong, #6E91B4);
        }
        .kic-avatar img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }
        .kic-member-name {
          font-size: 15px; font-weight: 600;
          color: #E1B991; margin-bottom: 3px;
        }
        .kic-member-role {
          font-size: 11px; color: #8CA0BE;
          letter-spacing: 0.3px; margin-bottom: 14px;
          text-transform: uppercase;
        }
        .kic-member-bio {
          font-size: 12px; line-height: 1.65; color: #A0B9D7;
        }
        .tc-oliver  { --tc-accent: rgba(170,125,85,0.25); --tc-accent-strong: #AA7D55; }
        .tc-lukas   { --tc-accent: rgba(110,145,180,0.25); --tc-accent-strong: #6E91B4; }
        .tc-lorenz  { --tc-accent: rgba(59,130,246,0.25);  --tc-accent-strong: #3B82F6; }
        .tc-christian { --tc-accent: rgba(110,180,140,0.25); --tc-accent-strong: #6EB48C; }
        .kic-anchor-box {
          max-width: 720px; width: 100%;
          text-align: center; margin-bottom: 48px;
          background: rgba(110,145,180,0.04);
          border: 1px solid rgba(110,145,180,0.15);
          border-radius: 14px; padding: 20px 32px;
        }
        .kic-anchor-box p {
          font-size: 15px; font-weight: 500;
          color: #B4C8E1; line-height: 1.65;
        }
        .kic-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px; max-width: 1100px;
          width: 100%; margin-bottom: 64px;
        }
        .kic-card {
          background: #151D28;
          border: 1px solid rgba(110,145,180,0.12);
          border-radius: 20px; padding: 36px 28px;
          position: relative; overflow: hidden;
          transition: transform 0.35s cubic-bezier(.25,.8,.25,1), border-color 0.35s ease, box-shadow 0.35s ease;
          cursor: default;
        }
        .kic-card:hover {
          transform: translateY(-8px);
          border-color: var(--kic-accent);
          box-shadow: 0 16px 40px rgba(0,0,0,0.25);
        }
        .kic-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: var(--kic-accent);
          border-radius: 20px 20px 0 0;
        }
        .kic-card::after {
          content: '';
          position: absolute; top: -60px; right: -60px;
          width: 160px; height: 160px;
          background: radial-gradient(circle, var(--kic-accent-soft) 0%, transparent 70%);
          pointer-events: none;
        }
        .kic-card-1 { --kic-accent: #6E91B4; --kic-accent-soft: rgba(110,145,180,0.08); }
        .kic-card-2 { --kic-accent: #3B82F6; --kic-accent-soft: rgba(59,130,246,0.08); }
        .kic-card-3 { --kic-accent: #AA7D55; --kic-accent-soft: rgba(170,125,85,0.08); }
        .kic-card-icon {
          width: 64px; height: 64px; border-radius: 14px;
          background: var(--kic-accent-soft);
          border: 1px solid rgba(110,145,180,0.15);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px; overflow: hidden;
        }
        .kic-card-number {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--kic-accent); margin-bottom: 8px;
        }
        .kic-card-title {
          font-size: 20px; font-weight: 700;
          color: #C8DCF0; margin-bottom: 8px; letter-spacing: -0.01em;
        }
        .kic-card-subtitle {
          font-size: 13px; color: #8CA0BE;
          margin-bottom: 24px; font-weight: 400; line-height: 1.5;
        }
        .kic-divider {
          height: 1px; background: rgba(110,145,180,0.1); margin-bottom: 24px;
        }
        .kic-items { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .kic-items li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 14px; color: #A0B9D7; line-height: 1.5;
        }
        .kic-items li::before {
          content: '';
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--kic-accent);
          margin-top: 6px; flex-shrink: 0;
        }
        .kic-examples-section { max-width: 1100px; width: 100%; margin-bottom: 56px; }
        .kic-examples-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;
        }
        .kic-example-card {
          background: #151D28;
          border: 1px solid rgba(110,145,180,0.12);
          border-radius: 14px; padding: 24px;
          display: flex; gap: 16px; align-items: flex-start;
          transition: transform 0.35s cubic-bezier(.25,.8,.25,1), border-color 0.35s ease, box-shadow 0.35s ease;
          cursor: default;
        }
        .kic-example-card:hover {
          transform: translateY(-6px);
          border-color: rgba(110,145,180,0.3);
          box-shadow: 0 10px 28px rgba(0,0,0,0.2);
        }
        .kic-example-icon { width: 48px; height: 48px; flex-shrink: 0; margin-top: 2px; }
        .kic-example-content h3 {
          font-size: 15px; font-weight: 600; color: #C8DCF0; margin-bottom: 6px;
        }
        .kic-example-content p { font-size: 13px; color: #8CA0BE; line-height: 1.6; }
        .kic-example-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
        .kic-tag {
          font-size: 11px; font-weight: 500;
          padding: 3px 10px; border-radius: 20px; border: 1px solid;
          transition: transform 0.2s ease;
        }
        .kic-tag:hover { transform: scale(1.06); }
        .kic-tag-steel    { background: rgba(110,145,180,0.1); color: #A0B9D7;  border-color: rgba(110,145,180,0.25); }
        .kic-tag-copper   { background: rgba(170,125,85,0.1);  color: #E1B991;  border-color: rgba(170,125,85,0.25); }
        .kic-tag-electric { background: rgba(59,130,246,0.1);  color: #8CB4DC;  border-color: rgba(59,130,246,0.25); }
        .kic-tag-purple   { background: rgba(139,92,246,0.1);  color: #A78BFA;  border-color: rgba(139,92,246,0.25); }
        .kic-tag-green    { background: rgba(110,180,140,0.1); color: #6EB48C;  border-color: rgba(110,180,140,0.25); }
        .kic-tag-coral    { background: rgba(160,85,95,0.1);   color: #DC8C96;  border-color: rgba(160,85,95,0.25); }
        .kic-footer-contact {
          margin-top: 32px; padding-top: 14px;
          border-top: 1px solid rgba(110,145,180,0.08);
          display: flex; flex-wrap: wrap; gap: 4px 8px;
          font-size: 9px; color: rgba(140,160,190,0.35);
          line-height: 1.5; justify-content: center;
          max-width: 800px; margin-bottom: 16px;
        }
        .kic-footer-contact a {
          color: rgba(140,160,190,0.4); text-decoration: none;
        }
        .kic-footer-contact a:hover { color: rgba(140,160,190,0.7); }
        .kic-footer-sep { color: rgba(140,160,190,0.2); }
        .kic-logo-footer {
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(110,145,180,0.25); margin-top: 24px;
        }
        @media (max-width: 900px) {
          .kic-columns { grid-template-columns: 1fr; }
          .kic-examples-grid { grid-template-columns: 1fr; }
          .kic-team-grid { grid-template-columns: repeat(2, 1fr); }
          .kic-h1 { font-size: 28px; }
          .kic-logo-bar { left: 16px; top: 16px; }
        }
      `}</style>

      <div className="kic-body">

        {/* Logo Bar */}
        <div className="kic-logo-bar">
          <LogoMark size={32} />
          <span className="kic-logo-text">Sonaris</span>
        </div>

        {/* Header */}
        <div className="kic-header">
          <div className="kic-eyebrow">KI-Begleitung</div>
          <h1 className="kic-h1">Strategische <span>KI-Begleitung</span> für euer Unternehmen</h1>
          <p className="kic-subtitle">
            Ein dediziertes Team, das sich kontinuierlich in eure Prozesse hineindenkt, Lösungen entwickelt und euer Team befähigt – strukturiert, praxisnah und auf Augenhöhe.
          </p>
        </div>

        {/* Team Section */}
        <div className="kic-team-section">
          <div className="kic-section-header">
            <div className="kic-eyebrow">Euer Projektteam</div>
            <h2>Die Menschen hinter <span>Sonaris</span></h2>
            <p>Vier Perspektiven, ein gemeinsames Ziel: KI-Transformation greifbar machen.</p>
          </div>
          <div className="kic-team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className={`kic-team-card ${member.colorClass}`}>
                <div className="kic-avatar">
                  <img src={member.photo} alt={member.name} />
                </div>
                <div className="kic-member-name">{member.name}</div>
                <div className="kic-member-role">{member.role}</div>
                <div className="kic-member-bio">{member.bio}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: 32, maxWidth: 760 }}>
          <h2 style={{ fontSize: 30, fontWeight: 700, color: '#C8DCF0', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
            30 Tage Leistung – 30 Tage Pauschale
          </h2>
        </div>

        {/* Anchor Box */}
        <div className="kic-anchor-box">
          <p>
            Die monatliche Pauschale ist ein Retainer für ein Bündel an Leistungen –<br/>
            die gemeinsamen Sessions sind der sichtbare Teil davon.
          </p>
        </div>

        {/* 3 Säulen Cards */}
        <div className="kic-columns">

          <div className="kic-card kic-card-1">
            <div className="kic-card-icon">
              <svg viewBox="0 0 120 120" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="40" fill="rgba(110,145,180,0.04)"/>
                <circle cx="65" cy="28" r="2" fill="rgba(110,145,180,0.5)"/>
                <circle cx="78" cy="35" r="2" fill="rgba(110,145,180,0.45)"/>
                <circle cx="85" cy="50" r="2" fill="rgba(110,145,180,0.4)"/>
                <circle cx="82" cy="65" r="2" fill="rgba(110,145,180,0.4)"/>
                <circle cx="72" cy="78" r="2" fill="rgba(110,145,180,0.35)"/>
                <circle cx="60" cy="85" r="2" fill="rgba(110,145,180,0.35)"/>
                <path d="M65,28 Q82,30 85,50 Q86,68 72,78 Q65,83 60,85" fill="none" stroke="rgba(110,145,180,0.15)" strokeWidth="0.6"/>
              </svg>
            </div>
            <div className="kic-card-number">Säule 01</div>
            <div className="kic-card-title">Live-Sessions</div>
            <div className="kic-card-subtitle">Gemeinsame Arbeit in Echtzeit – strukturiert und zielorientiert</div>
            <div className="kic-divider"/>
            <ul className="kic-items">
              <li>Regelmäßige Gruppensessions, in der Regel wöchentlich – bei Bedarf auch als kompakte Doppelsession</li>
              <li>Individuelle 1:1-Sessions für spezifische Use Cases oder persönliche Begleitung</li>
              <li>Kommunikation zwischen den Sessions per E-Mail – für kurze Fragen, Feedback und Abstimmungen</li>
              <li>Strukturierte Reviews am Ende jedes 30-Tage-Zyklus</li>
            </ul>
          </div>

          <div className="kic-card kic-card-2">
            <div className="kic-card-icon">
              <svg viewBox="0 0 120 120" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="40" fill="rgba(110,145,180,0.04)"/>
                <circle cx="38" cy="38" r="2.5" fill="rgba(110,145,180,0.5)"/>
                <circle cx="82" cy="38" r="2.5" fill="rgba(110,145,180,0.5)"/>
                <circle cx="82" cy="82" r="2.5" fill="rgba(110,145,180,0.45)"/>
                <circle cx="38" cy="82" r="2.5" fill="rgba(110,145,180,0.45)"/>
                <line x1="38" y1="38" x2="82" y2="38" stroke="rgba(110,145,180,0.25)" strokeWidth="0.8"/>
                <line x1="82" y1="38" x2="82" y2="82" stroke="rgba(110,145,180,0.2)" strokeWidth="0.8"/>
                <line x1="82" y1="82" x2="38" y2="82" stroke="rgba(110,145,180,0.2)" strokeWidth="0.8"/>
                <line x1="38" y1="82" x2="38" y2="38" stroke="rgba(110,145,180,0.2)" strokeWidth="0.8"/>
                <circle cx="60" cy="60" r="1.5" fill="rgba(110,145,180,0.5)"/>
              </svg>
            </div>
            <div className="kic-card-number">Säule 02</div>
            <div className="kic-card-title">Entwicklung und Bau</div>
            <div className="kic-card-subtitle">Die unsichtbare Arbeit – und oft der größte Werttreiber</div>
            <div className="kic-divider"/>
            <ul className="kic-items">
              <li>Konzeption, Bau und Iteration von KI-Agenten – abgestimmt auf eure Prozesse</li>
              <li>Design und Implementierung von automatisierten Workflows</li>
              <li>Aufbau eines Wissenslayers mit RAG-Anbindung an eure Dokumente und Daten</li>
              <li>Testing, Qualitätssicherung und kontinuierliche Verbesserung</li>
              <li>Dokumentation aller entwickelten Systeme zur Nachnutzung</li>
            </ul>
          </div>

          <div className="kic-card kic-card-3">
            <div className="kic-card-icon">
              <svg viewBox="0 0 120 120" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="40" fill="rgba(110,145,180,0.04)"/>
                <circle cx="60" cy="25" r="2.5" fill="rgba(110,145,180,0.55)"/>
                <circle cx="95" cy="60" r="2.5" fill="rgba(110,145,180,0.5)"/>
                <circle cx="60" cy="95" r="2.5" fill="rgba(110,145,180,0.45)"/>
                <circle cx="25" cy="60" r="2.5" fill="rgba(110,145,180,0.5)"/>
                <line x1="60" y1="25" x2="60" y2="95" stroke="rgba(110,145,180,0.12)" strokeWidth="0.5"/>
                <line x1="25" y1="60" x2="95" y2="60" stroke="rgba(110,145,180,0.12)" strokeWidth="0.5"/>
                <circle cx="60" cy="60" r="1.5" fill="rgba(110,145,180,0.55)"/>
              </svg>
            </div>
            <div className="kic-card-number">Säule 03</div>
            <div className="kic-card-title">Strategische Denkarbeit</div>
            <div className="kic-card-subtitle">Das Hineindenken in euren Kontext – vor, zwischen und nach den Sessions</div>
            <div className="kic-divider"/>
            <ul className="kic-items">
              <li>Evaluierung und Priorisierung von Use Cases gemeinsam mit euch</li>
              <li>Analyse eurer Geschäftsprozesse und Identifikation von Automatisierungspotenzialen</li>
              <li>Governance-Strukturen und DSGVO-konforme Umsetzung</li>
              <li>Strategisches Sparring und kreative Lösungsentwicklung</li>
              <li>Aufbau von KI-Kompetenz – vom ersten Einstieg zur souveränen Nutzung</li>
            </ul>
          </div>

        </div>

        {/* Beispiele aus der Praxis */}
        <div className="kic-examples-section">
          <div className="kic-section-header">
            <h2>Was zwischen den Sessions entsteht – Beispiele aus der Praxis</h2>
            <p>Jedes dieser Beispiele steht für mehrere Stunden Konzeption, Entwicklung, Testing und Iteration.</p>
          </div>
          <div className="kic-examples-grid">

            <div className="kic-example-card">
              <div className="kic-example-icon">
                <svg viewBox="0 0 120 120" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="40" fill="rgba(110,145,180,0.03)"/>
                  <circle cx="20" cy="35" r="1.5" fill="rgba(110,145,180,0.3)"/>
                  <circle cx="20" cy="55" r="1.5" fill="rgba(110,145,180,0.35)"/>
                  <circle cx="20" cy="75" r="1.5" fill="rgba(110,145,180,0.3)"/>
                  <circle cx="60" cy="58" r="2.5" fill="rgba(225,185,145,0.5)"/>
                  <circle cx="100" cy="58" r="2" fill="rgba(110,180,140,0.4)"/>
                </svg>
              </div>
              <div className="kic-example-content">
                <h3>Darlehenssalden- und Finanz-Assistent</h3>
                <p>Ein Agent, der aus Rohdaten strukturierte Auswertungen erstellt und Abstimmungsprozesse automatisiert.</p>
                <div className="kic-example-tags">
                  <span className="kic-tag kic-tag-steel">Konzeption</span>
                  <span className="kic-tag kic-tag-purple">Prompt-Engineering</span>
                  <span className="kic-tag kic-tag-electric">Testläufe</span>
                  <span className="kic-tag kic-tag-green">Iteration</span>
                </div>
              </div>
            </div>

            <div className="kic-example-card">
              <div className="kic-example-icon">
                <svg viewBox="0 0 120 120" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="40" fill="rgba(110,145,180,0.03)"/>
                  <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(110,145,180,0.25)" strokeWidth="1"/>
                  <line x1="64" y1="64" x2="88" y2="88" stroke="rgba(110,145,180,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="kic-example-content">
                <h3>Vertragsanalyse-Agent</h3>
                <p>Automatisierte Prüfung von Vertragsunterlagen gegen definierte Standards und Checklisten.</p>
                <div className="kic-example-tags">
                  <span className="kic-tag kic-tag-copper">Regelwerk-Definition</span>
                  <span className="kic-tag kic-tag-electric">Agent-Bau</span>
                  <span className="kic-tag kic-tag-green">Testing</span>
                </div>
              </div>
            </div>

            <div className="kic-example-card">
              <div className="kic-example-icon">
                <svg viewBox="0 0 120 120" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="40" fill="rgba(170,125,85,0.03)"/>
                  <circle cx="60" cy="60" r="2" fill="rgba(170,125,85,0.5)"/>
                  <circle cx="60" cy="60" r="18" fill="none" stroke="rgba(170,125,85,0.1)" strokeWidth="0.5"/>
                </svg>
              </div>
              <div className="kic-example-content">
                <h3>Reporting-Workflow</h3>
                <p>Automatisierte Erstellung von Berichten und Zusammenfassungen aus bestehenden Datenquellen.</p>
                <div className="kic-example-tags">
                  <span className="kic-tag kic-tag-steel">Workflow-Design</span>
                  <span className="kic-tag kic-tag-purple">Anbindung</span>
                  <span className="kic-tag kic-tag-copper">Feintuning</span>
                </div>
              </div>
            </div>

            <div className="kic-example-card">
              <div className="kic-example-icon">
                <svg viewBox="0 0 120 120" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="42" fill="rgba(139,92,246,0.04)"/>
                  <rect x="25" y="45" width="70" height="22" rx="4" fill="rgba(139,92,246,0.06)" stroke="rgba(139,92,246,0.15)" strokeWidth="0.5"/>
                  <rect x="22" y="72" width="76" height="24" rx="5" fill="rgba(110,145,180,0.08)" stroke="rgba(110,145,180,0.25)" strokeWidth="0.6"/>
                </svg>
              </div>
              <div className="kic-example-content">
                <h3>Wissensdatenbank mit RAG-Anbindung</h3>
                <p>Aufbau einer durchsuchbaren Wissensbasis aus Prozessdokumenten, Handbüchern und internen Unterlagen.</p>
                <div className="kic-example-tags">
                  <span className="kic-tag kic-tag-steel">Datenstrukturierung</span>
                  <span className="kic-tag kic-tag-electric">Upload-Logik</span>
                  <span className="kic-tag kic-tag-coral">Zugriffsrechte</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ textAlign: 'center', maxWidth: 720, marginBottom: 48 }}>
          <p style={{ fontSize: 13, color: '#8CA0BE', lineHeight: 1.7, opacity: 0.7 }}>
            Die Beispiele sind Illustrationen typischer Leistungen. Konkrete Agenten und Workflows werden gemeinsam mit dir auf Basis deiner Prozesse und Ziele entwickelt und priorisiert.
          </p>
        </div>

        {/* Virtueller Espresso CTA */}
        <div style={{
          maxWidth: 720, width: '100%',
          background: 'rgba(225,185,145,0.04)',
          border: '1px solid rgba(225,185,145,0.18)',
          borderRadius: 20,
          padding: '48px 40px',
          textAlign: 'center',
          marginBottom: 64,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
            width: 320, height: 200,
            background: 'radial-gradient(ellipse at center, rgba(225,185,145,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ width: 96, height: 96, margin: '0 auto 24px' }}>
            <svg viewBox="0 0 120 120" width="96" height="96" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="65" r="45" fill="rgba(225,185,145,0.04)"/>
              <path d="M 38 58 L 35 88 Q 35 95, 45 96 L 75 96 Q 85 95, 85 88 L 82 58"
                fill="none" stroke="rgba(225,185,145,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M 35 58 Q 60 54, 85 58" fill="none" stroke="rgba(225,185,145,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M 82 63 Q 98 63, 98 76 Q 98 88, 85 88"
                fill="none" stroke="rgba(225,185,145,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M 25 100 Q 60 106, 95 100" fill="none" stroke="rgba(225,185,145,0.25)" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </div>

          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6E91B4', marginBottom: 12 }}>
            Kontakt
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#C8DCF0', marginBottom: 12, letterSpacing: '-0.02em', lineHeight: 1.25 }}>
            Fragen? Gesprächsbedarf?
          </h2>
          <p style={{ fontSize: 15, color: '#A0B9D7', lineHeight: 1.7, maxWidth: 480, margin: '0 auto 32px', opacity: 0.85 }}>
            Ein virtueller Espresso – kurz, knackig und inspirierend. Und immer auf Augenhöhe.
          </p>

          <a
            href="https://meetings-eu1.hubspot.com/oliver-andrees/meeting-link-?uuid=f18c297b-9f0d-4667-a631-d7976258b66a"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(225,185,145,0.12)',
              border: '1px solid rgba(225,185,145,0.35)',
              borderRadius: 12,
              padding: '14px 28px',
              fontSize: 15,
              fontWeight: 600,
              color: '#E1B991',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(225,185,145,0.2)';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(225,185,145,0.6)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(225,185,145,0.15)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(225,185,145,0.12)';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(225,185,145,0.35)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
            }}
          >
            <svg viewBox="0 0 120 120" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
              <path d="M 38 58 L 35 88 Q 35 95, 45 96 L 75 96 Q 85 95, 85 88 L 82 58" fill="none" stroke="rgba(225,185,145,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M 35 58 Q 60 54, 85 58" fill="none" stroke="rgba(225,185,145,0.8)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 82 63 Q 98 63, 98 76 Q 98 88, 85 88" fill="none" stroke="rgba(225,185,145,0.6)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 25 100 Q 60 106, 95 100" fill="none" stroke="rgba(225,185,145,0.3)" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            Virtuellen Espresso buchen
          </a>
        </div>

        <div className="kic-footer-contact">
          <span><a href="https://www.sonaris.de" target="_blank" rel="noopener noreferrer">sonaris.de</a></span>
          <span className="kic-footer-sep">·</span>
          <span>+49 1577 300 20 11</span>
          <span className="kic-footer-sep">·</span>
          <span><a href="mailto:oliver@sonaris.de">oliver@sonaris.de</a></span>
          <span className="kic-footer-sep">|</span>
          <span>Remote Sourcing GmbH · Wilhelmstr. 15 · 31542 Bad Nenndorf</span>
          <span className="kic-footer-sep">|</span>
          <span>Vertreten durch Lorenz Surkemper (GF)</span>
          <span className="kic-footer-sep">|</span>
          <span>USt-ID DE322588403 · HRB 201565 · AG Stadthagen</span>
          <span className="kic-footer-sep">|</span>
          <span><Link to="/impressum">Impressum</Link></span>
        </div>

        <div className="kic-logo-footer">Sonaris</div>

      </div>
    </>
  );
};

export default KiCoaching;
