import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutSonaris from "./pages/AboutSonaris";
import LukasSontheimer from "./pages/LukasSontheimer";
import LorenzSurkemper from "./pages/LorenzSurkemper";
import OliverAndrees from "./pages/OliverAndrees";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import FirstContact from "./pages/FirstContact";
import DsgvoTools from "./pages/DsgvoTools";
import RechtssicherArbeiten from "./pages/RechtssicherArbeiten";
import RoiVonKi from "./pages/RoiVonKi";
import Sektion1 from "./pages/Sektion1";
import Sektion2 from "./pages/Sektion2";
import Sektion3 from "./pages/Sektion3";
import Sektion4 from "./pages/Sektion4";
import Bereich1 from "./pages/Bereich1";
import Bereich2 from "./pages/Bereich2";
import Bereich3 from "./pages/Bereich3";
import Bereich4 from "./pages/Bereich4";
import Spectrum from "./pages/Spectrum";
import FirstContactSpectrum from "./pages/spectrum/FirstContactSpectrum";
import Onboarding from "./pages/spectrum/Onboarding";
import BridgeBuilding from "./pages/spectrum/BridgeBuilding";
import FuturePacing from "./pages/spectrum/FuturePacing";
import ExperienceEcho from "./pages/spectrum/ExperienceEcho";
import ResonatingEcho from "./pages/spectrum/ResonatingEcho";
import Transmission from "./pages/spectrum/Transmission";
import PromptGallery from "./pages/spectrum/PromptGallery";
import KiGrundlagen from "./pages/spectrum/KiGrundlagen";
import DatenVerstehen from "./pages/spectrum/DatenVerstehen";
import GrundlagenKI from "./pages/spectrum/GrundlagenKI";
import Dive from "./pages/spectrum/Dive";
import KiAnamnese from "./pages/KiAnamnese";
import EnterpriseKiHub from "./pages/EnterpriseKiHub";
import CeoKiAccelerator from "./pages/CeoKiAccelerator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-sonaris" element={<AboutSonaris />} />
          <Route path="/lukas-sontheimer" element={<LukasSontheimer />} />
          <Route path="/lorenz-surkemper" element={<LorenzSurkemper />} />
          <Route path="/oliver-andrees" element={<OliverAndrees />} />
          <Route path="/first-contact" element={<FirstContact />} />
          <Route path="/dsgvo-tools" element={<DsgvoTools />} />
          <Route path="/rechtssicher-arbeiten" element={<RechtssicherArbeiten />} />
          <Route path="/roi-von-ki" element={<RoiVonKi />} />
          <Route path="/sektion-1" element={<Sektion1 />} />
          <Route path="/sektion-2" element={<Sektion2 />} />
          <Route path="/sektion-3" element={<Sektion3 />} />
          <Route path="/sektion-4" element={<Sektion4 />} />
          <Route path="/first-contact/bereich-1" element={<Bereich1 />} />
          <Route path="/first-contact/bereich-2" element={<Bereich2 />} />
          <Route path="/first-contact/bereich-3" element={<Bereich3 />} />
          <Route path="/first-contact/bereich-4" element={<Bereich4 />} />
          <Route path="/spectrum" element={<Spectrum />} />
          <Route path="/spectrum/first-contact" element={<FirstContactSpectrum />} />
          <Route path="/spectrum/onboarding" element={<Onboarding />} />
          <Route path="/spectrum/bridge-building" element={<BridgeBuilding />} />
          <Route path="/spectrum/future-pacing" element={<FuturePacing />} />
          <Route path="/spectrum/experience-echo" element={<ExperienceEcho />} />
          <Route path="/spectrum/resonating-echo" element={<ResonatingEcho />} />
          <Route path="/spectrum/transmission" element={<Transmission />} />
          <Route path="/spectrum/prompt-gallery" element={<PromptGallery />} />
          <Route path="/spectrum/ki-grundlagen" element={<KiGrundlagen />} />
          <Route path="/spectrum/daten-verstehen" element={<DatenVerstehen />} />
          <Route path="/spectrum/grundlagen-ki" element={<GrundlagenKI />} />
          <Route path="/spectrum/dive" element={<Dive />} />
          <Route path="/ki-anamnese" element={<KiAnamnese />} />
          <Route path="/enterprise-ki-hub" element={<EnterpriseKiHub />} />
          <Route path="/ceo-ki-accelerator" element={<CeoKiAccelerator />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
