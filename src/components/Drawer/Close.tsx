import React from 'react';

import { Close as DialogClose } from '@radix-ui/react-dialog';

export interface CloseProps {
  children: React.ReactNode;
}

export const Close = ({ children }: CloseProps) => {
  return (
    <DialogClose asChild>
      {children}
    </DialogClose>
  )
}
