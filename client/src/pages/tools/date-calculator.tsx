import { ToolPageLayout } from "@/components/tool-page-layout";
import { DateCalculator } from "@/components/tools/date-calculator";

export default function DateCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="date"
      title="Date Calculator"
      description="Add or subtract days, weeks, months, or years from any date. Calculate the difference between two dates or find a future/past date."
      category="Time"
    >
      <DateCalculator />
    </ToolPageLayout>
  );
}
