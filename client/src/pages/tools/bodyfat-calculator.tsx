import { ToolPageLayout } from "@/components/tool-page-layout";
import { BodyFatCalculator } from "@/components/tools/remaining-tools";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function BodyFatCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="bodyfat"
      title="Body Fat Calculator"
      description="Estimate your body fat percentage using measurements and biometric data. Track fitness progress with accurate body composition analysis."
      category="Health"
    >
      <AdSensePlaceholder slot="bodyfat-top" format="rectangle" />
      <BodyFatCalculator />
      <AdSensePlaceholder slot="bodyfat-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
