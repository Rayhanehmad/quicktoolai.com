import { ToolPageLayout } from "@/components/tool-page-layout";
import { MortgageCalculator } from "@/components/tools/mortgage-calculator";

export default function MortgageCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="mortgage"
      title="Mortgage Calculator"
      description="Calculate monthly mortgage payments, total interest, and affordability. Includes principal, interest, taxes, and insurance (PITI) for accurate home loan planning."
      category="Financial"
    >
      <MortgageCalculator />
    </ToolPageLayout>
  );
}
