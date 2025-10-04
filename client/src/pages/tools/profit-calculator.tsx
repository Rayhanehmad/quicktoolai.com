import { ToolPageLayout } from "@/components/tool-page-layout";
import { ProfitCalculator } from "@/components/tools/simple-tools";

export default function ProfitCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="profit"
      title="Profit Calculator"
      description="Calculate profit margin, markup, and revenue from cost and selling price. Essential for business owners, retailers, and entrepreneurs to determine profitability."
      category="Financial"
    >
      <ProfitCalculator />
    </ToolPageLayout>
  );
}
