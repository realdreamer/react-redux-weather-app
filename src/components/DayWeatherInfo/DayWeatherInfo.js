import React from 'react';

const DayWeatherInfo = ({ info }) => {
  return (
    <div className="info">
      <h3>{info.weather_state_name}</h3>
      <div className="temp-details">
        <h4>Min Temp : {info.min_temp}</h4>
        <h4>Max Temp : {info.max_temp}</h4>
      </div>
      <div className="wind-details">
        <h4>{info.wind_speed}</h4>
        <span>{info.wind_direction | info.wind_direction_compass}</span>
      </div>
    </div>
  );
};

export default DayWeatherInfo;
