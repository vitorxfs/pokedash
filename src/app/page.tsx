import { Metadata } from 'next';
import { Suspense } from 'react';

import { PageProps } from '@/lib/next/page';
import PokemonList from '@/layout/PokemonList';
import PokemonSearch from '@/layout/PokemonSearch';
import PokemonFilters from '@/layout/PokemonFilters';
import Image from '@/lib/components/Image';

export const metadata: Metadata = {
  title: 'Pokémons - Pokédash',
}

export default function Home ({ searchParams }: PageProps) {
  return (
    <div className="max-w-[1200px] px-4 mx-auto mt-20 grid grid-flow-row grid-cols-12 gap-8">
      <div className="lg:col-span-3 md:col-span-4 hidden md:flex flex-col items-center ">
        <Image src="assets/logo.svg" alt="Pokédash logo" width={180} height={100} />
        <PokemonFilters className="w-full mt-[95px]"/>
      </div>
      <main className="lg:col-span-9 md:col-span-8 col-span-12">
        <PokemonSearch />
        <Suspense fallback="loading...">
          <PokemonList searchParams={searchParams} />
        </Suspense>
      </main>
    </div>
  );
};
