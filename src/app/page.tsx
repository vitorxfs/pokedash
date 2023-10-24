import { Metadata } from 'next';
import { Suspense } from 'react';

import { PageProps } from '@/lib/next/page';
import { usePokemonList } from '@/hooks/usePokemonList';
import PokemonList from '@/layout/PokemonList';
import PokemonSearch from '@/layout/PokemonSearch';

export const metadata: Metadata = {
  title: 'Index Page',
}

export default function Home ({ searchParams }: PageProps) {
  return (
    <main>
      <PokemonSearch />
      <Suspense fallback="loading...">
        <PokemonList searchParams={searchParams} />
      </Suspense>
    </main>
  );
};
