import { ToolPageLayout } from "@/components/tool-page-layout";
import { FractionCalculator } from "@/components/tools/fraction-calculator";

export default function FractionCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="fraction"
      title="Fraction Calculator"
      description="Add, subtract, multiply, and divide fractions with ease. Simplify fractions and convert between fractions, decimals, and percentages."
      category="Math"
    >
      <FractionCalculator />
    </ToolPageLayout>
  );
}
