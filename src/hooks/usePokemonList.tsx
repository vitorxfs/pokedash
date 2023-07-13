import { omitBy, isNil } from 'lodash';

import { POKEAPI_BASE_URL } from '@/env';
import GraphQLRequestClient from '@/lib/clients/graphql.client';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
}

interface PokemonFilters {
  name?: string;
}

interface usePokemonListAttr {
  filters?: PokemonFilters;
  limit?: number;
  offset?: number;
  orderBy?: Record<string, 'asc' | 'desc'>;
}

const query = `
  query samplePokeAPIquery(
    $limit: Int,
    $offset: Int,
    $orderBy: [pokemon_v2_pokemon_order_by!],
    $where: pokemon_v2_pokemon_bool_exp
  ) {
    pokemon_v2_pokemon(
      limit: $limit,
      offset: $offset,
      order_by: $orderBy,
      where: $where,
    ) {
      name
      id
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

const buildWhereClause = (filters: PokemonFilters) => {
  return omitBy({
    name: {_ilike: `%${filters?.name}%`},
  }, isNil);
}

const buildPokemonList = (pokemons: any): Pokemon[] => {
  return pokemons.pokemon_v2_pokemon.map((pokemon: any) => ({
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.pokemon_v2_pokemontypes.map((type: any) =>
      type.pokemon_v2_type.name)
  }))
}

export const usePokemonList = async ({
  filters = {},
  limit = 10,
  offset = 0,
  orderBy = { name: 'asc' },
}: usePokemonListAttr): Promise<Pokemon[]> => {
  const where = buildWhereClause(filters);

  const graphQlClient = new GraphQLRequestClient(POKEAPI_BASE_URL);

  const response = await graphQlClient.request(query, {
    limit,
    offset,
    orderBy,
    where
  });

  return buildPokemonList(response);
}
