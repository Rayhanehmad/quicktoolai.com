import { ToolPageLayout } from "@/components/tool-page-layout";
import { StatusCheckerSection } from "@/components/sections/status-checker";

export default function WebsiteCheckerPage() {
  return (
    <ToolPageLayout
      toolId="status"
      title="Website Status Checker"
      description="Check if a website is online or offline. Monitor website uptime, response time, and HTTP status codes for any URL."
      category="Utilities"
    >
      <StatusCheckerSection />
    </ToolPageLayout>
  );
}
