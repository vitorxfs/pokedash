import { describe, it, expect } from 'vitest';

import { MOCKED_POKEMON_RESULT, MockGraphQLClient } from './pokemon-client-adapter.mock';
import { PokemonClient } from '@/lib/clients/pokemon.client';
import PokeAPIGraphqlClientAdapter from '@/lib/clients/pokeapi-graphql-adapter/pokeapi-graphql.adapter';

const pokemonClient: PokemonClient = new PokeAPIGraphqlClientAdapter({ graphqlClient: new MockGraphQLClient() });

describe('PokeAPI Graphql Client Adapter', () => {
  describe('getPokemons', () => {
    it('fetches pokemons', async () => {
      const pokemons = await pokemonClient.getPokemons({});

      expect(pokemons).toMatchObject([MOCKED_POKEMON_RESULT])
    });
  });
});
