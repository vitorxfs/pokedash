import React from 'react';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
type Weight = 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'strong' | 'span' | string;


export interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  size?: Size;
  tag: Tag;
  weight?: Weight;
}

const variants = tv({
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
    weight: {
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    }
  }
})

export const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  size = 'md',
  tag,
  weight = 'normal',
}) => {
  const Tag = tag as any;

  return (
    <Tag className={twMerge([variants({ size, weight }), className])}>
      {children}
    </Tag>
  );
}

export default Typography;
