import React, { Component } from 'react';
import { connect } from 'react-redux';
import { citySearchAction } from '../actions';

import Header from '../components/Header/Header';
import CityList from '../components/CityList/CityList';

export class Home extends Component {
  render() {
    const { city } = this.props;
    const action = {
      onSearch: this.props.onSearch
    };

    return <section className="homePage">
        <Header onSearch={action.onSearch} />
        <div className="cityLists">
          <CityList city={city}/>
        </div>
      </section>;
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.CityList.searchCityResults
  };
};

const mapDispatchToProps = dispatch => ({
  onSearch: searchText => {
    dispatch(citySearchAction(searchText));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
