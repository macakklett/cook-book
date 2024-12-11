import React from 'react';
import type { Meal } from '@/types';
import { createIngredientConfig } from './utils';

import './index.scss';

type CartSummaryProps = {
  cart: Meal[];
};

const CartSummary: React.FC<CartSummaryProps> = ({ cart }) => {
  const ingredientsSummary = createIngredientConfig(cart);

  return (
    <div className="cart-summary">
      <h2>Meals in Cart:</h2>
      <ul className="meal-list">
        {cart.map(meal => (
          <li key={meal.idMeal} className="meal-item">
            {meal.strMeal}
          </li>
        ))}
      </ul>

      <h3>Ingredients Summary:</h3>
      <ul className="ingredient-list">
        {Object.entries(ingredientsSummary).map(([ingredient, measure]) => (
          <li key={ingredient} className="ingredient-item">
            {ingredient}: {measure}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartSummary;
