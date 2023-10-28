import type { Meta, StoryObj } from '@storybook/react';

import { PokemonCard, PokemonCardProps } from './PokemonCard';

const meta: Meta<PokemonCardProps> = {
  component: PokemonCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PokemonCardProps>;


export const Default: Story = {
  args: {
    exp: 3200,
    name: 'Charizard',
    types: ['fire'],
    className: 'w-[200px]',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    hoverEffects: true,
    activeEffects: true,
  },
  render: (args) => <PokemonCard {...args}>PokemonCard</PokemonCard>,
};
