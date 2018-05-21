import React from 'react';
import { Link } from 'react-router-dom';

const CityList = ( {city} ) => {
  if (city.length > 0 ) {
    return (<div className="list">
            { city.map((city) => {
                return (
                  <div className="city" key={city.woeid}>
                    <Link to={"/location/"+city.woeid}>{city.title}</Link>
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
