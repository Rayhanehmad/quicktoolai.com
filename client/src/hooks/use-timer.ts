import { useState, useEffect, useRef, useCallback } from 'react';

type TimerMode = 'timer' | 'stopwatch' | 'pomodoro';
type TimerState = 'idle' | 'running' | 'paused';

export function useTimer() {
  const [mode, setMode] = useState<TimerMode>('timer');
  const [state, setState] = useState<TimerState>('idle');
  const [time, setTime] = useState(0); // in seconds
  const [initialTime, setInitialTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Pomodoro specific state
  const [pomodoroRounds, setPomodoroRounds] = useState(0);
  const [isBreak, setIsBreak] = useState(false);

  const POMODORO_WORK_TIME = 25 * 60; // 25 minutes
  const POMODORO_SHORT_BREAK = 5 * 60; // 5 minutes
  const POMODORO_LONG_BREAK = 15 * 60; // 15 minutes

  const start = useCallback(() => {
    if (mode === 'timer' && time === 0) return;
    
    setState('running');
    
    intervalRef.current = setInterval(() => {
      setTime(prevTime => {
        if (mode === 'timer') {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            setState('idle');
            // Timer finished notification could go here
            return 0;
          }
          return newTime;
        } else {
          // Stopwatch or Pomodoro counting up
          const newTime = prevTime + 1;
          
          if (mode === 'pomodoro') {
            const currentLimit = isBreak 
              ? (pomodoroRounds % 4 === 0 && pomodoroRounds > 0 ? POMODORO_LONG_BREAK : POMODORO_SHORT_BREAK)
              : POMODORO_WORK_TIME;
              
            if (newTime >= currentLimit) {
              setState('idle');
              setTime(0);
              
              if (isBreak) {
                setIsBreak(false);
              } else {
                setPomodoroRounds(prev => prev + 1);
                setIsBreak(true);
              }
              
              // Pomodoro session finished notification could go here
              return 0;
            }
          }
          
          return newTime;
        }
      });
    }, 1000);
  }, [mode, time, isBreak, pomodoroRounds]);

  const pause = useCallback(() => {
    setState('paused');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const reset = useCallback(() => {
    setState('idle');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    if (mode === 'timer') {
      setTime(initialTime);
    } else {
      setTime(0);
    }
    
    if (mode === 'pomodoro') {
      setPomodoroRounds(0);
      setIsBreak(false);
    }
  }, [mode, initialTime]);

  const setTimerTime = useCallback((hours: number, minutes: number, seconds: number) => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setTime(totalSeconds);
    setInitialTime(totalSeconds);
  }, []);

  const switchMode = useCallback((newMode: TimerMode) => {
    setState('idle');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setMode(newMode);
    setTime(0);
    setInitialTime(0);
    
    if (newMode === 'pomodoro') {
      setPomodoroRounds(0);
      setIsBreak(false);
    }
  }, []);

  const formatTime = useCallback((seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    mode,
    state,
    time,
    start,
    pause,
    reset,
    setTimerTime,
    switchMode,
    formatTime,
    pomodoroRounds,
    isBreak,
  };
}
