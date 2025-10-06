import { ToolPageLayout } from "@/components/tool-page-layout";
import { AreaCalculator } from "@/components/tools/area-calculator";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function AreaCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="area"
      title="Area Calculator"
      description="Calculate the area of various shapes including rectangles, circles, triangles, and more. Fast geometric area calculations for any shape."
      category="Measurement"
    >
      <>
        <AdSensePlaceholder slot="area-top" format="rectangle" />
        <AreaCalculator />
        <AdSensePlaceholder slot="area-bottom" format="responsive" />
      </>
    </ToolPageLayout>
  );
}
