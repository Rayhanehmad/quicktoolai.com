import { Clock } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-bold">Free Online Clock Hub</h4>
            </div>
            <p className="text-muted-foreground text-sm">
              Free online clock with world timezones, Pomodoro timer, bedtime calculator, and website uptime checker.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Tools</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => scrollToSection('clock')}
                  className="hover:text-foreground transition-colors"
                  data-testid="footer-link-clock"
                >
                  World Clock Online
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('clock')}
                  className="hover:text-foreground transition-colors"
                  data-testid="footer-link-timer"
                >
                  Pomodoro Timer Online
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sleep')}
                  className="hover:text-foreground transition-colors"
                  data-testid="footer-link-sleep"
                >
                  Bedtime Calculator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('status')}
                  className="hover:text-foreground transition-colors"
                  data-testid="footer-link-status"
                >
                  Website Uptime Checker
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">About</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Time & Tools Hub. All rights reserved. Built with modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
