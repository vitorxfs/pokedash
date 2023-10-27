import React from 'react';
import Link from 'next/link';

import { twMerge } from 'tailwind-merge';

import * as Filters from '@/components/PokemonFilters';

export interface PokemonFiltersProps {
  className?: string;
}

export const PokemonFilters: React.FC<PokemonFiltersProps> = ({ className }) => {
  return (
    <section className={twMerge('flex flex-col gap-8', className)}>
      <Filters.SortBy />
      <Filters.Types />
      <Link href="/" className="text-blue-600 underline uppercase text-center">Clear Filters</Link>
    </section>
  );
};

export default PokemonFilters;
