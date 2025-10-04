import { ToolPageLayout } from "@/components/tool-page-layout";
import { EnergyCalculator } from "@/components/tools/remaining-tools";

export default function EnergyCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="energy"
      title="Energy Calculator"
      description="Calculate energy consumption, convert energy units, and estimate power usage. Convert between joules, calories, kWh, and other energy units."
      category="Measurement"
    >
      <EnergyCalculator />
    </ToolPageLayout>
  );
}
