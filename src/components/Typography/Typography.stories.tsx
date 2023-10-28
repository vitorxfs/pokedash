import type { Meta, StoryObj } from '@storybook/react';

import { Typography, TypographyProps } from './Typography';

const meta: Meta<TypographyProps> = {
  component: Typography,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TypographyProps>;


export const Default: Story = {
  args: {
    size: '2xl',
    weight: 'normal',
    tag: 'p'
  },
  render: (args) => <Typography {...args}>Typography</Typography>,
};
