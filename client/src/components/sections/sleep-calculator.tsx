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
          ? `${totalHours} hours ${totalMinutes} minutes`
          : `${totalHours} hours`
      });
    }

    setRecommendations(newRecommendations);
  };

  return (
    <section id="sleep" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Sleep Cycle Calculator</h3>
          <p className="text-muted-foreground">Calculate optimal bedtimes based on 90-minute sleep cycles</p>
        </div>

        <div className="glass-card neomorphic rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <label className="block text-lg font-semibold mb-4">When do you want to wake up?</label>
            <Input
              type="time"
              value={wakeUpTime}
              onChange={(e) => setWakeUpTime(e.target.value)}
              className="text-2xl px-4 py-3 text-center font-mono max-w-xs mx-auto"
              data-testid="input-wake-time"
            />
          </div>

          <Button
            onClick={calculateSleepTimes}
            className="w-full gradient-bg text-white py-3 px-6 text-lg font-semibold hover:opacity-90 transition-opacity mb-8"
            data-testid="button-calculate-sleep"
          >
            Calculate Best Sleep Times
          </Button>

          {/* Sleep Recommendations */}
          <div className="space-y-4" data-testid="sleep-recommendations">
            {recommendations.length === 0 ? (
              <div className="text-center text-muted-foreground">
                <p>Enter your desired wake-up time to get personalized sleep recommendations</p>
              </div>
            ) : (
              recommendations.map((rec, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 ${
                    index === 0 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border bg-muted/30'
                  }`}
                  data-testid={`recommendation-${index}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-lg" data-testid={`bedtime-${index}`}>
                        {rec.bedtime}
                      </div>
                      <div className="text-sm text-muted-foreground" data-testid={`sleep-details-${index}`}>
                        {rec.cycles} sleep cycles • {rec.totalSleep}
                      </div>
                    </div>
                    {index === 0 && (
                      <div className="text-primary font-semibold text-sm">Recommended</div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Sleep Tips */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <h5 className="font-semibold mb-2 flex items-center">
              <Info className="w-5 h-5 mr-2 text-accent" />
              Sleep Tips
            </h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Each sleep cycle lasts about 90 minutes</li>
              <li>• Waking up between cycles helps you feel more refreshed</li>
              <li>• Most adults need 5-6 complete sleep cycles (7.5-9 hours)</li>
              <li>• Allow 15 minutes to fall asleep</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
