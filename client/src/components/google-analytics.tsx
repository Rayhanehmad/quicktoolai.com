import { useEffect } from 'react';
import { useLocation } from 'wouter';

declare global {
  interface Window {
    gtag?: (
      command: string,
      target: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

interface GoogleAnalyticsProps {
  measurementId?: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const [location] = useLocation();

  useEffect(() => {
    if (!measurementId) return;

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_path: window.location.pathname,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [measurementId]);

  // Track page views on route changes
  useEffect(() => {
    if (!measurementId || !window.gtag) return;

    window.gtag('event', 'page_view', {
      page_path: location,
      page_title: document.title,
    });
  }, [location, measurementId]);

  return null;
}

// Helper function to track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track tool usage
export const trackToolUsage = (toolName: string, action: string = 'calculate') => {
  trackEvent('tool_usage', {
    tool_name: toolName,
    action: action,
  });
};

// Track AI chatbot usage
export const trackChatEvent = (action: 'open' | 'close' | 'message' | 'quick_action') => {
  trackEvent('ai_chatbot', {
    action: action,
  });
};
