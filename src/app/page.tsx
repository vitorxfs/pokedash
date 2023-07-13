import { Metadata } from 'next';

import { PageProps } from '@/lib/next/page';
import { usePokemonList } from '@/hooks/usePokemonList';

export const metadata: Metadata = {
  title: 'Index Page',
}

export const Home = async ({ searchParams }: PageProps) => {
  const pokemons = await usePokemonList({ filters: searchParams });

  return (
    <pre>
      {JSON.stringify(pokemons, null, 2)}
    </pre>
  );
};

export default Home;
