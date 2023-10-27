"use client"

import { Root } from '@radix-ui/react-dialog';

export interface DrawerProps {
  children: React.ReactNode;
}

export const Drawer = ({ children }: DrawerProps) => {
  return (
    <Root modal>
      {children}
    </Root>
  )
}
