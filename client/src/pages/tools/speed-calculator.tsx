import { ToolPageLayout } from "@/components/tool-page-layout";
import { SpeedCalculator } from "@/components/tools/simple-tools";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function SpeedCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="speed"
      title="Speed Calculator"
      description="Calculate speed, distance, or time using the speed formula. Convert between different speed units like mph, km/h, and m/s."
      category="Measurement"
    >
      <>
        <AdSensePlaceholder slot="speed-top" format="rectangle" />
        <SpeedCalculator />
        <AdSensePlaceholder slot="speed-bottom" format="responsive" />
      </>
    </ToolPageLayout>
  );
}
