import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SearchForm from '../SearchForm';

describe('<SearchForm />', () => {
  let callback;
  let Component;
  beforeEach(() => {
    callback = jest.fn();
    Component = shallow(<SearchForm onSearch={callback} />);
  });
  it('render <SearchForm /> component', () => {
    expect(Component.find("form").length).toBe(1);
  });

  it('default searchText state value should be null', () => {
    expect(Component.state().searchText).toBe('');
  });

  it('Should set search text on onChange event', () => {
    Component.find('#city-search').simulate('change', { target: { value: 'chennai' } });
    expect(Component.find('#city-search').props().value).toBe('chennai');
  });

  it('Should call callback when form submit happens', () => {
    const e = { preventDefault: () => true };
    Component.find('#city-search').simulate('change', { target: { value: 'chennai' } });
    Component.find('#city-form').simulate('submit', e);
    expect(Component.state().searchText).toBe('chennai');
    expect(callback).toHaveBeenCalled();
  });
});
