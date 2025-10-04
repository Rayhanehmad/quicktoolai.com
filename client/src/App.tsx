import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { GoogleAnalytics } from "@/components/google-analytics";
import { CookieConsent, isAnalyticsEnabled } from "@/components/cookie-consent";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Get GA measurement ID from environment variable
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const analyticsConsent = isAnalyticsEnabled();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="timetools-theme">
        <TooltipProvider>
          <Toaster />
          {analyticsConsent && gaId && <GoogleAnalytics measurementId={gaId} />}
          <CookieConsent />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
