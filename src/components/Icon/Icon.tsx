import React from 'react';
import { tv } from 'tailwind-variants';

import * as icons from './svgs';

const variants = tv({
  variants: {
    size: {
      xs: 'w-3 h-3', // 0.75rem
      sm: 'w-4 h-4', // 1rem
      md: 'w-6 h-6', // 1.5rem
      lg: 'w-8 h-8', // 2rem
      xl: 'w-10 h-10', // 2.5rem
    }
  }
});

const DEFAULT_ICON_NAME = 'default_icon'

export interface IconProps {
  name: keyof typeof icons;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  alt: string;
}

export const Icon: React.FC<IconProps> = ({ name, size, alt }) => {
  const Path = icons[name] || icons[DEFAULT_ICON_NAME];

  return (
    <svg
      aria-label={alt}
      className={variants({ size })}
      color="inherit"
      fill="currentcolor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path />
    </svg>
  );
}

Icon.defaultProps = {
  alt: '',
  name: DEFAULT_ICON_NAME,
  size: 'md',
}

export default Icon;
