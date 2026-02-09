import React, { useState, useEffect } from 'react';
import { Countdown } from './ui/Countdown';

export const StickyHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${isScrolled
        ? 'bg-black/60 backdrop-blur-xl border-white/10 py-3'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logomgt.png" alt="MGT" className="h-8 w-8 object-contain" />
          <span className="text-lg md:text-xl font-semibold tracking-tight text-white select-none">
            MGT <span className="text-[#FF6B35]">BOOTCAMP</span>
          </span>
        </div>

        {/* Urgency Center */}
        <div className="flex items-center gap-3 md:gap-4">
          <span className="hidden md:inline-block text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">
            Lote 1 Encerra Em
          </span>
          <Countdown />
        </div>

      </div>
    </header>
  );
};