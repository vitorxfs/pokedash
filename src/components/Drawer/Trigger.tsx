import React from 'react';

import { Trigger as DialogTrigger } from '@radix-ui/react-dialog';

export interface TriggerProps {
  children: React.ReactNode;
}

export const Trigger = ({ children }: TriggerProps) => {
  return (
    <DialogTrigger asChild>
      {children}
    </DialogTrigger>
  )
}
