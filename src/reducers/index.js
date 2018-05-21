import { combineReducers } from "redux";
import CityList from "./CitySearch";
import LocationWeatherData from "./LocationWeatherData";

const weatherApp = combineReducers({
  CityList,
  LocationWeatherData
});

export default weatherApp;
