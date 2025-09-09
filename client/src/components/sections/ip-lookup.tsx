import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Globe, Info, Copy } from "lucide-react";

interface IPInfo {
  ip: string;
  location?: string;
  isp?: string;
}

export function IPLookupSection() {
  const [ipInfo, setIpInfo] = useState<IPInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchIPInfo = async () => {
    setIsLoading(true);
    try {
      // Using a simple IP detection service
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      
      setIpInfo({
        ip: data.ip,
        location: 'Location info requires premium API',
        isp: 'ISP info requires premium API'
      });
    } catch (error) {
      console.error('Failed to fetch IP:', error);
      setIpInfo({
        ip: 'Unable to fetch IP address',
        location: 'Error fetching location',
        isp: 'Error fetching ISP'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  useEffect(() => {
    fetchIPInfo();
  }, []);

  return (
    <div id="ip-lookup" className="glass-card neomorphic rounded-2xl p-6 text-center h-full">
      <h3 className="text-xl font-bold mb-4 text-primary">IP Address Lookup</h3>
      
      <Button
        onClick={fetchIPInfo}
        className="w-full gradient-bg text-white py-2 px-4 font-semibold hover:opacity-90 transition-opacity mb-6"
        disabled={isLoading}
        data-testid="button-refresh-ip"
      >
        <Globe className="w-4 h-4 mr-2" />
        {isLoading ? 'Loading...' : 'Refresh IP Info'}
      </Button>

      {/* IP Info Results */}
      {ipInfo ? (
        <div className="space-y-3" data-testid="ip-results">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="text-lg font-bold text-primary mb-2" data-testid="ip-address">
              {ipInfo.ip}
            </div>
            <Button
              onClick={() => copyToClipboard(ipInfo.ip)}
              variant="outline"
              size="sm"
              className="text-xs"
              data-testid="button-copy-ip"
            >
              <Copy className="w-3 h-3 mr-1" />
              Copy IP
            </Button>
          </div>
          
          <div className="space-y-2 text-xs">
            <div className="p-2 bg-muted/30 rounded">
              <div className="font-semibold">Location</div>
              <div className="text-muted-foreground" data-testid="ip-location">
                {ipInfo.location}
              </div>
            </div>
            <div className="p-2 bg-muted/30 rounded">
              <div className="font-semibold">ISP</div>
              <div className="text-muted-foreground" data-testid="ip-isp">
                {ipInfo.isp}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-muted-foreground text-sm">
          <p>Loading your IP address information...</p>
        </div>
      )}

      {/* IP Tip */}
      <div className="mt-4 p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center justify-center mb-1">
          <Info className="w-4 h-4 mr-1 text-accent" />
          <span className="text-xs font-semibold">Privacy</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Your IP address is visible to websites you visit
        </p>
      </div>
    </div>
  );
}