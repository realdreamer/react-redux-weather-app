import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { citySearchAction } from '../actions';

import Header from '../components/Header/Header';
import SearchForm from '../components/SearchForm/SearchForm';
import CityList from '../components/CityList/CityList';

import './styles/Home.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


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

    return (
      <Grid>
        <section className="home-page">
          <SearchForm onSearch={action.onSearch} />
          { cityList }
        </section>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    // city: state.CityList.searchCityResults,
    // searchInitiated: state.CityList.searchInitiated,
    username: state.LoginReducer.userData,
  };
};

const mapDispatchToProps = dispatch => ({
  onSearch: searchText => {
    dispatch(citySearchAction(searchText));
  }
});

const connectedComponent =  connect(mapStateToProps, mapDispatchToProps)(Home);

export default withStyles(styles)(connectedComponent);

