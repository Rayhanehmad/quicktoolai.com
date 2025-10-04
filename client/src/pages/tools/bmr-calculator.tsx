import { ToolPageLayout } from "@/components/tool-page-layout";
import { BMRCalculator } from "@/components/tools/bmr-calculator";

export default function BMRCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="bmr"
      title="BMR Calculator"
      description="Calculate your Basal Metabolic Rate (BMR) and daily calorie needs. Find out how many calories you burn at rest based on age, gender, height, and weight."
      category="Health"
    >
      <BMRCalculator />
    </ToolPageLayout>
  );
}
