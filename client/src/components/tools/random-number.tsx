import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dices } from "lucide-react";

export function RandomNumberGenerator() {
  const [min, setMin] = useState('1');
  const [max, setMax] = useState('100');
  const [result, setResult] = useState<number | null>(null);

  const generate = () => {
    const minNum = parseInt(min);
    const maxNum = parseInt(max);

    if (!isNaN(minNum) && !isNaN(maxNum) && minNum < maxNum) {
      const random = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      setResult(random);
    }
  };

  return (
    <div id="random" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Random Number Generator</h3>
        <p className="text-xs text-muted-foreground">Generate random numbers within a range</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Minimum:</label>
          <Input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            placeholder="1"
            className="text-center h-11"
            data-testid="input-min"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Maximum:</label>
          <Input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            placeholder="100"
            className="text-center h-11"
            data-testid="input-max"
          />
        </div>
      </div>

      <Button
        onClick={generate}
        className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12"
        data-testid="button-generate"
      >
        <Dices className="w-4 h-4 mr-2" />
        Generate
      </Button>

      {result !== null && (
        <div className="p-6 rounded-lg bg-primary/10 border-2 border-primary animate-slide-up" data-testid="result">
          <div className="text-5xl font-bold text-primary text-center">
            {result}
          </div>
          <div className="text-xs text-center text-muted-foreground mt-2">
            Random number between {min} and {max}
          </div>
        </div>
      )}
    </div>
  );
}
