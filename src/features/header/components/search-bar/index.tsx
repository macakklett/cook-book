import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import fetchMeals from '@/redux/gateways';
import { setCurrentPage, selectMealsForCurrentPage } from '@/redux/mealsSlice';
import { debounce } from 'lodash';
import { RootState } from '@/redux/store';
import './index.scss';

const SearchBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const requestParams = Object.fromEntries([...searchParams]);
  const filterText = requestParams.searchText || '';

  const meals = useSelector((state: RootState) => selectMealsForCurrentPage(state));
  const currentPage = useSelector((state: RootState) => state.meals.currentPage);
  const totalMeals = useSelector((state: RootState) => state.meals.totalMeals);
  const mealsPerPage = useSelector((state: RootState) => state.meals.mealsPerPage);

  const totalPages = Math.ceil(totalMeals / mealsPerPage);

  const handleSearch = useMemo(
    () =>
      debounce((search: string) => {
        dispatch(fetchMeals(search));
        setSearchParams({ searchText: search });
      }, 1500),
    [dispatch, setSearchParams],
  );

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  useEffect(() => {
    dispatch(fetchMeals(filterText));
  }, [dispatch, filterText]);

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={filterText}
          onChange={e => handleSearch(e.target.value)}
        />
      </div>

      <div className="meals">
        {meals.map(meal => (
          <div key={meal.idMeal}>{meal.strMeal}</div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
