import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectAllMeals, selectStatus } from '@/redux/mealsSelectors';
// import { compareEmployees, sortByYears } from './utils';
import EmployeeItem from '@/features/employeesList/components/employee-item';
import Error from '@/features/error';
import EmployeesListSceleton from '@/features/employeesList/components/list-item-skeleton';
import type {
  Meal,
  StatusOfProcessing,
  SortingEmployees,
  RequestParams,
  // EmployeesByYear,
} from '@/types';

import './index.scss';

const EmployeesList: React.FC = () => {
  // const [searchParams] = useSearchParams();
  // const requestParams: RequestParams = Object.fromEntries([...searchParams]);
  // const sortType: SortingEmployees = requestParams.sortBy || 'name';

  const allMeals: Meal[] = useSelector(selectAllMeals);
  const statusOfProcessing: StatusOfProcessing = useSelector(selectStatus);

  if (statusOfProcessing === 'error') {
    return <Error type="general" />;
  }

  if (statusOfProcessing === 'loading') {
    return <EmployeesListSceleton />;
  }

  if (!allMeals.length) {
    return <Error type="notFound" />;
  }

  return (
    <div className="employee-list">
      {allMeals.map(meal => (
        <EmployeeItem key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
};

export default EmployeesList;
