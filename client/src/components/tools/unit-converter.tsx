import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightLeft } from "lucide-react";
import { FavoriteButton } from "@/components/favorite-button";

type Category = 'length' | 'weight' | 'temperature' | 'area' | 'volume' | 'speed' | 'time' | 'energy' | 'storage';

const units = {
  length: {
    m: 1,
    km: 1000,
    cm: 0.01,
    mm: 0.001,
    'µm': 1e-6,
    nm: 1e-9,
    mi: 1609.34,
    yd: 0.9144,
    ft: 0.3048,
    in: 0.0254
  },
  weight: {
    kg: 1,
    g: 0.001,
    mg: 1e-6,
    t: 1000,
    lb: 0.453592,
    oz: 0.0283495,
    st: 6.35029
  },
  temperature: 'special' as const,
  area: {
    'm²': 1,
    'km²': 1e6,
    'cm²': 0.0001,
    'mm²': 1e-6,
    ha: 10000,
    ac: 4046.86
  },
  volume: {
    'm³': 1,
    L: 0.001,
    mL: 1e-6,
    'cm³': 1e-6,
    'in³': 1.6387e-5,
    'ft³': 0.0283168,
    gal: 0.00378541,
    qt: 0.000946353,
    pt: 0.000473176,
    cup: 0.000236588
  },
  speed: {
    'm/s': 1,
    'km/h': 0.277778,
    mph: 0.44704,
    kn: 0.514444,
    'ft/s': 0.3048
  },
  time: {
    s: 1,
    min: 60,
    h: 3600,
    d: 86400,
    wk: 604800,
    mo: 2629800,
    yr: 31557600
  },
  energy: {
    J: 1,
    kJ: 1000,
    cal: 4.184,
    kcal: 4184,
    Wh: 3600,
    kWh: 3600000,
    eV: 1.60218e-19
  },
  storage: {
    bit: 0.125,
    B: 1,
    KB: 1024,
    MB: 1048576,
    GB: 1073741824,
    TB: 1099511627776,
    PB: 1125899906842624
  }
};

const categoryLabels = {
  length: 'Length',
  weight: 'Weight',
  temperature: 'Temperature',
  area: 'Area',
  volume: 'Volume',
  speed: 'Speed',
  time: 'Time',
  energy: 'Energy',
  storage: 'Data Storage'
};

export function UnitConverter() {
  const [category, setCategory] = useState<Category>('length');
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('km');
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const currentUnits = getUnitsForCategory(category);
    setFromUnit(currentUnits[0]);
    setToUnit(currentUnits[1] || currentUnits[0]);
    setResult(null);
  }, [category]);

  const getUnitsForCategory = (cat: Category): string[] => {
    if (cat === 'temperature') {
      return ['C', 'F', 'K'];
    }
    return Object.keys(units[cat]);
  };

  const convertTemperature = (from: string, to: string, val: number): number => {
    let celsius: number;
    if (from === 'C') celsius = val;
    else if (from === 'F') celsius = (val - 32) * 5 / 9;
    else celsius = val - 273.15; // Kelvin

    if (to === 'C') return celsius;
    if (to === 'F') return celsius * 9 / 5 + 32;
    return celsius + 273.15; // Kelvin
  };

  const convert = () => {
    const val = parseFloat(value);
    if (isNaN(val)) return;

    if (category === 'temperature') {
      setResult(convertTemperature(fromUnit, toUnit, val));
    } else {
      const unitMap = units[category] as Record<string, number>;
      const baseValue = val * unitMap[fromUnit];
      const convertedValue = baseValue / unitMap[toUnit];
      setResult(convertedValue);
    }
  };

  const currentUnits = getUnitsForCategory(category);

  return (
    <div id="unit" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-primary">Unit Converter</h3>
          <FavoriteButton toolId="unit" />
        </div>
        <p className="text-xs text-muted-foreground text-center">Convert 62 units across 9 categories</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Category:</label>
          <Select value={category} onValueChange={(v: Category) => setCategory(v)}>
            <SelectTrigger className="w-full bg-background h-11" data-testid="select-category">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(categoryLabels).map(([key, label]) => (
                <SelectItem key={key} value={key}>{label}</SelectItem>
              ))}
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
            {result.toFixed(6).replace(/\.?0+$/, '')}
          </div>
          <div className="text-xs text-center text-muted-foreground mt-1">
            {value} {fromUnit} = {result.toFixed(6).replace(/\.?0+$/, '')} {toUnit}
          </div>
        </div>
      )}
    </div>
  );
}
