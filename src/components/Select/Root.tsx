"use client"

import React from 'react';

import { Root as SelectRoot } from '@radix-ui/react-select';

export interface RootProps {
  children: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
}

export const Root: React.FC<RootProps> = ({
  children,
  value,
  onChange = () => {},
}) => {
  return (
    <SelectRoot value={value} onValueChange={onChange} >
      {children}
    </SelectRoot>
  );
};

Root.defaultProps = {};

export default Root;
