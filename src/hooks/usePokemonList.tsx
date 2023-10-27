import { omitBy, isNil } from 'lodash';

import { buildUrl } from '@/helpers/url.helper';
import { POKEMON_LIST_LIMIT, WEBSITE_URL } from '@/env';
import { PokemonList, PokemonListFilters } from '@/lib/clients/pokemon.client';

interface PokemonListQueryParams {
  filters: string;
  limit?: number;
  offset?: number;
  orderBy?: string;
}

export const usePokemonList = async (params: Record<string, string | string[] | undefined>): Promise<PokemonList> => {
  const url = buildUrl(WEBSITE_URL, '/api/pokemons', buildQueryParams(params));

  const { count, pokemons } = await (await fetch(url)).json();

  return { count, pokemons };
}

const buildQueryParams = (params: Record<string, any>): PokemonListQueryParams => {
  const filters: PokemonListFilters = {
    name: params.name,
    types: params.types?.split(','),
  }

  const [ orderBy, order ] = params.orderBy ? params.orderBy.split('/') : ['id'];

  const page = params.page || 1

  return {
    filters: JSON.stringify(omitBy(filters, isNil)),
    limit: POKEMON_LIST_LIMIT,
    offset: POKEMON_LIST_LIMIT * (page-1),
    orderBy: JSON.stringify({ [orderBy]: order || 'asc' }),
  };
}

export default usePokemonList;
