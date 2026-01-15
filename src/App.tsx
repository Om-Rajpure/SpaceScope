import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Events from "./pages/Events";
import Weather from "./pages/Weather";
import Missions from "./pages/Missions";
import Community from "./pages/Community";
import EarthImpact from "./pages/EarthImpact";
import Agriculture from "./pages/Agriculture";
import DisasterManagement from "./pages/DisasterManagement";
import Pollution from "./pages/Pollution";
import Climate from "./pages/Climate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/community" element={<Community />} />
            <Route path="/earth-impact" element={<EarthImpact />} />
            <Route path="/earth-impact/agriculture" element={<Agriculture />} />
            <Route path="/earth-impact/disaster-management" element={<DisasterManagement />} />
            <Route path="/earth-impact/pollution" element={<Pollution />} />
            <Route path="/earth-impact/climate" element={<Climate />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
