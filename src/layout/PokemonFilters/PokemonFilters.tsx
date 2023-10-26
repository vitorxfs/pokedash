import React from 'react';

import { twMerge } from 'tailwind-merge';

import * as Filters from '@/components/PokemonFilters';
import Typography from '@/components/Typography';

export interface PokemonFiltersProps {
  className?: string;
}

export const PokemonFilters: React.FC<PokemonFiltersProps> = ({ className }) => {
  return (
    <section className={twMerge('flex flex-col gap-8', className)}>
      <Filters.SortBy />
      <Filters.Types />
    </section>
  );
};

export default PokemonFilters;
