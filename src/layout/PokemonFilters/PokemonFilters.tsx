import React from 'react';

import * as Filters from '@/components/PokemonFilters';
import Typography from '@/components/Typography';

export interface PokemonFiltersProps {
  className?: string;
}

export const PokemonFilters: React.FC<PokemonFiltersProps> = ({ className }) => {
  return (
    <section className={className}>
      <Filters.SortBy />
    </section>
  );
};

export default PokemonFilters;
