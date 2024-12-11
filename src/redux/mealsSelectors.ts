import { RootState } from './store';
import type { Meal } from '@/types';

export const selectAllMeals = (state: RootState) => state.meals.meals;
export const selectMealById = (state: RootState, id: string): Meal | undefined => {
  return state.meals.meals.find(meal => meal.idMeal === id);
};

// Фільтрація страв по категорії
const selectMealsByCategory = (state: RootState) => {
  const category = state.meals.selectedCategory;
  if (category) {
    return state.meals.meals.filter(meal => meal.strCategory === category);
  }
  return state.meals.meals;
};

// Обчислення кількості сторінок
const calculateTotalPages = (meals: Meal[], mealsPerPage: number) => {
  return Math.ceil(meals.length / mealsPerPage);
};

// Перевірка, чи поточна сторінка не виходить за межі
const getValidPage = (currentPage: number, totalPages: number) => {
  return currentPage > totalPages ? totalPages : currentPage;
};

// Селектор для страв на поточній сторінці
export const selectMealsForCurrentPage = (state: RootState) => {
  const filteredMeals = selectMealsByCategory(state);
  const totalPages = calculateTotalPages(filteredMeals, state.meals.mealsPerPage);
  const validPage = getValidPage(state.meals.currentPage, totalPages);

  const startIndex = (validPage - 1) * state.meals.mealsPerPage;
  const endIndex = startIndex + state.meals.mealsPerPage;

  return filteredMeals.slice(startIndex, endIndex);
};

// Селектори для статусу і помилок
export const selectStatus = (state: RootState) => state.meals.status;
export const selectError = (state: RootState) => state.meals.error;
