import { Portal, Content as DialogContent, Overlay as DialogOverlay } from '@radix-ui/react-dialog'

import { twMerge } from 'tailwind-merge';

import classes from './drawer.module.scss';

export interface ContentProps {
  children: React.ReactNode;
  side?: 'left' | 'right'
}

export const Content = ({ children, side='left' }: ContentProps) => {
  return (
    <Portal>
      <DialogOverlay className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black opacity-30"/>
      <DialogContent data-side={side} className={
        twMerge([
          classes[`dialog`],
          `
            data-[side=right]:right-0 data-[side=left]:left-0
            fixed bottom-0 top-0 w-full xl:w-[30%] lg:w-[40%] sm:w-[70%] sm:h-[100vh - 1rem] sm:m-4
            p-4
            bg-gray-50
            sm:rounded-3xl
            overflow-x-auto
            z-10
          `,
        ])
      }>
      {children}
      </DialogContent>
    </Portal>
  )
}
