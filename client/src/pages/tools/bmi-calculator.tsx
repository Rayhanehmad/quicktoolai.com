import { ToolPageLayout } from "@/components/tool-page-layout";
import { BMICalculatorSection } from "@/components/sections/bmi-calculator";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function BMICalculatorPage() {
  return (
    <ToolPageLayout
      toolId="bmi-calc"
      title="BMI Calculator"
      description="Calculate your Body Mass Index (BMI) and find your healthy weight range. Instant BMI calculation with WHO classification for adults using metric or imperial units."
      category="Health"
    >
      <AdSensePlaceholder slot="bmi-calc-top" format="rectangle" />
      <BMICalculatorSection />
      <AdSensePlaceholder slot="bmi-calc-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
