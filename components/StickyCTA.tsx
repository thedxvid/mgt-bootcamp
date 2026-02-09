import React, { useState, useEffect, useRef } from 'react';
import { ShinyButton } from './ui/ShinyButton';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 600; 

      if (currentScrollY > lastScrollY.current && currentScrollY > threshold) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY.current || currentScrollY <= threshold) {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
        left-0 right-0 bottom-0 md:left-1/2 md:right-auto md:bottom-8 md:-translate-x-1/2 md:w-auto
        ${isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-full md:translate-y-24 opacity-0 pointer-events-none'}
      `}
    >
      <div className="
        w-full md:w-auto
        bg-black/90 backdrop-blur-xl border-t border-white/10 p-4 pb-8 md:pb-1.5 md:p-1.5
        md:bg-black/40 md:backdrop-blur-2xl md:border md:border-white/10 md:rounded-full md:shadow-[0_8px_32px_rgba(0,0,0,0.5)]
        flex justify-center
      ">
        <ShinyButton 
            className="w-full md:w-auto rounded-lg md:rounded-full h-12 md:h-auto text-sm md:text-base font-bold shadow-none hover:-translate-y-0 justify-center"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
        >
          GARANTIR MINHA VAGA
        </ShinyButton>
      </div>
    </div>
  );
};