import { ToolPageLayout } from "@/components/tool-page-layout";
import { PercentageCalculator } from "@/components/tools/percentage-calculator";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function PercentageCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="percentage"
      title="Percentage Calculator"
      description="Calculate percentages, percentage increase/decrease, and find what percent one number is of another. Fast and accurate percentage calculations for finance, math, and everyday use."
      category="Financial"
    >
      <AdSensePlaceholder slot="percentage-top" format="rectangle" />
      <PercentageCalculator />
      <AdSensePlaceholder slot="percentage-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
