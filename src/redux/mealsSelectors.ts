import { RootState } from './store';
import type { Meal } from '@/types';

export const selectAllMeals = (state: RootState) => state.meals.meals;
export const selectMealById = (state: RootState, id: string): Meal | undefined => {
  return state.meals.meals.find(meal => meal.idMeal === id);
};

export const selectStatus = (state: RootState) => state.meals.status;
export const selectError = (state: RootState) => state.meals.error;
