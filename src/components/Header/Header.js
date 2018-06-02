import React from 'react';
// import SearchForm from '../SearchForm/SearchForm';

import './scss/Header.css';

const Header = props => (
  <header className="header">
    <h1 className="header-title">{props.title}</h1>
  </header>
);

export default Header;
