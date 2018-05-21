import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from '../CityList';
import CityList from '../CityList';
import { MemoryRouter, Link } from 'react-router-dom';

describe('<CityList /> Component ', () => {
  it('component renders without error', () => {
    const props = [];
    const tree = renderer.create(<MemoryRouter><CityList city={props}/></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('pass props with data', () => {
    const props = [{ latt_long: "13.05939 80.245667", location_type:"City", title:"Chennai", woeid:2295424 }];
    const tree = renderer.create(<MemoryRouter><CityList city={props} /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
