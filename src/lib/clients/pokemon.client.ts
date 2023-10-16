export interface PokemonList {
  id: number;
  name: string;
  types: string[];
  spriteUrl: string;
  exp: number;
}

export interface PokemonListFilters {
  name?: string;
}

export interface GetPokemonsAttr {
  filters?: PokemonListFilters;
  limit?: number;
  offset?: number;
  orderBy?: Record<string, 'asc' | 'desc'>;
}

export interface PokemonClient {
  getPokemons(attr: GetPokemonsAttr): Promise<PokemonList[]>;
}
