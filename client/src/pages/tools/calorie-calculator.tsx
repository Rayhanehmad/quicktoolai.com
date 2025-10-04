import { ToolPageLayout } from "@/components/tool-page-layout";
import { CalorieCalculator } from "@/components/tools/remaining-tools";

export default function CalorieCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="calorie"
      title="Calorie Calculator"
      description="Calculate daily calorie needs for weight loss, maintenance, or muscle gain. Get personalized calorie targets based on activity level and fitness goals."
      category="Health"
    >
      <CalorieCalculator />
    </ToolPageLayout>
  );
}
