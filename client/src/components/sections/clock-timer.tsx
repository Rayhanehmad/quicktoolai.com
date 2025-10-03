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
    { value: 'local', label: 'Local Time' },
    { value: 'UTC', label: 'UTC (Universal)' },
    
    // North America
    { value: 'America/New_York', label: 'New York (EST)' },
    { value: 'America/Chicago', label: 'Chicago (CST)' },
    { value: 'America/Denver', label: 'Denver (MST)' },
    { value: 'America/Los_Angeles', label: 'Los Angeles (PST)' },
    { value: 'America/Vancouver', label: 'Vancouver' },
    { value: 'America/Toronto', label: 'Toronto' },
    { value: 'America/Mexico_City', label: 'Mexico City' },
    
    // South America
    { value: 'America/Sao_Paulo', label: 'São Paulo' },
    { value: 'America/Buenos_Aires', label: 'Buenos Aires' },
    { value: 'America/Lima', label: 'Lima' },
    { value: 'America/Bogota', label: 'Bogotá' },
    { value: 'America/Caracas', label: 'Caracas' },
    
    // Europe
    { value: 'Europe/London', label: 'London (GMT)' },
    { value: 'Europe/Paris', label: 'Paris (CET)' },
    { value: 'Europe/Berlin', label: 'Berlin' },
    { value: 'Europe/Rome', label: 'Rome' },
    { value: 'Europe/Madrid', label: 'Madrid' },
    { value: 'Europe/Amsterdam', label: 'Amsterdam' },
    { value: 'Europe/Brussels', label: 'Brussels' },
    { value: 'Europe/Vienna', label: 'Vienna' },
    { value: 'Europe/Moscow', label: 'Moscow' },
    { value: 'Europe/Stockholm', label: 'Stockholm' },
    { value: 'Europe/Athens', label: 'Athens' },
    { value: 'Europe/Istanbul', label: 'Istanbul' },
    
    // Asia
    { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
    { value: 'Asia/Shanghai', label: 'Shanghai (CST)' },
    { value: 'Asia/Hong_Kong', label: 'Hong Kong' },
    { value: 'Asia/Singapore', label: 'Singapore' },
    { value: 'Asia/Seoul', label: 'Seoul' },
    { value: 'Asia/Bangkok', label: 'Bangkok' },
    { value: 'Asia/Jakarta', label: 'Jakarta' },
    { value: 'Asia/Manila', label: 'Manila' },
    { value: 'Asia/Kuala_Lumpur', label: 'Kuala Lumpur' },
    { value: 'Asia/Dubai', label: 'Dubai' },
    { value: 'Asia/Mumbai', label: 'Mumbai (IST)' },
    { value: 'Asia/Delhi', label: 'Delhi' },
    { value: 'Asia/Kolkata', label: 'Kolkata' },
    { value: 'Asia/Dhaka', label: 'Dhaka' },
    { value: 'Asia/Karachi', label: 'Karachi' },
    { value: 'Asia/Kabul', label: 'Kabul' },
    { value: 'Asia/Tehran', label: 'Tehran' },
    { value: 'Asia/Baghdad', label: 'Baghdad' },
    { value: 'Asia/Riyadh', label: 'Riyadh' },
    { value: 'Asia/Jerusalem', label: 'Jerusalem' },
    
    // Africa
    { value: 'Africa/Cairo', label: 'Cairo' },
    { value: 'Africa/Lagos', label: 'Lagos' },
    { value: 'Africa/Nairobi', label: 'Nairobi' },
    { value: 'Africa/Cape_Town', label: 'Cape Town' },
    { value: 'Africa/Johannesburg', label: 'Johannesburg' },
    { value: 'Africa/Casablanca', label: 'Casablanca' },
    { value: 'Africa/Algiers', label: 'Algiers' },
    { value: 'Africa/Tunis', label: 'Tunis' },
    
    // Oceania
    { value: 'Australia/Sydney', label: 'Sydney (AEST)' },
    { value: 'Australia/Melbourne', label: 'Melbourne' },
    { value: 'Australia/Brisbane', label: 'Brisbane' },
    { value: 'Australia/Perth', label: 'Perth' },
    { value: 'Australia/Adelaide', label: 'Adelaide' },
    { value: 'Pacific/Auckland', label: 'Auckland' },
    { value: 'Pacific/Fiji', label: 'Fiji' },
    { value: 'Pacific/Honolulu', label: 'Honolulu (HST)' },
    
    // Additional Major Cities
    { value: 'America/Montreal', label: 'Montreal' },
    { value: 'America/Phoenix', label: 'Phoenix' },
    { value: 'America/Anchorage', label: 'Anchorage' },
    { value: 'Europe/Zurich', label: 'Zurich' },
    { value: 'Europe/Oslo', label: 'Oslo' },
    { value: 'Europe/Copenhagen', label: 'Copenhagen' },
    { value: 'Europe/Helsinki', label: 'Helsinki' },
    { value: 'Asia/Taipei', label: 'Taipei' },
    { value: 'Asia/Colombo', label: 'Colombo' },
    { value: 'Asia/Almaty', label: 'Almaty' },
    { value: 'Asia/Tashkent', label: 'Tashkent' },
    { value: 'Pacific/Guam', label: 'Guam' },
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
    <div id="clock" className="glass-card neomorphic rounded-2xl p-8 h-full">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 text-primary">Free Online Clock & Pomodoro Timer Online</h3>
        <p className="text-sm text-muted-foreground">World clock with 70+ timezones, productivity timer, and Pomodoro technique</p>
      </div>
      
      {/* Live Clock - Enhanced */}
      <div className="mb-8 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
        <div className="text-center mb-4">
          <div className="text-5xl font-mono font-bold text-foreground mb-2" data-testid="text-live-time">
            {getCurrentTime()}
          </div>
          <div className="text-sm text-muted-foreground">
            {timezone === 'local' ? 'Local Time' : timezone.split('/')[1]?.replace(/_/g, ' ')}
          </div>
        </div>
        <Select value={timezone} onValueChange={setTimezone}>
          <SelectTrigger className="w-full bg-background" data-testid="select-timezone">
            <SelectValue placeholder="Select timezone" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {timezones.map((tz) => (
              <SelectItem key={tz.value} value={tz.value}>
                {tz.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Timer Mode Toggle - Enhanced */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-muted/50 rounded-xl p-1 gap-1">
          <Button
            variant={timer.mode === 'timer' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => timer.switchMode('timer')}
            className="text-xs px-4"
            data-testid="button-timer-mode"
          >
            Timer
          </Button>
          <Button
            variant={timer.mode === 'stopwatch' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => timer.switchMode('stopwatch')}
            className="text-xs px-4"
            data-testid="button-stopwatch-mode"
          >
            Stopwatch
          </Button>
          <Button
            variant={timer.mode === 'pomodoro' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => timer.switchMode('pomodoro')}
            className="text-xs px-4"
            data-testid="button-pomodoro-mode"
          >
            Pomodoro
          </Button>
        </div>
      </div>

      {/* Timer Display - Enhanced */}
      <div className="text-center mb-6 p-8 bg-muted/30 rounded-xl">
        <div className="text-6xl font-mono font-bold text-foreground mb-2" data-testid="text-timer-display">
          {timer.formatTime(timer.time)}
        </div>
        <div className="text-sm text-muted-foreground capitalize">
          {timer.mode === 'pomodoro' ? `${timer.isBreak ? 'Break' : 'Focus'} Time` : timer.mode}
        </div>
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
