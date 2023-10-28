"use client"

import React, { useCallback, useEffect, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import PokemonFilterCard from '@/components/PokemonFilterCard';
import * as Select from '@/components/Select';
import { addSearchParam, removeSearchParam } from '@/helpers/url.helper';

const FIELDNAME = 'orderBy';

const items = [
  { title: 'Select Attribute', value: 'id' },
  { title: 'Name', value: 'name' },
  { title: 'Base Experience ASC', value: 'base_experience/asc' },
  { title: 'Base Experience DESC', value: 'base_experience/desc' }
]

export interface PokemonSortByFilterProps { }

export const PokemonSortByFilter: React.FC<PokemonSortByFilterProps> = ({}) => {
  const [value, setValue] = useState<string>('id');

  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();

  useEffect(() => {
    setValue(searchParams.get(FIELDNAME) || 'id');
  }, [searchParams]);

  const onChange = useCallback((val: string) => {
    let params = searchParams.toString();

    params = removeSearchParam(params, 'page');

    if (val === 'id') {
      params = removeSearchParam(params, FIELDNAME);
    } else {
      params = addSearchParam(params, FIELDNAME, val);
    }

    const url = [path, params].join('?');

    router.replace(url);
  }, [path, router, searchParams]);

  return (
    <PokemonFilterCard title="sort by">
      <Select.Root value={value} onChange={onChange}>
        <Select.Trigger ariaLabel='select attribute to sort by'/>
        <Select.Content items={items} />
      </Select.Root>
    </PokemonFilterCard>
  );
};

export default PokemonSortByFilter;
