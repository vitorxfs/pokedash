import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardProps } from './Card';

const meta: Meta<CardProps> = {
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardProps>;

export const Primary: Story = {
  args: {
    radius: 'lg',
    shadow: 'lg',
    className: 'bg-gray-50 p-5 w-80'
  },
  render: (args) => <Card {...args}>Card</Card>,
};
