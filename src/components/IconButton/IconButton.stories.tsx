import type { Meta, StoryObj } from '@storybook/react';

import IconButton, { IconButtonProps } from './IconButton';

const meta: Meta<IconButtonProps> = {
  component: IconButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<IconButtonProps>;


export const Primary: Story = {
  args: {
    name: 'chevron_left',
  },
  render: (args) => <IconButton {...args} />
};
