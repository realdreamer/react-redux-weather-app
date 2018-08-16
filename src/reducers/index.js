import { combineReducers } from "redux";
import CityList from "./CitySearch";
import LocationWeatherData from "./LocationWeatherData";
import LoginReducer from "./FormSubmit";

const weatherApp = combineReducers({
  CityList,
  LocationWeatherData,
  LoginReducer
});

export default weatherApp;
