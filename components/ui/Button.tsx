import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withIcon?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  withIcon = false,
  children, 
  className = '',
  ...props 
}) => {
  // Mobile: px-8 py-4 (approx from 16px 32px spec) | Desktop: px-12 py-4.5
  // Font: Mobile 16px, Desktop 18px
  // Radius: rounded-xl (12px)
  
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 transform active:scale-95 px-8 py-4 md:px-12 md:py-[18px] rounded-xl text-base md:text-lg select-none cursor-pointer";
  
  const variants = {
    // Gradient: #FFD700 to #FFA500
    primary: "bg-gradient-to-br from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FF8C00] text-black shadow-[0_4px_20px_rgba(255,215,0,0.3)] hover:shadow-[0_6px_30px_rgba(255,215,0,0.5)] hover:-translate-y-0.5",
    secondary: "bg-white text-black hover:bg-gray-100 shadow-lg",
    outline: "border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
  };

  const widthClass = fullWidth ? "w-full" : "w-full md:w-auto";

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
      {children}
      {withIcon && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};