import { ToolPageLayout } from "@/components/tool-page-layout";
import { AverageCalculator } from "@/components/tools/average-calculator";

export default function AverageCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="average"
      title="Average Calculator"
      description="Calculate mean, median, mode, and range from a set of numbers. Statistical analysis tool for finding central tendency and data spread."
      category="Math"
    >
      <AverageCalculator />
    </ToolPageLayout>
  );
}
