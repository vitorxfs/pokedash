export const pokemonListQuery = `
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
      base_experience
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;
