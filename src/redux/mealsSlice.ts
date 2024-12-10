import { createSlice } from '@reduxjs/toolkit';
import fetchMeals from './gateways';
import type { MealsState } from '@/types';
import type { RootState } from './store';

const initialState: MealsState = {
  meals: [],
  currentPage: 1,
  mealsPerPage: 3,
  totalMeals: 0,
  status: 'completed',
  error: null,
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMeals.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.status = 'completed';
        state.meals = action.payload;
        state.totalMeals = action.payload.length;
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload?.message || 'An error occurred';
      });
  },
});

export const { setCurrentPage } = mealsSlice.actions;

export const selectMealsForCurrentPage = (state: RootState) => {
  const startIndex = (state.meals.currentPage - 1) * state.meals.mealsPerPage;
  const endIndex = startIndex + state.meals.mealsPerPage;
  return state.meals.meals.slice(startIndex, endIndex);
};

export default mealsSlice.reducer;
