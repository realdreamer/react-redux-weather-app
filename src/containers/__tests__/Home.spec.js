import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter, Link } from 'react-router-dom';

import Home from '../Home';

xdescribe('Home Component', () => {
  let component;
  const state = {
    CityList: {
      searchCityResults: [{ latt_long: "13.05939 80.245667", location_type:"City", title:"Chennai", woeid:2295424 }]
    }
  };
  beforeEach(() => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore(state);
    spyOn = (store, 'dispatch');
    component = mount(<Provider store={store}>
        <MemoryRouter><Home /></MemoryRouter>
      </Provider>);
  });
  it('renders Home component', () => {
    expect(component).toMatchSnapshot();
  });
});
