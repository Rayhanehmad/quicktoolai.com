import { ToolPageLayout } from "@/components/tool-page-layout";
import { GPACalculator } from "@/components/tools/gpa-calculator";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function GPACalculatorPage() {
  return (
    <ToolPageLayout
      toolId="gpa"
      title="GPA Calculator"
      description="Calculate your Grade Point Average (GPA) for high school or college. Track academic performance with weighted and unweighted GPA calculations."
      category="Academic"
    >
      <AdSensePlaceholder slot="gpa-top" format="rectangle" />
      <GPACalculator />
      <AdSensePlaceholder slot="gpa-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
