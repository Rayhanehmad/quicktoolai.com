import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Play, Pause, RotateCcw } from "lucide-react";

export function CountdownTimer() {
  const [targetDate, setTargetDate] = useState('');
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && targetDate) {
      interval = setInterval(() => {
        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();
        const difference = target - now;

        if (difference > 0) {
          setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
          });
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          setIsActive(false);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, targetDate]);

  const start = () => {
    if (targetDate) setIsActive(true);
  };

  const reset = () => {
    setIsActive(false);
    setTimeLeft(null);
  };

  return (
    <div id="countdown" className="glass-card neomorphic rounded-2xl p-6 h-full">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-primary">Countdown Timer</h3>
        <p className="text-xs text-muted-foreground">Count down to a specific date and time</p>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
        <label className="block text-sm font-semibold mb-3 text-center">Target Date & Time:</label>
        <Input
          type="datetime-local"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          className="text-center h-12"
          data-testid="input-target-date"
        />
      </div>

      <div className="flex gap-2 mb-6">
        <Button
          onClick={start}
          disabled={!targetDate || isActive}
          className="flex-1 gradient-bg text-white hover:opacity-90 h-12"
          data-testid="button-start"
        >
          <Play className="w-4 h-4 mr-2" />
          Start
        </Button>
        <Button
          onClick={() => setIsActive(false)}
          disabled={!isActive}
          variant="outline"
          className="flex-1 h-12"
          data-testid="button-pause"
        >
          <Pause className="w-4 h-4 mr-2" />
          Pause
        </Button>
        <Button
          onClick={reset}
          variant="outline"
          className="flex-1 h-12"
          data-testid="button-reset"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
      </div>

      {timeLeft && (
        <div className="grid grid-cols-4 gap-2 animate-slide-up" data-testid="countdown-display">
          <div className="p-3 bg-primary/10 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary" data-testid="days">{timeLeft.days}</div>
            <div className="text-xs text-muted-foreground">Days</div>
          </div>
          <div className="p-3 bg-primary/10 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary" data-testid="hours">{timeLeft.hours}</div>
            <div className="text-xs text-muted-foreground">Hours</div>
          </div>
          <div className="p-3 bg-primary/10 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary" data-testid="minutes">{timeLeft.minutes}</div>
            <div className="text-xs text-muted-foreground">Mins</div>
          </div>
          <div className="p-3 bg-primary/10 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary" data-testid="seconds">{timeLeft.seconds}</div>
            <div className="text-xs text-muted-foreground">Secs</div>
          </div>
        </div>
      )}
    </div>
  );
}
