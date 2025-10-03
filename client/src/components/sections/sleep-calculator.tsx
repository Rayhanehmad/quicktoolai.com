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
    <div id="sleep" className="glass-card neomorphic rounded-2xl p-8 h-full">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 text-primary">Bedtime Calculator for Sleep Cycles</h3>
        <p className="text-sm text-muted-foreground">Calculate optimal bedtime based on 90-minute sleep cycles for better rest</p>
      </div>
      
      <div className="mb-8 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
        <label className="block text-sm font-semibold mb-4 text-center">When do you want to wake up?</label>
        <Input
          type="time"
          value={wakeUpTime}
          onChange={(e) => setWakeUpTime(e.target.value)}
          className="text-2xl px-4 py-3 text-center font-mono max-w-xs mx-auto h-14"
          data-testid="input-wake-time"
        />
      </div>

      <Button
        onClick={calculateSleepTimes}
        className="w-full gradient-bg text-white py-3 px-6 font-semibold hover:opacity-90 transition-opacity mb-8 h-12"
        data-testid="button-calculate-sleep"
      >
        Calculate Bedtimes
      </Button>

      {/* Sleep Recommendations - Enhanced */}
      {recommendations.length > 0 && (
        <div className="space-y-4 animate-slide-up" data-testid="sleep-recommendations">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-blue-900 dark:text-blue-100">
                <strong>How it works:</strong> Sleep cycles are typically 90 minutes. We've added 15 min to fall asleep.
              </div>
            </div>
          </div>
          
          <div className="text-sm font-semibold mb-2">Recommended Bedtimes:</div>
          
          {recommendations.map((rec, idx) => (
            <div 
              key={idx}
              className={`p-5 rounded-xl border-2 transition-all ${
                idx === 0 
                  ? 'border-primary bg-gradient-to-br from-primary/10 to-accent/10' 
                  : 'border-border bg-muted/30'
              }`}
              data-testid={`recommendation-${idx}`}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="text-3xl font-bold font-mono text-foreground" data-testid={`bedtime-${idx}`}>
                  {rec.bedtime}
                </div>
                {idx === 0 && (
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ Best
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground" data-testid={`sleep-details-${idx}`}>
                <span><span className="font-semibold text-foreground">{rec.cycles}</span> cycles</span>
                <span>•</span>
                <span><span className="font-semibold text-foreground">{rec.totalSleep}</span> sleep</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {recommendations.length === 0 && (
        <div className="text-center text-muted-foreground text-sm p-8 bg-muted/20 rounded-xl">
          <p>Set your wake-up time above to get personalized sleep recommendations</p>
        </div>
      )}

      {/* Sleep Tip */}
      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <div className="text-sm text-center text-muted-foreground">
          <span className="text-foreground font-semibold">💡 Sleep Tip:</span> Most adults need 7-9 hours of sleep for optimal health
        </div>
      </div>
    </div>
  );
}
