import { ToolPageLayout } from "@/components/tool-page-layout";
import { CurrencyConverter } from "@/components/tools/currency-converter";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function CurrencyConverterPage() {
  return (
    <ToolPageLayout
      toolId="currency"
      title="Currency Converter"
      description="Convert between 150+ world currencies with live exchange rates. Real-time forex conversion for USD, EUR, GBP, JPY and all major and minor currencies worldwide."
      category="Converters"
    >
      <>
        <AdSensePlaceholder slot="currency-top" format="rectangle" />
        <CurrencyConverter />
        <AdSensePlaceholder slot="currency-bottom" format="responsive" />
      </>
    </ToolPageLayout>
  );
}
