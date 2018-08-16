import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCityWeatherData } from '../actions';
import WeatherForecast from '../components/WeatherForecast/WeatherForecast';
import Header from '../components/Header/Header';

import './styles/WeatherInfoByLocation.css';

export class WeatherInfoByLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidMount() {
    this.props.fetchData(this.props.match.params.cityId);
  }

  render() {
    return (
      <div className="location">
        { /* <h6>{this.props.locationWeatherData.location_type}</h6> */ }
        <WeatherForecast
          weather={this.props.locationWeatherData.consolidated_weather}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: cityId => {
    dispatch(fetchCityWeatherData(cityId));
  }
});

const mapStateToProps = state => ({
  locationWeatherData: state.LocationWeatherData.locationWeatherData
});

export default connect(mapStateToProps, mapDispatchToProps)(
  WeatherInfoByLocation
);
