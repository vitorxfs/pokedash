import React, { Suspense } from 'react';
import { twMerge } from 'tailwind-merge';

import Image from '@/lib/components/Image';
import PokemonType from '@/data-types/types';
import PokemonTypeIcon from '@/components/PokemonTypeIcon';
import Typography from '@/components/Typography';
import { pokemonNameFormat } from '@/helpers/pokemon.helper';
import DefaultImage from './DefaultImage';

export interface PokemonCardProps {
  className?: string;
  name: string;
  types: PokemonType[];
  exp: number;
  img: string;
  hoverEffects?: boolean;
  activeEffects?: boolean;
}

export const PokemonCard = ({ className, name, types, exp, img, hoverEffects=false, activeEffects=false }: PokemonCardProps) => {
  return (
    <div
      className={twMerge(
        'bg-white',
        'relative flex flex-col items-center',
        'w-full px-4 pb-3 pt-[50px] mt-[50px]',
        'rounded-2xl shadow-md',
        'transition-all duration-400',
        'outline-purple-300 outline-[16px]',
        ...[hoverEffects ? 'hover:shadow-xl' : ''],
        ...[activeEffects ? 'active:shadow-md cursor-pointer' : ''],
        className
      )}
      tabIndex={0}
    >
      <Image
        src={img}
        width={100} height={100}
        alt={`${name} sprite`}
        className="absolute top-[-50px]"
        loading="lazy"
        placeholder="blur"
        blurDataURL="/assets/placeholders/ditto.svg"
      />

      <Typography tag='p' size="lg" className="text-center mb-2 font-medium text-zinc-700 capitalize">
        {pokemonNameFormat(name)}
      </Typography>

      <div className="flex w-full justify-between items-center">
        <Typography tag='p' size="xs" className='text-teal-500 opacity-80 font-extrabold'>
          <span aria-label='Experience level' className="text-neutral-400">EXP</span> {exp}
        </Typography>

        <span className="flex gap-1">
          {types.map((type) => (
            <PokemonTypeIcon key={type} type={type} size="sm" />
          ))}
        </span>
      </div>
    </div>
  )
}

export default PokemonCard;
