import { ToolPageLayout } from "@/components/tool-page-layout";
import { TimeCalculator } from "@/components/tools/remaining-tools";

export default function TimeCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="time-calc"
      title="Time Calculator"
      description="Add or subtract hours, minutes, and seconds. Calculate time duration, convert time units, and perform time arithmetic."
      category="Time"
    >
      <TimeCalculator />
    </ToolPageLayout>
  );
}
