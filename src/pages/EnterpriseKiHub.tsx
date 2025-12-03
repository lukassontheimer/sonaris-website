import { useEffect, useState } from 'react';

const EnterpriseKiHub = () => {
  const [activeTab, setActiveTab] = useState('status');

  useEffect(() => {
    document.title = 'Enterprise KI Hub | SONARIS';
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tabs = ['status', 'wert', 'preise', 'maintenance', 'charts', 'next'];
      const activeIndex = tabs.indexOf(activeTab);
      
      if (e.key === 'ArrowRight' && activeIndex < tabs.length - 1) {
        setActiveTab(tabs[activeIndex + 1]);
      } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
        setActiveTab(tabs[activeIndex - 1]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeTab]);

  const tabs = [
    { id: 'status', label: '1. Status Quo' },
    { id: 'wert', label: '2. Wert' },
    { id: 'preise', label: '3. Preismodell' },
    { id: 'maintenance', label: '4. Maintenance' },
    { id: 'charts', label: '5. Visualisierung' },
    { id: 'next', label: '6. Nächste Schritte' },
  ];

  return (
    <div className="enterprise-hub min-h-screen bg-black text-white font-sans">
      <style>{`
        .enterprise-hub {
          --cyan: #00ffff;
          --cyan-dim: rgba(0, 255, 255, 0.2);
          --cyan-bg: rgba(0, 255, 255, 0.05);
        }
        
        .enterprise-hub .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        
        .enterprise-hub .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--cyan-dim);
        }
        
        .enterprise-hub .logo {
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 3px;
        }
        
        .enterprise-hub .tagline {
          color: var(--cyan);
          font-size: 14px;
          opacity: 0.8;
        }
        
        .enterprise-hub .nav-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        
        .enterprise-hub .nav-tab {
          padding: 12px 24px;
          background: transparent;
          border: 1px solid rgba(0, 255, 255, 0.3);
          color: #ffffff;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s ease;
          border-radius: 4px;
        }
        
        .enterprise-hub .nav-tab:hover {
          border-color: var(--cyan);
          color: var(--cyan);
        }
        
        .enterprise-hub .nav-tab.active {
          background: rgba(0, 255, 255, 0.1);
          border-color: var(--cyan);
          color: var(--cyan);
        }
        
        .enterprise-hub .section {
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .enterprise-hub h1 {
          font-size: 32px;
          color: var(--cyan);
          margin-bottom: 30px;
          font-weight: 400;
        }
        
        .enterprise-hub h2 {
          font-size: 22px;
          color: var(--cyan);
          margin: 30px 0 15px 0;
          font-weight: 400;
        }
        
        .enterprise-hub h3 {
          font-size: 18px;
          color: #ffffff;
          margin: 20px 0 10px 0;
          font-weight: 600;
        }
        
        .enterprise-hub p {
          line-height: 1.7;
          margin-bottom: 15px;
          opacity: 0.9;
        }
        
        .enterprise-hub .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }
        
        .enterprise-hub .stat-card {
          background: var(--cyan-bg);
          border: 1px solid var(--cyan-dim);
          padding: 25px;
          border-radius: 8px;
          text-align: center;
        }
        
        .enterprise-hub .stat-value {
          font-size: 36px;
          color: var(--cyan);
          font-weight: 300;
        }
        
        .enterprise-hub .stat-label {
          font-size: 14px;
          opacity: 0.7;
          margin-top: 8px;
        }
        
        .enterprise-hub .feature-list {
          list-style: none;
          margin: 20px 0;
          padding: 0;
        }
        
        .enterprise-hub .feature-list li {
          padding: 10px 0 10px 30px;
          position: relative;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .enterprise-hub .feature-list li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--cyan);
        }
        
        .enterprise-hub .price-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        
        .enterprise-hub .price-table th,
        .enterprise-hub .price-table td {
          padding: 15px 20px;
          text-align: left;
          border-bottom: 1px solid var(--cyan-dim);
        }
        
        .enterprise-hub .price-table th {
          color: var(--cyan);
          font-weight: 400;
          background: var(--cyan-bg);
        }
        
        .enterprise-hub .price-table tr:hover td {
          background: rgba(0, 255, 255, 0.03);
        }
        
        .enterprise-hub .price-highlight {
          color: var(--cyan);
          font-size: 18px;
          font-weight: 600;
        }
        
        .enterprise-hub .chart-container {
          background: rgba(0, 255, 255, 0.02);
          border: 1px solid var(--cyan-dim);
          border-radius: 8px;
          padding: 30px;
          margin: 30px 0;
        }
        
        .enterprise-hub .chart-title {
          color: var(--cyan);
          font-size: 16px;
          margin-bottom: 20px;
          text-align: center;
        }
        
        .enterprise-hub .bar-chart {
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          height: 300px;
          padding: 20px 0;
        }
        
        .enterprise-hub .bar-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          max-width: 120px;
        }
        
        .enterprise-hub .bar {
          width: 60px;
          background: linear-gradient(to top, #00ffff, rgba(0, 255, 255, 0.4));
          border-radius: 4px 4px 0 0;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .enterprise-hub .bar.bar-wide {
          width: 90px;
        }
        
        .enterprise-hub .bar:hover {
          background: linear-gradient(to top, #00ffff, rgba(0, 255, 255, 0.7));
        }
        
        .enterprise-hub .bar-value {
          position: absolute;
          top: -25px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 12px;
          color: var(--cyan);
          white-space: nowrap;
        }
        
        .enterprise-hub .bar-avg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 11px;
          color: #000000;
          font-weight: 600;
          white-space: nowrap;
        }
        
        .enterprise-hub .bar-label {
          margin-top: 10px;
          font-size: 12px;
          text-align: center;
          opacity: 0.8;
        }
        
        .enterprise-hub .maintenance-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px 0;
        }
        
        .enterprise-hub .maintenance-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 15px;
          background: rgba(0, 255, 255, 0.03);
          border: 1px solid rgba(0, 255, 255, 0.15);
          border-radius: 8px;
        }
        
        .enterprise-hub .maintenance-icon {
          font-size: 24px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 255, 255, 0.1);
          border-radius: 8px;
          flex-shrink: 0;
        }
        
        .enterprise-hub .maintenance-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .enterprise-hub .maintenance-text strong {
          color: var(--cyan);
          font-size: 14px;
        }
        
        .enterprise-hub .maintenance-text span {
          font-size: 13px;
          opacity: 0.7;
        }
        
        .enterprise-hub .comparison-bars {
          display: flex;
          flex-direction: column;
          gap: 30px;
          padding: 20px 0;
        }
        
        .enterprise-hub .comparison-item {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .enterprise-hub .comparison-label {
          font-size: 14px;
          display: flex;
          justify-content: space-between;
        }
        
        .enterprise-hub .comparison-bar-bg {
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .enterprise-hub .comparison-bar-fill {
          height: 100%;
          border-radius: 4px;
          display: flex;
          align-items: center;
          padding-left: 15px;
          font-size: 14px;
          font-weight: 600;
        }
        
        .enterprise-hub .fill-sonaris {
          background: linear-gradient(to right, #00ffff, rgba(0, 255, 255, 0.6));
          color: #000000;
        }
        
        .enterprise-hub .callout {
          background: rgba(0, 255, 255, 0.1);
          border-left: 4px solid var(--cyan);
          padding: 20px 25px;
          margin: 30px 0;
          border-radius: 0 8px 8px 0;
        }
        
        .enterprise-hub .callout-title {
          color: var(--cyan);
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        .enterprise-hub .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin: 30px 0;
        }
        
        @media (max-width: 768px) {
          .enterprise-hub .two-col {
            grid-template-columns: 1fr;
          }
        }
        
        .enterprise-hub .steps-list {
          counter-reset: step;
          list-style: none;
          padding: 0;
        }
        
        .enterprise-hub .steps-list li {
          padding: 20px 20px 20px 60px;
          position: relative;
          margin-bottom: 15px;
          background: rgba(0, 255, 255, 0.03);
          border-radius: 8px;
          border: 1px solid rgba(0, 255, 255, 0.1);
        }
        
        .enterprise-hub .steps-list li::before {
          counter-increment: step;
          content: counter(step);
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          width: 28px;
          height: 28px;
          background: var(--cyan);
          color: #000000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
        }
        
        .enterprise-hub .footer {
          margin-top: 60px;
          padding-top: 30px;
          border-top: 1px solid var(--cyan-dim);
          text-align: center;
          opacity: 0.6;
          font-size: 14px;
        }
      `}</style>

      <div className="container">
        <header className="header">
          <div>
            <div className="logo">SONARIS</div>
            <div className="tagline">Enterprise KI Hub</div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '14px', opacity: 0.7 }}>
            OpenWebUI Partnerschaft<br />
            <span style={{ color: '#00ffff' }}>70 Lizenzen</span>
          </div>
        </header>

        <nav className="nav-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Section 1: Status Quo */}
        {activeTab === 'status' && (
          <section className="section">
            <h1>Status Quo</h1>
            <p>Das System läuft. Jetzt geht es um die nachhaltige Partnerschaft.</p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">70</div>
                <div className="stat-label">Aktive Lizenzen</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">6.847</div>
                <div className="stat-label">API-Requests</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">~60 $</div>
                <div className="stat-label">API-Kosten/Monat</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">6+</div>
                <div className="stat-label">KI-Provider</div>
              </div>
            </div>
            
            <div className="callout">
              <div className="callout-title">Bisherige Nutzung</div>
              Die Plattform ist produktiv im Einsatz. Die Nutzungsdaten zeigen: Das Team arbeitet aktiv mit der Lösung. Der nächste Schritt ist die Formalisierung der Partnerschaft mit klaren Leistungen und Verantwortlichkeiten.
            </div>
          </section>
        )}

        {/* Section 2: Wert */}
        {activeTab === 'wert' && (
          <section className="section">
            <h1>Was Sie bereits haben</h1>
            
            <div className="two-col">
              <div>
                <h3>Multi-Provider-Zugang</h3>
                <ul className="feature-list">
                  <li>Anthropic (Claude)</li>
                  <li>OpenAI (GPT-4)</li>
                  <li>Microsoft Azure</li>
                  <li>Google Gemini</li>
                  <li>Perplexity</li>
                  <li>xAI (Grok)</li>
                </ul>
              </div>
              <div>
                <h3>Zentrale Verwaltung</h3>
                <ul className="feature-list">
                  <li>Einheitliche Nutzerverwaltung</li>
                  <li>Kosten-Tracking pro User</li>
                  <li>Budgetkontrolle</li>
                  <li>Keine eigene Infrastruktur</li>
                  <li>DSGVO-konformer Betrieb</li>
                  <li>Lokaler Ansprechpartner</li>
                </ul>
              </div>
            </div>
            
            <div className="callout">
              <div className="callout-title">Kernvorteil</div>
              Eine Plattform, alle KI-Modelle. Kein Tool-Chaos, keine separaten Lizenzen, volle Kostentransparenz.
            </div>
          </section>
        )}

        {/* Section 3: Preismodell */}
        {activeTab === 'preise' && (
          <section className="section">
            <h1>Preismodell</h1>
            
            <h2>Setup-Gebühr (einmalig)</h2>
            <div className="stat-card" style={{ maxWidth: '300px', margin: '20px 0' }}>
              <div className="stat-value">5.500 €</div>
              <div className="stat-label">Einmalige Setup-Gebühr</div>
            </div>
            
            <ul className="feature-list">
              <li>Installation & Konfiguration OpenWebUI + LiteLLM</li>
              <li>API-Integration aller Provider</li>
              <li>Initiales User-Setup</li>
              <li>Dokumentation & Übergabe</li>
              <li>2 Stunden Schulung</li>
            </ul>
            
            <h2>Monatliche Maintenance</h2>
            <table className="price-table">
              <thead>
                <tr>
                  <th>User-Staffel</th>
                  <th>Preis/User/Monat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1–50 User</td>
                  <td className="price-highlight">10,00 €</td>
                </tr>
                <tr>
                  <td>51–100 User</td>
                  <td className="price-highlight">5,00 €</td>
                </tr>
                <tr>
                  <td>101+ User</td>
                  <td className="price-highlight">3,50 €</td>
                </tr>
                <tr>
                  <td>Minimum</td>
                  <td>350 €/Monat</td>
                </tr>
              </tbody>
            </table>
            
            <div className="callout">
              <div className="callout-title">Aktuelle Berechnung bei 70 Usern</div>
              <p style={{ marginBottom: 0 }}>
                50 × 10 € = 500 €<br />
                20 × 5 € = 100 €<br />
                <strong style={{ color: '#00ffff', fontSize: '20px' }}>Gesamt: 600 €/Monat</strong>
              </p>
            </div>
          </section>
        )}

        {/* Section 4: Maintenance */}
        {activeTab === 'maintenance' && (
          <section className="section">
            <h1>Maintenance-Leistungen</h1>
            
            <h2>Im monatlichen Preis enthalten</h2>
            <ul className="feature-list">
              <li>Regelmäßige System-Updates (OpenWebUI, LiteLLM)</li>
              <li>Sicherheitspatches</li>
              <li>Monitoring & Verfügbarkeitsüberwachung</li>
              <li>Monatliches Kosten-Reporting</li>
              <li>Support per E-Mail (Reaktionszeit: 24h)</li>
              <li>User-Management (Onboarding/Offboarding)</li>
              <li>Neue Modelle einbinden auf Anfrage</li>
            </ul>
            
            <h2>Optionale Erweiterungen</h2>
            <table className="price-table">
              <tbody>
                <tr>
                  <td>Erweiterte SLA (4h Reaktionszeit)</td>
                  <td>+150 €/Monat</td>
                </tr>
                <tr>
                  <td>Quartalsweise Security-Reviews</td>
                  <td>+300 €/Quartal</td>
                </tr>
                <tr>
                  <td>Custom-Integrationen</td>
                  <td>nach Aufwand</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}

        {/* Section 5: Charts */}
        {activeTab === 'charts' && (
          <section className="section">
            <h1>Kostenübersicht</h1>
            
            <div className="chart-container">
              <div className="chart-title">Preisstaffelung nach Nutzerzahl</div>
              <div className="bar-chart">
                <div className="bar-group">
                  <div className="bar" style={{ height: '200px' }}>
                    <span className="bar-value">10 €</span>
                  </div>
                  <div className="bar-label">1–50 User</div>
                </div>
                <div className="bar-group">
                  <div className="bar" style={{ height: '100px' }}>
                    <span className="bar-value">5 €</span>
                  </div>
                  <div className="bar-label">51–100 User</div>
                </div>
                <div className="bar-group">
                  <div className="bar" style={{ height: '70px' }}>
                    <span className="bar-value">3,50 €</span>
                  </div>
                  <div className="bar-label">101+ User</div>
                </div>
              </div>
            </div>
            
            <div className="chart-container">
              <div className="chart-title">Monatliche Kosten nach Nutzerzahl</div>
              <div className="bar-chart">
                <div className="bar-group">
                  <div className="bar bar-wide" style={{ height: '117px' }}>
                    <span className="bar-value">350 €</span>
                    <span className="bar-avg">10,00 €/User</span>
                  </div>
                  <div className="bar-label">35 User<br />(Minimum)</div>
                </div>
                <div className="bar-group">
                  <div className="bar bar-wide" style={{ height: '167px' }}>
                    <span className="bar-value">500 €</span>
                    <span className="bar-avg">10,00 €/User</span>
                  </div>
                  <div className="bar-label">50 User</div>
                </div>
                <div className="bar-group">
                  <div className="bar bar-wide" style={{ height: '200px' }}>
                    <span className="bar-value">600 €</span>
                    <span className="bar-avg">8,57 €/User</span>
                  </div>
                  <div className="bar-label">70 User<br /><span style={{ color: '#00ffff' }}>(aktuell)</span></div>
                </div>
                <div className="bar-group">
                  <div className="bar bar-wide" style={{ height: '250px' }}>
                    <span className="bar-value">750 €</span>
                    <span className="bar-avg">7,50 €/User</span>
                  </div>
                  <div className="bar-label">100 User</div>
                </div>
                <div className="bar-group">
                  <div className="bar bar-wide" style={{ height: '292px' }}>
                    <span className="bar-value">925 €</span>
                    <span className="bar-avg">6,17 €/User</span>
                  </div>
                  <div className="bar-label">150 User</div>
                </div>
              </div>
            </div>
            
            <div className="chart-container">
              <div className="chart-title">Maintenance – Was wir dafür leisten</div>
              <div className="maintenance-grid">
                <div className="maintenance-item">
                  <div className="maintenance-icon">⟳</div>
                  <div className="maintenance-text">
                    <strong>System-Updates</strong>
                    <span>OpenWebUI & LiteLLM aktuell halten</span>
                  </div>
                </div>
                <div className="maintenance-item">
                  <div className="maintenance-icon">🛡</div>
                  <div className="maintenance-text">
                    <strong>Sicherheitspatches</strong>
                    <span>Zeitnahe Installation kritischer Updates</span>
                  </div>
                </div>
                <div className="maintenance-item">
                  <div className="maintenance-icon">◉</div>
                  <div className="maintenance-text">
                    <strong>Monitoring</strong>
                    <span>Verfügbarkeitsüberwachung 24/7</span>
                  </div>
                </div>
                <div className="maintenance-item">
                  <div className="maintenance-icon">📊</div>
                  <div className="maintenance-text">
                    <strong>Kosten-Reporting</strong>
                    <span>Monatlicher Bericht pro User/Team</span>
                  </div>
                </div>
                <div className="maintenance-item">
                  <div className="maintenance-icon">✉</div>
                  <div className="maintenance-text">
                    <strong>E-Mail-Support</strong>
                    <span>Reaktionszeit: 24 Stunden</span>
                  </div>
                </div>
                <div className="maintenance-item">
                  <div className="maintenance-icon">👤</div>
                  <div className="maintenance-text">
                    <strong>User-Management</strong>
                    <span>Onboarding & Offboarding</span>
                  </div>
                </div>
                <div className="maintenance-item">
                  <div className="maintenance-icon">🤖</div>
                  <div className="maintenance-text">
                    <strong>Neue Modelle</strong>
                    <span>Integration auf Anfrage</span>
                  </div>
                </div>
                <div className="maintenance-item">
                  <div className="maintenance-icon">🔧</div>
                  <div className="maintenance-text">
                    <strong>Troubleshooting</strong>
                    <span>Fehleranalyse & Behebung</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="chart-container">
              <div className="chart-title">Jahresübersicht bei 70 Usern</div>
              <div className="comparison-bars">
                <div className="comparison-item">
                  <div className="comparison-label">
                    <span>Jahr 1 (Setup + 12 Monate)</span>
                    <span style={{ color: '#00ffff' }}>12.700 €</span>
                  </div>
                  <div className="comparison-bar-bg">
                    <div className="comparison-bar-fill fill-sonaris" style={{ width: '100%' }}>
                      5.500 € Setup + 7.200 € Maintenance
                    </div>
                  </div>
                </div>
                <div className="comparison-item">
                  <div className="comparison-label">
                    <span>Folgejahre</span>
                    <span style={{ color: '#00ffff' }}>7.200 €/Jahr</span>
                  </div>
                  <div className="comparison-bar-bg">
                    <div className="comparison-bar-fill fill-sonaris" style={{ width: '57%' }}>
                      12 × 600 € Maintenance
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 6: Next Steps */}
        {activeTab === 'next' && (
          <section className="section">
            <h1>Nächste Schritte</h1>
            
            <ol className="steps-list">
              <li>Vertragsentwurf zusenden</li>
              <li>Startdatum festlegen</li>
              <li>Erste Rechnung nach Vertragsunterzeichnung</li>
            </ol>
            
            <div className="callout">
              <div className="callout-title">Zusammenfassung</div>
              <table className="price-table" style={{ marginTop: '15px' }}>
                <tbody>
                  <tr>
                    <td>Setup (einmalig)</td>
                    <td className="price-highlight">5.500 €</td>
                  </tr>
                  <tr>
                    <td>Monatlich (70 User)</td>
                    <td className="price-highlight">600 €</td>
                  </tr>
                  <tr>
                    <td>Jahr 1 gesamt</td>
                    <td className="price-highlight">12.700 €</td>
                  </tr>
                  <tr>
                    <td>Folgejahre</td>
                    <td className="price-highlight">7.200 €/Jahr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 style={{ marginTop: '40px' }}>Kernargumente</h2>
            <div className="two-col">
              <div>
                <h3>Skalierbarkeit</h3>
                <p>Bei Wachstum sinkt der Preis pro User automatisch durch die Staffelung.</p>
              </div>
              <div>
                <h3>Planbarkeit</h3>
                <p>Fixe monatliche Kosten, keine versteckten Gebühren, transparentes Reporting.</p>
              </div>
              <div>
                <h3>Lokaler Partner</h3>
                <p>Direkter Ansprechpartner in Deutschland statt US-Support.</p>
              </div>
              <div>
                <h3>Multi-Provider</h3>
                <p>Zugang zu allen führenden KI-Modellen über eine zentrale Plattform.</p>
              </div>
            </div>
          </section>
        )}

        <footer className="footer">
          SONARIS · sonaris.de · Enterprise KI Hub
        </footer>
      </div>
    </div>
  );
};

export default EnterpriseKiHub;
