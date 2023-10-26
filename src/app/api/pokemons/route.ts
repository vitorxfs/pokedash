import { isNil, omitBy } from 'lodash';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

import { getPokemonClient } from '@/factories';

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
    orderBy: JSON.parse(searchParams.get('orderBy') || ''),
  }, isNil));

  const { count, pokemons } = await pokemonClient.getPokemons(params);

  return NextResponse.json({ count, pokemons });
}

export const revalidate = 'force-cache';
