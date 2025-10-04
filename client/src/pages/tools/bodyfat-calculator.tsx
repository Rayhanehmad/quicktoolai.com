import { ToolPageLayout } from "@/components/tool-page-layout";
import { BodyFatCalculator } from "@/components/tools/remaining-tools";

export default function BodyFatCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="bodyfat"
      title="Body Fat Calculator"
      description="Estimate your body fat percentage using measurements and biometric data. Track fitness progress with accurate body composition analysis."
      category="Health"
    >
      <BodyFatCalculator />
    </ToolPageLayout>
  );
}
