import { ToolPageLayout } from "@/components/tool-page-layout";
import { PregnancyCalculator } from "@/components/tools/remaining-tools";

export default function PregnancyCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="pregnancy"
      title="Pregnancy Calculator"
      description="Calculate your due date, pregnancy week, and trimester. Track pregnancy milestones and find out when your baby is expected to arrive."
      category="Health"
    >
      <PregnancyCalculator />
    </ToolPageLayout>
  );
}
