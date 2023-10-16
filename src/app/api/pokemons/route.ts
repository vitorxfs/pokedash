import { getPokemonClient } from '@/factories';
import { isNil, omitBy } from 'lodash';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const searchParamsSchema = z.object({
  filters: z.object({
    name: z.string().optional(),
  }).optional(),
  limit: z.number().optional().default(10),
  offset: z.number().optional().default(0),
  orderBy: z.record(
    z.string(),
    z.literal('asc').or(z.literal('desc'))
  ).optional(),
})

export async function GET(req: NextRequest) {
  const pokemonClient = getPokemonClient();
  const searchParams = req.nextUrl.searchParams;

  const params = searchParamsSchema.parse(omitBy({
    filters: JSON.parse(searchParams.get('filters') || ''),
    limit: searchParams.get('limit') ? Number(searchParams.get('limit')) : undefined,
    offset: searchParams.get('offset') ? Number(searchParams.get('offset')) : undefined,
    orderBy: searchParams.get('orderBy'),
  }, isNil));

  const pokemons = await pokemonClient.getPokemons(params);

  return NextResponse.json({ pokemons });
}

export const revalidate = 30; //60 * 60 * 5; // 5 hours
