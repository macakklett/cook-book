import React from 'react';
import { Link } from 'react-router-dom';
import type { Meal } from '@/types';

import './index.scss';

type MealItemProps = {
  meal: Meal;
  onAddToCart: (meal: Meal) => void;
};

const MealItem: React.FC<MealItemProps> = ({ meal, onAddToCart }) => {
  const { strMeal, strMealThumb, idMeal } = meal;

  return (
    <div className="meal-list__item employee">
      <img src={strMealThumb} alt={`${strMeal}'s picture`} className="meal__avatar" />
      <div className="meal__info">
        <Link to={`/meal/${idMeal}`}>
          <div className="meal__name">{strMeal}</div>
        </Link>
        <button className="add-to-cart" onClick={() => onAddToCart(meal)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MealItem;
