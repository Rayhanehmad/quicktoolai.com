import { useState } from 'react';
import { X } from 'lucide-react';

interface AdSensePlaceholderProps {
  slot?: string;
  format?: 'horizontal' | 'vertical' | 'rectangle' | 'responsive';
  className?: string;
}

export function AdSensePlaceholder({ 
  slot = 'auto', 
  format = 'responsive',
  className = '' 
}: AdSensePlaceholderProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const sizeInfo = {
    horizontal: '728x90 Leaderboard',
    vertical: '160x600 Skyscraper',
    rectangle: '300x250 Medium Rectangle',
    responsive: 'Responsive Ad'
  };

  const sizeClass = {
    horizontal: 'h-[90px] max-w-[728px]',
    vertical: 'h-[600px] w-[160px]',
    rectangle: 'h-[250px] w-[300px]',
    responsive: 'h-[100px] md:h-[250px] w-full'
  };

  return (
    <div 
      className={`relative ${sizeClass[format]} mx-auto my-6 ${className}`}
      data-testid={`adsense-${format}-${slot}`}
    >
      <div className="w-full h-full flex items-center justify-center bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-lg">
        <div className="text-center p-4">
          <div className="text-sm font-semibold text-muted-foreground mb-1">
            AdSense Placeholder
          </div>
          <div className="text-xs text-muted-foreground/70">
            {sizeInfo[format]}
          </div>
          <div className="text-[10px] text-muted-foreground/50 mt-2">
            Paste your AdSense code here
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted/50 transition-colors"
          aria-label="Hide ad placeholder"
          data-testid="button-hide-ad"
        >
          <X className="w-3 h-3 text-muted-foreground" />
        </button>
      </div>
      
      {/* Hidden comment for easy identification in production */}
      {/* AdSense Slot: {slot} | Format: {format} */}
    </div>
  );
}
