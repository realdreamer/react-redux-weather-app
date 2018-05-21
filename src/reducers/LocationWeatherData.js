import { FETCHED_CITY_WEATHER_DATA } from '../constants/ActionTypes';

const initialState = {
  locationWeatherData: {}
};

const locationWeatherData = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_CITY_WEATHER_DATA:
      return { ...state, locationWeatherData: action.payload.locationWeatherData };
    default:
      return state;
  }
};

export default locationWeatherData;
