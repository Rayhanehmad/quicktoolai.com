import { ToolPageLayout } from "@/components/tool-page-layout";
import { ScientificCalculator } from "@/components/tools/scientific-calculator";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function ScientificCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="scientific"
      title="Scientific Calculator"
      description="Advanced scientific calculator with trigonometric functions, logarithms, exponentials, and more. Perfect for students, engineers, and scientists."
      category="Math"
    >
      <>
        <AdSensePlaceholder slot="scientific-top" format="rectangle" />
        <ScientificCalculator />
        <AdSensePlaceholder slot="scientific-bottom" format="responsive" />
      </>
    </ToolPageLayout>
  );
}
