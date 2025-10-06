import { ToolPageLayout } from "@/components/tool-page-layout";
import { PregnancyCalculator } from "@/components/tools/remaining-tools";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function PregnancyCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="pregnancy"
      title="Pregnancy Calculator"
      description="Calculate your due date, pregnancy week, and trimester. Track pregnancy milestones and find out when your baby is expected to arrive."
      category="Health"
    >
      <AdSensePlaceholder slot="pregnancy-top" format="rectangle" />
      <PregnancyCalculator />
      <AdSensePlaceholder slot="pregnancy-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
