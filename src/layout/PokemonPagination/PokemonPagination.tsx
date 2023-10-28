"use client"

import React, { useCallback, useEffect, useState } from 'react';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import { removeSearchParam, addSearchParam } from '@/helpers/url.helper';
import Pagination from '@/components/Pagination';

const FIELDNAME = 'page';

export interface PokemonPaginationProps {
  total: number;
  limit: number
}

export const PokemonPagination: React.FC<PokemonPaginationProps> = ({
  total,
  limit,
}) => {
  const totalPages = Math.ceil(total / limit);

  const [page, setPage] = useState<number>(1);

  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();

  useEffect(() => {
    const newPage = searchParams.get(FIELDNAME);
    setPage(newPage ? Number(newPage) : 1);
  }, [searchParams]);

  const onChange = useCallback((p: number) => {
    let params;

    if (p === 1) {
      params = removeSearchParam(searchParams.toString(), FIELDNAME);
    } else {
      params = addSearchParam(searchParams.toString(), FIELDNAME, p);
    }

    const url = [path, params].join('?');

    router.replace(url, { scroll: true });
  }, [path, router, searchParams]);

  return (
    <>
      {totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} onChange={onChange}/>
      )}
    </>
  );
};

export default PokemonPagination;
