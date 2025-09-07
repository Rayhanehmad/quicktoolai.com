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
              Free Online Clock Hub
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('clock')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-clock"
            >
              World Clock & Timer
            </button>
            <button 
              onClick={() => scrollToSection('sleep')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-sleep"
            >
              Bedtime Calculator
            </button>
            <button 
              onClick={() => scrollToSection('status')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-status"
            >
              Website Uptime
            </button>
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
              className="md:hidden"
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
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('clock')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                data-testid="nav-mobile-clock"
              >
                World Clock & Timer
              </button>
              <button 
                onClick={() => scrollToSection('sleep')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                data-testid="nav-mobile-sleep"
              >
                Bedtime Calculator
              </button>
              <button 
                onClick={() => scrollToSection('status')}
                className="text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                data-testid="nav-mobile-status"
              >
                Website Uptime
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
