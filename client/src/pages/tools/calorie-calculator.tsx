import { ToolPageLayout } from "@/components/tool-page-layout";
import { CalorieCalculator } from "@/components/tools/remaining-tools";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function CalorieCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="calorie"
      title="Calorie Calculator"
      description="Calculate daily calorie needs for weight loss, maintenance, or muscle gain. Get personalized calorie targets based on activity level and fitness goals."
      category="Health"
    >
      <AdSensePlaceholder slot="calorie-top" format="rectangle" />
      <CalorieCalculator />
      <AdSensePlaceholder slot="calorie-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
