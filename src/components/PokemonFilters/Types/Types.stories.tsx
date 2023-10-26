import type { Meta, StoryObj } from '@storybook/react';

import { PokemonTypesFilter, PokemonTypesFilterProps } from './Types';

const meta: Meta<PokemonTypesFilterProps> = {
  component: PokemonTypesFilter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PokemonTypesFilterProps>;


export const Types: Story = {
  args: {},
  render: (args) => <PokemonTypesFilter {...args} />,
};
