import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calculator } from "lucide-react";

export function AverageCalculator() {
  const [numbers, setNumbers] = useState('');
  const [result, setResult] = useState<{ average: number; sum: number; count: number; median: number } | null>(null);

  const calculate = () => {
    const nums = numbers.split(/[\s,]+/).map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    
    if (nums.length > 0) {
      const sum = nums.reduce((a, b) => a + b, 0);
      const average = sum / nums.length;
      const sorted = [...nums].sort((a, b) => a - b);
      const median = sorted.length % 2 === 0 
        ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
        : sorted[Math.floor(sorted.length / 2)];

      setResult({ average, sum, count: nums.length, median });
    }
  };

  return (
    <div id="average" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Average Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate mean, median, and sum</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
        <label className="block text-sm font-semibold mb-2 text-center">Enter numbers (comma or space separated):</label>
        <Textarea
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          placeholder="10, 20, 30, 40, 50"
          className="text-sm h-24"
          data-testid="input-numbers"
        />
      </div>

      <Button onClick={calculate} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12"
        disabled={!numbers.trim()} data-testid="button-calculate">
        <Calculator className="w-4 h-4 mr-2" />Calculate
      </Button>

      {result && (
        <div className="space-y-2 animate-slide-up" data-testid="result">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="text-3xl font-bold text-primary text-center" data-testid="average">{result.average.toFixed(2)}</div>
            <div className="text-xs text-center text-muted-foreground">Average (Mean)</div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="p-2 bg-muted/30 rounded text-center">
              <div className="font-semibold" data-testid="median">{result.median.toFixed(2)}</div>
              <div className="text-muted-foreground">Median</div>
            </div>
            <div className="p-2 bg-muted/30 rounded text-center">
              <div className="font-semibold" data-testid="sum">{result.sum.toFixed(2)}</div>
              <div className="text-muted-foreground">Sum</div>
            </div>
            <div className="p-2 bg-muted/30 rounded text-center">
              <div className="font-semibold" data-testid="count">{result.count}</div>
              <div className="text-muted-foreground">Count</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
