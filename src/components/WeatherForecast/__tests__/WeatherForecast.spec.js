import React from 'react';
import renderer from 'react-test-renderer';
import WeatherForecast from '../WeatherForecast';

describe('Weather Info', () => {
  it('render weather info component without fail', () => {
    const Component = renderer.create(<WeatherForecast />).toJSON();
    expect(Component).toMatchSnapshot();
  });

  it('render weather info component by passing props in', () => {
    const props = [{ id: 5163259682357248, weather_state_name: "Light Cloud", weather_state_abbr: "lc", wind_direction_compass: "SSE", created: "2018-05-20T10:28:43.158520Z", applicable_date: "2018-05-20", min_temp: 29.2175, max_temp: 35.44, the_temp: 37, wind_speed: 7.957708449322623, wind_direction: 164.7817856137123, air_pressure: 1019.01, humidity: 71, visibility: 4.05755388530979, predictability: 70 }];
    const Component = renderer.create(<WeatherForecast weather={props} />).toJSON();
    expect(Component).toMatchSnapshot();
  });
});
