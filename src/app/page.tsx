import { Metadata } from 'next';
import { Suspense } from 'react';

import { PageProps } from '@/lib/next/page';
import { usePokemonList } from '@/hooks/usePokemonList';
import PokemonList from '@/layout/PokemonList';
import { WEBSITE_URL } from '@/env';
import { buildUrl } from '@/helpers/url.helper';

export const metadata: Metadata = {
  title: 'Index Page',
}

export const Home = async ({ searchParams }: PageProps) => {
  const pokemons = await usePokemonList(searchParams);

  return (
    <main>
      <Suspense>
        <PokemonList pokemons={pokemons} />
      </Suspense>
    </main>
  );
};

export default Home;

export const revalidate = 1;
