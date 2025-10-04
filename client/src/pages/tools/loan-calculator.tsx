import { ToolPageLayout } from "@/components/tool-page-layout";
import { LoanCalculator } from "@/components/tools/loan-calculator";

export default function LoanCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="loan"
      title="Loan Calculator"
      description="Calculate monthly loan payments, total interest, and amortization schedules. Perfect for auto loans, personal loans, and student loans with detailed payment breakdowns."
      category="Financial"
    >
      <LoanCalculator />
    </ToolPageLayout>
  );
}
