import React from 'react';

import Typography from '@/components/Typography';

export interface PokemonFilterCardProps {
  children: React.ReactNode;
  title: string;
}

export const PokemonFilterCard: React.FC<PokemonFilterCardProps> = ({ children, title }) => {
  return (
    <div className="bg-white w-full p-5 pb-8 shadow-xl rounded-2xl flex flex-col justify-center gap-6">
      <Typography
        tag="p"
        size="md"
        className="text-gray-500 text-center uppercase font-bold tracking-[.3em]"
      >
        {title}
      </Typography>
      {children}
    </div>
  );
};

export default PokemonFilterCard;
