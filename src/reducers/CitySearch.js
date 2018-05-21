import { FETCHED_CITY } from '../constants/ActionTypes';

const initialState = {
  searchCityResults: [],
};

const citySearch = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_CITY:
      console.log(action);
      console.log("Reached Reducers..!");
      return { ...state, searchCityResults: action.payload.searchCityResults };
    default:
      return state;
  }
};

export default citySearch;
