import { ToolPageLayout } from "@/components/tool-page-layout";
import { VolumeCalculator } from "@/components/tools/simple-tools";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function VolumeCalculatorPage() {
  return (
    <ToolPageLayout
      toolId="volume"
      title="Volume Calculator"
      description="Calculate volume for 3D shapes including cubes, spheres, cylinders, and cones. Accurate volume measurements for any geometric solid."
      category="Measurement"
    >
      <>
        <AdSensePlaceholder slot="volume-top" format="rectangle" />
        <VolumeCalculator />
        <AdSensePlaceholder slot="volume-bottom" format="responsive" />
      </>
    </ToolPageLayout>
  );
}
