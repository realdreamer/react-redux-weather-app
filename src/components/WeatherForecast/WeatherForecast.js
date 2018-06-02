import React from 'react';
import DayWeatherInfo from '../DayWeatherInfo/DayWeatherInfo';

import './scss/WeatherForecast.css';

const WeatherForecast = ({weather}) => {
  if (weather) {
    return (
      <section className="weather-info">
        { weather.map( (weatherDetail) => {
            return <DayWeatherInfo key={weatherDetail.id} info={weatherDetail} />;
          })
        }
      </section>
    )
  }
  else {
    return null;
  }
}

export default WeatherForecast;
