import citySearch from '../CitySearch';
import { FETCHED_CITY } from '../../constants/ActionTypes';
import { searchResults } from '../../testMockData';

describe('citySearch reducer', () => {
  it('should return the initial state', () => {
    const initialState = { searchCityResults: [] };
    expect(citySearch(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCHED_CITY', () => {
    const initialState = { searchCityResults: [] };
    const expectedState = { searchCityResults: searchResults };
    expect(citySearch(initialState, {
      type: FETCHED_CITY,
      payload: {
        searchCityResults: searchResults
      }
    })).toEqual(expectedState);
  });

});
