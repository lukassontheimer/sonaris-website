import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Dive = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", color: "", text: "" });

  useEffect(() => {
    if (!mountRef.current) return;

    // Content database
    const db: Record<string, { t: string; c: string; txt: string }> = {
      train: { t: "Training & Kompetenz", c: "cyan", txt: "Wir befähigen Ihr Team. Keine Blackboxen, sondern echte Kompetenz durch interaktive Workshops." },
      strat: { t: "Strategische Beratung", c: "cyan", txt: "Ihre Roadmap zum Erfolg. Wir analysieren Potentiale und minimieren Risiken." },
      dev: { t: "Entwicklung & Integration", c: "cyan", txt: "Maßgeschneiderte Systeme. Wir bauen die Infrastruktur, die Sie wirklich brauchen." },
      spec1: { t: "First Contact", c: "#ff00ff", txt: "Der erste Schritt in den Sonaris Orbit. Wir analysieren Ihre Ausgangslage." },
      spec2: { t: "Onboarding", c: "#ff00ff", txt: "Wir holen Ihr Team an Bord und machen die Ziele klar." },
      spec3: { t: "Bridge Building", c: "#ff00ff", txt: "Wir bauen die Brücke zwischen Ihrer heutigen IT und der KI-Zukunft." },
      spec4: { t: "Future Pacing", c: "#ff00ff", txt: "Ein Blick voraus: Wie sieht Ihr Unternehmen in 5 Jahren mit KI aus?" },
      spec5: { t: "Experience Echo", c: "#ff00ff", txt: "Feedback-Schleifen etablieren. Lernen aus ersten Piloten." },
      spec6: { t: "Resonating Echo", c: "#ff00ff", txt: "Skalierung der erfolgreichen Konzepte auf das ganze Unternehmen." },
      spec7: { t: "Transmission", c: "#ff00ff", txt: "Vollständige Übergabe. Ihr System läuft autark." },
      ess1: { t: "First Contact, einfach beginnen", c: "#ffaa00", txt: "KI-Nutzung beginnt mit einzelnen Momenten. Wir zeigen euch, wie sich diese Momente zu tragfähigen Mustern verdichten." },
      ess2: { t: "Welche Tools sind DSGVO-konform?", c: "#ffaa00", txt: "Nicht jedes Tool ist sicher. Wir geben einen Überblick über den aktuellen Stand der Datenschutz-Konformität." },
      ess3: { t: "Rechtssicher arbeiten", c: "#ffaa00", txt: "Der EU AI Act und Urheberrecht sind komplex. Wir navigieren Sie sicher durch die rechtlichen Anforderungen." },
      ess4: { t: "Was ist der ROI von KI?", c: "#ffaa00", txt: "KI muss sich rechnen. Wir berechnen mit Ihnen den konkreten Return on Investment für Ihre Anwendungsfälle." }
    };

    // Setup Three.js
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.02);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

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
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const stars = new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 0.04, color: 0x555555 }));
    scene.add(stars);

    // State
    let state = "IDLE";
    let hoveredCoreId: number | null = null;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // UI Elements
    const cursor = document.getElementById("cursor");
    const cursorLbl = document.getElementById("cursor-label");
    const hudStatus = document.getElementById("status-text");
    const navHint = document.getElementById("nav-hint");
    const contBlue = document.getElementById("container-blue");
    const contPurple = document.getElementById("container-purple");
    const contGold = document.getElementById("container-gold");

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
      if (cursorLbl) {
        cursorLbl.style.left = e.clientX + "px";
        cursorLbl.style.top = e.clientY + "px";
      }
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      if (state === "IDLE") {
        camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      }
    };

    // Click handler
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (state !== "IDLE" && (target.id === "orbit-layer" || target.tagName === "CANVAS")) {
        resetSystem();
        return;
      }
      if (state === "IDLE" && hoveredCoreId) {
        activateCore(hoveredCoreId);
      }
    };

    const activateCore = (id: number) => {
      state = "ACTIVE";
      if (navHint) navHint.innerText = "SELECT DATA NODE";

      if (id === 1) {
        if (hudStatus) {
          hudStatus.innerText = "ACCESS: SERVICES (CYAN)";
          hudStatus.style.color = "cyan";
        }
        if (contBlue) {
          contBlue.style.display = "flex";
          animateNodes(".blue-theme .node-btn");
        }
        focusCore(core1, [core2, core3]);
      } else if (id === 2) {
        if (hudStatus) {
          hudStatus.innerText = "ACCESS: SPECTRUM (VIOLET)";
          hudStatus.style.color = "#ff00ff";
        }
        if (contPurple) {
          contPurple.style.display = "grid";
          animateNodes(".purple-theme .node-btn");
        }
        focusCore(core2, [core1, core3]);
      } else if (id === 3) {
        if (hudStatus) {
          hudStatus.innerText = "ACCESS: ESSENTIALS (GOLD)";
          hudStatus.style.color = "#ffaa00";
        }
        if (contGold) {
          contGold.style.display = "grid";
          animateNodes(".gold-theme .node-btn");
        }
        focusCore(core3, [core1, core2]);
      }
    };

    const focusCore = (target: any, others: any[]) => {
      const t1 = setInterval(() => {
        target.group.position.x += (0 - target.group.position.x) * 0.1;
        target.group.position.y += (1.8 - target.group.position.y) * 0.1;

        others.forEach((o) => {
          o.group.position.y += (-5 - o.group.position.y) * 0.05;
        });

        if (Math.abs(target.group.position.x) < 0.01) clearInterval(t1);
      }, 16);
    };

    const resetSystem = () => {
      state = "IDLE";
      if (hudStatus) {
        hudStatus.innerText = "SYSTEM IDLE // TRINITY CORE DETECTED";
        hudStatus.style.color = "cyan";
      }
      if (navHint) navHint.innerText = "SELECT A CORE";
      if (contBlue) contBlue.style.display = "none";
      if (contPurple) contPurple.style.display = "none";
      if (contGold) contGold.style.display = "none";

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

    const animateNodes = (selector: string) => {
      const els = document.querySelectorAll(selector);
      els.forEach((el, i) => {
        const element = el as HTMLElement;
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, 100 + i * 50);
      });
    };

    const checkHover = () => {
      if (state !== "IDLE") {
        if (cursor) cursor.className = "";
        if (cursorLbl) cursorLbl.innerText = "";
        return;
      }
      raycaster.setFromCamera(mouse, camera);

      const hit1 = raycaster.intersectObjects(core1.group.children).length > 0;
      const hit2 = raycaster.intersectObjects(core2.group.children).length > 0;
      const hit3 = raycaster.intersectObjects(core3.group.children).length > 0;

      if (hit1) setHover(1, "scanning-blue", "SCAN: SERVICES", core1.mesh);
      else if (hit2) setHover(2, "scanning-purple", "SCAN: SPECTRUM", core2.mesh);
      else if (hit3) setHover(3, "scanning-gold", "SCAN: ESSENTIALS", core3.mesh);
      else {
        hoveredCoreId = null;
        if (cursor) cursor.className = "";
        if (cursorLbl) cursorLbl.innerText = "READY";
        core1.mesh.material.opacity = 0.5;
        core2.mesh.material.opacity = 0.5;
        core3.mesh.material.opacity = 0.5;
      }
    };

    const setHover = (id: number, cls: string, txt: string, mesh: any) => {
      hoveredCoreId = id;
      if (cursor) cursor.className = cls;
      if (cursorLbl) cursorLbl.innerText = txt;
      mesh.material.opacity = 0.9;
    };

    // Global functions
    (window as any).openData = (key: string) => {
      const item = db[key];
      setModalContent({ title: item.t, color: item.c, text: item.txt });
      setIsModalOpen(true);
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
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <style>{`
        .sonaris-wrapper { font-family: 'Courier New', Courier, monospace; user-select: none; cursor: none; color: white; }
        canvas { display: block; position: fixed; top: 0; left: 0; z-index: 1; }
        .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; background: radial-gradient(circle, transparent 20%, #000 100%); pointer-events: auto; }
        .scanlines { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 11; background: linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%); background-size: 100% 4px; }
        #hud-top { position: fixed; top: 30px; left: 30px; z-index: 20; color: cyan; text-transform: uppercase; pointer-events: none; }
        .sonaris-h1 { margin: 0; font-size: 20px; letter-spacing: 5px; text-shadow: 0 0 10px cyan; line-height: 1.2; }
        .sub-text { font-size: 10px; color: #555; margin-top: 5px; }
        #nav-hint { position: fixed; bottom: 50px; width: 100%; text-align: center; left: 0; color: #fff; font-size: 10px; letter-spacing: 3px; z-index: 20; pointer-events: none; opacity: 0.6; }
        .module-container, .spectrum-container, .essentials-container { position: fixed; top: 60%; left: 50%; transform: translate(-50%, -50%); display: none; gap: 20px; z-index: 50; pointer-events: none; perspective: 1000px; }
        .spectrum-container { top: 55%; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 600px; }
        .essentials-container { top: 55%; grid-template-columns: 1fr; gap: 15px; width: 500px; }
        .node-btn { background: rgba(0, 5, 10, 0.9); border: 1px solid #333; color: #fff; padding: 15px; display: flex; align-items: center; justify-content: space-between; opacity: 0; transform: translateY(20px); transition: all 0.3s ease-out; pointer-events: auto; cursor: none; box-shadow: 0 0 15px rgba(0,0,0,0.8); box-sizing: border-box; }
        .node-btn:hover { transform: scale(1.02); z-index: 100; }
        .blue-theme .node-btn { border-left: 3px solid cyan; height: 100px; flex-direction: column; justify-content: center; text-align: center; width: 140px; }
        .blue-theme .node-btn:hover { border-color: cyan; background: rgba(0, 20, 30, 0.95); box-shadow: 0 0 20px rgba(0, 255, 255, 0.2); }
        .blue-theme .icon { font-size: 24px; color: cyan; margin-bottom: 10px; }
        .purple-theme { display: none; }
        .purple-theme .node-btn { border-left: 3px solid #ff00ff; padding: 15px 25px; height: auto; }
        .purple-theme .node-btn:hover { border-color: #ff00ff; background: rgba(30, 0, 30, 0.95); box-shadow: 0 0 20px rgba(255, 0, 255, 0.3); }
        .purple-theme .arrow { color: #ff00ff; }
        .gold-theme { display: none; }
        .gold-theme .node-btn { border-left: 3px solid #ffaa00; padding: 20px 25px; height: auto; }
        .gold-theme .node-btn:hover { border-color: #ffaa00; background: rgba(30, 20, 0, 0.95); box-shadow: 0 0 20px rgba(255, 170, 0, 0.3); }
        .gold-theme .arrow { color: #ffaa00; }
        .gold-theme span { font-weight: bold; letter-spacing: 1px; font-size: 13px; }
        .full-width { grid-column: span 2; }
        #cursor { position: fixed; top: 0; left: 0; width: 30px; height: 30px; border: 1px solid cyan; border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; z-index: 9999; transition: width 0.2s, height 0.2s, border-color 0.2s; mix-blend-mode: difference; }
        #cursor-label { position: fixed; top: 0; left: 0; color: cyan; font-size: 9px; font-weight: bold; transform: translate(20px, 20px); pointer-events: none; z-index: 10000; white-space: nowrap; text-shadow: 0 0 2px #000; }
        .scanning-blue #cursor { border-color: cyan; border-style: dashed; animation: spin 2s linear infinite; width: 50px; height: 50px; }
        .scanning-purple #cursor { border-color: #ff00ff; border-style: dashed; animation: spin 2s linear infinite; width: 50px; height: 50px; }
        .scanning-gold #cursor { border-color: #ffaa00; border-style: dashed; animation: spin 2s linear infinite; width: 50px; height: 50px; }
        @keyframes spin { 100% { transform: translate(-50%, -50%) rotate(360deg); } }
      `}</style>

      <div className="sonaris-wrapper" ref={mountRef}>
        <div className="overlay" id="orbit-layer"></div>
        <div className="scanlines"></div>

        <div id="hud-top">
          <h1 className="sonaris-h1" id="main-title">SONARIS</h1>
          <div className="sub-text" id="status-text">SYSTEM IDLE // TRINITY CORE DETECTED</div>
        </div>
        <div id="nav-hint">SELECT A CORE TO ACCESS DATA</div>

        <div className="module-container blue-theme" id="container-blue">
          <div className="node-btn" onClick={() => (window as any).openData("train")}>
            <div className="icon">📖</div>
            <span>Training</span>
          </div>
          <div className="node-btn" onClick={() => (window as any).openData("strat")}>
            <div className="icon">🎯</div>
            <span>Strategie</span>
          </div>
          <div className="node-btn" onClick={() => (window as any).openData("dev")}>
            <div className="icon">⚙️</div>
            <span>Integration</span>
          </div>
        </div>

        <div className="spectrum-container purple-theme" id="container-purple">
          <div className="node-btn" onClick={() => (window as any).openData("spec1")}>
            <span>First Contact</span>
            <div className="arrow">→</div>
          </div>
          <div className="node-btn" onClick={() => (window as any).openData("spec2")}>
            <span>Onboarding</span>
            <div className="arrow">→</div>
          </div>
          <div className="node-btn" onClick={() => (window as any).openData("spec3")}>
            <span>Bridge Building</span>
            <div className="arrow">→</div>
          </div>
          <div className="node-btn" onClick={() => (window as any).openData("spec4")}>
            <span>Future Pacing</span>
            <div className="arrow">→</div>
          </div>
          <div className="node-btn" onClick={() => (window as any).openData("spec5")}>
            <span>Experience Echo</span>
            <div className="arrow">→</div>
          </div>
          <div className="node-btn" onClick={() => (window as any).openData("spec6")}>
            <span>Resonating Echo</span>
            <div className="arrow">→</div>
          </div>
          <div className="node-btn full-width" onClick={() => (window as any).openData("spec7")}>
            <span>Transmission</span>
            <div className="arrow">→</div>
          </div>
        </div>

        <div className="essentials-container gold-theme" id="container-gold">
          <div className="node-btn" onClick={() => (window as any).openData("ess1")}>
            <span>First Contact, einfach beginnen</span>
            <div className="arrow">→</div>
          </div>
          <div className="node-btn" onClick={() => (window as any).openData("ess2")}>
            <span>Welche Tools sind DSGVO-konform?</span>
            <div className="arrow">→</div>
          </div>
          <div className="node-btn" onClick={() => (window as any).openData("ess3")}>
            <span>Rechtssicher mit KI-Plattformen arbeiten.</span>
            <div className="arrow">→</div>
          </div>
          <div className="node-btn" onClick={() => (window as any).openData("ess4")}>
            <span>Was ist der ROI von KI?</span>
            <div className="arrow">→</div>
          </div>
        </div>

        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.85)",
              zIndex: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backdropFilter: "blur(5px)",
            }}
            onClick={() => setIsModalOpen(false)}
          >
            <div
              style={{
                width: "600px",
                maxWidth: "85%",
                border: `1px solid ${modalContent.color}`,
                background: "#000",
                padding: "40px",
                position: "relative",
                boxShadow: "0 0 50px rgba(0,0,0,0.5)",
                color: "white",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  color: "#555",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
                onClick={() => setIsModalOpen(false)}
              >
                ✖
              </div>
              <h3
                style={{
                  marginTop: 0,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: modalContent.color,
                }}
              >
                {modalContent.title}
              </h3>
              <div style={{ height: "1px", background: "#333", margin: "15px 0" }}></div>
              <div style={{ color: "#ccc", fontSize: "13px", lineHeight: "1.6" }}>
                {modalContent.text}
              </div>
            </div>
          </div>
        )}

        <div id="cursor"></div>
        <div id="cursor-label"></div>
      </div>
    </>
  );
};

export default Dive;
