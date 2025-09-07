import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useClock } from "@/hooks/use-clock";
import { useTimer } from "@/hooks/use-timer";
import { Play, Pause, Square, RotateCcw } from "lucide-react";

export function ClockTimerSection() {
  const { time, formatTime, formatDate } = useClock();
  const timer = useTimer();
  const [timezone, setTimezone] = useState('local');
  const [timerInputs, setTimerInputs] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const timezones = [
    { value: 'local', label: 'Local Time' },
    { value: 'UTC', label: 'UTC' },
    { value: 'America/New_York', label: 'New York (EST)' },
    { value: 'Europe/London', label: 'London (GMT)' },
    { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
    { value: 'America/Los_Angeles', label: 'Los Angeles (PST)' },
    { value: 'Europe/Paris', label: 'Paris (CET)' },
    { value: 'Asia/Shanghai', label: 'Shanghai (CST)' },
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

  const getCurrentDate = () => {
    if (timezone === 'local') {
      return formatDate(time);
    }
    return formatDate(time, timezone);
  };

  return (
    <section id="clock" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Free Online Clock & Pomodoro Timer</h3>
          <p className="text-muted-foreground">World clock with multiple timezones, free timer online, stopwatch, and Pomodoro timer with 25-minute work sessions</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Live Clock */}
          <div className="glass-card neomorphic rounded-2xl p-8 text-center">
            <h4 className="text-xl font-semibold mb-6">World Clock Online</h4>
            <div className="mb-6">
              <div className="text-5xl md:text-6xl font-mono font-bold text-primary mb-2" data-testid="text-live-time">
                {getCurrentTime()}
              </div>
              <div className="text-lg text-muted-foreground" data-testid="text-live-date">
                {getCurrentDate()}
              </div>
            </div>
            
            <Select value={timezone} onValueChange={setTimezone}>
              <SelectTrigger className="w-full" data-testid="select-timezone">
                <SelectValue placeholder="Select timezone" />
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

          {/* Timer & Stopwatch */}
          <div className="glass-card neomorphic rounded-2xl p-8">
            <div className="flex justify-center mb-6">
              <div className="flex bg-muted rounded-lg p-1">
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

            <div className="text-center mb-6">
              <div className="text-4xl font-mono font-bold text-foreground mb-4" data-testid="text-timer-display">
                {timer.formatTime(timer.time)}
              </div>
              
              {timer.mode === 'timer' && (
                <div className="flex justify-center space-x-2 mb-4">
                  <Input
                    type="number"
                    min="0"
                    max="23"
                    placeholder="HH"
                    className="w-16 text-center"
                    value={timerInputs.hours || ''}
                    onChange={(e) => handleTimerInputChange('hours', e.target.value)}
                    data-testid="input-timer-hours"
                  />
                  <Input
                    type="number"
                    min="0"
                    max="59"
                    placeholder="MM"
                    className="w-16 text-center"
                    value={timerInputs.minutes || ''}
                    onChange={(e) => handleTimerInputChange('minutes', e.target.value)}
                    data-testid="input-timer-minutes"
                  />
                  <Input
                    type="number"
                    min="0"
                    max="59"
                    placeholder="SS"
                    className="w-16 text-center"
                    value={timerInputs.seconds || ''}
                    onChange={(e) => handleTimerInputChange('seconds', e.target.value)}
                    data-testid="input-timer-seconds"
                  />
                  <Button onClick={setTimer} size="sm" data-testid="button-set-timer">
                    Set
                  </Button>
                </div>
              )}

              {timer.mode === 'pomodoro' && (
                <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">
                    Round {timer.pomodoroRounds + 1} • {timer.isBreak ? 'Break Time' : 'Work Time'}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    25 min work • 5 min break • 15 min long break every 4 rounds
                  </div>
                </div>
              )}
              
              <div className="flex justify-center space-x-3">
                {timer.state === 'idle' && (
                  <Button 
                    onClick={timer.start}
                    className="gradient-bg text-white hover:opacity-90"
                    data-testid="button-timer-start"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start
                  </Button>
                )}
                
                {timer.state === 'running' && (
                  <Button 
                    onClick={timer.pause}
                    variant="secondary"
                    data-testid="button-timer-pause"
                  >
                    <Pause className="w-4 h-4 mr-2" />
                    Pause
                  </Button>
                )}
                
                {timer.state === 'paused' && (
                  <Button 
                    onClick={timer.start}
                    className="gradient-bg text-white hover:opacity-90"
                    data-testid="button-timer-resume"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                )}

                {(timer.state === 'paused' || timer.state === 'running') && (
                  <Button 
                    onClick={timer.reset}
                    variant="outline"
                    data-testid="button-timer-reset"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
