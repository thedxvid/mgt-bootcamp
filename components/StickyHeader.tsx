import React, { useState, useEffect } from 'react';
import { Countdown } from './ui/Countdown';
import { OptimizedImage } from './ui/OptimizedImage';

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
        <div className="flex items-center h-10 md:h-12">
          <OptimizedImage
            src="/logo_bootcamp.png"
            alt="MGT Scaling Bootcamp"
            className="h-full w-auto"
            objectFit="contain"
            priority={true}
            width={200}
            height={48}
          />
        </div>

        {/* Urgency Center */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="bg-[#FF6B35] text-black px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-black animate-pulse flex items-center gap-2 shadow-[0_0_20px_rgba(255,107,53,0.5)] border-2 border-orange-400/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
            </span>
            <span className="tracking-tight">80% DAS VAGAS ESGOTADAS!</span>
          </div>
        </div>

      </div>
    </header>
  );
};