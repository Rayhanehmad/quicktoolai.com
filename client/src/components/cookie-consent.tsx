import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cookie, Settings, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const CONSENT_KEY = 'cookie-consent';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    } else {
      const saved = JSON.parse(consent);
      setPreferences(saved);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
    
    // Reload to apply analytics if accepted
    if (prefs.analytics) {
      window.location.reload();
    }
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptNecessary = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustom = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <Card className="fixed bottom-0 left-0 right-0 z-[100] m-4 p-6 glass-card border-border/50 md:left-auto md:right-4 md:bottom-4 md:max-w-md">
        <button
          onClick={() => setShowBanner(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-close-banner"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Cookie className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">We value your privacy</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={acceptAll}
                className="gradient-bg text-white h-10 flex-1"
                data-testid="button-accept-all"
              >
                Accept All
              </Button>
              <Button
                onClick={acceptNecessary}
                variant="outline"
                className="h-10 flex-1"
                data-testid="button-necessary-only"
              >
                Necessary Only
              </Button>
              <Button
                onClick={() => setShowSettings(true)}
                variant="ghost"
                className="h-10"
                data-testid="button-customize"
              >
                <Settings className="w-4 h-4 mr-2" />
                Customize
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-3">
              Read our{' '}
              <a href="#" className="underline hover:text-primary">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="#" className="underline hover:text-primary">
                Cookie Policy
              </a>
            </p>
          </div>
        </div>
      </Card>

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-md" data-testid="dialog-cookie-settings">
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Manage your cookie settings. You can enable or disable different types of cookies below.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <Label className="text-base font-semibold">Necessary Cookies</Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Essential for the website to function properly. Cannot be disabled.
                </p>
              </div>
              <Switch
                checked={true}
                disabled
                data-testid="switch-necessary"
              />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <Label className="text-base font-semibold">Analytics Cookies</Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Help us understand how visitors interact with our website.
                </p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, analytics: checked })
                }
                data-testid="switch-analytics"
              />
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <Label className="text-base font-semibold">Marketing Cookies</Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Used to deliver personalized advertisements relevant to you.
                </p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, marketing: checked })
                }
                data-testid="switch-marketing"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={saveCustom}
              className="gradient-bg text-white flex-1"
              data-testid="button-save-preferences"
            >
              Save Preferences
            </Button>
            <Button
              onClick={acceptAll}
              variant="outline"
              className="flex-1"
              data-testid="button-accept-all-settings"
            >
              Accept All
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

// Helper to check if analytics is enabled
export const isAnalyticsEnabled = (): boolean => {
  const consent = localStorage.getItem(CONSENT_KEY);
  if (!consent) return false;
  const prefs = JSON.parse(consent);
  return prefs.analytics === true;
};
