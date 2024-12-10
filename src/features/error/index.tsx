import React from 'react';
import { Link } from 'react-router-dom';
import type { ErrorType } from '@/types';

import './index.scss';
import { errorData } from './utils';

type ErrorProps = {
  type: ErrorType;
};

const Error: React.FC<ErrorProps> = ({ type }) => {
  const { image, alt, explain, recommendation, link } = errorData[type];

  return (
    <div className="error">
      <img src={image} alt={alt} className="error__image" />
      <div className="error__explain">{explain}</div>
      <div className="error__recommendation">{recommendation}</div>
      {link && (
        <Link to={link} className="error__reload" replace={true}>
          Try again
        </Link>
      )}
    </div>
  );
};

export default Error;
