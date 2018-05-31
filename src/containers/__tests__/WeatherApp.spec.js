import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { WeatherApp } from '../WeatherApp';
import CitySearchReduers from '../../reducers';

describe('Weather App', () => {
  let component;
  beforeEach(() => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore(CitySearchReduers);
    component = shallow(<WeatherApp />);
  });
  it('renders Home component', () => {
    expect(component).toMatchSnapshot();
  });
});
