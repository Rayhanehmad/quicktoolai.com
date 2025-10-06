import { ToolPageLayout } from "@/components/tool-page-layout";
import { DiscountCalculator } from "@/components/tools/discount-calculator";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function DiscountCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="discount"
      title="Discount Calculator"
      description="Calculate sale prices, discounts, and savings instantly. Find the final price after discount, percentage off, and amount saved on any purchase."
      category="Financial"
    >
      <AdSensePlaceholder slot="discount-top" format="rectangle" />
      <DiscountCalculator />
      <AdSensePlaceholder slot="discount-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
