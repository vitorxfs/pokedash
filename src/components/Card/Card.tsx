import React from 'react';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const variants = tv({
  variants: {
    radius: {
      base: 'rounded', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl', '2xl': 'rounded-2xl', '3xl': 'rounded-3xl', full: 'rounded-full', none: 'rounded-none',
    },
    shadow: {
      sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg', xl: 'shadow-xl', '2xl': 'shadow-2xl', inner: 'shadow-inner', none: 'shadow-none', inherit: 'shadow-inherit', current: 'shadow-current', transparent: 'shadow-transparent'
    }
  }
});

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none' | 'inherit' | 'current' | 'transparent';
  radius?: 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | 'none';
}

export const Card: React.FC<CardProps> = ({ children, className, shadow, radius }) => {
  return <div className={twMerge([
    `${variants({ radius, shadow })}`,
    className,
  ])}>{children}</div>;
}

Card.defaultProps = {
  shadow: 'none',
  radius: 'md',
}

export default Card;
