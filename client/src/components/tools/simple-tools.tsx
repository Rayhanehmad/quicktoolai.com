import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Calculator, Zap, Gauge, Box } from "lucide-react";

export function LoveCalculator() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    if (name1 && name2) {
      const combined = (name1 + name2).toLowerCase();
      const hash = combined.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      setResult((hash % 101));
    }
  };

  return (
    <div id="love" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Love Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate love compatibility percentage</p>
      </div>
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <Input type="text" value={name1} onChange={(e) => setName1(e.target.value)} placeholder="Your name" className="text-center h-11" />
        <Input type="text" value={name2} onChange={(e) => setName2(e.target.value)} placeholder="Partner's name" className="text-center h-11" />
      </div>
      <Button onClick={calculate} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12" disabled={!name1 || !name2}>
        <Heart className="w-4 h-4 mr-2" />Calculate Love
      </Button>
      {result !== null && (
        <div className="p-6 rounded-lg bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 animate-slide-up">
          <div className="text-5xl font-bold text-pink-600 dark:text-pink-400 text-center">{result}%</div>
          <div className="text-xs text-center text-muted-foreground mt-2">{result > 70 ? '❤️ Perfect Match!' : result > 40 ? '💕 Good Compatibility' : '💔 Keep Looking'}</div>
        </div>
      )}
    </div>
  );
}

export function InterestCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    if (!isNaN(p) && !isNaN(r) && !isNaN(t)) {
      setResult(p * r * t);
    }
  };

  return (
    <div id="interest" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Interest Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate simple interest</p>
      </div>
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <Input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder="Principal" className="text-center h-11" />
        <Input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="Rate (% per year)" className="text-center h-11" />
        <Input type="number" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Time (years)" className="text-center h-11" />
      </div>
      <Button onClick={calculate} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12" disabled={!principal || !rate || !time}>
        <Calculator className="w-4 h-4 mr-2" />Calculate
      </Button>
      {result !== null && (
        <div className="p-4 rounded-lg bg-primary/10 border border-primary animate-slide-up">
          <div className="text-3xl font-bold text-primary text-center">{result.toFixed(2)}</div>
          <div className="text-xs text-center text-muted-foreground mt-1">Total Interest</div>
        </div>
      )}
    </div>
  );
}

export function ProfitCalculator() {
  const [cost, setCost] = useState('');
  const [revenue, setRevenue] = useState('');
  const [result, setResult] = useState<{profit: number; margin: number} | null>(null);

  const calculate = () => {
    const c = parseFloat(cost);
    const r = parseFloat(revenue);
    if (!isNaN(c) && !isNaN(r)) {
      const profit = r - c;
      const margin = (profit / r) * 100;
      setResult({profit, margin});
    }
  };

  return (
    <div id="profit" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Profit Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate profit and profit margin</p>
      </div>
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <Input type="number" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Cost" className="text-center h-11" />
        <Input type="number" value={revenue} onChange={(e) => setRevenue(e.target.value)} placeholder="Revenue" className="text-center h-11" />
      </div>
      <Button onClick={calculate} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12" disabled={!cost || !revenue}>Calculate</Button>
      {result && (
        <div className="space-y-2 animate-slide-up">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="text-2xl font-bold text-primary text-center">{result.profit.toFixed(2)}</div>
            <div className="text-xs text-center text-muted-foreground">Profit</div>
          </div>
          <div className="p-3 bg-muted/30 rounded text-center">
            <div className="text-sm font-semibold">{result.margin.toFixed(1)}%</div>
            <div className="text-xs text-muted-foreground">Profit Margin</div>
          </div>
        </div>
      )}
    </div>
  );
}

export function SpeedCalculator() {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const d = parseFloat(distance);
    const t = parseFloat(time);
    if (!isNaN(d) && !isNaN(t) && t > 0) {
      setResult(d / t);
    }
  };

  return (
    <div id="speed" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Speed Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate speed from distance and time</p>
      </div>
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <Input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Distance (km)" className="text-center h-11" />
        <Input type="number" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Time (hours)" className="text-center h-11" />
      </div>
      <Button onClick={calculate} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12" disabled={!distance || !time}>
        <Gauge className="w-4 h-4 mr-2" />Calculate
      </Button>
      {result !== null && (
        <div className="p-4 rounded-lg bg-primary/10 border border-primary animate-slide-up">
          <div className="text-3xl font-bold text-primary text-center">{result.toFixed(2)} km/h</div>
          <div className="text-xs text-center text-muted-foreground mt-1">Average Speed</div>
        </div>
      )}
    </div>
  );
}

export function VolumeCalculator() {
  const [shape, setShape] = useState('cube');
  const [side, setSide] = useState('');
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    if (shape === 'cube') {
      const s = parseFloat(side);
      if (!isNaN(s)) setResult(s * s * s);
    } else if (shape === 'sphere') {
      const r = parseFloat(radius);
      if (!isNaN(r)) setResult((4/3) * Math.PI * r * r * r);
    } else if (shape === 'cylinder') {
      const r = parseFloat(radius);
      const h = parseFloat(height);
      if (!isNaN(r) && !isNaN(h)) setResult(Math.PI * r * r * h);
    }
  };

  return (
    <div id="volume" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Volume Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate volume of 3D shapes</p>
      </div>
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <Select value={shape} onValueChange={setShape}>
          <SelectTrigger className="w-full bg-background h-11"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="cube">Cube</SelectItem>
            <SelectItem value="sphere">Sphere</SelectItem>
            <SelectItem value="cylinder">Cylinder</SelectItem>
          </SelectContent>
        </Select>
        {shape === 'cube' && <Input type="number" value={side} onChange={(e) => setSide(e.target.value)} placeholder="Side length" className="text-center h-11" />}
        {shape === 'sphere' && <Input type="number" value={radius} onChange={(e) => setRadius(e.target.value)} placeholder="Radius" className="text-center h-11" />}
        {shape === 'cylinder' && (
          <>
            <Input type="number" value={radius} onChange={(e) => setRadius(e.target.value)} placeholder="Radius" className="text-center h-11" />
            <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height" className="text-center h-11" />
          </>
        )}
      </div>
      <Button onClick={calculate} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12">
        <Box className="w-4 h-4 mr-2" />Calculate
      </Button>
      {result !== null && (
        <div className="p-4 rounded-lg bg-primary/10 border border-primary animate-slide-up">
          <div className="text-3xl font-bold text-primary text-center">{result.toFixed(2)}</div>
          <div className="text-xs text-center text-muted-foreground mt-1">Cubic units</div>
        </div>
      )}
    </div>
  );
}
