import { isNil, omitBy } from 'lodash';

import { GraphQLClient } from '@/lib/clients/graphql.client';
import { POKEAPI_BASE_URL, POKEAPI_SPRITE_BASE_URL } from '@/env';
import {
  PokemonClient,
  PokemonList,
  PokemonListFilters,
  GetPokemonsAttr,
  Pokemon,
} from '@/lib/clients/pokemon.client';
import { pokemonListQuery } from './queries';

interface PokeAPIGraphqlClientAdapterDependencies {
  graphqlClient: GraphQLClient;
}

class PokeAPIGraphqlClientAdapter implements PokemonClient {
  private graphqlClient: GraphQLClient;

  constructor ({ graphqlClient }: PokeAPIGraphqlClientAdapterDependencies) {
    this.graphqlClient = graphqlClient;
  }

  async getPokemons({
    filters = {},
    limit = 10,
    offset = 0,
    orderBy,
  }: GetPokemonsAttr): Promise<PokemonList> {
    const where = this.buildWhereClause(filters);

    const response = await this.graphqlClient.request(POKEAPI_BASE_URL, pokemonListQuery, omitBy({
      limit,
      offset,
      orderBy,
      where
    }, isNil));

    return {
      pokemons: this.buildPokemonList(response),
      count: response.pokemon_v2_pokemon_aggregate.aggregate.count,
    };
  }

  private buildWhereClause(filters: PokemonListFilters): Record<string, any> {
    return omitBy({
      name: filters.name ? { _ilike: `%${filters?.name}%` } : undefined,
      'pokemon_v2_pokemontypes': filters.types ? { 'pokemon_v2_type': { name: { _regex: filters.types.join('|') } } }: undefined,
    }, isNil);
  }

  private buildPokemonList(pokemons: any): Pokemon[] {
    return pokemons.pokemon_v2_pokemon.map((pokemon: any): Pokemon => ({
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.pokemon_v2_pokemontypes.map((type: any) =>
        type.pokemon_v2_type.name),
      exp: pokemon['base_experience'],
      spriteUrl: this.buildImageUrl(pokemon.id),
    }))
  }

  private buildImageUrl(id: number): string {
    return [
      POKEAPI_SPRITE_BASE_URL,
      `${id}.png`
    ].join('/');
  }
}

export default PokeAPIGraphqlClientAdapter;
