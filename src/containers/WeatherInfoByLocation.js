import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCityWeatherData } from "../actions";
import WeatherInfo from "../components/WeatherInfo/WeatherInfo";

class WeatherInfoByLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidMount() {
    this.props.fetchData(this.props.match.params.cityId);
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="location">
        <h3>{this.props.locationWeatherData.title}</h3>
        <h6>{this.props.locationWeatherData.location_type}</h6>
        <WeatherInfo
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
