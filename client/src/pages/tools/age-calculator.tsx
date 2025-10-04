import { ToolPageLayout } from "@/components/tool-page-layout";
import { AgeCalculatorSection } from "@/components/sections/age-calculator";

export default function AgeCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="age-calc"
      title="Age Calculator"
      description="Calculate your exact age in years, months, days, hours, and minutes. Find the time between two dates with precise age calculation."
      category="Time"
    >
      <AgeCalculatorSection />
    </ToolPageLayout>
  );
}
