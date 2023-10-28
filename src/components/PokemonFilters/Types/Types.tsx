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
  const [optimistic, setOptimistic] = useState<{ type?: string, selected?: boolean }>({});

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
      setOptimistic({ type, selected: false });
      updatedSelected = removeByIndex(selectedTypes, index);
    } else {
      setOptimistic({ type, selected: true });
      updatedSelected = [...selectedTypes, type];
    }

    let params = searchParams.toString();

    params = removeSearchParam(params, 'page');

    if (!updatedSelected.length) {
      params = removeSearchParam(params, FIELDNAME)
    } else {
      params = addSearchParam(params, FIELDNAME, updatedSelected);
    }

    const url = [path, params].join('?');

    router.replace(url, { scroll: false });
  }, [path, router, searchParams, selectedTypes]);

  return (
    <PokemonFilterCard title="types">
      <div className="flex flex-wrap gap-4 justify-center">
        {items.map((item: PokemonType) => {
          const optimisticSelected = optimistic.selected;
          const isSelected = optimistic.type === item ? optimisticSelected : selectedTypes.includes(item);

          return (
            <button
              key={item}
              aria-label={`${item} type filter ${isSelected ? 'selected' : ''} `}
              onClick={() => onToggleFilter(item)}
              data-selected={isSelected}
              className={twMerge(
                'rounded-full w-11 h-11 flex items-center justify-center',
                classes.item,
              )}
            >
              <PokemonTypeIcon size="md" type={item}/>
            </button>
          );
        })}
      </div>
    </PokemonFilterCard>
  );
};

export default PokemonTypesFilter;
