import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ContentItem {
  t: string;
  c: string;
  txt: string;
}

interface ContentDB {
  [key: string]: ContentItem;
}

const Dive = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorLabel, setCursorLabel] = useState("READY");
  const [cursorClass, setCursorClass] = useState("");
  const [statusText, setStatusText] = useState("SYSTEM IDLE // TRINITY CORE DETECTED");
  const [statusColor, setStatusColor] = useState("cyan");
  const [navHintText, setNavHintText] = useState("SELECT A CORE TO ACCESS DATA");
  const [activeCore, setActiveCore] = useState<number | null>(null);
  const [modalData, setModalData] = useState<ContentItem | null>(null);

  const contentDB: ContentDB = {
    // CORE 1: Services (Blue)
    'train': { t: "Training & Kompetenz", c: "cyan", txt: "Wir befähigen Ihr Team. Keine Blackboxen, sondern echte Kompetenz durch interaktive Workshops." },
    'strat': { t: "Strategische Beratung", c: "cyan", txt: "Ihre Roadmap zum Erfolg. Wir analysieren Potentiale und minimieren Risiken." },
    'dev': { t: "Entwicklung & Integration", c: "cyan", txt: "Maßgeschneiderte Systeme. Wir bauen die Infrastruktur, die Sie wirklich brauchen." },
    
    // CORE 2: Spectrum (Purple)
    'spec1': { t: "First Contact", c: "#ff00ff", txt: "Der erste Schritt in den Sonaris Orbit. Wir analysieren Ihre Ausgangslage." },
    'spec2': { t: "Onboarding", c: "#ff00ff", txt: "Wir holen Ihr Team an Bord und machen die Ziele klar." },
    'spec3': { t: "Bridge Building", c: "#ff00ff", txt: "Wir bauen die Brücke zwischen Ihrer heutigen IT und der KI-Zukunft." },
    'spec4': { t: "Future Pacing", c: "#ff00ff", txt: "Ein Blick voraus: Wie sieht Ihr Unternehmen in 5 Jahren mit KI aus?" },
    'spec5': { t: "Experience Echo", c: "#ff00ff", txt: "Feedback-Schleifen etablieren. Lernen aus ersten Piloten." },
    'spec6': { t: "Resonating Echo", c: "#ff00ff", txt: "Skalierung der erfolgreichen Konzepte auf das ganze Unternehmen." },
    'spec7': { t: "Transmission", c: "#ff00ff", txt: "Vollständige Übergabe. Ihr System läuft autark." },

    // CORE 3: Essentials (Gold)
    'ess1': { t: "First Contact, einfach beginnen", c: "#ffaa00", txt: "KI-Nutzung beginnt mit einzelnen Momenten. Wir zeigen euch, wie sich diese Momente zu tragfähigen Mustern verdichten." },
    'ess2': { t: "Welche Tools sind DSGVO-konform?", c: "#ffaa00", txt: "Nicht jedes Tool ist sicher. Wir geben einen Überblick über den aktuellen Stand der Datenschutz-Konformität." },
    'ess3': { t: "Rechtssicher arbeiten", c: "#ffaa00", txt: "Der EU AI Act und Urheberrecht sind komplex. Wir navigieren Sie sicher durch die rechtlichen Anforderungen." },
    'ess4': { t: "Was ist der ROI von KI?", c: "#ffaa00", txt: "KI muss sich rechnen. Wir berechnen mit Ihnen den konkreten Return on Investment für Ihre Anwendungsfälle." }
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.02);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Create cores
    const createCore = (color: number, xPos: number) => {
      const group = new THREE.Group();
      const geo = new THREE.IcosahedronGeometry(0.8, 1);
      const mat = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.5 });
      const mesh = new THREE.Mesh(geo, mat);
      const inner = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.4, 0),
        new THREE.MeshBasicMaterial({ color })
      );
      group.add(mesh);
      group.add(inner);
      group.position.x = xPos;
      scene.add(group);
      return { group, mesh, inner, color };
    };

    const core1 = createCore(0x00ffff, -2.5);
    const core2 = createCore(0xff00ff, 0);
    const core3 = createCore(0xffaa00, 2.5);

    // Particles
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(3000);
    for (let i = 0; i < 3000; i++) pPos[i] = (Math.random() - 0.5) * 30;
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const stars = new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 0.04, color: 0x555555 }));
    scene.add(stars);

    // State
    let state = 'IDLE';
    let hoveredCoreId: number | null = null;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      if (state === 'IDLE') {
        camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      }
    };

    // Click handler
    const handleClick = () => {
      if (state !== 'IDLE') {
        resetSystem();
      } else if (hoveredCoreId) {
        activateCore(hoveredCoreId);
      }
    };

    const activateCore = (id: number) => {
      state = 'ACTIVE';
      setActiveCore(id);
      setNavHintText("SELECT DATA NODE");

      if (id === 1) {
        setStatusText("ACCESS: SERVICES (CYAN)");
        setStatusColor("cyan");
        focusCore(core1, [core2, core3]);
      } else if (id === 2) {
        setStatusText("ACCESS: SPECTRUM (VIOLET)");
        setStatusColor("#ff00ff");
        focusCore(core2, [core1, core3]);
      } else if (id === 3) {
        setStatusText("ACCESS: ESSENTIALS (GOLD)");
        setStatusColor("#ffaa00");
        focusCore(core3, [core1, core2]);
      }
    };

    const focusCore = (target: any, others: any[]) => {
      const t1 = setInterval(() => {
        target.group.position.x += (0 - target.group.position.x) * 0.1;
        target.group.position.y += (1.8 - target.group.position.y) * 0.1;

        others.forEach(o => {
          o.group.position.y += (-5 - o.group.position.y) * 0.05;
        });

        if (Math.abs(target.group.position.x) < 0.01) clearInterval(t1);
      }, 16);
    };

    const resetSystem = () => {
      state = 'IDLE';
      setActiveCore(null);
      setStatusText("SYSTEM IDLE // TRINITY CORE DETECTED");
      setStatusColor("cyan");
      setNavHintText("SELECT A CORE");

      const t2 = setInterval(() => {
        core1.group.position.x += (-2.5 - core1.group.position.x) * 0.1;
        core1.group.position.y += (0 - core1.group.position.y) * 0.1;

        core2.group.position.x += (0 - core2.group.position.x) * 0.1;
        core2.group.position.y += (0 - core2.group.position.y) * 0.1;

        core3.group.position.x += (2.5 - core3.group.position.x) * 0.1;
        core3.group.position.y += (0 - core3.group.position.y) * 0.1;

        if (Math.abs(core1.group.position.x + 2.5) < 0.01) clearInterval(t2);
      }, 16);
    };

    const checkHover = () => {
      if (state !== 'IDLE') {
        setCursorClass('');
        setCursorLabel('');
        return;
      }

      raycaster.setFromCamera(mouse, camera);

      const hit1 = raycaster.intersectObjects(core1.group.children).length > 0;
      const hit2 = raycaster.intersectObjects(core2.group.children).length > 0;
      const hit3 = raycaster.intersectObjects(core3.group.children).length > 0;

      if (hit1) {
        hoveredCoreId = 1;
        setCursorClass('scanning-blue');
        setCursorLabel('SCAN: SERVICES');
        core1.mesh.material.opacity = 0.9;
        core2.mesh.material.opacity = 0.5;
        core3.mesh.material.opacity = 0.5;
      } else if (hit2) {
        hoveredCoreId = 2;
        setCursorClass('scanning-purple');
        setCursorLabel('SCAN: SPECTRUM');
        core1.mesh.material.opacity = 0.5;
        core2.mesh.material.opacity = 0.9;
        core3.mesh.material.opacity = 0.5;
      } else if (hit3) {
        hoveredCoreId = 3;
        setCursorClass('scanning-gold');
        setCursorLabel('SCAN: ESSENTIALS');
        core1.mesh.material.opacity = 0.5;
        core2.mesh.material.opacity = 0.5;
        core3.mesh.material.opacity = 0.9;
      } else {
        hoveredCoreId = null;
        setCursorClass('');
        setCursorLabel('READY');
        core1.mesh.material.opacity = 0.5;
        core2.mesh.material.opacity = 0.5;
        core3.mesh.material.opacity = 0.5;
      }
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      core1.group.rotation.y += 0.005;
      core1.group.rotation.x += 0.002;
      core2.group.rotation.y -= 0.005;
      core2.group.rotation.x -= 0.002;
      core3.group.rotation.y += 0.006;
      core3.group.rotation.x -= 0.001;
      stars.rotation.y += 0.0005;
      checkHover();
      renderer.render(scene, camera);
    };
    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      canvasRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  const openData = (key: string) => {
    setModalData(contentDB[key]);
  };

  const closeData = () => {
    setModalData(null);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden" style={{ cursor: 'none' }}>
      <Navigation />
      
      {/* Three.js Canvas */}
      <div ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[1]" />

      {/* Vignette */}
      <div className="fixed top-0 left-0 w-full h-full z-[10] pointer-events-auto"
           style={{ background: 'radial-gradient(circle, transparent 20%, #000 100%)' }} />

      {/* Scanlines */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[11]"
           style={{ 
             background: 'linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%)',
             backgroundSize: '100% 4px'
           }} />

      {/* HUD */}
      <div className="fixed top-8 left-8 z-20 pointer-events-none font-mono">
        <h1 className="text-xl tracking-[5px] uppercase" style={{ color: 'cyan', textShadow: '0 0 10px cyan' }}>
          SONARIS
        </h1>
        <div className="text-[10px] mt-1" style={{ color: statusColor }}>
          {statusText}
        </div>
      </div>

      <div className="fixed bottom-12 w-full text-center text-white text-[10px] tracking-[3px] z-20 pointer-events-none opacity-60">
        {navHintText}
      </div>

      {/* Core 1 Content (Blue) */}
      {activeCore === 1 && (
        <div className="fixed top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-5 z-50 perspective-1000">
          {[
            { key: 'train', icon: '📖', label: 'Training' },
            { key: 'strat', icon: '🎯', label: 'Strategie' },
            { key: 'dev', icon: '⚙️', label: 'Integration' }
          ].map((item, i) => (
            <div
              key={item.key}
              onClick={() => openData(item.key)}
              className="bg-[rgba(0,5,10,0.9)] border border-[#333] border-l-[3px] border-l-cyan text-white p-4 h-[100px] w-[140px] flex flex-col items-center justify-center text-center cursor-none hover:scale-105 hover:bg-[rgba(0,20,30,0.95)] transition-all duration-300 pointer-events-auto animate-fade-in"
              style={{
                animationDelay: `${i * 50}ms`,
                boxShadow: '0 0 15px rgba(0,0,0,0.8)'
              }}
            >
              <div className="text-2xl text-cyan mb-2">{item.icon}</div>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Core 2 Content (Purple) */}
      {activeCore === 2 && (
        <div className="fixed top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-4 w-[600px] z-50">
          {[
            { key: 'spec1', label: 'First Contact' },
            { key: 'spec2', label: 'Onboarding' },
            { key: 'spec3', label: 'Bridge Building' },
            { key: 'spec4', label: 'Future Pacing' },
            { key: 'spec5', label: 'Experience Echo' },
            { key: 'spec6', label: 'Resonating Echo' }
          ].map((item, i) => (
            <div
              key={item.key}
              onClick={() => openData(item.key)}
              className="bg-[rgba(0,5,10,0.9)] border border-[#333] border-l-[3px] border-l-[#ff00ff] text-white p-4 flex items-center justify-between cursor-none hover:scale-105 hover:bg-[rgba(30,0,30,0.95)] transition-all duration-300 pointer-events-auto animate-fade-in"
              style={{
                animationDelay: `${i * 50}ms`,
                boxShadow: '0 0 15px rgba(0,0,0,0.8)'
              }}
            >
              <span className="text-sm">{item.label}</span>
              <div className="text-[#ff00ff]">→</div>
            </div>
          ))}
          <div
            onClick={() => openData('spec7')}
            className="col-span-2 bg-[rgba(0,5,10,0.9)] border border-[#333] border-l-[3px] border-l-[#ff00ff] text-white p-4 flex items-center justify-between cursor-none hover:scale-105 hover:bg-[rgba(30,0,30,0.95)] transition-all duration-300 pointer-events-auto animate-fade-in"
            style={{
              animationDelay: '300ms',
              boxShadow: '0 0 15px rgba(0,0,0,0.8)'
            }}
          >
            <span className="text-sm">Transmission</span>
            <div className="text-[#ff00ff]">→</div>
          </div>
        </div>
      )}

      {/* Core 3 Content (Gold) */}
      {activeCore === 3 && (
        <div className="fixed top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-1 gap-4 w-[500px] z-50">
          {[
            { key: 'ess1', label: 'First Contact, einfach beginnen' },
            { key: 'ess2', label: 'Welche Tools sind DSGVO-konform?' },
            { key: 'ess3', label: 'Rechtssicher mit KI-Plattformen arbeiten.' },
            { key: 'ess4', label: 'Was ist der ROI von KI?' }
          ].map((item, i) => (
            <div
              key={item.key}
              onClick={() => openData(item.key)}
              className="bg-[rgba(0,5,10,0.9)] border border-[#333] border-l-[3px] border-l-[#ffaa00] text-white p-5 flex items-center justify-between cursor-none hover:scale-105 hover:bg-[rgba(30,20,0,0.95)] transition-all duration-300 pointer-events-auto animate-fade-in"
              style={{
                animationDelay: `${i * 50}ms`,
                boxShadow: '0 0 15px rgba(0,0,0,0.8)'
              }}
            >
              <span className="text-sm font-bold tracking-wide">{item.label}</span>
              <div className="text-[#ffaa00]">→</div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {modalData && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/85 z-[100] flex items-center justify-center backdrop-blur-sm"
          onClick={closeData}
        >
          <div
            className="w-[600px] max-w-[85%] border bg-black p-10 relative shadow-2xl"
            style={{ borderColor: modalData.c }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute top-4 right-4 text-[#555] text-xl cursor-pointer hover:text-white transition-colors"
              onClick={closeData}
            >
              ✖
            </div>
            <h3
              className="mt-0 tracking-[2px] uppercase text-lg mb-4"
              style={{ color: modalData.c }}
            >
              {modalData.t}
            </h3>
            <div className="h-[1px] bg-[#333] my-4" />
            <div className="text-[#ccc] text-sm leading-relaxed">
              {modalData.txt}
            </div>
          </div>
        </div>
      )}

      {/* Custom Cursor */}
      <div
        className={`fixed w-8 h-8 border border-cyan rounded-full pointer-events-none z-[1000] transition-all duration-200 mix-blend-difference ${cursorClass}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div
        className="fixed text-cyan text-[9px] font-bold pointer-events-none z-[1001] whitespace-nowrap"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(20px, 20px)',
          textShadow: '0 0 2px #000'
        }}
      >
        {cursorLabel}
      </div>

      <Footer />

      <style>{`
        .scanning-blue {
          border-color: cyan;
          border-style: dashed;
          animation: spin 2s linear infinite;
          width: 50px;
          height: 50px;
        }
        .scanning-purple {
          border-color: #ff00ff;
          border-style: dashed;
          animation: spin 2s linear infinite;
          width: 50px;
          height: 50px;
        }
        .scanning-gold {
          border-color: #ffaa00;
          border-style: dashed;
          animation: spin 2s linear infinite;
          width: 50px;
          height: 50px;
        }
        @keyframes spin {
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Dive;
