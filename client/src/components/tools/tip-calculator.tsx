import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator } from "lucide-react";

export function TipCalculator() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercent, setTipPercent] = useState('15');
  const [people, setPeople] = useState('1');
  const [result, setResult] = useState<{ tip: number; total: number; perPerson: number } | null>(null);

  const calculate = () => {
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercent);
    const numPeople = parseInt(people);

    if (!isNaN(bill) && !isNaN(tip) && !isNaN(numPeople) && numPeople > 0) {
      const tipAmount = (bill * tip) / 100;
      const total = bill + tipAmount;
      const perPerson = total / numPeople;

      setResult({
        tip: tipAmount,
        total: total,
        perPerson: perPerson
      });
    }
  };

  return (
    <div id="tip" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Tip Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate tip and split bill among people</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Bill Amount:</label>
          <Input
            type="number"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            placeholder="50.00"
            step="0.01"
            className="text-center h-11"
            data-testid="input-bill"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Tip Percentage (%):</label>
          <div className="flex gap-2 mb-2">
            {['10', '15', '18', '20'].map((pct) => (
              <Button
                key={pct}
                onClick={() => setTipPercent(pct)}
                variant={tipPercent === pct ? "default" : "outline"}
                size="sm"
                className="flex-1"
                data-testid={`button-tip-${pct}`}
              >
                {pct}%
              </Button>
            ))}
          </div>
          <Input
            type="number"
            value={tipPercent}
            onChange={(e) => setTipPercent(e.target.value)}
            placeholder="15"
            className="text-center h-11"
            data-testid="input-tip-percent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Number of People:</label>
          <Input
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            placeholder="1"
            min="1"
            className="text-center h-11"
            data-testid="input-people"
          />
        </div>
      </div>

      <Button
        onClick={calculate}
        className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12"
        disabled={!billAmount}
        data-testid="button-calculate"
      >
        <Calculator className="w-4 h-4 mr-2" />
        Calculate
      </Button>

      {result && (
        <div className="space-y-3 animate-slide-up" data-testid="result">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="text-2xl font-bold text-primary text-center" data-testid="per-person">
              {result.perPerson.toFixed(2)}
            </div>
            <div className="text-xs text-center text-muted-foreground">Per Person</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 bg-muted/30 rounded text-center">
              <div className="text-sm font-semibold" data-testid="tip-amount">{result.tip.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">Tip Amount</div>
            </div>
            <div className="p-3 bg-muted/30 rounded text-center">
              <div className="text-sm font-semibold" data-testid="total-amount">{result.total.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">Total</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
