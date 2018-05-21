import citySearch from '../LocationWeatherData';
import { FETCHED_CITY_WEATHER_DATA } from '../../constants/ActionTypes';
import { WeatherData } from '../../testMockData';

describe('locationWeatherData reducer', () => {
  it('should return the initial state', () => {
    const initialState = { locationWeatherData: {} };
    expect(citySearch(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCHED_CITY_WEATHER_DATA', () => {
    const initialState = { locationWeatherData: {} };
    const expectedState = { locationWeatherData: WeatherData };
    expect(citySearch(initialState, {
      type: FETCHED_CITY_WEATHER_DATA,
      payload: {
        locationWeatherData: WeatherData
      }
    })).toEqual(expectedState);
  });

});
