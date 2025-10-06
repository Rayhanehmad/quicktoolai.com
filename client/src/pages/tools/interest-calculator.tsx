import { ToolPageLayout } from "@/components/tool-page-layout";
import { InterestCalculator } from "@/components/tools/simple-tools";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function InterestCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="interest"
      title="Interest Calculator"
      description="Calculate simple and compound interest on savings, investments, or loans. See how your money grows over time with different interest rates and compounding periods."
      category="Financial"
    >
      <AdSensePlaceholder slot="interest-top" format="rectangle" />
      <InterestCalculator />
      <AdSensePlaceholder slot="interest-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
