import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";
import { Clock, Sun, Moon, Menu, X, Search, Home } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FavoritesPanel } from "@/components/favorites-panel";
import { ToolsBanner } from "@/components/tools-banner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const allTools = [
  // Financial
  { id: 'percentage', name: 'Percentage Calculator', category: 'Financial', path: '/percentage' },
  { id: 'loan', name: 'Loan Calculator', category: 'Financial', path: '/loan' },
  { id: 'mortgage', name: 'Mortgage Calculator', category: 'Financial', path: '/mortgage' },
  { id: 'interest', name: 'Interest Calculator', category: 'Financial', path: '/interest' },
  { id: 'discount', name: 'Discount Calculator', category: 'Financial', path: '/discount' },
  { id: 'tip', name: 'Tip Calculator', category: 'Financial', path: '/tip' },
  { id: 'profit', name: 'Profit Calculator', category: 'Financial', path: '/profit' },
  // Converters
  { id: 'currency', name: 'Currency Converter', category: 'Converters', path: '/currency' },
  { id: 'unit', name: 'Unit Converter', category: 'Converters', path: '/unit' },
  // Health & Fitness
  { id: 'bmi-calc', name: 'BMI Calculator', category: 'Health', path: '/bmi-calc' },
  { id: 'bmr', name: 'BMR Calculator', category: 'Health', path: '/bmr' },
  { id: 'bodyfat', name: 'Body Fat Calculator', category: 'Health', path: '/bodyfat' },
  { id: 'calorie', name: 'Calorie Calculator', category: 'Health', path: '/calorie' },
  { id: 'pregnancy', name: 'Pregnancy Calculator', category: 'Health', path: '/pregnancy' },
  // Math & Science
  { id: 'scientific', name: 'Scientific Calculator', category: 'Math', path: '/scientific' },
  { id: 'fraction', name: 'Fraction Calculator', category: 'Math', path: '/fraction' },
  { id: 'ratio', name: 'Ratio Calculator', category: 'Math', path: '/ratio' },
  { id: 'average', name: 'Average Calculator', category: 'Math', path: '/average' },
  { id: 'random', name: 'Random Number', category: 'Math', path: '/random' },
  // Measurement
  { id: 'area', name: 'Area Calculator', category: 'Measurement', path: '/area' },
  { id: 'volume', name: 'Volume Calculator', category: 'Measurement', path: '/volume' },
  { id: 'speed', name: 'Speed Calculator', category: 'Measurement', path: '/speed' },
  { id: 'energy', name: 'Energy Calculator', category: 'Measurement', path: '/energy' },
  // Time & Date
  { id: 'clock', name: 'World Clock & Timer', category: 'Time', path: '/clock' },
  { id: 'age-calc', name: 'Age Calculator', category: 'Time', path: '/age-calc' },
  { id: 'date', name: 'Date Calculator', category: 'Time', path: '/date' },
  { id: 'time-calc', name: 'Time Calculator', category: 'Time', path: '/time-calc' },
  { id: 'countdown', name: 'Countdown Timer', category: 'Time', path: '/countdown' },
  { id: 'sleep', name: 'Sleep Calculator', category: 'Time', path: '/sleep' },
  // Utilities
  { id: 'status', name: 'Website Checker', category: 'Utilities', path: '/status' },
  { id: 'ip-lookup', name: 'IP Lookup', category: 'Utilities', path: '/ip-lookup' },
  { id: 'qr-generator', name: 'QR Generator', category: 'Utilities', path: '/qr-generator' },
  { id: 'notepad', name: 'Online Notepad', category: 'Utilities', path: '/notepad' },
  // Academic & Fun
  { id: 'gpa', name: 'GPA Calculator', category: 'Academic', path: '/gpa' },
  { id: 'love', name: 'Love Calculator', category: 'Fun', path: '/love' },
];

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = searchTerm 
    ? allTools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const categories = Array.from(new Set(allTools.map(t => t.category)));

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" data-testid="link-home-logo">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Free Online Tools
              </h1>
            </div>
          </Link>
          
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
                    <Link key={tool.id} href={tool.path}>
                      <div
                        onClick={() => setSearchTerm('')}
                        className="w-full text-left px-4 py-2 hover:bg-muted/50 transition-colors text-sm cursor-pointer"
                        data-testid={`search-result-${tool.id}`}
                      >
                        <div className="font-medium">{tool.name}</div>
                        <div className="text-xs text-muted-foreground">{tool.category}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9" data-testid="button-categories">
                  Categories
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {categories.map((category, index) => {
                  const categoryTools = allTools.filter(t => t.category === category);
                  return (
                    <div key={category}>
                      <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                        {category}
                      </div>
                      {categoryTools.map(tool => (
                        <Link key={tool.id} href={tool.path}>
                          <DropdownMenuItem className="cursor-pointer" data-testid={`category-${tool.id}`}>
                            {tool.name}
                          </DropdownMenuItem>
                        </Link>
                      ))}
                      {index < categories.length - 1 && <DropdownMenuSeparator />}
                    </div>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Home Button (shown when not on home page) */}
            {location !== '/' && (
              <Link href="/" data-testid="link-home-nav">
                <Button variant="outline" size="sm" className="h-9 gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </Button>
              </Link>
            )}

            {/* Favorites Panel */}
            <FavoritesPanel />

            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9"
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <FavoritesPanel />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9"
              data-testid="button-theme-toggle-mobile"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-9 w-9"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {/* Mobile Search */}
            <div className="mb-4 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search-mobile"
              />
              {searchTerm && filteredTools.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-background border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                  {filteredTools.map(tool => (
                    <Link key={tool.id} href={tool.path}>
                      <div
                        onClick={() => {
                          setSearchTerm('');
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-muted/50 transition-colors text-sm cursor-pointer"
                      >
                        <div className="font-medium">{tool.name}</div>
                        <div className="text-xs text-muted-foreground">{tool.category}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Home Link */}
            {location !== '/' && (
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full mb-2 gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="link-home-mobile"
                >
                  <Home className="w-4 h-4" />
                  Home
                </Button>
              </Link>
            )}

            {/* Mobile Categories */}
            <div className="space-y-4">
              {categories.map(category => {
                const categoryTools = allTools.filter(t => t.category === category);
                return (
                  <div key={category}>
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2">{category}</h3>
                    <div className="space-y-1">
                      {categoryTools.map(tool => (
                        <Link key={tool.id} href={tool.path}>
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                            data-testid={`mobile-${tool.id}`}
                          >
                            {tool.name}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      </nav>
      <ToolsBanner position="top" />
    </>
  );
}
