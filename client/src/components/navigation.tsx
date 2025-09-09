import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";
import { Clock, Sun, Moon, Menu, X } from "lucide-react";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Free Online Clock & Tools
            </h1>
          </div>
          
          {/* Desktop Navigation - All Tools as Text Links */}
          <div className="hidden lg:flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
            <a 
              onClick={() => scrollToSection('clock')}
              className="text-foreground hover:text-primary hover:underline cursor-pointer transition-colors"
              data-testid="nav-clock"
            >
              Clock & Timer
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              onClick={() => scrollToSection('sleep')}
              className="text-foreground hover:text-primary hover:underline cursor-pointer transition-colors"
              data-testid="nav-sleep"
            >
              Sleep Calculator
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              onClick={() => scrollToSection('status')}
              className="text-foreground hover:text-primary hover:underline cursor-pointer transition-colors"
              data-testid="nav-status"
            >
              Website Checker
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              onClick={() => scrollToSection('age-calc')}
              className="text-foreground hover:text-primary hover:underline cursor-pointer transition-colors"
              data-testid="nav-age"
            >
              Age Calculator
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              onClick={() => scrollToSection('bmi-calc')}
              className="text-foreground hover:text-primary hover:underline cursor-pointer transition-colors"
              data-testid="nav-bmi"
            >
              BMI Calculator
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              onClick={() => scrollToSection('ip-lookup')}
              className="text-foreground hover:text-primary hover:underline cursor-pointer transition-colors"
              data-testid="nav-ip"
            >
              IP Lookup
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              onClick={() => scrollToSection('qr-generator')}
              className="text-foreground hover:text-primary hover:underline cursor-pointer transition-colors"
              data-testid="nav-qr"
            >
              QR Generator
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              onClick={() => scrollToSection('notepad')}
              className="text-foreground hover:text-primary hover:underline cursor-pointer transition-colors"
              data-testid="nav-notepad"
            >
              Online Notepad
            </a>
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
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => scrollToSection('clock')}
                className="text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors text-sm"
                data-testid="nav-mobile-clock"
              >
                Clock & Timer
              </button>
              <button 
                onClick={() => scrollToSection('sleep')}
                className="text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors text-sm"
                data-testid="nav-mobile-sleep"
              >
                Sleep Calculator
              </button>
              <button 
                onClick={() => scrollToSection('status')}
                className="text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors text-sm"
                data-testid="nav-mobile-status"
              >
                Website Checker
              </button>
              <button 
                onClick={() => scrollToSection('age-calc')}
                className="text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors text-sm"
                data-testid="nav-mobile-age"
              >
                Age Calculator
              </button>
              <button 
                onClick={() => scrollToSection('bmi-calc')}
                className="text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors text-sm"
                data-testid="nav-mobile-bmi"
              >
                BMI Calculator
              </button>
              <button 
                onClick={() => scrollToSection('ip-lookup')}
                className="text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors text-sm"
                data-testid="nav-mobile-ip"
              >
                IP Lookup
              </button>
              <button 
                onClick={() => scrollToSection('qr-generator')}
                className="text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors text-sm"
                data-testid="nav-mobile-qr"
              >
                QR Generator
              </button>
              <button 
                onClick={() => scrollToSection('notepad')}
                className="text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors text-sm"
                data-testid="nav-mobile-notepad"
              >
                Online Notepad
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
