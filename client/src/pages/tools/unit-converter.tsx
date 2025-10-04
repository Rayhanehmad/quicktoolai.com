import { ToolPageLayout } from "@/components/tool-page-layout";
import { UnitConverter } from "@/components/tools/unit-converter";

export default function UnitConverterPage() {
  return (
    <ToolPageLayout
      toolId="unit"
      title="Unit Converter"
      description="Convert units across 9 categories including length, weight, temperature, area, volume, speed, time, energy, and data storage. 60+ unit conversions in one tool."
      category="Converters"
    >
      <UnitConverter />
    </ToolPageLayout>
  );
}
