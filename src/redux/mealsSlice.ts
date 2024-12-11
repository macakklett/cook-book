import { createSlice } from '@reduxjs/toolkit';
import fetchMeals from './gateways';
import type { MealsState } from '@/types';

const initialState: MealsState = {
  meals: [],
  currentPage: 1,
  mealsPerPage: 3,
  totalMeals: 0,
  selectedCategory: '',
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
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
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

export const { setCurrentPage, setSelectedCategory } = mealsSlice.actions;

export default mealsSlice.reducer;
