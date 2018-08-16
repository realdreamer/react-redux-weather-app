import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import WeatherApp from './WeatherApp';

import './styles/app.css';


//
import CitySearchReduers from '../reducers';
import theme from './Theme';
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = composeEnhancers(applyMiddleware(thunk))(createStore)(CitySearchReduers, persistedState);

store.subscribe(() => {
  saveState(store.getState().LoginReducer);
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <WeatherApp />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
