import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Save, Download, Trash2, Info } from "lucide-react";

export function NotepadSection() {
  const [noteText, setNoteText] = useState('');
  const [lastSaved, setLastSaved] = useState<string>('');

  // Load saved note on component mount
  useEffect(() => {
    const saved = localStorage.getItem('online-notepad-content');
    const savedTime = localStorage.getItem('online-notepad-saved-time');
    
    if (saved) {
      setNoteText(saved);
    }
    if (savedTime) {
      setLastSaved(savedTime);
    }
  }, []);

  const saveNote = () => {
    localStorage.setItem('online-notepad-content', noteText);
    const now = new Date().toLocaleString();
    localStorage.setItem('online-notepad-saved-time', now);
    setLastSaved(now);
  };

  const downloadNote = () => {
    const blob = new Blob([noteText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `note-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const clearNote = () => {
    setNoteText('');
    localStorage.removeItem('online-notepad-content');
    localStorage.removeItem('online-notepad-saved-time');
    setLastSaved('');
  };

  const wordCount = noteText.trim().split(/\s+/).filter(word => word.length > 0).length;
  const charCount = noteText.length;

  return (
    <div id="notepad" className="glass-card neomorphic rounded-2xl p-6 text-center h-full">
      <h3 className="text-xl font-bold mb-4 text-primary">Online Notepad Free</h3>
      <p className="text-xs text-muted-foreground mb-4">Simple online text editor with auto-save - write notes, drafts, and documents</p>
      
      <div className="mb-4">
        <Textarea
          placeholder="Start typing your notes here..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          className="text-sm resize-none h-32 text-left"
          data-testid="textarea-notepad"
        />
      </div>

      {/* Stats */}
      <div className="flex justify-between text-xs text-muted-foreground mb-4">
        <span data-testid="word-count">Words: {wordCount}</span>
        <span data-testid="char-count">Characters: {charCount}</span>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <Button
          onClick={saveNote}
          className="gradient-bg text-white hover:opacity-90 transition-opacity"
          size="sm"
          disabled={!noteText.trim()}
          data-testid="button-save-note"
        >
          <Save className="w-3 h-3 mr-1" />
          Save
        </Button>
        
        <Button
          onClick={downloadNote}
          variant="outline"
          size="sm"
          disabled={!noteText.trim()}
          data-testid="button-download-note"
        >
          <Download className="w-3 h-3 mr-1" />
          Download
        </Button>
        
        <Button
          onClick={clearNote}
          variant="outline"
          size="sm"
          disabled={!noteText.trim()}
          data-testid="button-clear-note"
        >
          <Trash2 className="w-3 h-3 mr-1" />
          Clear
        </Button>
      </div>

      {/* Last Saved Info */}
      {lastSaved && (
        <div className="text-xs text-muted-foreground mb-3" data-testid="last-saved">
          Saved: {lastSaved}
        </div>
      )}

      {/* Notepad Tip */}
      <div className="p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center justify-center mb-1">
          <Info className="w-4 h-4 mr-1 text-accent" />
          <span className="text-xs font-semibold">Auto-save</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Your notes are saved locally in your browser
        </p>
      </div>
    </div>
  );
}