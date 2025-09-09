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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* AdSense Banner Top */}
      <div className="w-full bg-muted/50 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-200 dark:bg-gray-700 h-24 rounded-lg flex items-center justify-center text-muted-foreground">
            <span className="text-sm">{/* AdSense Banner 728x90 */}</span>
          </div>
        </div>
      </div>

      <Navigation />
      <HeroSection />
      
      {/* All Tools in Button Format */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ClockTimerSection />
            <SleepCalculatorSection />
            <StatusCheckerSection />
            <AgeCalculatorSection />
            <BMICalculatorSection />
            <IPLookupSection />
            <QRGeneratorSection />
            <NotepadSection />
          </div>
        </div>
      </section>
      
      {/* AdSense Middle */}
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-200 dark:bg-gray-700 h-32 rounded-lg flex items-center justify-center text-muted-foreground">
            <span className="text-sm">{/* AdSense Rectangle 300x250 */}</span>
          </div>
        </div>
      </div>
      <SocialShareSection />
      
      {/* AdSense Bottom */}
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-200 dark:bg-gray-700 h-32 rounded-lg flex items-center justify-center text-muted-foreground">
            <span className="text-sm">{/* AdSense Responsive Banner */}</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
