import React from 'react';
import { Link } from 'react-router-dom';

import './styles/CityList.css';

const CityList = ( {city} ) => {
  if (city.length > 0 ) {
    return (<div className="city-list">
            { city.map((city) => {
                return (
                  <div className="city-name" key={city.woeid}>
                    <Link to={"/location/"+city.woeid} className="city-link">{city.title}</Link>
                  </div>
                )
              })
            }
          </div>
    );
  }
  else {
    return <div className="no-results">No city found</div>;
  }
};

export default CityList;
