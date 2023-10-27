import { POKEMON_LIST_LIMIT } from '@/env';
import PokemonCard from '@/components/PokemonCard';
import PokemonPagination from '../PokemonPagination';
import PokemonType from '@/data-types/types';
import type { Pokemon, PokemonList } from '@/lib/clients/pokemon.client';
import usePokemonList from '@/hooks/usePokemonList';

interface PokemonListProps {
  searchParams: Record<string, string | string[] | undefined>;
}

const PokemonList = async ({ searchParams }: PokemonListProps) => {
  const { pokemons, count } = await usePokemonList(searchParams);

  return (
    <div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10'>
        {pokemons.map((pokemon: Pokemon, i) => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            exp={pokemon.exp}
            types={pokemon.types as PokemonType[]}
            img={pokemon.spriteUrl}
            hoverEffects
          />
        ))}
      </div>
      <div className='flex justify-center mt-10 mb-16'>
        <PokemonPagination limit={POKEMON_LIST_LIMIT} total={count} />
      </div>
    </div>
  );
}

export default PokemonList;
