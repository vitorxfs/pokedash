import type { Meta, StoryObj } from '@storybook/react';

import SvgIcon, { SvgIconProps } from './SvgIcon';

const meta: Meta<SvgIconProps> = {
  component: SvgIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SvgIconProps>;


export const Default: Story = {
  args: {
    size: 'md',
    viewBoxSize: 50,
  },
  render: (args) => (
    <SvgIcon {...args}>
      <circle cx="25" cy="25" r="25"/>
    </SvgIcon>
  )
};
