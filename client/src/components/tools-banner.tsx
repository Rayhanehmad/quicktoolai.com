import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

const allTools = [
  // Financial
  { id: 'percentage', name: 'Percentage', path: '/percentage', category: 'Financial' },
  { id: 'loan', name: 'Loan', path: '/loan', category: 'Financial' },
  { id: 'mortgage', name: 'Mortgage', path: '/mortgage', category: 'Financial' },
  { id: 'interest', name: 'Interest', path: '/interest', category: 'Financial' },
  { id: 'discount', name: 'Discount', path: '/discount', category: 'Financial' },
  { id: 'tip', name: 'Tip', path: '/tip', category: 'Financial' },
  { id: 'profit', name: 'Profit', path: '/profit', category: 'Financial' },
  
  // Converters
  { id: 'currency', name: 'Currency', path: '/currency', category: 'Converters' },
  { id: 'unit', name: 'Unit', path: '/unit', category: 'Converters' },
  
  // Health
  { id: 'bmi-calc', name: 'BMI', path: '/bmi-calc', category: 'Health' },
  { id: 'bmr', name: 'BMR', path: '/bmr', category: 'Health' },
  { id: 'bodyfat', name: 'Body Fat', path: '/bodyfat', category: 'Health' },
  { id: 'calorie', name: 'Calorie', path: '/calorie', category: 'Health' },
  { id: 'pregnancy', name: 'Pregnancy', path: '/pregnancy', category: 'Health' },
  
  // Math
  { id: 'scientific', name: 'Scientific', path: '/scientific', category: 'Math' },
  { id: 'fraction', name: 'Fraction', path: '/fraction', category: 'Math' },
  { id: 'ratio', name: 'Ratio', path: '/ratio', category: 'Math' },
  { id: 'average', name: 'Average', path: '/average', category: 'Math' },
  { id: 'random', name: 'Random', path: '/random', category: 'Math' },
  
  // Measurement
  { id: 'area', name: 'Area', path: '/area', category: 'Measurement' },
  { id: 'volume', name: 'Volume', path: '/volume', category: 'Measurement' },
  { id: 'speed', name: 'Speed', path: '/speed', category: 'Measurement' },
  { id: 'energy', name: 'Energy', path: '/energy', category: 'Measurement' },
  
  // Time
  { id: 'clock', name: 'World Clock', path: '/clock', category: 'Time' },
  { id: 'age-calc', name: 'Age', path: '/age-calc', category: 'Time' },
  { id: 'date', name: 'Date', path: '/date', category: 'Time' },
  { id: 'time-calc', name: 'Time', path: '/time-calc', category: 'Time' },
  { id: 'countdown', name: 'Countdown', path: '/countdown', category: 'Time' },
  { id: 'sleep', name: 'Sleep', path: '/sleep', category: 'Time' },
  
  // Utilities
  { id: 'status', name: 'Website Status', path: '/status', category: 'Utilities' },
  { id: 'ip-lookup', name: 'IP Lookup', path: '/ip-lookup', category: 'Utilities' },
  { id: 'qr-generator', name: 'QR Code', path: '/qr-generator', category: 'Utilities' },
  { id: 'notepad', name: 'Notepad', path: '/notepad', category: 'Utilities' },
  
  // Academic & Fun
  { id: 'gpa', name: 'GPA', path: '/gpa', category: 'Academic' },
  { id: 'love', name: 'Love', path: '/love', category: 'Fun' },
];

interface ToolsBannerProps {
  position?: 'top' | 'bottom';
}

export function ToolsBanner({ position = 'top' }: ToolsBannerProps) {
  return (
    <div 
      className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-border py-3 px-4 overflow-x-auto scrollbar-hide"
      data-testid={`tools-banner-${position}`}
    >
      <div className="flex items-center gap-2 min-w-max">
        <span className="text-xs font-semibold text-muted-foreground mr-2 whitespace-nowrap">
          Quick Tools:
        </span>
        {allTools.map((tool, index) => (
          <div key={tool.id} className="flex items-center gap-2">
            <Link href={tool.path}>
              <a 
                className="text-xs font-medium text-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-md hover:bg-primary/10 whitespace-nowrap cursor-pointer"
                data-testid={`banner-link-${tool.id}`}
              >
                {tool.name}
              </a>
            </Link>
            {index < allTools.length - 1 && (
              <ChevronRight className="w-3 h-3 text-muted-foreground/50" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
