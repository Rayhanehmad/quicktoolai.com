import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import type { WebsiteCheck } from "@shared/schema";

export function StatusCheckerSection() {
  const [url, setUrl] = useState('');

  const { data: recentChecks } = useQuery<WebsiteCheck[]>({
    queryKey: ['/api/recent-checks'],
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  const checkWebsiteMutation = useMutation({
    mutationFn: async (websiteUrl: string) => {
      const response = await apiRequest('POST', '/api/check-website', { url: websiteUrl });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/recent-checks'] });
      setUrl(''); // Clear input after successful check
    },
  });

  const handleCheck = () => {
    if (!url.trim()) return;
    checkWebsiteMutation.mutate(url.trim());
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCheck();
    }
  };

  const formatUrl = (fullUrl: string) => {
    return fullUrl.replace(/^https?:\/\//, '').slice(0, 15) + (fullUrl.length > 20 ? '...' : '');
  };

  return (
    <div id="status" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Website Status Checker & Uptime Monitor</h3>
        <p className="text-xs text-muted-foreground">Check if any website is up or down instantly - free site monitoring tool</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
        <label className="block text-sm font-semibold mb-3 text-center">Enter Website URL:</label>
        <div className="flex gap-2">
          <Input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
            data-testid="input-website-url"
          />
          <Button
            onClick={handleCheck}
            disabled={checkWebsiteMutation.isPending || !url.trim()}
            className="gradient-bg text-white hover:opacity-90 transition-opacity px-6"
            data-testid="button-check-status"
          >
            {checkWebsiteMutation.isPending ? 'Checking...' : 'Check'}
          </Button>
        </div>
      </div>

      {/* Status Results */}
      {checkWebsiteMutation.data && (
        <div className="animate-slide-up mb-6" data-testid="status-results">
          <div
            className={`p-4 rounded-lg border-2 ${
              checkWebsiteMutation.data.isOnline
                ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                : 'border-red-500 bg-red-50 dark:bg-red-900/20'
            }`}
          >
            <div className="flex items-center justify-center space-x-2 mb-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  checkWebsiteMutation.data.isOnline ? 'bg-green-500' : 'bg-red-500'
                }`}
                data-testid="status-indicator"
              />
              <span className="text-sm font-semibold" data-testid="status-title">
                {checkWebsiteMutation.data.isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
            <div className="text-xs text-muted-foreground" data-testid="response-time">
              Response: {checkWebsiteMutation.data.responseTime}ms
            </div>
          </div>
        </div>
      )}

      {checkWebsiteMutation.error && (
        <div className="p-3 rounded-lg border border-red-500 bg-red-50 dark:bg-red-900/20 mb-6">
          <div className="text-red-700 dark:text-red-300 text-xs">
            Error checking website
          </div>
        </div>
      )}

      {/* Recent Checks */}
      <div>
        <h5 className="text-sm font-semibold mb-3">Recent Checks</h5>
        <div className="space-y-2" data-testid="recent-checks">
          {!recentChecks || recentChecks.length === 0 ? (
            <div className="text-center text-muted-foreground text-xs">
              No recent checks
            </div>
          ) : (
            recentChecks.slice(0, 3).map((check, index) => (
              <div
                key={check.id}
                className="flex items-center justify-between p-2 rounded-lg bg-muted/30"
                data-testid={`recent-check-${index}`}
              >
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      check.isOnline ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  />
                  <span className="text-xs font-medium" data-testid={`check-url-${index}`}>
                    {formatUrl(check.url)}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground" data-testid={`check-details-${index}`}>
                  {check.responseTime}ms
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
