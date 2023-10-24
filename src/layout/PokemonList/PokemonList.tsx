import { PokemonList } from '@/lib/clients/pokemon.client';
import PokemonCard from '@/components/PokemonCard';
import PokemonType from '@/data-types/types';
import usePokemonList from '@/hooks/usePokemonList';

interface PokemonListProps {
  searchParams: Record<string, string | string[] | undefined>;
}

const PokemonList = async ({ searchParams }: PokemonListProps) => {
  const pokemons = await usePokemonList(searchParams);

  return (
    <div className='grid md:grid-cols-3 gap-4 mt-10'>
      {pokemons.map((pokemon: PokemonList, i) => (
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
  );
}

export default PokemonList;
