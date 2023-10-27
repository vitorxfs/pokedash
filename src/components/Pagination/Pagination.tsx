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

    if (totalPages !== 3) { return p; }

    if (page === 1) {
      return [...p, 3]
    }

    if (page === 3) {
      return [1, ...p];
    }

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

  if (totalPages === 1) {
    return <></>;
  }

  return (
    <div className="flex gap-1">
      {page !== 1 && <Navigation ariaLabel="go to last page" direction="backward" onClick={onBackward} />}
      {totalPages > 3 && page >= 3 && (
        <>
          <PageNumber
            ariaLabel={`go to first page`}
            onClick={onFirst}
          >1</PageNumber>
          <span className="mt-3 mx-2">...</span>
        </>
      )}
      {pages.map((p) => (
        <PageNumber
          onClick={() => onClick(p)}
          current={page === p}
          key={p}
          ariaLabel={`${page === p ? 'current: page' + p : 'go to page' + p}`}
        >
          {p}
        </PageNumber>
      ))}
      {totalPages > 3 && page < totalPages - 1 && (
        <>
          <span className="mt-3 mx-2">...</span>
          <PageNumber
            onClick={onLast}
            ariaLabel={`go to last page ${totalPages}`}
          >{totalPages}</PageNumber>
        </>
      )}
      {page !== totalPages && <Navigation ariaLabel="go to next page" direction="forward" onClick={onForward}/>}
    </div>
  );
};

const PageNumber = ({
  children,
  current=false,
  onClick=() => {},
  ariaLabel,
}: {
  children: React.ReactNode;
  current?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}) => {
  return (
    <button
      data-current={current}
      className={`
        data-[current=true]:bg-violet-600 data-[current=true]:text-white
        w-11 h-11 flex items-center justify-center rounded-full
        text-gray-800
        hover:bg-gray-200 transition-all`}
      onClick={() => onClick()}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

const Navigation = ({
  ariaLabel,
  direction,
  onClick=() => {}
}: {
  ariaLabel?: string;
  direction: 'backward' | 'forward';
  onClick?: () => void;
}) => {
  return (
    <button
      className={`
        w-11 h-11 flex items-center justify-center rounded-full
        text-gray-800
        hover:bg-gray-200 transition-all`}
      onClick={() => onClick()}
      aria-label={ariaLabel}
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
