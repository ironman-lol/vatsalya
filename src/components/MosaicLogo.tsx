import React from 'react';

interface MosaicLogoProps {
  size?: number;
  className?: string;
}

export const MosaicLogo: React.FC<MosaicLogoProps> = ({ size = 24, className = '' }) => {
  return (
    <div className={`grid grid-cols-2 gap-[2%] ${className}`} style={{ width: size, height: size }}>
      <div className="bg-brand-yellow"></div>
      <div className="bg-gray-800"></div>
      <div className="bg-gray-800"></div>
      <div className="bg-brand-yellow"></div>
    </div>
  );
};

export default MosaicLogo;
