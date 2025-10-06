import { ToolPageLayout } from "@/components/tool-page-layout";
import { AverageCalculator } from "@/components/tools/average-calculator";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function AverageCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="average"
      title="Average Calculator"
      description="Calculate mean, median, mode, and range from a set of numbers. Statistical analysis tool for finding central tendency and data spread."
      category="Math"
    >
      <>
        <AdSensePlaceholder slot="average-top" format="rectangle" />
        <AverageCalculator />
        <AdSensePlaceholder slot="average-bottom" format="responsive" />
      </>
    </ToolPageLayout>
  );
}
