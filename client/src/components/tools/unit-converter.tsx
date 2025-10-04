import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightLeft } from "lucide-react";

const units = {
  length: {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    mile: 0.000621371,
    yard: 1.09361,
    foot: 3.28084,
    inch: 39.3701
  },
  weight: {
    kilogram: 1,
    gram: 1000,
    milligram: 1000000,
    pound: 2.20462,
    ounce: 35.274
  },
  temperature: {
    celsius: 'base',
    fahrenheit: 'special',
    kelvin: 'special'
  }
};

export function UnitConverter() {
  const [category, setCategory] = useState<'length' | 'weight' | 'temperature'>('length');
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    const val = parseFloat(value);
    if (isNaN(val)) return;

    if (category === 'temperature') {
      let celsius: number;
      if (fromUnit === 'celsius') celsius = val;
      else if (fromUnit === 'fahrenheit') celsius = (val - 32) * 5/9;
      else celsius = val - 273.15;

      if (toUnit === 'celsius') setResult(celsius);
      else if (toUnit === 'fahrenheit') setResult(celsius * 9/5 + 32);
      else setResult(celsius + 273.15);
    } else {
      const unitMap = category === 'length' ? units.length : units.weight;
      const fromFactor = unitMap[fromUnit as keyof typeof unitMap] as number;
      const toFactor = unitMap[toUnit as keyof typeof unitMap] as number;
      setResult(val / fromFactor * toFactor);
    }
  };

  const currentUnits = category === 'length' ? Object.keys(units.length) : 
                       category === 'weight' ? Object.keys(units.weight) : 
                       Object.keys(units.temperature);

  return (
    <div id="unit-converter" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Unit Converter</h3>
        <p className="text-xs text-muted-foreground">Convert between different units of measurement</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Category:</label>
          <Select value={category} onValueChange={(v: any) => setCategory(v)}>
            <SelectTrigger className="w-full bg-background h-11" data-testid="select-category">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="length">Length</SelectItem>
              <SelectItem value="weight">Weight</SelectItem>
              <SelectItem value="temperature">Temperature</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-semibold mb-2">From:</label>
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger className="w-full bg-background h-11" data-testid="select-from">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currentUnits.map(unit => (
                  <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">To:</label>
            <Select value={toUnit} onValueChange={setToUnit}>
              <SelectTrigger className="w-full bg-background h-11" data-testid="select-to">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currentUnits.map(unit => (
                  <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Button
        onClick={convert}
        className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12"
        disabled={!value}
        data-testid="button-convert"
      >
        <ArrowRightLeft className="w-4 h-4 mr-2" />
        Convert
      </Button>

      {result !== null && (
        <div className="p-4 rounded-lg bg-primary/10 border border-primary animate-slide-up" data-testid="result">
          <div className="text-2xl font-bold text-primary text-center">
            {result.toFixed(4)}
          </div>
          <div className="text-xs text-center text-muted-foreground mt-1">
            {value} {fromUnit} = {result.toFixed(4)} {toUnit}
          </div>
        </div>
      )}
    </div>
  );
}
