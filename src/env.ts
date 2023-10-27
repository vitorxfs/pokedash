// #region Public Keys
export const GOOGLE_ANALYTICS_KEY = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY;
export const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL || 'http://localhost:3000';
export const POKEMON_LIST_LIMIT = process.env.NEXT_PUBLIC_POKEMON_LIST_LIMIT ? Number(process.env.NEXT_PUBLIC_POKEMON_LIST_LIMIT) : 18;
// #endregion Public Keys

// #region Private Keys
export const POKEAPI_BASE_URL = process.env.POKEAPI_BASE_URL || 'https://beta.pokeapi.co/graphql/v1beta';
export const POKEAPI_SPRITE_BASE_URL = process.env.POKEAPI_SPRITE_BASE_URL || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
// #endregion Private Keys
