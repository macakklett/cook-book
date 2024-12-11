import React from 'react';
import SearchBar from './components/search-bar';
import CategoryList from './components/category-list';

import './index.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__title">Search</div>
      <SearchBar />
      <CategoryList />
    </header>
  );
};

export default Header;
