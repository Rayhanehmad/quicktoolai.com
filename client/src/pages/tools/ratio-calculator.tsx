import { ToolPageLayout } from "@/components/tool-page-layout";
import { RatioCalculator } from "@/components/tools/remaining-tools";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function RatioCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="ratio"
      title="Ratio Calculator"
      description="Calculate ratios, proportions, and find missing values in ratio problems. Simplify ratios and solve proportion equations quickly."
      category="Math"
    >
      <>
        <AdSensePlaceholder slot="ratio-top" format="rectangle" />
        <RatioCalculator />
        <AdSensePlaceholder slot="ratio-bottom" format="responsive" />
      </>
    </ToolPageLayout>
  );
}
