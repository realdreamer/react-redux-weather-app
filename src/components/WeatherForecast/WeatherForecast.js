import React from 'react';
import DayWeatherInfo from '../DayWeatherInfo/DayWeatherInfo';

const WeatherForecast = ({weather}) => {
  if (weather) {
    return (
      <section className="weatherInfoBlock">
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
