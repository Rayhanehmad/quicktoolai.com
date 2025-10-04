import { ToolPageLayout } from "@/components/tool-page-layout";
import { GPACalculator } from "@/components/tools/gpa-calculator";

export default function GPACalculatorPage() {
  return (
    <ToolPageLayout
      toolId="gpa"
      title="GPA Calculator"
      description="Calculate your Grade Point Average (GPA) for high school or college. Track academic performance with weighted and unweighted GPA calculations."
      category="Academic"
    >
      <GPACalculator />
    </ToolPageLayout>
  );
}
