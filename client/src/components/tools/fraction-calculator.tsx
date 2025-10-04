import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Minus, X, Divide } from "lucide-react";

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function simplify(num: number, den: number): [number, number] {
  const divisor = gcd(Math.abs(num), Math.abs(den));
  return [num / divisor, den / divisor];
}

export function FractionCalculator() {
  const [num1, setNum1] = useState('');
  const [den1, setDen1] = useState('');
  const [num2, setNum2] = useState('');
  const [den2, setDen2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState<string>('');

  const calculate = () => {
    const n1 = parseInt(num1), d1 = parseInt(den1);
    const n2 = parseInt(num2), d2 = parseInt(den2);
    
    if (isNaN(n1) || isNaN(d1) || isNaN(n2) || isNaN(d2) || d1 === 0 || d2 === 0) return;

    let resNum: number, resDen: number;
    
    if (operation === 'add') {
      resNum = n1 * d2 + n2 * d1;
      resDen = d1 * d2;
    } else if (operation === 'subtract') {
      resNum = n1 * d2 - n2 * d1;
      resDen = d1 * d2;
    } else if (operation === 'multiply') {
      resNum = n1 * n2;
      resDen = d1 * d2;
    } else {
      resNum = n1 * d2;
      resDen = d1 * n2;
    }

    const [simplifiedNum, simplifiedDen] = simplify(resNum, resDen);
    setResult(`${simplifiedNum}/${simplifiedDen}`);
  };

  return (
    <div id="fraction" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Fraction Calculator</h3>
        <p className="text-xs text-muted-foreground">Add, subtract, multiply, and divide fractions</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <div className="grid grid-cols-3 gap-2 items-center">
          <div>
            <label className="block text-xs font-semibold mb-1">Numerator:</label>
            <Input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} 
              placeholder="1" className="text-center h-10" />
          </div>
          <div className="text-center text-2xl">/</div>
          <div>
            <label className="block text-xs font-semibold mb-1">Denominator:</label>
            <Input type="number" value={den1} onChange={(e) => setDen1(e.target.value)} 
              placeholder="2" className="text-center h-10" />
          </div>
        </div>

        <Select value={operation} onValueChange={setOperation}>
          <SelectTrigger className="w-full bg-background h-11">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="add">Add (+)</SelectItem>
            <SelectItem value="subtract">Subtract (-)</SelectItem>
            <SelectItem value="multiply">Multiply (×)</SelectItem>
            <SelectItem value="divide">Divide (÷)</SelectItem>
          </SelectContent>
        </Select>

        <div className="grid grid-cols-3 gap-2 items-center">
          <div>
            <label className="block text-xs font-semibold mb-1">Numerator:</label>
            <Input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} 
              placeholder="1" className="text-center h-10" />
          </div>
          <div className="text-center text-2xl">/</div>
          <div>
            <label className="block text-xs font-semibold mb-1">Denominator:</label>
            <Input type="number" value={den2} onChange={(e) => setDen2(e.target.value)} 
              placeholder="4" className="text-center h-10" />
          </div>
        </div>
      </div>

      <Button onClick={calculate} className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12"
        data-testid="button-calculate">Calculate</Button>

      {result && (
        <div className="p-4 rounded-lg bg-primary/10 border border-primary animate-slide-up" data-testid="result">
          <div className="text-3xl font-bold text-primary text-center">{result}</div>
          <div className="text-xs text-center text-muted-foreground mt-1">Simplified Result</div>
        </div>
      )}
    </div>
  );
}
