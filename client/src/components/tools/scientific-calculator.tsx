import { useState } from 'react';
import { Button } from "@/components/ui/button";

export function ScientificCalculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (num: string) => {
    setDisplay(display === '0' ? num : display + num);
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const handleFunction = (func: string) => {
    const num = parseFloat(display);
    let result = 0;
    if (func === 'sin') result = Math.sin(num);
    else if (func === 'cos') result = Math.cos(num);
    else if (func === 'tan') result = Math.tan(num);
    else if (func === 'sqrt') result = Math.sqrt(num);
    else if (func === 'log') result = Math.log10(num);
    else if (func === 'ln') result = Math.log(num);
    setDisplay(result.toString());
  };

  const calculate = () => {
    try {
      const fullEquation = equation + display;
      const result = eval(fullEquation);
      setDisplay(result.toString());
      setEquation('');
    } catch {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div id="scientific" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Scientific Calculator</h3>
        <p className="text-xs text-muted-foreground">Advanced calculations with scientific functions</p>
      </div>

      <div className="mb-4 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
        <div className="text-xs text-muted-foreground mb-1">{equation}</div>
        <div className="text-2xl font-bold text-right font-mono" data-testid="display">{display}</div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {['7','8','9','/'].map(btn => (
          <Button key={btn} onClick={() => btn.match(/[0-9]/) ? handleNumber(btn) : handleOperator(btn)} variant="outline" className="h-12">{btn}</Button>
        ))}
        {['4','5','6','*'].map(btn => (
          <Button key={btn} onClick={() => btn.match(/[0-9]/) ? handleNumber(btn) : handleOperator(btn)} variant="outline" className="h-12">{btn}</Button>
        ))}
        {['1','2','3','-'].map(btn => (
          <Button key={btn} onClick={() => btn.match(/[0-9]/) ? handleNumber(btn) : handleOperator(btn)} variant="outline" className="h-12">{btn}</Button>
        ))}
        <Button onClick={() => handleNumber('0')} variant="outline" className="h-12">0</Button>
        <Button onClick={() => handleNumber('.')} variant="outline" className="h-12">.</Button>
        <Button onClick={calculate} className="gradient-bg text-white h-12">=</Button>
        <Button onClick={() => handleOperator('+')} variant="outline" className="h-12">+</Button>
        
        <Button onClick={() => handleFunction('sin')} variant="outline" size="sm" className="h-10">sin</Button>
        <Button onClick={() => handleFunction('cos')} variant="outline" size="sm" className="h-10">cos</Button>
        <Button onClick={() => handleFunction('tan')} variant="outline" size="sm" className="h-10">tan</Button>
        <Button onClick={() => handleFunction('sqrt')} variant="outline" size="sm" className="h-10">√</Button>
        <Button onClick={() => handleFunction('log')} variant="outline" size="sm" className="h-10">log</Button>
        <Button onClick={() => handleFunction('ln')} variant="outline" size="sm" className="h-10">ln</Button>
        <Button onClick={clear} variant="outline" size="sm" className="h-10 col-span-2">Clear</Button>
      </div>
    </div>
  );
}
