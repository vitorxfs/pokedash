"use client"

import React from 'react';

import { Root } from '@radix-ui/react-select';

export interface SelectProps {
  children: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  children,
  value,
  onChange = () => {},
}) => {
  return (
    <Root value={value} onValueChange={onChange} >
      {children}
    </Root>
  );
};

export default Select;
