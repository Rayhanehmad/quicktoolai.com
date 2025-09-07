import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useClock } from "@/hooks/use-clock";
import { useTimer } from "@/hooks/use-timer";
import { Play, Pause, Square, RotateCcw } from "lucide-react";

export function ClockTimerSection() {
  const { time, formatTime } = useClock();
  const timer = useTimer();
  const [timezone, setTimezone] = useState('local');
  const [timerInputs, setTimerInputs] = useState({ hours: 0, minutes: 5, seconds: 0 });

  const timezones = [
    { value: 'local', label: 'Local' },
    { value: 'UTC', label: 'UTC' },
    { value: 'America/New_York', label: 'NY' },
    { value: 'Europe/London', label: 'London' },
    { value: 'Asia/Tokyo', label: 'Tokyo' },
  ];

  const handleTimerInputChange = (field: 'hours' | 'minutes' | 'seconds', value: string) => {
    const numValue = parseInt(value) || 0;
    setTimerInputs(prev => ({ ...prev, [field]: numValue }));
  };

  const setTimer = () => {
    timer.setTimerTime(timerInputs.hours, timerInputs.minutes, timerInputs.seconds);
  };

  const getCurrentTime = () => {
    if (timezone === 'local') {
      return formatTime(time);
    }
    return formatTime(time, timezone);
  };

  return (
    <div id="clock" className="glass-card neomorphic rounded-2xl p-6 text-center h-full">
      <h3 className="text-xl font-bold mb-4 text-primary">World Clock & Timer</h3>
      
      {/* Live Clock */}
      <div className="mb-6">
        <div className="text-2xl font-mono font-bold text-foreground mb-2" data-testid="text-live-time">
          {getCurrentTime()}
        </div>
        <Select value={timezone} onValueChange={setTimezone}>
          <SelectTrigger className="w-full" data-testid="select-timezone">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {timezones.map((tz) => (
              <SelectItem key={tz.value} value={tz.value}>
                {tz.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Timer Mode Toggle */}
      <div className="flex justify-center mb-4">
        <div className="flex bg-muted rounded-lg p-1 text-xs">
          <Button
            variant={timer.mode === 'timer' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => timer.switchMode('timer')}
            data-testid="button-timer-mode"
          >
            Timer
          </Button>
          <Button
            variant={timer.mode === 'stopwatch' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => timer.switchMode('stopwatch')}
            data-testid="button-stopwatch-mode"
          >
            Stopwatch
          </Button>
          <Button
            variant={timer.mode === 'pomodoro' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => timer.switchMode('pomodoro')}
            data-testid="button-pomodoro-mode"
          >
            Pomodoro
          </Button>
        </div>
      </div>

      {/* Timer Display */}
      <div className="text-2xl font-mono font-bold text-foreground mb-4" data-testid="text-timer-display">
        {timer.formatTime(timer.time)}
      </div>
      
      {/* Timer Input (only for timer mode) */}
      {timer.mode === 'timer' && (
        <div className="flex justify-center space-x-2 mb-4">
          <Input
            type="number"
            min="0"
            max="23"
            placeholder="H"
            className="w-12 text-center text-sm"
            value={timerInputs.hours || ''}
            onChange={(e) => handleTimerInputChange('hours', e.target.value)}
            data-testid="input-timer-hours"
          />
          <Input
            type="number"
            min="0"
            max="59"
            placeholder="M"
            className="w-12 text-center text-sm"
            value={timerInputs.minutes || ''}
            onChange={(e) => handleTimerInputChange('minutes', e.target.value)}
            data-testid="input-timer-minutes"
          />
          <Button onClick={setTimer} size="sm" data-testid="button-set-timer">
            Set
          </Button>
        </div>
      )}

      {/* Pomodoro Info */}
      {timer.mode === 'pomodoro' && (
        <div className="mb-4 p-2 bg-muted/50 rounded-lg text-xs">
          <div className="text-muted-foreground">
            Round {timer.pomodoroRounds + 1} • {timer.isBreak ? 'Break' : 'Work'}
          </div>
        </div>
      )}
      
      {/* Timer Controls */}
      <div className="flex justify-center space-x-2">
        {timer.state === 'idle' && (
          <Button 
            onClick={timer.start}
            className="gradient-bg text-white hover:opacity-90"
            size="sm"
            data-testid="button-timer-start"
          >
            <Play className="w-4 h-4 mr-1" />
            Start
          </Button>
        )}
        
        {timer.state === 'running' && (
          <Button 
            onClick={timer.pause}
            variant="secondary"
            size="sm"
            data-testid="button-timer-pause"
          >
            <Pause className="w-4 h-4 mr-1" />
            Pause
          </Button>
        )}
        
        {timer.state === 'paused' && (
          <Button 
            onClick={timer.start}
            className="gradient-bg text-white hover:opacity-90"
            size="sm"
            data-testid="button-timer-resume"
          >
            <Play className="w-4 h-4 mr-1" />
            Resume
          </Button>
        )}

        {(timer.state === 'paused' || timer.state === 'running') && (
          <Button 
            onClick={timer.reset}
            variant="outline"
            size="sm"
            data-testid="button-timer-reset"
          >
            <RotateCcw className="w-4 h-4 mr-1" />
            Reset
          </Button>
        )}
      </div>
    </div>
  );
}
