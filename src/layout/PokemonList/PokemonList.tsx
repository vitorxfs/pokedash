import PokemonCard from '@/components/PokemonCard';
import PokemonType from '@/data-types/types';
import { PokemonList } from '@/lib/clients/pokemon.client';

interface PokemonListProps {
  pokemons: PokemonList[]
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div className='grid md:grid-cols-5 gap-4 mt-10'>
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
