import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-up';
  delay?: number;
  duration?: number;
  className?: string;
  width?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  duration = 800,
  className = '',
  width = 'w-full'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing to keep it visible (once: true behavior)
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // Cleanup
      observer.disconnect();
    };
  }, []);

  const getInitialState = () => {
    switch(animation) {
      case 'fade-up': return 'translate-y-12 opacity-0';
      case 'fade-in': return 'opacity-0';
      case 'slide-in-left': return '-translate-x-12 opacity-0';
      case 'slide-in-right': return 'translate-x-12 opacity-0';
      case 'scale-up': return 'scale-90 opacity-0';
      default: return 'translate-y-12 opacity-0';
    }
  };

  const activeState = 'translate-y-0 translate-x-0 scale-100 opacity-100';

  return (
    <div 
      ref={ref} 
      className={`transition-all ease-[cubic-bezier(0.4,0,0.2,1)] ${isVisible ? activeState : getInitialState()} ${className} ${width}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};