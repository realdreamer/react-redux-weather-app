import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import WeatherInfoByLocation from './WeatherInfoByLocation';
import Header from '../components/Header/Header';
import LoginPage from './Login';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('isAuthenticated') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);


export class WeatherApp extends Component {
  render() {
    return (
      <Router>
        <div className="app" id="container">
          <Header />
          <PrivateRoute exact path="/" component={ Home } />
          <Route exact path="/home" component={ Home } />
          <Route exact path="/login" component={ LoginPage } />
          <Route path="/location/:cityId" component={ WeatherInfoByLocation } />
        </div>
      </Router>
    );
  }
}

export default WeatherApp;
