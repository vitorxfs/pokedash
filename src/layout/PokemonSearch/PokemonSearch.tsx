"use client"

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { addSearchParam, removeSearchParam } from '@/helpers/url.helper';
import Search from '@/components/Search';

const FIELDNAME = 'name';

export interface PokemonSearchProps { }

export const PokemonSearch: React.FC<PokemonSearchProps> = ({}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();

  const value = searchParams.get(FIELDNAME) || undefined;

  const onSubmit = (query: string) => {
    let params;

    if (!query) {
      params = removeSearchParam(searchParams.toString(), FIELDNAME);
    } else {
      params = addSearchParam(searchParams.toString(), FIELDNAME, query);
    }

    const url = [path, params].join('?');

    router.replace(url);
  }

  return (<Search onSubmit={onSubmit} placeholder="Example: Charizard" value={value}/>);
};

export default PokemonSearch;
