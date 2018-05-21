import * as types from '../constants/ActionTypes';

export const citySearchAction = (searchText) => {
  return dispatch => {
    return fetch('https://www.metaweather.com/api/location/search/?query='+searchText, {
      'method': 'get',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
    .then( (res) => {
      return res.json()
    })
    .then( (searchResults) => {
      console.log(searchResults);
      dispatch({
        type: types.FETCHED_CITY,
        payload: {
          searchCityResults: searchResults
        }
      })
    });
  };
};
