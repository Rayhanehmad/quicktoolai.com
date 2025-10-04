import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";

export function DateCalculator() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState<{ days: number; weeks: number; months: number; years: number } | null>(null);

  const calculate = () => {
    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    setResult({
      days: diffDays,
      weeks: Math.floor(diffDays / 7),
      months: Math.floor(diffDays / 30.44),
      years: Math.floor(diffDays / 365.25)
    });
  };

  return (
    <div id="date-calc" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Date Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate difference between two dates</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Start Date:</label>
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="text-center h-11"
            data-testid="input-start-date"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">End Date:</label>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="text-center h-11"
            data-testid="input-end-date"
          />
        </div>
      </div>

      <Button
        onClick={calculate}
        className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12"
        disabled={!startDate || !endDate}
        data-testid="button-calculate"
      >
        <Calendar className="w-4 h-4 mr-2" />
        Calculate Difference
      </Button>

      {result && (
        <div className="space-y-2 animate-slide-up" data-testid="result">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="text-2xl font-bold text-primary text-center" data-testid="days-diff">
              {result.days} days
            </div>
            <div className="text-xs text-center text-muted-foreground">Total Difference</div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="p-2 bg-muted/30 rounded text-center">
              <div className="font-semibold">{result.weeks}</div>
              <div className="text-muted-foreground">Weeks</div>
            </div>
            <div className="p-2 bg-muted/30 rounded text-center">
              <div className="font-semibold">{result.months}</div>
              <div className="text-muted-foreground">Months</div>
            </div>
            <div className="p-2 bg-muted/30 rounded text-center">
              <div className="font-semibold">{result.years}</div>
              <div className="text-muted-foreground">Years</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
