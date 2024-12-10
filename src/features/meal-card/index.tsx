import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { selectMealById, selectStatus } from '@/redux/mealsSelectors';
import Error from '@/features/error';
import CardSkeleton from '@/features/meal-card/components/employee-card-skeleton';
import type { RootState } from '@/redux/store';
import type { Meal, StatusOfProcessing } from '@/types';

import './index.scss';

const MealCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const meal: Meal | undefined = useSelector((state: RootState) => selectMealById(state, id!));
  const status: StatusOfProcessing = useSelector(selectStatus);

  const hasNavigated = useRef(false);

  useEffect(() => {
    if (window.history.state && window.history.state.idx > 0) {
      hasNavigated.current = true;
    }
  }, [id]);

  if (status === 'loading') {
    return <CardSkeleton />;
  }

  if (status === 'error' || !meal) {
    return <Error type="general" />;
  }

  return (
    <div className="employee-card__profile">
      <div className="employee-card__info info">
        <button
          onClick={() => (hasNavigated.current ? navigate(-1) : navigate('/'))}
          className="back-icon"
        >
          <i className="fas fa-chevron-left" />
        </button>
        <img
          src={meal.strMealThumb}
          alt={`${meal.strMealThumb}'s picture`}
          className="info__avatar"
        />
        <div className="info__name">{meal.strMeal}</div>
        <div className="info__tag">{meal.strCategory}</div>
        <div className="info__position">{meal.strArea}</div>
      </div>
    </div>
  );
};

export default MealCard;
