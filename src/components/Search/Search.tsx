"use client"

import React, { useCallback, useEffect, useState } from 'react';
import Icon from '../Icon/Icon';

export interface SearchProps {
  onSubmit: (query: string) => void;
  placeholder?: string;
  value?: string
}

export const Search: React.FC<SearchProps> = ({ onSubmit: submit, placeholder, value }: SearchProps) => {
  const [searchField, setSearchField] = useState<string>('');
  const onChangeSearchField: React.ChangeEventHandler<HTMLInputElement> =
    (e) => { setSearchField(e.target.value) }

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    submit(searchField || '');
  }, [searchField, submit]);

  useEffect(() => {
    setSearchField(value || '');
  }, [value]);

  return (
    <form onSubmit={onSubmit} className="h-12 flex items-center border rounded-full">
      <input
        type="text"
        placeholder={placeholder}
        value={searchField}
        onChange={onChangeSearchField}
        className="w-full h-full text-lg py-3 px-4 rounded-l-full rounded-r-none"
        aria-label="search field"
      />
      <button type="submit" className="pl-4 pr-5 h-full bg-gray-200 rounded-r-full" aria-label="search">
        <Icon name="search" size='sm' className="text-slate-700"/>
      </button>
    </form>
  );
};

export default Search;
