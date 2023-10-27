import React from 'react';

import { twMerge } from 'tailwind-merge';

import Icon, { IconProps } from '@/components/Icon';

export interface IconButtonProps extends Pick<IconProps, 'name'> {
  ariaLabel?: string;
  className?: string;
  onClick?: () => {},
}

export const IconButton: React.FC<IconButtonProps> = ({ ariaLabel, onClick, className, ...props }) => {
  return (
    <button
      aria-label={ariaLabel}
      className={twMerge([
        `
          w-11 h-11 flex items-center justify-center rounded-full
          text-gray-800
          hover:bg-gray-200 transition-all
        `,
        className,
      ])}
      onClick={onClick}
    >
      <Icon {...props} />
    </button>
  );
};

IconButton.defaultProps = {};

export default IconButton;
