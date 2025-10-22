import React from 'react';

interface MosaicLogoProps {
  size?: number;
  className?: string;
}

export const MosaicLogo: React.FC<MosaicLogoProps> = ({ size = 24, className = '' }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M24 4L44 24L24 44L4 24L24 4Z"
          stroke="currentColor"
          strokeWidth="2"
          className="transition-all duration-300"
        />
        <path
          d="M24 12L36 24L24 36L12 24L24 12Z"
          fill="currentColor"
          className="text-brand-primary transition-all duration-300"
        />
      </svg>
    </div>
  );
};

export default MosaicLogo;
