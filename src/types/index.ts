export type Meal = {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strSource: string;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
};

export type MealsState = {
  meals: Meal[];
  currentPage: number;
  mealsPerPage: number;
  totalMeals: number;
  selectedCategory: string;
  status: StatusOfProcessing;
  error: string | null;
};

export type ErrorType = 'general' | 'notFound';

export type ErrorData = {
  image: string;
  alt: string;
  explain: string;
  recommendation: string;
  link: string;
};

export type StatusOfProcessing = 'loading' | 'completed' | 'error';
