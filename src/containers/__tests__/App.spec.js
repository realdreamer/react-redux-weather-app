import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('should render app component without error', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
