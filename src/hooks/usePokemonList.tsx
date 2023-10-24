import { omitBy, isNil } from 'lodash';

import { buildUrl } from '@/helpers/url.helper';
import { PokemonList, PokemonListFilters } from '@/lib/clients/pokemon.client';
import { WEBSITE_URL } from '@/env';

interface PokemonListQueryParams {
  filters: string;
  limit?: number;
  offset?: number;
  orderBy?: string;
}

export const usePokemonList = async (params: Record<string, string | string[] | undefined>): Promise<PokemonList[]> => {
  const url = buildUrl(WEBSITE_URL, '/api/pokemons', buildQueryParams(params));

  const { pokemons } = await (await fetch(url)).json();

  return pokemons;
}

const buildQueryParams = (params: Record<string, any>): PokemonListQueryParams => {
  const filters: PokemonListFilters = {
    name: params.name,
  }

  const [ orderBy, order ] = params.orderBy ? params.orderBy.split('/') : ['id'];

  return {
    filters: JSON.stringify(omitBy(filters, isNil)),
    limit: params.limit || 12,
    offset: params.offset || 0,
    orderBy: JSON.stringify({ [orderBy]: order || 'asc' }),
  };
}

export default usePokemonList;
