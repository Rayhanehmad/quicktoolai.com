import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero";
import { ClockTimerSection } from "@/components/sections/clock-timer";
import { SleepCalculatorSection } from "@/components/sections/sleep-calculator";
import { StatusCheckerSection } from "@/components/sections/status-checker";
import { AgeCalculatorSection } from "@/components/sections/age-calculator";
import { BMICalculatorSection } from "@/components/sections/bmi-calculator";
import { IPLookupSection } from "@/components/sections/ip-lookup";
import { QRGeneratorSection } from "@/components/sections/qr-generator";
import { NotepadSection } from "@/components/sections/notepad";
import { SocialShareSection } from "@/components/sections/social-share";
import { Footer } from "@/components/footer";
import { AIChatbot } from "@/components/ai-chatbot";

// Financial Calculators
import { PercentageCalculator } from "@/components/tools/percentage-calculator";
import { LoanCalculator } from "@/components/tools/loan-calculator";
import { TipCalculator } from "@/components/tools/tip-calculator";
import { DiscountCalculator } from "@/components/tools/discount-calculator";
import { MortgageCalculator } from "@/components/tools/mortgage-calculator";

// Converters
import { UnitConverter } from "@/components/tools/unit-converter";

// Health & Fitness
import { BMRCalculator } from "@/components/tools/bmr-calculator";

// Math & Academic
import { GPACalculator } from "@/components/tools/gpa-calculator";
import { CountdownTimer } from "@/components/tools/countdown-timer";
import { DateCalculator } from "@/components/tools/date-calculator";
import { RandomNumberGenerator } from "@/components/tools/random-number";
import { AreaCalculator } from "@/components/tools/area-calculator";
import { FractionCalculator } from "@/components/tools/fraction-calculator";
import { AverageCalculator } from "@/components/tools/average-calculator";
import { ScientificCalculator } from "@/components/tools/scientific-calculator";

// Simple Tools
import { LoveCalculator, InterestCalculator, ProfitCalculator, SpeedCalculator, VolumeCalculator } from "@/components/tools/simple-tools";
import { CurrencyConverter, BodyFatCalculator, CalorieCalculator, PregnancyCalculator, RatioCalculator, EnergyCalculator, TimeCalculator } from "@/components/tools/remaining-tools";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      
      {/* All 30 Tools Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            30 Essential Online Calculators & Tools
          </h2>
          
          {/* Financial Tools */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">💰 Financial Calculators</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <PercentageCalculator />
              <LoanCalculator />
              <MortgageCalculator />
              <InterestCalculator />
              <DiscountCalculator />
              <TipCalculator />
              <ProfitCalculator />
            </div>
          </div>

          {/* Converters */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">🔄 Converters</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <CurrencyConverter />
              <UnitConverter />
            </div>
          </div>

          {/* Health & Fitness */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">💪 Health & Fitness</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <BMICalculatorSection />
              <BMRCalculator />
              <BodyFatCalculator />
              <CalorieCalculator />
              <PregnancyCalculator />
            </div>
          </div>

          {/* Math & Science */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">🔢 Math & Science</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <ScientificCalculator />
              <FractionCalculator />
              <RatioCalculator />
              <AverageCalculator />
              <RandomNumberGenerator />
            </div>
          </div>

          {/* Measurement */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">📏 Measurement Tools</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AreaCalculator />
              <VolumeCalculator />
              <SpeedCalculator />
              <EnergyCalculator />
            </div>
          </div>

          {/* Time & Date */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">⏰ Time & Date</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <ClockTimerSection />
              <AgeCalculatorSection />
              <DateCalculator />
              <TimeCalculator />
              <CountdownTimer />
              <SleepCalculatorSection />
            </div>
          </div>

          {/* Productivity & Utilities */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">🛠️ Utilities</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <StatusCheckerSection />
              <IPLookupSection />
              <QRGeneratorSection />
              <NotepadSection />
            </div>
          </div>

          {/* Academic & Fun */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">🎓 Academic & Fun</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <GPACalculator />
              <LoveCalculator />
            </div>
          </div>
        </div>
      </section>

      <SocialShareSection />
      <Footer />
      
      {/* AI Chatbot - Floating */}
      <AIChatbot />
    </div>
  );
}
