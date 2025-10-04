import { ToolPageLayout } from "@/components/tool-page-layout";
import { IPLookupSection } from "@/components/sections/ip-lookup";

export default function IPLookupPage() {
  return (
    <ToolPageLayout
      toolId="ip-lookup"
      title="IP Address Lookup"
      description="Find your IP address and location information. Get details about your public IP, ISP, country, region, and city."
      category="Utilities"
    >
      <IPLookupSection />
    </ToolPageLayout>
  );
}
