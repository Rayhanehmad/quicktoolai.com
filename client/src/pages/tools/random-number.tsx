import { ToolPageLayout } from "@/components/tool-page-layout";
import { RandomNumberGenerator } from "@/components/tools/random-number";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function RandomNumberPage() {
  return (
    <ToolPageLayout
      toolId="random"
      title="Random Number Generator"
      description="Generate random numbers within any range. Perfect for games, lottery picks, statistics, and random sampling with customizable min and max values."
      category="Math"
    >
      <>
        <AdSensePlaceholder slot="random-top" format="rectangle" />
        <RandomNumberGenerator />
        <AdSensePlaceholder slot="random-bottom" format="responsive" />
      </>
    </ToolPageLayout>
  );
}
