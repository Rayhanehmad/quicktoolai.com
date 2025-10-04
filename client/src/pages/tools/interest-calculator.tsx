import { ToolPageLayout } from "@/components/tool-page-layout";
import { InterestCalculator } from "@/components/tools/simple-tools";

export default function InterestCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="interest"
      title="Interest Calculator"
      description="Calculate simple and compound interest on savings, investments, or loans. See how your money grows over time with different interest rates and compounding periods."
      category="Financial"
    >
      <InterestCalculator />
    </ToolPageLayout>
  );
}
