import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Info } from "lucide-react";

interface SleepRecommendation {
  cycles: number;
  bedtime: string;
  totalSleep: string;
}

export function SleepCalculatorSection() {
  const [wakeUpTime, setWakeUpTime] = useState('07:00');
  const [recommendations, setRecommendations] = useState<SleepRecommendation[]>([]);

  const calculateSleepTimes = () => {
    if (!wakeUpTime) return;

    const [hours, minutes] = wakeUpTime.split(':').map(Number);
    const wakeDate = new Date();
    wakeDate.setHours(hours, minutes, 0, 0);

    const newRecommendations: SleepRecommendation[] = [];
    const cycleLength = 90; // minutes
    const fallAsleepTime = 15; // minutes

    // Calculate for 6, 5, and 4 sleep cycles
    for (const cycles of [6, 5, 4]) {
      const sleepMinutes = cycles * cycleLength + fallAsleepTime;
      const bedtime = new Date(wakeDate.getTime() - sleepMinutes * 60000);
      
      // Adjust for previous day if needed
      if (bedtime.getDate() !== wakeDate.getDate()) {
        bedtime.setDate(bedtime.getDate() + 1);
      }

      const totalHours = Math.floor(cycles * 1.5);
      const totalMinutes = (cycles * 1.5 % 1) * 60;
      
      newRecommendations.push({
        cycles,
        bedtime: bedtime.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        }),
        totalSleep: totalMinutes > 0 
          ? `${totalHours}h ${totalMinutes}m`
          : `${totalHours}h`
      });
    }

    setRecommendations(newRecommendations);
  };

  return (
    <div id="sleep" className="glass-card neomorphic rounded-2xl p-6 text-center h-full">
      <h3 className="text-xl font-bold mb-4 text-primary">Bedtime Calculator for Sleep Cycles</h3>
      <p className="text-xs text-muted-foreground mb-4">Calculate optimal bedtime based on 90-minute sleep cycles for better rest</p>
      
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3">Wake up time:</label>
        <Input
          type="time"
          value={wakeUpTime}
          onChange={(e) => setWakeUpTime(e.target.value)}
          className="text-lg px-3 py-2 text-center font-mono max-w-xs mx-auto"
          data-testid="input-wake-time"
        />
      </div>

      <Button
        onClick={calculateSleepTimes}
        className="w-full gradient-bg text-white py-2 px-4 font-semibold hover:opacity-90 transition-opacity mb-6"
        data-testid="button-calculate-sleep"
      >
        Calculate Bedtimes
      </Button>

      {/* Sleep Recommendations */}
      <div className="space-y-2" data-testid="sleep-recommendations">
        {recommendations.length === 0 ? (
          <div className="text-center text-muted-foreground text-sm">
            <p>Set your wake time to get sleep recommendations</p>
          </div>
        ) : (
          recommendations.slice(0, 2).map((rec, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg border ${
                index === 0 
                  ? 'border-primary bg-primary/10' 
                  : 'border-border bg-muted/30'
              }`}
              data-testid={`recommendation-${index}`}
            >
              <div className="font-semibold text-sm" data-testid={`bedtime-${index}`}>
                Go to bed at {rec.bedtime}
              </div>
              <div className="text-xs text-muted-foreground" data-testid={`sleep-details-${index}`}>
                {rec.cycles} cycles • {rec.totalSleep}
                {index === 0 && ' (Best)'}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Sleep Tip */}
      <div className="mt-4 p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center justify-center mb-1">
          <Info className="w-4 h-4 mr-1 text-accent" />
          <span className="text-xs font-semibold">Tip</span>
        </div>
        <p className="text-xs text-muted-foreground">
          90-minute sleep cycles help you wake up refreshed
        </p>
      </div>
    </div>
  );
}
