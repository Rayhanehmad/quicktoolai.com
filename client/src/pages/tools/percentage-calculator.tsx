import { ToolPageLayout } from "@/components/tool-page-layout";
import { PercentageCalculator } from "@/components/tools/percentage-calculator";

export default function PercentageCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="percentage"
      title="Percentage Calculator"
      description="Calculate percentages, percentage increase/decrease, and find what percent one number is of another. Fast and accurate percentage calculations for finance, math, and everyday use."
      category="Financial"
    >
      <PercentageCalculator />
    </ToolPageLayout>
  );
}
