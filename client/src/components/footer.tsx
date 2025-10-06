import { Clock } from "lucide-react";
import { Link } from "wouter";
import { ToolsBanner } from "@/components/tools-banner";

export function Footer() {
  return (
    <>
      <ToolsBanner position="bottom" />
      <footer className="bg-muted/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-bold">Free Online Clock & Tools</h4>
            </div>
            <p className="text-muted-foreground text-sm">
              Free online clock with world timezones, Pomodoro timer, bedtime calculator, and website uptime checker.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Tools</h5>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <Link href="/percentage">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-percentage">
                    Percentage Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/loan">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-loan">
                    Loan Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/mortgage">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-mortgage">
                    Mortgage Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/interest">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-interest">
                    Interest Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/discount">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-discount">
                    Discount Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tip">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-tip">
                    Tip Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profit">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-profit">
                    Profit Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/currency">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-currency">
                    Currency Converter
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/unit">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-unit">
                    Unit Converter
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/bmi-calc">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-bmi">
                    BMI Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/bmr">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-bmr">
                    BMR Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/bodyfat">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-bodyfat">
                    Body Fat Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/calorie">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-calorie">
                    Calorie Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/pregnancy">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-pregnancy">
                    Pregnancy Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/scientific">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-scientific">
                    Scientific Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/fraction">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-fraction">
                    Fraction Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/ratio">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-ratio">
                    Ratio Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/average">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-average">
                    Average Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/random">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-random">
                    Random Number
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/area">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-area">
                    Area Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/volume">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-volume">
                    Volume Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/speed">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-speed">
                    Speed Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/energy">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-energy">
                    Energy Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/clock">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-clock">
                    World Clock & Timer
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/age-calc">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-age">
                    Age Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/date">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-date">
                    Date Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/time-calc">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-time">
                    Time Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/countdown">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-countdown">
                    Countdown Timer
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/sleep">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-sleep">
                    Sleep Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/status">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-status">
                    Website Checker
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/ip-lookup">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-ip">
                    IP Lookup
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/qr-generator">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-qr">
                    QR Generator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/notepad">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-notepad">
                    Online Notepad
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/gpa">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-gpa">
                    GPA Calculator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/love">
                  <a className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-love">
                    Love Calculator
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">About</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy-policy" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-support">
                  Support
                </Link>
              </li>
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
    </>
  );
}
