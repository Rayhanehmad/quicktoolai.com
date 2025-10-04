import { ToolPageLayout } from "@/components/tool-page-layout";
import { RatioCalculator } from "@/components/tools/remaining-tools";

export default function RatioCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="ratio"
      title="Ratio Calculator"
      description="Calculate ratios, proportions, and find missing values in ratio problems. Simplify ratios and solve proportion equations quickly."
      category="Math"
    >
      <RatioCalculator />
    </ToolPageLayout>
  );
}
