import type { Meta, StoryObj } from '@storybook/react';

import * as Select from '.';

const meta: Meta<Select.RootProps> = {
  component: Select.Root,
  title: 'Components/Select',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<{
  placeholder: string;
}>;

const items = [
  { title: 'Item1', value: 'item1' },
  { title: 'Item2', value: 'item2' },
  { title: 'Item3', value: 'item3' },
  { title: 'Item4', value: 'item4' },
  { title: 'Item5', value: 'item5' },
]


export const Primary: Story = {
  args: {
    placeholder: 'Select'
  },
  render: (args) => (
    <Select.Root>
      <Select.Trigger placeholder={args.placeholder} ariaLabel="select" />
      <Select.Content items={items} />
    </Select.Root>
  ),
};
