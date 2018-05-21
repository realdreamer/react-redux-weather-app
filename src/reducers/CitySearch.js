import * as types from '../constants/ActionTypes';

const initialState = {
  searchCityResults: [],
};

const citySearch = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHED_CITY:
      console.log(action);
      console.log("Reached Reducers..!");
      return { ...state, searchCityResults: action.payload.searchCityResults };
    default:
      return state;
  }
};

export default citySearch;
