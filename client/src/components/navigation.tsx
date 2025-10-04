import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";
import { Clock, Sun, Moon, Menu, X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const allTools = [
  // Financial
  { id: 'percentage', name: 'Percentage Calculator', category: 'Financial' },
  { id: 'loan', name: 'Loan Calculator', category: 'Financial' },
  { id: 'mortgage', name: 'Mortgage Calculator', category: 'Financial' },
  { id: 'interest', name: 'Interest Calculator', category: 'Financial' },
  { id: 'discount', name: 'Discount Calculator', category: 'Financial' },
  { id: 'tip', name: 'Tip Calculator', category: 'Financial' },
  { id: 'profit', name: 'Profit Calculator', category: 'Financial' },
  // Converters
  { id: 'currency', name: 'Currency Converter', category: 'Converters' },
  { id: 'unit', name: 'Unit Converter', category: 'Converters' },
  // Health & Fitness
  { id: 'bmi-calc', name: 'BMI Calculator', category: 'Health' },
  { id: 'bmr', name: 'BMR Calculator', category: 'Health' },
  { id: 'bodyfat', name: 'Body Fat Calculator', category: 'Health' },
  { id: 'calorie', name: 'Calorie Calculator', category: 'Health' },
  { id: 'pregnancy', name: 'Pregnancy Calculator', category: 'Health' },
  // Math & Science
  { id: 'scientific', name: 'Scientific Calculator', category: 'Math' },
  { id: 'fraction', name: 'Fraction Calculator', category: 'Math' },
  { id: 'ratio', name: 'Ratio Calculator', category: 'Math' },
  { id: 'average', name: 'Average Calculator', category: 'Math' },
  { id: 'random', name: 'Random Number', category: 'Math' },
  // Measurement
  { id: 'area', name: 'Area Calculator', category: 'Measurement' },
  { id: 'volume', name: 'Volume Calculator', category: 'Measurement' },
  { id: 'speed', name: 'Speed Calculator', category: 'Measurement' },
  { id: 'energy', name: 'Energy Calculator', category: 'Measurement' },
  // Time & Date
  { id: 'clock', name: 'World Clock & Timer', category: 'Time' },
  { id: 'age-calc', name: 'Age Calculator', category: 'Time' },
  { id: 'date', name: 'Date Calculator', category: 'Time' },
  { id: 'time-calc', name: 'Time Calculator', category: 'Time' },
  { id: 'countdown', name: 'Countdown Timer', category: 'Time' },
  { id: 'sleep', name: 'Sleep Calculator', category: 'Time' },
  // Utilities
  { id: 'status', name: 'Website Checker', category: 'Utilities' },
  { id: 'ip-lookup', name: 'IP Lookup', category: 'Utilities' },
  { id: 'qr-generator', name: 'QR Generator', category: 'Utilities' },
  { id: 'notepad', name: 'Online Notepad', category: 'Utilities' },
  // Academic & Fun
  { id: 'gpa', name: 'GPA Calculator', category: 'Academic' },
  { id: 'love', name: 'Love Calculator', category: 'Fun' },
];

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setSearchTerm('');
    }
  };

  const filteredTools = searchTerm 
    ? allTools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const categories = Array.from(new Set(allTools.map(t => t.category)));

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Free Online Tools
            </h1>
          </div>
          
          {/* Desktop Navigation with Search & Categories */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64 h-9"
                data-testid="input-search"
              />
              {searchTerm && filteredTools.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-background border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                  {filteredTools.map(tool => (
                    <button
                      key={tool.id}
                      onClick={() => scrollToSection(tool.id)}
                      className="w-full text-left px-4 py-2 hover:bg-muted/50 transition-colors text-sm"
                    >
                      <div className="font-medium">{tool.name}</div>
                      <div className="text-xs text-muted-foreground">{tool.category}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Browse by Category
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {categories.map(category => (
                  <div key={category}>
                    <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">{category}</div>
                    {allTools.filter(t => t.category === category).map(tool => (
                      <DropdownMenuItem key={tool.id} onClick={() => scrollToSection(tool.id)}>
                        {tool.name}
                      </DropdownMenuItem>
                    ))}
                    {category !== categories[categories.length - 1] && <DropdownMenuSeparator />}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            {/* Mobile Search */}
            <div className="mb-4 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            {searchTerm ? (
              <div className="space-y-1">
                {filteredTools.map(tool => (
                  <button
                    key={tool.id}
                    onClick={() => scrollToSection(tool.id)}
                    className="w-full text-left px-3 py-2 hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    <div className="text-sm font-medium">{tool.name}</div>
                    <div className="text-xs text-muted-foreground">{tool.category}</div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {allTools.slice(0, 12).map(tool => (
                  <button
                    key={tool.id}
                    onClick={() => scrollToSection(tool.id)}
                    className="text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors text-sm"
                  >
                    {tool.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
