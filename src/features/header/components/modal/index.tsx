import React from 'react';
import { useSearchParams } from 'react-router-dom';
import type { SortingEmployees, RequestParams } from '@/types';

import './index.scss';

interface ModalSortProps {
  closeModalSort: () => void;
}

const ModalSort: React.FC<ModalSortProps> = ({ closeModalSort }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestParams: RequestParams = Object.fromEntries([...searchParams]);
  const sortType: SortingEmployees = requestParams.sortBy || 'name';

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = event.target.value as SortingEmployees;
    setSearchParams({ ...requestParams, sortBy: selectedOption });
  };

  return (
    <div className="modal__overlay" onClick={closeModalSort}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <div className="modal__header">
          <div className="modal__title">Sort</div>
          <i className="fas fa-times modal__content_close-icon" onClick={closeModalSort} />
        </div>
        <div className="modal__options">
          <input
            type="radio"
            id="alphabet"
            name="sortOption"
            value="name"
            checked={sortType === 'name'}
            onChange={handleOptionChange}
          />
          <label htmlFor="alphabet" className="option__radio-button">
            By alphabet
          </label>

          <input
            type="radio"
            id="birthday"
            name="sortOption"
            value="birthDate"
            checked={sortType === 'birthDate'}
            onChange={handleOptionChange}
          />
          <label htmlFor="birthday" className="option__radio-button">
            By birthdate
          </label>
        </div>
      </div>
    </div>
  );
};

export default ModalSort;
