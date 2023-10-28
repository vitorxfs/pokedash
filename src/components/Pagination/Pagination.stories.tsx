import type { Meta, StoryObj } from '@storybook/react';

import Pagination, { PaginationProps } from './Pagination';

const meta: Meta<PaginationProps> = {
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PaginationProps>;


export const Default: Story = {
  args: {
    page: 3,
    totalPages: 10,
  },
  render: (args) => <Pagination {...args} />
};
