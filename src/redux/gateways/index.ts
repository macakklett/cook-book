import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Meal } from '@/types';

type fetchMealsError = {
  message: string;
};

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php';

export const fetchMealsAPI = async (search: string = ''): Promise<Meal[]> => {
  const {
    data: { meals },
  } = await axios.get(API_URL, {
    params: { s: search },
  });

  return meals || [];
};

const fetchMeals = createAsyncThunk<Meal[], string, { rejectValue: fetchMealsError }>(
  'meals/fetchMeals',
  async (search = '', { rejectWithValue }) => {
    try {
      return await fetchMealsAPI(search);
    } catch (error) {
      return rejectWithValue({ message: (error as Error).message });
    }
  },
);

export default fetchMeals;
