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
              <h4 className="text-lg font-bold">QuickToolAI</h4>
            </div>
            <p className="text-muted-foreground text-sm">
              AI-powered calculators and smart tools for financial planning, health tracking, and productivity. Free intelligent tools for better decisions and automated analysis.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Tools</h5>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <Link href="/percentage" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-percentage">
                  Percentage Calculator
                </Link>
              </li>
              <li>
                <Link href="/loan" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-loan">
                  Loan Calculator
                </Link>
              </li>
              <li>
                <Link href="/mortgage" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-mortgage">
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link href="/interest" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-interest">
                  Interest Calculator
                </Link>
              </li>
              <li>
                <Link href="/discount" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-discount">
                  Discount Calculator
                </Link>
              </li>
              <li>
                <Link href="/tip" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-tip">
                  Tip Calculator
                </Link>
              </li>
              <li>
                <Link href="/profit" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-profit">
                  Profit Calculator
                </Link>
              </li>
              <li>
                <Link href="/currency" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-currency">
                  Currency Converter
                </Link>
              </li>
              <li>
                <Link href="/unit" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-unit">
                  Unit Converter
                </Link>
              </li>
              <li>
                <Link href="/bmi-calc" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-bmi">
                  BMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/bmr" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-bmr">
                  BMR Calculator
                </Link>
              </li>
              <li>
                <Link href="/bodyfat" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-bodyfat">
                  Body Fat Calculator
                </Link>
              </li>
              <li>
                <Link href="/calorie" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-calorie">
                  Calorie Calculator
                </Link>
              </li>
              <li>
                <Link href="/pregnancy" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-pregnancy">
                  Pregnancy Calculator
                </Link>
              </li>
              <li>
                <Link href="/scientific" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-scientific">
                  Scientific Calculator
                </Link>
              </li>
              <li>
                <Link href="/fraction" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-fraction">
                  Fraction Calculator
                </Link>
              </li>
              <li>
                <Link href="/ratio" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-ratio">
                  Ratio Calculator
                </Link>
              </li>
              <li>
                <Link href="/average" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-average">
                  Average Calculator
                </Link>
              </li>
              <li>
                <Link href="/random" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-random">
                  Random Number
                </Link>
              </li>
              <li>
                <Link href="/area" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-area">
                  Area Calculator
                </Link>
              </li>
              <li>
                <Link href="/volume" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-volume">
                  Volume Calculator
                </Link>
              </li>
              <li>
                <Link href="/speed" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-speed">
                  Speed Calculator
                </Link>
              </li>
              <li>
                <Link href="/energy" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-energy">
                  Energy Calculator
                </Link>
              </li>
              <li>
                <Link href="/clock" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-clock">
                  World Clock & Timer
                </Link>
              </li>
              <li>
                <Link href="/age-calc" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-age">
                  Age Calculator
                </Link>
              </li>
              <li>
                <Link href="/date" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-date">
                  Date Calculator
                </Link>
              </li>
              <li>
                <Link href="/time-calc" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-time">
                  Time Calculator
                </Link>
              </li>
              <li>
                <Link href="/countdown" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-countdown">
                  Countdown Timer
                </Link>
              </li>
              <li>
                <Link href="/sleep" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-sleep">
                  Sleep Calculator
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-status">
                  Website Checker
                </Link>
              </li>
              <li>
                <Link href="/ip-lookup" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-ip">
                  IP Lookup
                </Link>
              </li>
              <li>
                <Link href="/qr-generator" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-qr">
                  QR Generator
                </Link>
              </li>
              <li>
                <Link href="/notepad" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-notepad">
                  Online Notepad
                </Link>
              </li>
              <li>
                <Link href="/gpa" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-gpa">
                  GPA Calculator
                </Link>
              </li>
              <li>
                <Link href="/love" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-love">
                  Love Calculator
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">About</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors cursor-pointer" data-testid="footer-link-about">
                  About Us
                </Link>
              </li>
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
            © 2024 QuickToolAI (www.quicktoolai.com). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
