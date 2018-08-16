import * as types from '../constants/ActionTypes';
import ApiService from '../utils/ApiService';

export const citySearchAction = searchText => {
  return async dispatch => {
    const url = `https://www.metaweather.com/api/location/search/?query=${searchText}`;
    const searchCityResults = await ApiService(url);
    dispatch({
      type: types.FETCHED_CITY,
      payload: {
        searchCityResults
      }
    });
  };
};

export const fetchCityWeatherData = locationId => {
  return async dispatch => {
    const url = `https://www.metaweather.com/api/location/${locationId}`;
    const locationWeatherData = await ApiService(url);
    dispatch({
      type: types.FETCHED_CITY_WEATHER_DATA,
      payload: {
        locationWeatherData
      }
    });
  };
};

export const formSubmit = value => {
  console.log(value);
  return dispatch => {
    dispatch({
      type: types.FORM_SUBMIT,
      payload: {
        value,
      }
    });
  }
}
