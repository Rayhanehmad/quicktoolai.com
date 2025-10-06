import { ToolPageLayout } from "@/components/tool-page-layout";
import { NotepadSection } from "@/components/sections/notepad";
import { AdSensePlaceholder } from "@/components/adsense-placeholder";

export default function NotepadPage() {
  return (
    <ToolPageLayout
      toolId="notepad"
      title="Online Notepad"
      description="Simple online text editor for quick notes and text editing. Save your notes automatically with local storage support."
      category="Utilities"
    >
      <AdSensePlaceholder slot="notepad-top" format="rectangle" />
      <NotepadSection />
      <AdSensePlaceholder slot="notepad-bottom" format="responsive" />
    </ToolPageLayout>
  );
}
