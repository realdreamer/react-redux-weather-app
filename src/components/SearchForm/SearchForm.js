import React, { Component } from 'react';
import './styles/SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleSearchTextChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const searchValue = this.state.searchText;
    this.props.onSearch(searchValue);
  }
  render() {
    return (
      <div className="header-search">
        <form
          name="city-form"
          id="city-form"
          className="city-search"
          onSubmit={this.onSubmit}
        >
          <input
            type="text"
            name="city-search"
            className="city-search__input"
            id="city-search"
            value={this.state.searchText}
            onChange={this.handleSearchTextChange}
          />
          <input
            type="submit"
            name="city-search-btn"
            className="city-search__btn"
            id="city-search-btn"
            value="Search"
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;
