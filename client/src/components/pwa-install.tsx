import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show prompt after 10 seconds, only if not dismissed before
      const dismissed = localStorage.getItem('pwa-install-dismissed');
      if (!dismissed) {
        setTimeout(() => setShowPrompt(true), 10000);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('PWA is already installed');
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('PWA installed');
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  if (!showPrompt || !deferredPrompt) return null;

  return (
    <Card className="fixed bottom-20 left-4 right-4 z-50 p-4 glass-card border-border/50 md:left-auto md:right-4 md:max-w-sm animate-slide-up">
      <button
        onClick={handleDismiss}
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        data-testid="button-dismiss-pwa"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-start gap-3 pr-6">
        <div className="p-2 rounded-full bg-primary/10">
          <Download className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-sm mb-1">Install App</h3>
          <p className="text-xs text-muted-foreground mb-3">
            Install QuickToolAI for quick access and offline use
          </p>
          <div className="flex gap-2">
            <Button
              onClick={handleInstall}
              size="sm"
              className="gradient-bg text-white h-9"
              data-testid="button-install-pwa"
            >
              Install
            </Button>
            <Button
              onClick={handleDismiss}
              size="sm"
              variant="ghost"
              className="h-9"
              data-testid="button-not-now"
            >
              Not now
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
