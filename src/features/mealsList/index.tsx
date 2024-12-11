import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectStatus, selectMealsForCurrentPage } from '@/redux/mealsSelectors';
import { setCurrentPage } from '@/redux/mealsSlice';
import MealItem from '@/features/mealsList/components/meal-item';
import Error from '@/features/error';
import CartSummary from '../Cart';
import MealsListSceleton from '@/features/mealsList/components/list-item-skeleton';
import type { Meal, StatusOfProcessing } from '@/types';
import type { RootState } from '@/redux/store';

import './index.scss';

const MealsList: React.FC = () => {
  const dispatch = useDispatch();

  const meals: Meal[] = useSelector(selectMealsForCurrentPage);
  const currentPage = useSelector((state: RootState) => state.meals.currentPage);
  const totalMeals = useSelector((state: RootState) => state.meals.totalMeals);
  const mealsPerPage = useSelector((state: RootState) => state.meals.mealsPerPage);
  const statusOfProcessing: StatusOfProcessing = useSelector(selectStatus);

  const totalPages = Math.ceil(totalMeals / mealsPerPage);

  const [cart, setCart] = useState<Meal[]>([]);

  const addToCart = (meal: Meal) => {
    setCart(prevCart => [...prevCart, meal]);
  };

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  if (statusOfProcessing === 'error') {
    return <Error type="general" />;
  }

  if (statusOfProcessing === 'loading') {
    return <MealsListSceleton />;
  }

  if (!meals.length) {
    return <Error type="notFound" />;
  }

  return (
    <>
      <div className="meal-list">
        {meals.map(meal => (
          <MealItem key={meal.idMeal} meal={meal} onAddToCart={addToCart} />
        ))}
      </div>
      {cart.length > 0 && <CartSummary cart={cart} />}
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
    </>
  );
};

export default MealsList;
