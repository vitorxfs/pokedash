import React from 'react';

const sizes = {
  xs: '12',
  sm: '16',
  md: '24',
  lg: '32',
  xl: '36',
  '2xl': '42',
};

export interface SvgIconProps {
  ariaLabel?: string;
  children?: React.ReactNode;
  size?: keyof typeof sizes;
  viewBoxSize?: number;
  className?: string;
}

const SvgIcon = ({ ariaLabel='', children, size='md', viewBoxSize, className }: SvgIconProps) => {
  return (
    <svg
      aria-label={ariaLabel}
      width={sizes[size]}
      height={sizes[size]}
      fill="currentColor"
      viewBox={viewBoxSize ? `0 0 ${viewBoxSize} ${viewBoxSize}` : undefined}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {children}
    </svg>
  )
}

export default SvgIcon;
