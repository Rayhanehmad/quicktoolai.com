import { ToolPageLayout } from "@/components/tool-page-layout";
import { ClockTimerSection } from "@/components/sections/clock-timer";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function WorldClockPage() {
  return (
    <ToolPageLayout
      toolId="clock"
      title="World Clock & Timer"
      description="View current time in multiple time zones worldwide. Track time differences across continents with an interactive world clock display."
      category="Time"
    >
      <AdSensePlaceholder slot="clock-top" format="rectangle" />
      <ClockTimerSection />
      <AdSensePlaceholder slot="clock-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
