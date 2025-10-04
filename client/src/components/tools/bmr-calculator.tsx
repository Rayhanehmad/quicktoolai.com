import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity } from "lucide-react";

export function BMRCalculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<{ bmr: number; calories: { [key: string]: number } } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);

    if (!isNaN(w) && !isNaN(h) && !isNaN(a)) {
      let bmr: number;
      if (gender === 'male') {
        bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
      } else {
        bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
      }

      const activityLevels = {
        sedentary: bmr * 1.2,
        light: bmr * 1.375,
        moderate: bmr * 1.55,
        active: bmr * 1.725,
        veryActive: bmr * 1.9
      };

      setResult({ bmr, calories: activityLevels });
    }
  };

  return (
    <div id="bmr" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">BMR Calculator</h3>
        <p className="text-xs text-muted-foreground">Calculate Basal Metabolic Rate and daily calories</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Gender:</label>
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger className="w-full bg-background h-11" data-testid="select-gender">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Age (years):</label>
          <Input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="30"
            className="text-center h-11"
            data-testid="input-age"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Weight (kg):</label>
          <Input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="70"
            className="text-center h-11"
            data-testid="input-weight"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Height (cm):</label>
          <Input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="170"
            className="text-center h-11"
            data-testid="input-height"
          />
        </div>
      </div>

      <Button
        onClick={calculate}
        className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-6 h-12"
        disabled={!age || !weight || !height}
        data-testid="button-calculate"
      >
        <Activity className="w-4 h-4 mr-2" />
        Calculate BMR
      </Button>

      {result && (
        <div className="space-y-3 animate-slide-up" data-testid="result">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary">
            <div className="text-2xl font-bold text-primary text-center" data-testid="bmr-value">
              {result.bmr.toFixed(0)} cal/day
            </div>
            <div className="text-xs text-center text-muted-foreground">Basal Metabolic Rate</div>
          </div>
          <div className="text-xs font-semibold mb-2">Daily Calorie Needs:</div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between p-2 bg-muted/30 rounded">
              <span>Sedentary</span>
              <span className="font-semibold">{result.calories.sedentary.toFixed(0)} cal</span>
            </div>
            <div className="flex justify-between p-2 bg-muted/30 rounded">
              <span>Light Activity</span>
              <span className="font-semibold">{result.calories.light.toFixed(0)} cal</span>
            </div>
            <div className="flex justify-between p-2 bg-muted/30 rounded">
              <span>Moderate Activity</span>
              <span className="font-semibold">{result.calories.moderate.toFixed(0)} cal</span>
            </div>
            <div className="flex justify-between p-2 bg-muted/30 rounded">
              <span>Active</span>
              <span className="font-semibold">{result.calories.active.toFixed(0)} cal</span>
            </div>
            <div className="flex justify-between p-2 bg-muted/30 rounded">
              <span>Very Active</span>
              <span className="font-semibold">{result.calories.veryActive.toFixed(0)} cal</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
