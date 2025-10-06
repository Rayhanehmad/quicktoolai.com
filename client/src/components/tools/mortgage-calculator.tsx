import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home } from "lucide-react";

export function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('30');
  const [result, setResult] = useState<{ monthly: number; total: number; interest: number } | null>(null);

  const calculate = () => {
    const price = parseFloat(homePrice);
    const down = parseFloat(downPayment);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseInt(loanTerm) * 12;

    if (!isNaN(price) && !isNaN(down) && !isNaN(rate) && !isNaN(term)) {
      const principal = price - down;
      const monthly = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
      const total = monthly * term;
      const interest = total - principal;

      setResult({ monthly, total: total + down, interest });
    }
  };

  return (
    <div id="mortgage" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Mortgage Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate monthly mortgage payments</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Home Price:</label>
          <Input type="number" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} 
            placeholder="300000" className="text-center h-11" data-testid="input-price" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Down Payment:</label>
          <Input type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} 
            placeholder="60000" className="text-center h-11" data-testid="input-down" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Interest Rate (% per year):</label>
          <Input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} 
            placeholder="3.5" step="0.1" className="text-center h-11" data-testid="input-rate" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Loan Term (years):</label>
          <Input type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} 
            placeholder="30" className="text-center h-11" data-testid="input-term" />
        </div>
      </div>

      <Button onClick={calculate} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12"
        disabled={!homePrice || !downPayment || !interestRate} data-testid="button-calculate">
        <Home className="w-4 h-4 mr-2" />Calculate
      </Button>

      {result && (
        <div className="space-y-3 animate-slide-up" data-testid="result">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="text-2xl font-bold text-primary text-center" data-testid="monthly">{result.monthly.toFixed(2)}/mo</div>
            <div className="text-xs text-center text-muted-foreground">Monthly Payment</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 bg-muted/30 rounded text-center">
              <div className="text-sm font-semibold" data-testid="total">{result.total.toFixed(0)}</div>
              <div className="text-xs text-muted-foreground">Total Cost</div>
            </div>
            <div className="p-3 bg-muted/30 rounded text-center">
              <div className="text-sm font-semibold" data-testid="interest">{result.interest.toFixed(0)}</div>
              <div className="text-xs text-muted-foreground">Total Interest</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
