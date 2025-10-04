import { ToolPageLayout } from "@/components/tool-page-layout";
import { NotepadSection } from "@/components/sections/notepad";

export default function NotepadPage() {
  return (
    <ToolPageLayout
      toolId="notepad"
      title="Online Notepad"
      description="Simple online text editor for quick notes and text editing. Save your notes automatically with local storage support."
      category="Utilities"
    >
      <NotepadSection />
    </ToolPageLayout>
  );
}
