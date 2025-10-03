import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { QrCode, Download, Info } from "lucide-react";

export function QRGeneratorSection() {
  const [inputText, setInputText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const generateQRCode = () => {
    if (!inputText.trim()) return;

    // Using QR Server API (free service)
    const encodedText = encodeURIComponent(inputText.trim());
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedText}`;
    setQrCodeUrl(qrUrl);
  };

  const downloadQRCode = () => {
    if (!qrCodeUrl) return;

    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      generateQRCode();
    }
  };

  return (
    <div id="qr-generator" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">QR Code Generator Free</h3>
        <p className="text-xs text-muted-foreground">Generate QR codes for URLs, text, or any content - download instantly</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
        <label className="block text-sm font-semibold mb-3 text-center">Enter text or URL:</label>
        <Textarea
          placeholder="https://example.com or any text..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          className="text-sm resize-none h-20"
          data-testid="input-qr-text"
        />
      </div>

      <Button
        onClick={generateQRCode}
        className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12"
        disabled={!inputText.trim()}
        data-testid="button-generate-qr"
      >
        <QrCode className="w-4 h-4 mr-2" />
        Generate QR Code
      </Button>

      {/* QR Code Display */}
      {qrCodeUrl ? (
        <div className="space-y-4" data-testid="qr-results">
          <div className="p-4 rounded-lg bg-white flex justify-center">
            <img 
              src={qrCodeUrl} 
              alt="Generated QR Code"
              className="w-32 h-32"
              data-testid="qr-image"
            />
          </div>
          
          <Button
            onClick={downloadQRCode}
            variant="outline"
            size="sm"
            className="w-full"
            data-testid="button-download-qr"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PNG
          </Button>
        </div>
      ) : (
        <div className="text-center text-muted-foreground text-sm">
          <p>Enter text to generate a QR code</p>
        </div>
      )}

      {/* QR Tip */}
      <div className="mt-4 p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center justify-center mb-1">
          <Info className="w-4 h-4 mr-1 text-accent" />
          <span className="text-xs font-semibold">Tip</span>
        </div>
        <p className="text-xs text-muted-foreground">
          QR codes can store URLs, text, contact info, and more
        </p>
      </div>
    </div>
  );
}