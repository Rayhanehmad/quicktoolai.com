import { ToolPageLayout } from "@/components/tool-page-layout";
import { LoveCalculator } from "@/components/tools/simple-tools";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function LoveCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="love"
      title="Love Calculator"
      description="Calculate love compatibility percentage between two names. A fun tool to see your romantic compatibility score with someone special."
      category="Fun"
    >
      <AdSensePlaceholder slot="love-top" format="rectangle" />
      <LoveCalculator />
      <AdSensePlaceholder slot="love-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
