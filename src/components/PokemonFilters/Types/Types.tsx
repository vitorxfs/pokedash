"use client"

import React, { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { twMerge } from 'tailwind-merge';

import { addSearchParam, removeSearchParam } from '@/helpers/url.helper';
import { removeByIndex } from '@/helpers/array.helper';
import PokemonFilterCard from '@/components/PokemonFilterCard';
import PokemonType from '@/data-types/types';
import PokemonTypeIcon from '@/components/PokemonTypeIcon';

import classes from './types.module.scss';

const FIELDNAME = 'types';

const items: PokemonType[] = [
  'bug',
  'dark',
  'dragon',
  'electric',
  'fairy',
  'fighting',
  'fire',
  'flying',
  'ghost',
  'grass',
  'ground',
  'ice',
  'normal',
  'poison',
  'psychic',
  'rock',
  'steel',
  'water',
];

export interface PokemonTypesFilterProps { }

export const PokemonTypesFilter: React.FC<PokemonTypesFilterProps> = ({}) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();

  useEffect(() => {
    const paramValue = searchParams.get(FIELDNAME);

    if (paramValue == null) {
      setSelectedTypes([]);
    } else {
      setSelectedTypes(paramValue.split(','));
    }
  }, [searchParams]);

  const onToggleFilter = useCallback((type: string) => {
    let updatedSelected;

    const index = selectedTypes.findIndex((v) => v === type);
    const isSelected = index !== -1;

    if (isSelected) {
      updatedSelected = removeByIndex(selectedTypes, index);
    } else {
      updatedSelected = [...selectedTypes, type];
    }

    let params = '';
    if (!updatedSelected.length) {
      params = removeSearchParam(searchParams.toString(), FIELDNAME)
    } else {
      params = addSearchParam(searchParams.toString(), FIELDNAME, updatedSelected);
    }

    const url = [path, params].join('?');

    router.replace(url, { scroll: false });
  }, [path, router, searchParams, selectedTypes]);

  return (
    <PokemonFilterCard title="types">
      <div className="flex flex-wrap gap-4 justify-center">
        {items.map((item: PokemonType) => (
          <button
            key={item}
            aria-label={`filter by ${item} type`}
            onClick={() => onToggleFilter(item)}
            data-selected={selectedTypes.includes(item)}
            className={twMerge(
              'rounded-full w-11 h-11 flex items-center justify-center',
              classes.item,
            )}
          >
            <PokemonTypeIcon size="md" type={item}/>
          </button>
        ))}
      </div>
    </PokemonFilterCard>
  );
};

export default PokemonTypesFilter;
