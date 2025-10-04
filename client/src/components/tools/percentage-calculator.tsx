import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Percent } from "lucide-react";
import { ShareResults } from "@/components/share-results";
import { FavoriteButton } from "@/components/favorite-button";

export function PercentageCalculator() {
  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const val = parseFloat(value);
    const pct = parseFloat(percentage);
    if (!isNaN(val) && !isNaN(pct)) {
      setResult((val * pct) / 100);
    }
  };

  const isValid = value !== '' && percentage !== '' && 
                  !isNaN(parseFloat(value)) && !isNaN(parseFloat(percentage));

  return (
    <div id="percentage" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-primary">Percentage Calculator</h3>
          <FavoriteButton toolId="percentage" />
        </div>
        <p className="text-xs text-muted-foreground text-center">Calculate percentage of any number quickly</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Value:</label>
          <Input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="100"
            className="text-center h-11"
            data-testid="input-value"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Percentage (%):</label>
          <Input
            type="number"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            placeholder="25"
            className="text-center h-11"
            data-testid="input-percentage"
          />
        </div>
      </div>

      <Button
        onClick={calculate}
        className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12"
        disabled={!isValid}
        data-testid="button-calculate"
      >
        <Percent className="w-4 h-4 mr-2" />
        Calculate
      </Button>

      {result !== null && (
        <div className="space-y-3 animate-slide-up">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary" data-testid="result">
            <div className="text-2xl font-bold text-primary text-center">
              {result.toFixed(2)}
            </div>
            <div className="text-xs text-center text-muted-foreground mt-1">
              {percentage}% of {value} = {result.toFixed(2)}
            </div>
          </div>
          <div className="flex justify-center">
            <ShareResults
              toolName="Percentage Calculator"
              result={result.toFixed(2)}
              description={`${percentage}% of ${value}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
