import { ToolPageLayout } from "@/components/tool-page-layout";
import { ScientificCalculator } from "@/components/tools/scientific-calculator";

export default function ScientificCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="scientific"
      title="Scientific Calculator"
      description="Advanced scientific calculator with trigonometric functions, logarithms, exponentials, and more. Perfect for students, engineers, and scientists."
      category="Math"
    >
      <ScientificCalculator />
    </ToolPageLayout>
  );
}
