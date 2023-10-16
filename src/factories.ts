import GraphQLRequestClient, { GraphQLClient } from './lib/clients/graphql.client';
import PokeAPIGraphqlClientAdapter from './lib/clients/pokeapi-graphql-adapter/pokeapi-graphql.adapter';
import { PokemonClient } from './lib/clients/pokemon.client';

let graphqlClient: GraphQLClient;
export const getGraphqlClient = () => {
  if (graphqlClient) {
    return graphqlClient;
  }

  graphqlClient = new GraphQLRequestClient();
  return graphqlClient;
}

export const getPokemonClientAdapter = () => {
  return new PokeAPIGraphqlClientAdapter({
    graphqlClient: getGraphqlClient(),
  });
}

let pokemonClient: PokemonClient;
export const getPokemonClient = () => {
  if (pokemonClient) {
    return pokemonClient;
  }

  pokemonClient = getPokemonClientAdapter();
  return pokemonClient;
}
