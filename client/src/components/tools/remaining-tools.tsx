import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, Activity, Baby, Calculator, Zap, Clock } from "lucide-react";

export function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [result, setResult] = useState<number | null>(null);

  const rates: any = { USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5, CAD: 1.35, AUD: 1.52 };

  const convert = () => {
    const amt = parseFloat(amount);
    if (!isNaN(amt)) {
      const converted = (amt / rates[from]) * rates[to];
      setResult(converted);
    }
  };

  return (
    <div id="currency" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Currency Converter</h3>
        <p className="text-xs text-muted-foreground">Convert between major currencies</p>
      </div>
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" className="text-center h-11" />
        <div className="grid grid-cols-2 gap-2">
          <Select value={from} onValueChange={setFrom}>
            <SelectTrigger className="bg-background h-11"><SelectValue /></SelectTrigger>
            <SelectContent>
              {Object.keys(rates).map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={to} onValueChange={setTo}>
            <SelectTrigger className="bg-background h-11"><SelectValue /></SelectTrigger>
            <SelectContent>
              {Object.keys(rates).map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button onClick={convert} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12" disabled={!amount}>
        <DollarSign className="w-4 h-4 mr-2" />Convert
      </Button>
      {result !== null && (
        <div className="p-4 rounded-lg bg-primary/10 border border-primary animate-slide-up">
          <div className="text-3xl font-bold text-primary text-center">{result.toFixed(2)} {to}</div>
          <div className="text-xs text-center text-muted-foreground mt-1">{amount} {from} = {result.toFixed(2)} {to}</div>
        </div>
      )}
    </div>
  );
}

export function BodyFatCalculator() {
  const [gender, setGender] = useState('male');
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [height, setHeight] = useState('');
  const [hip, setHip] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(waist), n = parseFloat(neck), h = parseFloat(height);
    if (gender === 'male' && !isNaN(w) && !isNaN(n) && !isNaN(h)) {
      const bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
      setResult(bf);
    } else if (gender === 'female') {
      const hi = parseFloat(hip);
      if (!isNaN(w) && !isNaN(n) && !isNaN(h) && !isNaN(hi)) {
        const bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hi - n) + 0.22100 * Math.log10(h)) - 450;
        setResult(bf);
      }
    }
  };

  return (
    <div id="bodyfat" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Body Fat Calculator</h3>
        <p className="text-xs text-muted-foreground">Estimate body fat percentage using Navy method</p>
      </div>
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <Select value={gender} onValueChange={setGender}>
          <SelectTrigger className="w-full bg-background h-11"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>
        <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height (cm)" className="text-center h-11" />
        <Input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} placeholder="Waist (cm)" className="text-center h-11" />
        <Input type="number" value={neck} onChange={(e) => setNeck(e.target.value)} placeholder="Neck (cm)" className="text-center h-11" />
        {gender === 'female' && <Input type="number" value={hip} onChange={(e) => setHip(e.target.value)} placeholder="Hip (cm)" className="text-center h-11" />}
      </div>
      <Button onClick={calculate} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12" disabled={!waist || !neck || !height}>
        <Activity className="w-4 h-4 mr-2" />Calculate
      </Button>
      {result !== null && (
        <div className="p-4 rounded-lg bg-primary/10 border border-primary animate-slide-up">
          <div className="text-3xl font-bold text-primary text-center">{result.toFixed(1)}%</div>
          <div className="text-xs text-center text-muted-foreground mt-1">Body Fat Percentage</div>
        </div>
      )}
    </div>
  );
}

export function CalorieCalculator() {
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [activity, setActivity] = useState('walking');
  const [result, setResult] = useState<number | null>(null);

  const metValues: any = { walking: 3.5, running: 9.8, cycling: 7.5, swimming: 8.0, yoga: 2.5 };

  const calculate = () => {
    const w = parseFloat(weight);
    const d = parseFloat(duration);
    if (!isNaN(w) && !isNaN(d)) {
      const calories = (metValues[activity] * w * d) / 60;
      setResult(calories);
    }
  };

  return (
    <div id="calorie" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Calorie Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate calories burned during exercise</p>
      </div>
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight (kg)" className="text-center h-11" />
        <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration (minutes)" className="text-center h-11" />
        <Select value={activity} onValueChange={setActivity}>
          <SelectTrigger className="w-full bg-background h-11"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="walking">Walking</SelectItem>
            <SelectItem value="running">Running</SelectItem>
            <SelectItem value="cycling">Cycling</SelectItem>
            <SelectItem value="swimming">Swimming</SelectItem>
            <SelectItem value="yoga">Yoga</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={calculate} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12" disabled={!weight || !duration}>Calculate</Button>
      {result !== null && (
        <div className="p-4 rounded-lg bg-primary/10 border border-primary animate-slide-up">
          <div className="text-3xl font-bold text-primary text-center">{result.toFixed(0)} cal</div>
          <div className="text-xs text-center text-muted-foreground mt-1">Calories Burned</div>
        </div>
      )}
    </div>
  );
}

export function PregnancyCalculator() {
  const [lastPeriod, setLastPeriod] = useState('');
  const [result, setResult] = useState<{ dueDate: string; weeks: number } | null>(null);

  const calculate = () => {
    if (!lastPeriod) return;
    const lmp = new Date(lastPeriod);
    const dueDate = new Date(lmp.getTime() + 280 * 24 * 60 * 60 * 1000);
    const today = new Date();
    const weeks = Math.floor((today.getTime() - lmp.getTime()) / (7 * 24 * 60 * 60 * 1000));
    setResult({ dueDate: dueDate.toLocaleDateString(), weeks: Math.max(0, weeks) });
  };

  return (
    <div id="pregnancy" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Pregnancy Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate due date and current week</p>
      </div>
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
        <label className="block text-sm font-semibold mb-2 text-center">Last Period Date:</label>
        <Input type="date" value={lastPeriod} onChange={(e) => setLastPeriod(e.target.value)} className="text-center h-11" />
      </div>
      <Button onClick={calculate} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12" disabled={!lastPeriod}>
        <Baby className="w-4 h-4 mr-2" />Calculate
      </Button>
      {result && (
        <div className="space-y-2 animate-slide-up">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="text-xl font-bold text-primary text-center">{result.dueDate}</div>
            <div className="text-xs text-center text-muted-foreground">Due Date</div>
          </div>
          <div className="p-3 bg-muted/30 rounded text-center">
            <div className="text-sm font-semibold">{result.weeks} weeks</div>
            <div className="text-xs text-muted-foreground">Current Week</div>
          </div>
        </div>
      )}
    </div>
  );
}

export function RatioCalculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState<string>('');

  const calculate = () => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
      const gcd = (x: number, y: number): number => y === 0 ? x : gcd(y, x % y);
      const divisor = gcd(num1, num2);
      setResult(`${num1/divisor}:${num2/divisor}`);
    }
  };

  return (
    <div id="ratio" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Ratio Calculator</h3>
        <p className="text-xs text-muted-foreground">Simplify ratios to lowest terms</p>
      </div>
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <div className="flex items-center gap-2">
          <Input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="A" className="text-center h-11" />
          <span className="text-2xl">:</span>
          <Input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="B" className="text-center h-11" />
        </div>
      </div>
      <Button onClick={calculate} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12" disabled={!a || !b}>
        <Calculator className="w-4 h-4 mr-2" />Simplify
      </Button>
      {result && (
        <div className="p-4 rounded-lg bg-primary/10 border border-primary animate-slide-up">
          <div className="text-3xl font-bold text-primary text-center">{result}</div>
          <div className="text-xs text-center text-muted-foreground mt-1">Simplified Ratio</div>
        </div>
      )}
    </div>
  );
}

export function EnergyCalculator() {
  const [power, setPower] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const p = parseFloat(power);
    const t = parseFloat(time);
    if (!isNaN(p) && !isNaN(t)) {
      setResult(p * t);
    }
  };

  return (
    <div id="energy" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Energy Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate energy consumption in kWh</p>
      </div>
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <Input type="number" value={power} onChange={(e) => setPower(e.target.value)} placeholder="Power (kW)" className="text-center h-11" />
        <Input type="number" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Time (hours)" className="text-center h-11" />
      </div>
      <Button onClick={calculate} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12" disabled={!power || !time}>
        <Zap className="w-4 h-4 mr-2" />Calculate
      </Button>
      {result !== null && (
        <div className="p-4 rounded-lg bg-primary/10 border border-primary animate-slide-up">
          <div className="text-3xl font-bold text-primary text-center">{result.toFixed(2)} kWh</div>
          <div className="text-xs text-center text-muted-foreground mt-1">Energy Consumed</div>
        </div>
      )}
    </div>
  );
}

export function TimeCalculator() {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [totalMinutes, setTotalMinutes] = useState<number | null>(null);
  const [totalSeconds, setTotalSeconds] = useState<number | null>(null);

  const calculate = () => {
    const h = parseInt(hours) || 0;
    const m = parseInt(minutes) || 0;
    const s = parseInt(seconds) || 0;
    setTotalMinutes(h * 60 + m + s / 60);
    setTotalSeconds(h * 3600 + m * 60 + s);
  };

  return (
    <div id="time-calc" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Time Calculator</h3>
        <p className="text-xs text-muted-foreground">Convert time to total minutes and seconds</p>
      </div>
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <Input type="number" value={hours} onChange={(e) => setHours(e.target.value)} placeholder="Hours" className="text-center h-11" />
        <Input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} placeholder="Minutes" className="text-center h-11" />
        <Input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)} placeholder="Seconds" className="text-center h-11" />
      </div>
      <Button onClick={calculate} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12">
        <Clock className="w-4 h-4 mr-2" />Calculate
      </Button>
      {totalMinutes !== null && totalSeconds !== null && (
        <div className="grid grid-cols-2 gap-4 animate-slide-up">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="text-3xl font-bold text-primary text-center">{totalMinutes.toFixed(2)}</div>
            <div className="text-xs text-center text-muted-foreground mt-1">Total Minutes</div>
          </div>
          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="text-3xl font-bold text-primary text-center">{totalSeconds}</div>
            <div className="text-xs text-center text-muted-foreground mt-1">Total Seconds</div>
          </div>
        </div>
      )}
    </div>
  );
}
