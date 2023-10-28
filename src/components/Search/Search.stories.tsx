import type { Meta, StoryObj } from '@storybook/react';

import Search, { SearchProps } from './Search';

const meta: Meta<SearchProps> = {
  component: Search,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SearchProps>;


export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
  render: (args) => <Search {...args} />
};
