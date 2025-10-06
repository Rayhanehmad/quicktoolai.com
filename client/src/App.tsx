import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { GoogleAnalytics } from "@/components/google-analytics";
import { CookieConsent, isAnalyticsEnabled } from "@/components/cookie-consent";
import { PWAInstall } from "@/components/pwa-install";
import { FavoritesProvider } from "@/contexts/favorites-context";
import { registerServiceWorker } from "@/lib/pwa-register";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Financial Tools
import PercentageCalculatorPage from "@/pages/tools/percentage-calculator";
import LoanCalculatorPage from "@/pages/tools/loan-calculator";
import MortgageCalculatorPage from "@/pages/tools/mortgage-calculator";
import InterestCalculatorPage from "@/pages/tools/interest-calculator";
import DiscountCalculatorPage from "@/pages/tools/discount-calculator";
import TipCalculatorPage from "@/pages/tools/tip-calculator";
import ProfitCalculatorPage from "@/pages/tools/profit-calculator";

// Converters
import CurrencyConverterPage from "@/pages/tools/currency-converter";
import UnitConverterPage from "@/pages/tools/unit-converter";

// Health & Fitness
import BMICalculatorPage from "@/pages/tools/bmi-calculator";
import BMRCalculatorPage from "@/pages/tools/bmr-calculator";
import BodyFatCalculatorPage from "@/pages/tools/bodyfat-calculator";
import CalorieCalculatorPage from "@/pages/tools/calorie-calculator";
import PregnancyCalculatorPage from "@/pages/tools/pregnancy-calculator";

// Math & Science
import ScientificCalculatorPage from "@/pages/tools/scientific-calculator";
import FractionCalculatorPage from "@/pages/tools/fraction-calculator";
import RatioCalculatorPage from "@/pages/tools/ratio-calculator";
import AverageCalculatorPage from "@/pages/tools/average-calculator";
import RandomNumberPage from "@/pages/tools/random-number";

// Measurement
import AreaCalculatorPage from "@/pages/tools/area-calculator";
import VolumeCalculatorPage from "@/pages/tools/volume-calculator";
import SpeedCalculatorPage from "@/pages/tools/speed-calculator";
import EnergyCalculatorPage from "@/pages/tools/energy-calculator";

// Time & Date
import WorldClockPage from "@/pages/tools/world-clock";
import AgeCalculatorPage from "@/pages/tools/age-calculator";
import DateCalculatorPage from "@/pages/tools/date-calculator";
import TimeCalculatorPage from "@/pages/tools/time-calculator";
import CountdownTimerPage from "@/pages/tools/countdown-timer";
import SleepCalculatorPage from "@/pages/tools/sleep-calculator";

// Utilities
import WebsiteCheckerPage from "@/pages/tools/website-checker";
import IPLookupPage from "@/pages/tools/ip-lookup";
import QRGeneratorPage from "@/pages/tools/qr-generator";
import NotepadPage from "@/pages/tools/notepad";

// Academic & Fun
import GPACalculatorPage from "@/pages/tools/gpa-calculator";
import LoveCalculatorPage from "@/pages/tools/love-calculator";

// Info Pages
import PrivacyPolicyPage from "@/pages/privacy-policy";
import TermsOfServicePage from "@/pages/terms-of-service";
import ContactPage from "@/pages/contact";
import SupportPage from "@/pages/support";
import AboutPage from "@/pages/about";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
      
      {/* Financial Tools */}
      <Route path="/percentage" component={PercentageCalculatorPage} />
      <Route path="/loan" component={LoanCalculatorPage} />
      <Route path="/mortgage" component={MortgageCalculatorPage} />
      <Route path="/interest" component={InterestCalculatorPage} />
      <Route path="/discount" component={DiscountCalculatorPage} />
      <Route path="/tip" component={TipCalculatorPage} />
      <Route path="/profit" component={ProfitCalculatorPage} />
      
      {/* Converters */}
      <Route path="/currency" component={CurrencyConverterPage} />
      <Route path="/unit" component={UnitConverterPage} />
      
      {/* Health & Fitness */}
      <Route path="/bmi-calc" component={BMICalculatorPage} />
      <Route path="/bmr" component={BMRCalculatorPage} />
      <Route path="/bodyfat" component={BodyFatCalculatorPage} />
      <Route path="/calorie" component={CalorieCalculatorPage} />
      <Route path="/pregnancy" component={PregnancyCalculatorPage} />
      
      {/* Math & Science */}
      <Route path="/scientific" component={ScientificCalculatorPage} />
      <Route path="/fraction" component={FractionCalculatorPage} />
      <Route path="/ratio" component={RatioCalculatorPage} />
      <Route path="/average" component={AverageCalculatorPage} />
      <Route path="/random" component={RandomNumberPage} />
      
      {/* Measurement */}
      <Route path="/area" component={AreaCalculatorPage} />
      <Route path="/volume" component={VolumeCalculatorPage} />
      <Route path="/speed" component={SpeedCalculatorPage} />
      <Route path="/energy" component={EnergyCalculatorPage} />
      
      {/* Time & Date */}
      <Route path="/clock" component={WorldClockPage} />
      <Route path="/age-calc" component={AgeCalculatorPage} />
      <Route path="/date" component={DateCalculatorPage} />
      <Route path="/time-calc" component={TimeCalculatorPage} />
      <Route path="/countdown" component={CountdownTimerPage} />
      <Route path="/sleep" component={SleepCalculatorPage} />
      
      {/* Utilities */}
      <Route path="/status" component={WebsiteCheckerPage} />
      <Route path="/ip-lookup" component={IPLookupPage} />
      <Route path="/qr-generator" component={QRGeneratorPage} />
      <Route path="/notepad" component={NotepadPage} />
      
      {/* Academic & Fun */}
      <Route path="/gpa" component={GPACalculatorPage} />
      <Route path="/love" component={LoveCalculatorPage} />
      
      {/* Info Pages */}
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/terms-of-service" component={TermsOfServicePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/support" component={SupportPage} />
      <Route path="/about" component={AboutPage} />
      
      <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  // Get GA measurement ID from environment variable
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const analyticsConsent = isAnalyticsEnabled();

  // Register service worker on mount
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="timetools-theme">
          <FavoritesProvider>
            <TooltipProvider>
              <Toaster />
              {analyticsConsent && gaId && <GoogleAnalytics measurementId={gaId} />}
              <CookieConsent />
              <PWAInstall />
              <Router />
            </TooltipProvider>
          </FavoritesProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
