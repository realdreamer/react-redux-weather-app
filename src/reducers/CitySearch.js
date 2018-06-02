import { FETCHED_CITY } from '../constants/ActionTypes';

const initialState = {
  searchCityResults: [],
  searchInitiated: false,
};

const citySearch = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_CITY:
      return { ...state, searchCityResults: action.payload.searchCityResults, searchInitiated: true };
    default:
      return state;
  }
};

export default citySearch;
