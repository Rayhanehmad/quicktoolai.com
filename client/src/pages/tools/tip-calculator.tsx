import { ToolPageLayout } from "@/components/tool-page-layout";
import { TipCalculator } from "@/components/tools/tip-calculator";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function TipCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="tip"
      title="Tip Calculator"
      description="Calculate restaurant tips and split bills easily. Find the tip amount, total bill, and per-person cost for any dining occasion with customizable tip percentages."
      category="Financial"
    >
      <AdSensePlaceholder slot="tip-top" format="rectangle" />
      <TipCalculator />
      <AdSensePlaceholder slot="tip-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
