import { ToolPageLayout } from "@/components/tool-page-layout";
import { ClockTimerSection } from "@/components/sections/clock-timer";

export default function WorldClockPage() {
  return (
    <ToolPageLayout
      toolId="clock"
      title="World Clock & Timer"
      description="View current time in multiple time zones worldwide. Track time differences across continents with an interactive world clock display."
      category="Time"
    >
      <ClockTimerSection />
    </ToolPageLayout>
  );
}
