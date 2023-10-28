import type { Meta, StoryObj } from '@storybook/react';

import PokemonTypeIcon, { PokemonTypeIconProps } from './PokemonTypeIcon';

const meta: Meta<PokemonTypeIconProps> = {
  component: PokemonTypeIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PokemonTypeIconProps>;


export const Default: Story = {
  args: {
    type: 'normal',
    size: 'md',
  },
  render: (args) => <PokemonTypeIcon {...args} />
};
