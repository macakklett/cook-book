import type { Meal } from '@/types';

type IngredientSummary = { [ingredient: string]: string };

export const createIngredientConfig = (meals: Meal[]): IngredientSummary => {
  return meals.reduce((acc, meal) => {
    for (let i = 1; i <= 10; i++) {
      const ingredient = meal[`strIngredient${i}` as keyof Meal];
      const measure = meal[`strMeasure${i}` as keyof Meal];

      if (ingredient && measure) {
        acc[ingredient] = acc[ingredient] ? `${acc[ingredient]} + ${measure}` : measure;
      }
    }
    return acc;
  }, {} as IngredientSummary);
};
