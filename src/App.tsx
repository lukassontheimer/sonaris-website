import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutSonaris from "./pages/AboutSonaris";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import FirstContact from "./pages/FirstContact";
import DsgvoTools from "./pages/DsgvoTools";
import RechtssicherArbeiten from "./pages/RechtssicherArbeiten";
import Bereich1 from "./pages/Bereich1";
import Bereich2 from "./pages/Bereich2";
import Bereich3 from "./pages/Bereich3";
import Bereich4 from "./pages/Bereich4";
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
          <Route path="/first-contact" element={<FirstContact />} />
          <Route path="/dsgvo-tools" element={<DsgvoTools />} />
          <Route path="/rechtssicher-arbeiten" element={<RechtssicherArbeiten />} />
          <Route path="/first-contact/bereich-1" element={<Bereich1 />} />
          <Route path="/first-contact/bereich-2" element={<Bereich2 />} />
          <Route path="/first-contact/bereich-3" element={<Bereich3 />} />
          <Route path="/first-contact/bereich-4" element={<Bereich4 />} />
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
