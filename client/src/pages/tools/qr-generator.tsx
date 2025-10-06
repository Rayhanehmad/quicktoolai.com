import { ToolPageLayout } from "@/components/tool-page-layout";
import { QRGeneratorSection } from "@/components/sections/qr-generator";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function QRGeneratorPage() {
  return (
    <ToolPageLayout
      toolId="qr-generator"
      title="QR Code Generator"
      description="Generate QR codes for URLs, text, contact info, and more. Create scannable QR codes instantly for marketing, sharing, and business use."
      category="Utilities"
    >
      <AdSensePlaceholder slot="qr-generator-top" format="rectangle" />
      <QRGeneratorSection />
      <AdSensePlaceholder slot="qr-generator-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
