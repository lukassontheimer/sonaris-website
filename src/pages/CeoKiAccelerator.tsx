import { useEffect } from "react";

const CeoKiAccelerator = () => {
  useEffect(() => {
    document.title = "CEO KI Accelerator | SONARIS";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">CEO KI Accelerator</h1>
        <p className="text-muted-foreground">Inhalt folgt...</p>
        
        <footer className="mt-16 pt-8 border-t border-border flex justify-between items-center text-sm text-muted-foreground">
          <span>SONARIS AI CONSULTING</span>
          <a 
            href="https://sonaris.de/impressum" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:underline"
          >
            Impressum
          </a>
        </footer>
      </div>
    </div>
  );
};

export default CeoKiAccelerator;
