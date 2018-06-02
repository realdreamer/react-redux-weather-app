import citySearch from '../CitySearch';
import { FETCHED_CITY } from '../../constants/ActionTypes';
import { searchResults } from '../../testMockData';

describe('citySearch reducer', () => {
  it('should return the initial state', () => {
    const initialState = { searchCityResults: [], searchInitiated: false, };
    expect(citySearch(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCHED_CITY', () => {
    const initialState = { searchCityResults: [], searchInitiated: false, };
    const expectedState = { searchCityResults: searchResults, searchInitiated: true };
    expect(citySearch(initialState, {
      type: FETCHED_CITY,
      payload: {
        searchCityResults: searchResults
      }
    })).toEqual(expectedState);
  });

});
