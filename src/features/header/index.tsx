import React from 'react';
import SearchBar from './components/search-bar';
// import ListOfPositions from './components/position-list';

import './index.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__title">Search</div>
      <SearchBar />
      {/* <ListOfPositions /> */}
    </header>
  );
};

export default Header;
