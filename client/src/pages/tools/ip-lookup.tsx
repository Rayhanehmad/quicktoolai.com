import { ToolPageLayout } from "@/components/tool-page-layout";
import { IPLookupSection } from "@/components/sections/ip-lookup";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function IPLookupPage() {
  return (
    <ToolPageLayout
      toolId="ip-lookup"
      title="IP Address Lookup"
      description="Find your IP address and location information. Get details about your public IP, ISP, country, region, and city."
      category="Utilities"
    >
      <AdSensePlaceholder slot="ip-lookup-top" format="rectangle" />
      <IPLookupSection />
      <AdSensePlaceholder slot="ip-lookup-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
