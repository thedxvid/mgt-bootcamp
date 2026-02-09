import React, { useState, useEffect } from 'react';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 59,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 }; // Reset
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center gap-1 font-mono text-sm md:text-base font-medium tabular-nums tracking-wide text-white/90">
      <div className="flex items-center bg-white/10 rounded px-2 py-0.5 backdrop-blur-sm border border-white/5">
        <span>{format(timeLeft.hours)}</span>
      </div>
      <span className="text-white/40 font-light">:</span>
      <div className="flex items-center bg-white/10 rounded px-2 py-0.5 backdrop-blur-sm border border-white/5">
        <span>{format(timeLeft.minutes)}</span>
      </div>
      <span className="text-white/40 font-light">:</span>
      <div className="flex items-center bg-white/10 rounded px-2 py-0.5 backdrop-blur-sm border border-white/5">
        <span>{format(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};