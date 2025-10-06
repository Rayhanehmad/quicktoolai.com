import { ToolPageLayout } from "@/components/tool-page-layout";
import { TimeCalculator } from "@/components/tools/remaining-tools";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function TimeCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="time-calc"
      title="Time Calculator"
      description="Add or subtract hours, minutes, and seconds. Calculate time duration, convert time units, and perform time arithmetic."
      category="Time"
    >
      <AdSensePlaceholder slot="time-calc-top" format="rectangle" />
      <TimeCalculator />
      <AdSensePlaceholder slot="time-calc-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
