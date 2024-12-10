import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import moment from 'moment';
import type { Meal } from '@/types';

import './index.scss';

const EmployeeItem: React.FC<Meal> = props => {
  const { strMeal, strMealThumb, idMeal } = props;

  // const [searchParams] = useSearchParams();
  // const requestParams: RequestParams = Object.fromEntries([...searchParams]);
  // const sortingType: SortingEmployees = requestParams.sortBy || 'name';

  // const formattedBirthDate = moment(birthDate).format('D MMM');

  return (
    <div className="employee-list__item employee">
      <img src={strMealThumb} alt={`${strMealThumb}'s picture`} className="employee__avatar" />
      <div className="employee__info">
        <Link to={`/meal/${idMeal}`}>
          <div className="employee__name">{strMeal}</div>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeItem;
