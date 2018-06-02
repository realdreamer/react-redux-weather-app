import React, { Component } from 'react';
import { connect } from 'react-redux';
import { citySearchAction } from '../actions';

import Header from '../components/Header/Header';
import SearchForm from '../components/SearchForm/SearchForm';
import CityList from '../components/CityList/CityList';

import './styles/Home.css';
export class Home extends Component {
  render() {
    const { city, searchInitiated } = this.props;
    const action = {
      onSearch: this.props.onSearch
    };
    let cityList;
    if (searchInitiated) {
      cityList = <div className="search-results">
                    <CityList city={city} />
                  </div>;
    }

    return  <section className="home-page">
              <Header title="Weather Forecast" />
              <SearchForm onSearch={action.onSearch} />
              { cityList }
            </section>;
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.CityList.searchCityResults,
    searchInitiated: state.CityList.searchInitiated,
  };
};

const mapDispatchToProps = dispatch => ({
  onSearch: searchText => {
    dispatch(citySearchAction(searchText));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
