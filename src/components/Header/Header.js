import React from 'react';
import { connect } from 'react-redux';
// import SearchForm from '../SearchForm/SearchForm';

import './scss/Header.css';

const Header = props => (
  <header className="header">
    <h1 className="header-title">{props.title}</h1>
  </header>
);

const mapStateToProps = state => {
  return {
    title: 'Helloooo'
  };
}

export default connect(mapStateToProps, null)(Header);
