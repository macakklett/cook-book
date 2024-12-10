import React from 'react';
import { useSearchParams } from 'react-router-dom';
import type { FilterPosition, RequestParams } from '@/types';

import './index.scss';

const ListOfPositions: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestParams: RequestParams = Object.fromEntries([...searchParams]);
  const position: FilterPosition = requestParams.positionQuery || 'all';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPosition = event.target.value as FilterPosition;
    setSearchParams({ ...requestParams, positionQuery: newPosition });
  };

  return (
    <div className="input-position">
      <input
        type="radio"
        id="all"
        value="all"
        checked={position === 'all'}
        onChange={handleChange}
      />
      <label htmlFor="all">All</label>

      <input
        type="radio"
        id="designer"
        value="designer"
        checked={position === 'designer'}
        onChange={handleChange}
      />
      <label htmlFor="designer">Designers</label>

      <input
        type="radio"
        id="analyst"
        value="analyst"
        checked={position === 'analyst'}
        onChange={handleChange}
      />
      <label htmlFor="analyst">Analysts</label>

      <input
        type="radio"
        id="manager"
        value="manager"
        checked={position === 'manager'}
        onChange={handleChange}
      />
      <label htmlFor="manager">Managers</label>

      <input
        type="radio"
        id="iOS"
        value="iOS"
        checked={position === 'iOS'}
        onChange={handleChange}
      />
      <label htmlFor="iOS">iOS</label>

      <input
        type="radio"
        id="android"
        value="android"
        checked={position === 'android'}
        onChange={handleChange}
      />
      <label htmlFor="android">Android</label>
    </div>
  );
};

export default ListOfPositions;
