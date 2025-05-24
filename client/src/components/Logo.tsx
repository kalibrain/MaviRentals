import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

const sizeClasses = {
  sm: 'h-8 w-auto',
  md: 'h-12 w-auto',
  lg: 'h-16 w-auto',
  xl: 'h-24 w-auto'
};

export function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img
        src="/logo.png"
        alt="Mavi Rentals Logo"
        className={`${sizeClasses[size]} object-contain`}
        onError={(e) => {
          // Fallback to text if logo fails to load
          e.currentTarget.style.display = 'none';
        }}
      />
      {showText && (
        <span className={`font-bold text-[#1e3a5f] ${
          size === 'sm' ? 'text-lg' : 
          size === 'md' ? 'text-xl' : 
          size === 'lg' ? 'text-2xl' : 'text-3xl'
        }`}>
          MAVI RENTALS
        </span>
      )}
    </div>
  );
}

export default Logo; 