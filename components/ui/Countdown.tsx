import React, { useState, useEffect } from 'react';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const targetDate = new Date('2026-02-23T23:59:59');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  const Unit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
      <div className="flex items-center bg-white/10 rounded px-2 py-0.5 backdrop-blur-sm border border-white/5">
        <span className="text-sm md:text-base">{format(value)}</span>
      </div>
      <span className="text-[8px] uppercase tracking-tighter text-white/40 mt-0.5">{label}</span>
    </div>
  );

  return (
    <div className="flex items-start gap-1 font-mono font-medium tabular-nums text-white/90">
      <Unit value={timeLeft.days} label="dias" />
      <span className="text-white/40 font-light mt-1">:</span>
      <Unit value={timeLeft.hours} label="hrs" />
      <span className="text-white/40 font-light mt-1">:</span>
      <Unit value={timeLeft.minutes} label="min" />
      <span className="text-white/40 font-light mt-1">:</span>
      <Unit value={timeLeft.seconds} label="seg" />
    </div>
  );
};