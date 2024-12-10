import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import './index.scss';

const CardSkeleton: React.FC = () => {
  return (
    <>
      <div className="card-skeleton" key="avatar-skeleton">
        <div className="card-skeleton__avatar">
          <Skeleton circle width={104} height={104} style={{ marginBottom: '2rem' }} />
          <Skeleton width="100%" style={{ marginBottom: '0.5rem' }} />
          <Skeleton width="100%" />
        </div>
      </div>
      <Skeleton width="30%" style={{ marginBottom: '0.5rem' }} key="line-1" />
      <Skeleton width="30%" key="line-2" />
    </>
  );
};

export default CardSkeleton;
