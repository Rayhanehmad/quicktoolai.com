import { ToolPageLayout } from "@/components/tool-page-layout";
import { BMRCalculator } from "@/components/tools/bmr-calculator";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function BMRCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="bmr"
      title="BMR Calculator"
      description="Calculate your Basal Metabolic Rate (BMR) and daily calorie needs. Find out how many calories you burn at rest based on age, gender, height, and weight."
      category="Health"
    >
      <AdSensePlaceholder slot="bmr-top" format="rectangle" />
      <BMRCalculator />
      <AdSensePlaceholder slot="bmr-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
