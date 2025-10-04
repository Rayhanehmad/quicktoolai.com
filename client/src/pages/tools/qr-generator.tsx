import { ToolPageLayout } from "@/components/tool-page-layout";
import { QRGeneratorSection } from "@/components/sections/qr-generator";

export default function QRGeneratorPage() {
  return (
    <ToolPageLayout
      toolId="qr-generator"
      title="QR Code Generator"
      description="Generate QR codes for URLs, text, contact info, and more. Create scannable QR codes instantly for marketing, sharing, and business use."
      category="Utilities"
    >
      <QRGeneratorSection />
    </ToolPageLayout>
  );
}
