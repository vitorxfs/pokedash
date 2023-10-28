import type { Meta, StoryObj } from '@storybook/react';

import Tooltip, { TooltipProps } from './Tooltip';

const meta: Meta<TooltipProps> = {
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TooltipProps>;


export const Default: Story = {
  args: {
    content: 'World',
  },
  render: (args) => (
    <Tooltip {...args}><span>Hello</span></Tooltip>
  ),
}

export const ElementContent: Story = {
  args: {
    content: <strong>World</strong>,
  },
  render: (args) => (
    <Tooltip {...args}><span>Hello</span></Tooltip>
  ),
}
