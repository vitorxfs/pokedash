import * as icons from './icons';
import PokemonType from '@/data-types/types'
import SvgIcon, { SvgIconProps } from '@/components/SvgIcon';

const colorByType: Record<PokemonType, string> = {
  bug: 'text-green-700',
  dark: 'text-gray-900',
  dragon: 'text-indigo-600',
  electric: 'text-yellow-500',
  fairy: 'text-pink-400',
  fighting: 'text-red-500',
  fire: 'text-orange-600',
  flying: 'text-sky-400',
  ghost: 'text-violet-600',
  grass: 'text-lime-500',
  ground: 'text-amber-900',
  ice: 'text-cyan-500',
  normal: 'text-neutral-500',
  poison: 'text-fuchsia-600',
  psychic: 'text-purple-600',
  rock: 'text-stone-600',
  steel: 'text-zinc-600',
  water: 'text-blue-500',
}

export interface PokemonTypeIconProps extends Pick<SvgIconProps, 'size'> {
  type?: PokemonType;
}

const PokemonTypeIcon = ({ type='normal', size }: PokemonTypeIconProps) => {
  const Path = icons[type] as any;
  return (
    <div className={colorByType[type]} aria-label={`type ${type}`}>
      <SvgIcon size={size} viewBoxSize={512}>
        <Path />
      </SvgIcon>
    </div>
  )
}

export default PokemonTypeIcon;
