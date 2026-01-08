import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BusinessOwners from "./pages/BusinessOwners";
import CrewMembers from "./pages/CrewMembers";
import Pricing from "./pages/Pricing";
import OnboardingBusiness from "./pages/OnboardingBusiness";
import OnboardingCrew from "./pages/OnboardingCrew";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import HelpCenter from "./pages/HelpCenter";
import Developers from "./pages/Developers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/business" element={<BusinessOwners />} />
          <Route path="/crew" element={<CrewMembers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/onboarding/business" element={<OnboardingBusiness />} />
          <Route path="/onboarding/crew" element={<OnboardingCrew />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/developers" element={<Developers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
