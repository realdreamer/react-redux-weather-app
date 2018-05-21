import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import WeatherInfoByLocation from './WeatherInfoByLocation';

class WeatherApp extends Component {
  render() {
    return (
      <Router>
        <div className="app" id="container">
          <Route exact path="/" component={ Home } />
          <Route path="/location/:cityId" component={ WeatherInfoByLocation } />
        </div>
      </Router>
    );
  }
}

export default WeatherApp;
