import { ToolPageLayout } from "@/components/tool-page-layout";
import { TipCalculator } from "@/components/tools/tip-calculator";

export default function TipCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="tip"
      title="Tip Calculator"
      description="Calculate restaurant tips and split bills easily. Find the tip amount, total bill, and per-person cost for any dining occasion with customizable tip percentages."
      category="Financial"
    >
      <TipCalculator />
    </ToolPageLayout>
  );
}
