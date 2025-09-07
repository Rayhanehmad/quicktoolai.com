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
    return fullUrl.replace(/^https?:\/\//, '');
  };

  return (
    <section id="status" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Website Status Checker</h3>
          <p className="text-muted-foreground">Check if any website is online or offline</p>
        </div>

        <div className="glass-card neomorphic rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-semibold mb-3">Enter Website URL</label>
              <div className="flex space-x-3">
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
                  className="gradient-bg text-white hover:opacity-90 transition-opacity"
                  data-testid="button-check-status"
                >
                  {checkWebsiteMutation.isPending ? 'Checking...' : 'Check'}
                </Button>
              </div>
            </div>

            {/* Status Results */}
            {checkWebsiteMutation.data && (
              <div className="animate-slide-up" data-testid="status-results">
                <div
                  className={`p-6 rounded-lg border-2 ${
                    checkWebsiteMutation.data.isOnline
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        checkWebsiteMutation.data.isOnline ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      data-testid="status-indicator"
                    />
                    <h4 className="text-lg font-semibold" data-testid="status-title">
                      Website is {checkWebsiteMutation.data.isOnline ? 'Online' : 'Offline'}
                    </h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response Time:</span>
                      <span data-testid="response-time">
                        {checkWebsiteMutation.data.responseTime} ms
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Last Checked:</span>
                      <span data-testid="last-checked">
                        {new Date(checkWebsiteMutation.data.checkedAt).toLocaleTimeString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status Code:</span>
                      <span data-testid="status-code">
                        {checkWebsiteMutation.data.statusCode || 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {checkWebsiteMutation.error && (
              <div className="p-4 rounded-lg border-2 border-red-500 bg-red-50 dark:bg-red-900/20">
                <div className="text-red-700 dark:text-red-300">
                  Error checking website: {checkWebsiteMutation.error.message}
                </div>
              </div>
            )}

            {/* Recent Checks */}
            <div>
              <h5 className="font-semibold mb-3">Recent Checks</h5>
              <div className="space-y-2" data-testid="recent-checks">
                {!recentChecks || recentChecks.length === 0 ? (
                  <div className="text-center text-muted-foreground py-4">
                    No recent checks
                  </div>
                ) : (
                  recentChecks.slice(0, 3).map((check, index) => (
                    <div
                      key={check.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                      data-testid={`recent-check-${index}`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            check.isOnline ? 'bg-green-500' : 'bg-red-500'
                          }`}
                        />
                        <span className="text-sm font-medium" data-testid={`check-url-${index}`}>
                          {formatUrl(check.url)}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground" data-testid={`check-details-${index}`}>
                        {check.responseTime}ms • {new Date(check.checkedAt).toLocaleTimeString()}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
