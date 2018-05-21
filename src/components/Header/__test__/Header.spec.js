import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
                  .create(<Header />)
                  .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should attach props pass in', () => {
    const tree = renderer
                  .create(<Header />)
                  .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
