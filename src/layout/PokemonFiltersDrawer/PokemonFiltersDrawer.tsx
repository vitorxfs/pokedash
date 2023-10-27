'use client'

import React from 'react';

import * as Drawer from '@/components/Drawer';
import IconButton from '@/components/IconButton';
import PokemonFilters from '../PokemonFilters';

export interface PokemonFiltersDrawerProps { }

export const PokemonFiltersDrawer: React.FC<PokemonFiltersDrawerProps> = ({}) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <IconButton
          name="filter"
          className="fixed top-4 right-4 md:hidden bg-white shadow-lg z-10"
          ariaLabel="open filters"
        />
      </Drawer.Trigger>
      <Drawer.Content side="right">
        <Drawer.Close>
          <IconButton name="close" ariaLabel="close filters"/>
        </Drawer.Close>
        <PokemonFilters className="w-full mt-8"/>
      </Drawer.Content>
    </Drawer.Root>
  );
};

PokemonFiltersDrawer.defaultProps = {};

export default PokemonFiltersDrawer;
