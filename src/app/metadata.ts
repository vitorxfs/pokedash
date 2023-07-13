import { WEBSITE_URL } from '@/env';
import { Metadata } from 'next';
import { defaultConfig } from 'next/dist/server/config-shared';

const defaultData = {
  title: 'PokéDash',
  description: 'A Pokémon Dashboard',
  url: WEBSITE_URL,
  images: [
    {
      url: 'og.png',
      alt: 'Og Image Alt',
      type: 'image/png',
    }
  ],
  creatorName: 'Vitor Sanches',
};

const metadata: Metadata = {
  title: defaultData.title,
  description: defaultData.description,
  abstract: 'A Pokémon Dashboard',
  creator: defaultConfig.creatorName,
  keywords: ['keyword'],
  twitter: {
    creator: '@vitorsnx',
    description: defaultData.description,
    images: defaultData.images,
    title: defaultData.title,
  },
  openGraph: {
    description: defaultData.description,
    images: defaultData.images,
    title: defaultData.title,
    url: defaultData.url,
  }
};

export default metadata;
