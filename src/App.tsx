import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AccountDeletion from "./pages/AccountDeletion";
import Contact from "./pages/Contact";
import DownloadRedirect from "./pages/DownloadRedirect";
import Downloads from "./pages/Downloads";
import DriverAgreement from "./pages/DriverAgreement";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ParentStudentAgreement from "./pages/ParentStudentAgreement";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import SafetyPolicy from "./pages/SafetyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import VanOwnerAgreement from "./pages/VanOwnerAgreement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/download/:appType" element={<DownloadRedirect />} />
          {/* Legal pages - Public routes for web view */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/parent-student-agreement" element={<ParentStudentAgreement />} />
          <Route path="/driver-agreement" element={<DriverAgreement />} />
          <Route path="/van-owner-agreement" element={<VanOwnerAgreement />} />
          <Route path="/safety-policy" element={<SafetyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/account-deletion" element={<AccountDeletion />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
