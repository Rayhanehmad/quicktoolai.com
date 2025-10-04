import { ToolPageLayout } from "@/components/tool-page-layout";
import { CountdownTimer } from "@/components/tools/countdown-timer";

export default function CountdownTimerPage() {
  return (
    <ToolPageLayout
      toolId="countdown"
      title="Countdown Timer"
      description="Set a countdown timer for any event or deadline. Track time remaining until important dates with a visual countdown display."
      category="Time"
    >
      <CountdownTimer />
    </ToolPageLayout>
  );
}
