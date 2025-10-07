import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator } from "lucide-react";

interface LoanResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
}

export function LoanCalculator() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<LoanResult | null>(null);

  const calculate = () => {
    const principal = parseFloat(amount);
    const annualRate = parseFloat(rate) / 100;
    const monthlyRate = annualRate / 12;
    const numPayments = parseFloat(years) * 12;

    if (!isNaN(principal) && !isNaN(monthlyRate) && !isNaN(numPayments) && monthlyRate > 0) {
      const monthlyPayment = 
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
        (Math.pow(1 + monthlyRate, numPayments) - 1);
      
      const totalPayment = monthlyPayment * numPayments;
      const totalInterest = totalPayment - principal;

      setResult({
        monthlyPayment,
        totalPayment,
        totalInterest
      });
    }
  };

  return (
    <div id="loan" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Loan Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate monthly loan payments and total interest</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Loan Amount:</label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="10000"
            className="text-center h-11"
            data-testid="input-amount"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Interest Rate (% per year):</label>
          <Input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="5"
            step="0.1"
            className="text-center h-11"
            data-testid="input-rate"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Loan Term (years):</label>
          <Input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="5"
            className="text-center h-11"
            data-testid="input-years"
          />
        </div>
      </div>

      <Button
        onClick={calculate}
        className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12"
        disabled={!amount || !rate || !years}
        data-testid="button-calculate"
      >
        <Calculator className="w-4 h-4 mr-2" />
        Calculate
      </Button>

      {result && (
        <div className="space-y-3 animate-slide-up" data-testid="result">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="text-lg font-bold text-primary text-center" data-testid="monthly-payment">
              {result.monthlyPayment.toFixed(2)}/month
            </div>
            <div className="text-xs text-center text-muted-foreground">Monthly Payment</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 bg-muted/30 rounded text-center">
              <div className="text-sm font-semibold" data-testid="total-payment">{result.totalPayment.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">Total Payment</div>
            </div>
            <div className="p-3 bg-muted/30 rounded text-center">
              <div className="text-sm font-semibold" data-testid="total-interest">{result.totalInterest.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">Total Interest</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
