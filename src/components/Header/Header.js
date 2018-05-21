import React from "react";
import SearchForm from "../SearchForm/SearchForm";

const Header = props => (
  <header>
    <h1>Weather App</h1>
    <SearchForm onSearch={props.onSearch} />
  </header>
);

export default Header;
