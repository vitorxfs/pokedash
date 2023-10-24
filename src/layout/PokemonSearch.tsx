"use client"

import Search from '@/components/Search';
import { addSearchParam, removeSearchParam } from '@/helpers/url.helper';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export interface PokemonSearchProps { }

export const PokemonSearch: React.FC<PokemonSearchProps> = ({}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();

  const value = searchParams.get('name') || undefined;

  const onSubmit = (query: string) => {
    let params;

    if (!query) {
      params = removeSearchParam(searchParams.toString(), 'name');
    } else {
      params = addSearchParam(searchParams.toString(), 'name', query);
    }

    const url = [path, params].join('?');

    router.replace(url);
  }

  return (<Search onSubmit={onSubmit} placeholder="Example: Charizard" value={value}/>);
};

export default PokemonSearch;
