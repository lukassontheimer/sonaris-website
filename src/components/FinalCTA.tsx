import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !scriptLoaded) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [scriptLoaded]);

  useEffect(() => {
    if (isVisible && !scriptLoaded) {
      // Load HubSpot meetings script lazily
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      setScriptLoaded(true);

      return () => {
        // Cleanup script on unmount
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isVisible, scriptLoaded]);

  return <section id="final-cta" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <Card className="relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-primary/20">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-[1px] rounded-lg">
            <div className="h-full w-full bg-card rounded-lg"></div>
          </div>
          
          <CardContent className="relative z-10 p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-headline mb-4 sm:mb-6">
              Bereit für den <span className="gradient-text">nächsten Schritt?</span>
            </h2>
            
            <p className="text-base sm:text-lg text-body mb-6 sm:mb-8 max-w-2xl mx-auto">Ein viruteller Espesso mit uns könnte der Anfang deiner KI-Reise sein.</p>
            
            {/* HubSpot Meeting Booking Form */}
            <div 
              className="meetings-iframe-container min-h-[400px] sm:min-h-[500px]" 
              data-src="https://meetings-eu1.hubspot.com/oandrees?embed=true"
            ></div>
            
            <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-foreground-secondary">
              Unverbindlich • DSGVO-konform • Praxisorientiert
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default FinalCTA;