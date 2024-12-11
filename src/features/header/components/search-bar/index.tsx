import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchMeals from '@/redux/gateways';
import { setCurrentPage } from '@/redux/mealsSlice';
import { debounce } from 'lodash';
import { AppDispatch } from '@/redux/store';

import './index.scss';

const debouncedFetchMeals = debounce((search: string, dispatch: AppDispatch) => {
  dispatch(fetchMeals(search));
}, 1700);

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = e.target.value;
    setSearchText(value);
    dispatch(setCurrentPage(1));

    if (value === '') {
      dispatch(fetchMeals(''));
    } else {
      debouncedFetchMeals(value, dispatch);
    }
  };

  useEffect(() => {
    if (searchText) {
      debouncedFetchMeals(searchText, dispatch);
    }
    return () => {
      debouncedFetchMeals.cancel();
    };
  }, [searchText, dispatch]);

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchText}
          onChange={handleInputChange}
          className="search-bar__input"
        />
      </div>
    </div>
  );
};

export default SearchBar;
