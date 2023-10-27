"use client"

import React, { useCallback, useMemo } from 'react';

import Icon from '@/components/Icon';

export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onChange }) => {
  const pages = useMemo(() => {
    const p = [page-1, page, page+1].filter((i) => i > 0 && i <= totalPages);

    return p;
  }, [page, totalPages]);

  const onClick = useCallback((page: number) => {
    onChange(page);
  }, [onChange]);

  const onBackward = useCallback(() => {
    onChange(page - 1);
  }, [page, onChange]);

  const onForward = useCallback(() => {
    onChange(page + 1);
  }, [page, onChange]);

  const onLast = useCallback(() => {
    onChange(totalPages);
  }, [totalPages, onChange]);

  const onFirst = useCallback(() => {
    onChange(1);
  }, [onChange]);

  return (
    <div className="flex gap-1">
      {page !== 1 && <Navigation direction="backward" onClick={onBackward} />}
      {page >= 3 && (
        <>
          <PageNumber onClick={onFirst}>1</PageNumber>
          <span className="mt-3 mx-2">...</span>
        </>
      )}
      {pages.map((p) => <PageNumber onClick={() => onClick(p)} current={page === p} key={p}>{p}</PageNumber>)}
      {totalPages > 3 && page < totalPages - 1 && (
        <>
          <span className="mt-3 mx-2">...</span>
          <PageNumber onClick={onLast}>{totalPages}</PageNumber>
        </>
      )}
      {page !== totalPages && <Navigation direction="forward" onClick={onForward}/>}
    </div>
  );
};

const PageNumber = ({ children, current=false, onClick=() => {} }: { children: React.ReactNode, current?: boolean, onClick?: () => void }) => {
  return (
    <button
      data-current={current}
      className={`
        data-[current=true]:bg-violet-600 data-[current=true]:text-white
        w-11 h-11 flex items-center justify-center rounded-full
        text-gray-800
        hover:bg-gray-200 transition-all`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}

const Navigation = ({ direction, onClick=() => {} }: { direction: 'backward' | 'forward', onClick?: () => void }) => {
  return (
    <button
      className={`
        w-11 h-11 flex items-center justify-center rounded-full
        text-gray-800
        hover:bg-gray-200 transition-all`}
      onClick={() => onClick()}
    >
      {direction === 'backward' ? (
        <Icon name="chevron_left" />
      ) : (
        <Icon name="chevron_right" />
      )}
    </button>
  )
}

export default Pagination;
