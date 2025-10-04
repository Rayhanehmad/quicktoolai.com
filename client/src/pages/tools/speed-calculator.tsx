import { ToolPageLayout } from "@/components/tool-page-layout";
import { SpeedCalculator } from "@/components/tools/simple-tools";

export default function SpeedCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="speed"
      title="Speed Calculator"
      description="Calculate speed, distance, or time using the speed formula. Convert between different speed units like mph, km/h, and m/s."
      category="Measurement"
    >
      <SpeedCalculator />
    </ToolPageLayout>
  );
}
