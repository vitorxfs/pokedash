import { GraphQLClient } from '@/lib/clients/graphql.client'

export class MockGraphQLClient implements GraphQLClient {
  request(url: string, query: string, variables?: Record<string, any> | undefined, headers?: Record<string, string> | undefined): Promise<any> {
    return Promise.resolve({
      'pokemon_v2_pokemon_aggregate': {
        aggregate: { count: 1 },
      },
      'pokemon_v2_pokemon': [
        {
          name: 'bulbasaur',
          id: 1,
          base_experience: 64,
          'pokemon_v2_pokemontypes': [
            {
              id: 1,
              'pokemon_v2_type': {
                name: 'grass'
              }
            },
            {
              id: 2,
              'pokemon_v2_type': {
                name: 'poison'
              }
            }
          ]
        }
      ]
    })
  }
}

export const MOCKED_POKEMON_RESULT = {
  pokemons: [{
    id: 1,
    name: 'bulbasaur',
    types: ['grass', 'poison'],
    exp: 64,
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  }],
  count: 1,
}
