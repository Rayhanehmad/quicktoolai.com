import { ToolPageLayout } from "@/components/tool-page-layout";
import { ProfitCalculator } from "@/components/tools/simple-tools";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function ProfitCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="profit"
      title="Profit Calculator"
      description="Calculate profit margin, markup, and revenue from cost and selling price. Essential for business owners, retailers, and entrepreneurs to determine profitability."
      category="Financial"
    >
      <AdSensePlaceholder slot="profit-top" format="rectangle" />
      <ProfitCalculator />
      <AdSensePlaceholder slot="profit-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
