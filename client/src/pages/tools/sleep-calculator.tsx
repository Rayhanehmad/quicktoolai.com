import { ToolPageLayout } from "@/components/tool-page-layout";
import { SleepCalculatorSection } from "@/components/sections/sleep-calculator";

export default function SleepCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="sleep"
      title="Sleep Calculator"
      description="Calculate the best time to wake up or go to sleep based on sleep cycles. Optimize your sleep for better rest and energy throughout the day."
      category="Time"
    >
      <SleepCalculatorSection />
    </ToolPageLayout>
  );
}
