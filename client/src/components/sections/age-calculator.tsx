import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Info } from "lucide-react";

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  nextBirthday: string;
}

export function AgeCalculatorSection() {
  const [birthDate, setBirthDate] = useState('');
  const [ageResult, setAgeResult] = useState<AgeResult | null>(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();
    
    if (birth > today) {
      return; // Invalid future date
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Calculate total days
    const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));

    // Calculate next birthday
    const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    setAgeResult({
      years,
      months,
      days,
      totalDays,
      nextBirthday: `${daysUntilBirthday} days`
    });
  };

  return (
    <div id="age-calc" className="glass-card neomorphic rounded-2xl p-6 text-center h-full">
      <h3 className="text-xl font-bold mb-4 text-primary">Age Calculator Online</h3>
      <p className="text-xs text-muted-foreground mb-4">Calculate your exact age in years, months, days with next birthday countdown</p>
      
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3">Your birth date:</label>
        <Input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="text-lg px-3 py-2 text-center max-w-xs mx-auto"
          data-testid="input-birth-date"
        />
      </div>

      <Button
        onClick={calculateAge}
        className="w-full gradient-bg text-white py-2 px-4 font-semibold hover:opacity-90 transition-opacity mb-6"
        disabled={!birthDate}
        data-testid="button-calculate-age"
      >
        <Calendar className="w-4 h-4 mr-2" />
        Calculate Age
      </Button>

      {/* Age Results */}
      {ageResult ? (
        <div className="space-y-3" data-testid="age-results">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="text-2xl font-bold text-primary" data-testid="age-years">
              {ageResult.years} years
            </div>
            <div className="text-sm text-muted-foreground" data-testid="age-details">
              {ageResult.months} months, {ageResult.days} days
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-muted/30 rounded">
              <div className="font-semibold">Total Days</div>
              <div className="text-muted-foreground" data-testid="total-days">{ageResult.totalDays.toLocaleString()}</div>
            </div>
            <div className="p-2 bg-muted/30 rounded">
              <div className="font-semibold">Next Birthday</div>
              <div className="text-muted-foreground" data-testid="next-birthday">{ageResult.nextBirthday}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-muted-foreground text-sm">
          <p>Enter your birth date to calculate your exact age</p>
        </div>
      )}

      {/* Age Tip */}
      <div className="mt-4 p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center justify-center mb-1">
          <Info className="w-4 h-4 mr-1 text-accent" />
          <span className="text-xs font-semibold">Fact</span>
        </div>
        <p className="text-xs text-muted-foreground">
          You've been alive for approximately {ageResult ? Math.floor(ageResult.totalDays * 24).toLocaleString() : '0'} hours
        </p>
      </div>
    </div>
  );
}