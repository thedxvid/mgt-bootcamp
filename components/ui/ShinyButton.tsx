import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withIcon?: boolean;
  children: React.ReactNode;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  withIcon = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 transform active:scale-95 px-8 py-4 md:px-12 md:py-[18px] rounded-xl text-base md:text-lg select-none cursor-pointer group";

  const variants = {
    primary: "bg-gradient-to-br from-[#FF6B35] to-[#E53E3E] hover:from-[#E53E3E] hover:to-[#C53030] text-white shadow-[0_4px_20px_rgba(255,107,53,0.4)] hover:shadow-[0_6px_30px_rgba(255,107,53,0.6)] hover:-translate-y-0.5",
    secondary: "bg-white text-black hover:bg-gray-100 shadow-lg",
    outline: "border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "w-full md:w-auto";
  const shineColor = variant === 'secondary' ? 'via-black/10' : 'via-white/40';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      onClick={(e) => {
        if (!props.onClick) {
          const pricingSection = document.getElementById('pricing');
          pricingSection?.scrollIntoView({ behavior: 'smooth' });
        }
        props.onClick && props.onClick(e);
      }}
      {...props}
    >
      <div className={`absolute inset-0 -translate-x-[150%] animate-shine z-10 bg-gradient-to-r from-transparent ${shineColor} to-transparent pointer-events-none`} />
      <span className="relative z-20 flex items-center">
        {children}
        {withIcon && <ArrowRight className="ml-2 w-5 h-5" />}
      </span>
    </button>
  );
};