import React, { Component } from 'react';
import WeatherApp from './WeatherApp';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

//
import CitySearchReduers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = composeEnhancers(applyMiddleware(thunk))(createStore)(CitySearchReduers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WeatherApp />
      </Provider>
    );
  }
}

export default App;
