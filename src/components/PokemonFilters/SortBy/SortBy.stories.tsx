import type { Meta, StoryObj } from '@storybook/react';

import { PokemonSortByFilter, PokemonSortByFilterProps } from './SortBy';

const meta: Meta<PokemonSortByFilterProps> = {
  component: PokemonSortByFilter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PokemonSortByFilterProps>;


export const SortBy: Story = {
  args: {
  },
  render: (args) => <PokemonSortByFilter {...args} />,
};
