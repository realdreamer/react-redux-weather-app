import React from 'react';
import { ForeCastStateIconClassNameMappings } from '../../constants/ForeCastStateIconClassNames';

import './scss/DayWeatherInfo.css';

const DayWeatherInfo = ({ info }) => {
  const iconClassName = `wi ${ForeCastStateIconClassNameMappings[info.weather_state_abbr]}`;
  return (
    <section className="forecast">
      <div className="forecast-info">
        <h4 className="forecast__date">{info.applicable_date}</h4>
        <h2 className="forecast__state">{info.weather_state_name}</h2>
      </div>
      <div className="forecaste-state">
        <i className={iconClassName}></i>
      </div>
      { /* <div className="temp-details">
        <h4>Min Temp : {info.min_temp}</h4>
        <h4>Max Temp : {info.max_temp}</h4>
      </div>
      <div className="wind-details">
        <h4>{info.wind_speed}</h4>
        <span>{info.wind_direction | info.wind_direction_compass}</span>
        </div> */ }
    </section>
  );
};

export default DayWeatherInfo;
