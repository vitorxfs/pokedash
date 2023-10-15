import type { Meta, StoryObj } from '@storybook/react';

import { Icon, IconProps } from './Icon';

const meta: Meta<IconProps> = {
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: 'Defines which icon to render',
    },
    alt: {
      description: 'Defines aria-label to svg. Defaults to empty string.'
    }
  }
};

export default meta;
type Story = StoryObj<IconProps>;


export const Primary: Story = {
  args: {
    size: 'md',
    name: 'search',
  },
  render: (args) => <Icon {...args} />,
};
