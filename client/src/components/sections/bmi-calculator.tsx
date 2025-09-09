import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Scale, Info } from "lucide-react";

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
  healthyRange: string;
}

export function BMICalculatorSection() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('metric'); // metric or imperial
  const [bmiResult, setBmiResult] = useState<BMIResult | null>(null);

  const calculateBMI = () => {
    if (!height || !weight) return;

    let heightInM = parseFloat(height);
    let weightInKg = parseFloat(weight);

    // Convert to metric if imperial
    if (unit === 'imperial') {
      heightInM = heightInM * 0.0254; // inches to meters
      weightInKg = weightInKg * 0.453592; // pounds to kg
    } else {
      heightInM = heightInM / 100; // cm to meters
    }

    const bmi = weightInKg / (heightInM * heightInM);
    
    let category = '';
    let color = '';
    let healthyRange = '';

    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'text-blue-600';
      healthyRange = '18.5-24.9';
    } else if (bmi < 25) {
      category = 'Normal weight';
      color = 'text-green-600';
      healthyRange = 'You\'re in the healthy range!';
    } else if (bmi < 30) {
      category = 'Overweight';
      color = 'text-yellow-600';
      healthyRange = '18.5-24.9';
    } else {
      category = 'Obese';
      color = 'text-red-600';
      healthyRange = '18.5-24.9';
    }

    setBmiResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      color,
      healthyRange
    });
  };

  return (
    <div id="bmi-calc" className="glass-card neomorphic rounded-2xl p-6 text-center h-full">
      <h3 className="text-xl font-bold mb-4 text-primary">BMI Calculator</h3>
      
      <div className="mb-4">
        <Select value={unit} onValueChange={setUnit}>
          <SelectTrigger className="w-full mb-3" data-testid="select-unit">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="metric">Metric (cm, kg)</SelectItem>
            <SelectItem value="imperial">Imperial (in, lbs)</SelectItem>
          </SelectContent>
        </Select>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Height ({unit === 'metric' ? 'cm' : 'inches'}):
            </label>
            <Input
              type="number"
              placeholder={unit === 'metric' ? '170' : '68'}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="text-center"
              data-testid="input-height"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2">
              Weight ({unit === 'metric' ? 'kg' : 'lbs'}):
            </label>
            <Input
              type="number"
              placeholder={unit === 'metric' ? '70' : '154'}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="text-center"
              data-testid="input-weight"
            />
          </div>
        </div>
      </div>

      <Button
        onClick={calculateBMI}
        className="w-full gradient-bg text-white py-2 px-4 font-semibold hover:opacity-90 transition-opacity mb-6"
        disabled={!height || !weight}
        data-testid="button-calculate-bmi"
      >
        <Scale className="w-4 h-4 mr-2" />
        Calculate BMI
      </Button>

      {/* BMI Results */}
      {bmiResult ? (
        <div className="space-y-3" data-testid="bmi-results">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="text-2xl font-bold text-primary" data-testid="bmi-value">
              {bmiResult.bmi}
            </div>
            <div className={`text-sm font-semibold ${bmiResult.color}`} data-testid="bmi-category">
              {bmiResult.category}
            </div>
          </div>
          
          <div className="p-3 bg-muted/30 rounded text-xs">
            <div className="font-semibold mb-1">Healthy BMI Range</div>
            <div className="text-muted-foreground" data-testid="healthy-range">
              {bmiResult.healthyRange}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-muted-foreground text-sm">
          <p>Enter your height and weight to calculate BMI</p>
        </div>
      )}

      {/* BMI Tip */}
      <div className="mt-4 p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center justify-center mb-1">
          <Info className="w-4 h-4 mr-1 text-accent" />
          <span className="text-xs font-semibold">Note</span>
        </div>
        <p className="text-xs text-muted-foreground">
          BMI is a screening tool, not a diagnostic measure
        </p>
      </div>
    </div>
  );
}