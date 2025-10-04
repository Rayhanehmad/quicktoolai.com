import { ToolPageLayout } from "@/components/tool-page-layout";
import { AreaCalculator } from "@/components/tools/area-calculator";

export default function AreaCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="area"
      title="Area Calculator"
      description="Calculate the area of various shapes including rectangles, circles, triangles, and more. Fast geometric area calculations for any shape."
      category="Measurement"
    >
      <AreaCalculator />
    </ToolPageLayout>
  );
}
