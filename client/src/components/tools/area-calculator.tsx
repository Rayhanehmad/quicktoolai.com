import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Ruler } from "lucide-react";

export function AreaCalculator() {
  const [shape, setShape] = useState('rectangle');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [radius, setRadius] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    if (shape === 'rectangle') {
      const l = parseFloat(length);
      const w = parseFloat(width);
      if (!isNaN(l) && !isNaN(w)) setResult(l * w);
    } else if (shape === 'circle') {
      const r = parseFloat(radius);
      if (!isNaN(r)) setResult(Math.PI * r * r);
    } else if (shape === 'square') {
      const l = parseFloat(length);
      if (!isNaN(l)) setResult(l * l);
    } else if (shape === 'triangle') {
      const l = parseFloat(length);
      const w = parseFloat(width);
      if (!isNaN(l) && !isNaN(w)) setResult(0.5 * l * w);
    }
  };

  return (
    <div id="area" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Area Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate area of different shapes</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Shape:</label>
          <Select value={shape} onValueChange={setShape}>
            <SelectTrigger className="w-full bg-background h-11"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="rectangle">Rectangle</SelectItem>
              <SelectItem value="square">Square</SelectItem>
              <SelectItem value="circle">Circle</SelectItem>
              <SelectItem value="triangle">Triangle</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {shape === 'circle' ? (
          <div>
            <label className="block text-sm font-semibold mb-2">Radius:</label>
            <Input type="number" value={radius} onChange={(e) => setRadius(e.target.value)} 
              placeholder="10" className="text-center h-11" data-testid="input-radius" />
          </div>
        ) : shape === 'square' ? (
          <div>
            <label className="block text-sm font-semibold mb-2">Side Length:</label>
            <Input type="number" value={length} onChange={(e) => setLength(e.target.value)} 
              placeholder="10" className="text-center h-11" data-testid="input-length" />
          </div>
        ) : (
          <>
            <div>
              <label className="block text-sm font-semibold mb-2">{shape === 'triangle' ? 'Base:' : 'Length:'}</label>
              <Input type="number" value={length} onChange={(e) => setLength(e.target.value)} 
                placeholder="10" className="text-center h-11" data-testid="input-length" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">{shape === 'triangle' ? 'Height:' : 'Width:'}</label>
              <Input type="number" value={width} onChange={(e) => setWidth(e.target.value)} 
                placeholder="5" className="text-center h-11" data-testid="input-width" />
            </div>
          </>
        )}
      </div>

      <Button onClick={calculate} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12"
        data-testid="button-calculate">
        <Ruler className="w-4 h-4 mr-2" />Calculate Area
      </Button>

      {result !== null && (
        <div className="p-4 rounded-lg bg-primary/10 border border-primary animate-slide-up" data-testid="result">
          <div className="text-3xl font-bold text-primary text-center">{result.toFixed(2)}</div>
          <div className="text-xs text-center text-muted-foreground mt-1">Square units</div>
        </div>
      )}
    </div>
  );
}
