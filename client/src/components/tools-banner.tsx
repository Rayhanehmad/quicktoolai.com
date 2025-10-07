import { useRef } from "react";
import { Link } from "wouter";
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dropdownScrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollDropdownUp = () => {
    if (dropdownScrollRef.current) {
      dropdownScrollRef.current.scrollBy({ top: -100, behavior: 'smooth' });
    }
  };

  const scrollDropdownDown = () => {
    if (dropdownScrollRef.current) {
      dropdownScrollRef.current.scrollBy({ top: 100, behavior: 'smooth' });
    }
  };

  const categories = Array.from(new Set(allTools.map(t => t.category)));

  return (
    <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-border relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-background/80 hover:bg-background"
        onClick={scrollLeft}
        data-testid="banner-scroll-left"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <div 
        ref={scrollContainerRef}
        className="py-3 px-12 overflow-x-auto scrollbar-hide"
        data-testid={`tools-banner-${position}`}
      >
        <div className="flex items-center gap-2 min-w-max">
          {allTools.map((tool, index) => (
            <div key={tool.id} className="flex items-center gap-2">
              <Link href={tool.path}>
                <span 
                  className="text-xs font-medium text-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-md hover:bg-primary/10 whitespace-nowrap cursor-pointer"
                  data-testid={`banner-link-${tool.id}`}
                >
                  {tool.name}
                </span>
              </Link>
              {index < allTools.length - 1 && (
                <ChevronRight className="w-3 h-3 text-muted-foreground/50" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 bg-background/80 hover:bg-background"
              data-testid="banner-dropdown-tools"
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 p-0">
            <div className="flex flex-col">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 rounded-none border-b hover:bg-muted"
                onClick={scrollDropdownUp}
                data-testid="dropdown-scroll-up"
              >
                <ChevronUp className="h-4 w-4" />
              </Button>
              
              <div 
                ref={dropdownScrollRef}
                className="h-80 overflow-y-auto"
                data-testid="dropdown-scroll-container"
              >
                {categories.map((category, index) => {
                  const categoryTools = allTools.filter(t => t.category === category);
                  return (
                    <div key={category}>
                      <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                        {category}
                      </div>
                      {categoryTools.map(tool => (
                        <DropdownMenuItem key={tool.id} asChild>
                          <Link href={tool.path} className="cursor-pointer" data-testid={`banner-dropdown-${tool.id}`}>
                            {tool.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                      {index < categories.length - 1 && <DropdownMenuSeparator />}
                    </div>
                  );
                })}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                className="h-8 rounded-none border-t hover:bg-muted"
                onClick={scrollDropdownDown}
                data-testid="dropdown-scroll-down"
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
