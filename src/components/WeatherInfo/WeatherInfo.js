import React from 'react';

const WeatherInfo = ({weather}) => {
  if (weather) {
    return (
      <section className="weatherInfoBlock">
        { weather.map( (data) => {
            return (<div className="info" key={data.id}>
                      <h3>{data.weather_state_name}</h3>
                      <div className="temp-details">
                        <h4>Min Temp : {data.min_temp}</h4>
                        <h4>Max Temp : {data.max_temp}</h4>
                      </div>
                      <div className="wind-details">
                        <h4>{data.wind_speed}</h4>
                        <span>{data.wind_direction | data.wind_direction_compass}</span>
                      </div>
                    </div>
                  );
          })
        }
      </section>
    )
  }
  else {
    return null;
  }
}

export default WeatherInfo;
