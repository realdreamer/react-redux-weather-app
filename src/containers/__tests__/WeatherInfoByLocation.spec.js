import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { WeatherInfoByLocation } from '../WeatherInfoByLocation';

jest.mock('../../actions');

import { fetchCityWeatherData } from '../../actions';

describe('Weather Info By Location Component', () => {
  const state = {
    LocationWeatherData: {
      locationWeatherData: {
        title: 'title',
        location_type: 'city',
        consolidated_weather: [{ id: 5163259682357248, weather_state_name: "Light Cloud", weather_state_abbr: "lc", wind_direction_compass: "SSE", created: "2018-05-20T10:28:43.158520Z", applicable_date: "2018-05-20", min_temp: 29.2175, max_temp: 35.44, the_temp: 37, wind_speed: 7.957708449322623, wind_direction: 164.7817856137123, air_pressure: 1019.01, humidity: 71, visibility: 4.05755388530979, predictability: 70 }]
      }
    }
  };

  const props = {
    match: {
      params: {
        cityId: '1'
      }
    },
    locationWeatherData: {
      title: 'title',
      location_type: 'city',
      consolidated_weather: [{ id: 5163259682357248, weather_state_name: "Light Cloud", weather_state_abbr: "lc", wind_direction_compass: "SSE", created: "2018-05-20T10:28:43.158520Z", applicable_date: "2018-05-20", min_temp: 29.2175, max_temp: 35.44, the_temp: 37, wind_speed: 7.957708449322623, wind_direction: 164.7817856137123, air_pressure: 1019.01, humidity: 71, visibility: 4.05755388530979, predictability: 70 }]
    },
    fetchData: fetchCityWeatherData
  };
  let component;
  beforeEach(() => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore(state);
    spyOn = (store, 'dispatch');
    component = mount(<Provider store={store}>
        <WeatherInfoByLocation {...props} />
      </Provider>);
  });


  it('renders WeatherInfoByLocation component', () => {
    expect(component).toMatchSnapshot();
  });

  it('calls fetchdata on mount', () => {
    expect(fetchCityWeatherData).toHaveBeenCalledWith('1');
  });
});
