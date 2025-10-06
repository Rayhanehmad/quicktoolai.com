import { ToolPageLayout } from "@/components/tool-page-layout";
import { MortgageCalculator } from "@/components/tools/mortgage-calculator";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function MortgageCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="mortgage"
      title="Mortgage Calculator"
      description="Calculate monthly mortgage payments, total interest, and affordability. Includes principal, interest, taxes, and insurance (PITI) for accurate home loan planning."
      category="Financial"
    >
      <AdSensePlaceholder slot="mortgage-top" format="rectangle" />
      <MortgageCalculator />
      <AdSensePlaceholder slot="mortgage-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
