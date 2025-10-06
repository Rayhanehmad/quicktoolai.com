import { ToolPageLayout } from "@/components/tool-page-layout";
import { FractionCalculator } from "@/components/tools/fraction-calculator";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function FractionCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="fraction"
      title="Fraction Calculator"
      description="Add, subtract, multiply, and divide fractions with ease. Simplify fractions and convert between fractions, decimals, and percentages."
      category="Math"
    >
      <>
        <AdSensePlaceholder slot="fraction-top" format="rectangle" />
        <FractionCalculator />
        <AdSensePlaceholder slot="fraction-bottom" format="responsive" />
      </>
    </ToolPageLayout>
  );
}
