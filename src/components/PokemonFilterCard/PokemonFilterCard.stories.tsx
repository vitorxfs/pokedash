import type { Meta, StoryObj } from '@storybook/react';

import { PokemonFilterCard, PokemonFilterCardProps } from './PokemonFilterCard';

const meta: Meta<PokemonFilterCardProps> = {
  component: PokemonFilterCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PokemonFilterCardProps>;


export const Primary: Story = {
  args: {
    title: 'sort by'
  },
  render: (args) => <PokemonFilterCard {...args}><input type="text"/></PokemonFilterCard>,
};
