import React from 'react';

import * as icons from './svgs';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const DEFAULT_ICON_NAME = 'default_icon';

export interface IconProps extends Pick<SvgIconProps, 'size'> {
  name: keyof typeof icons;
  alt?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name=DEFAULT_ICON_NAME,
  size='md',
  alt='',
  className
}) => {
  const Path = icons[name] || icons[DEFAULT_ICON_NAME];

  return (
    <SvgIcon viewBoxSize={24} ariaLabel={alt} size={size} className={className}>
      <Path />
    </SvgIcon>
  );
}

export default Icon;
