import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../index'
import * as types from '../../constants/ActionTypes';
import * as mockedResponses from '../../testMockData';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch city actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates FETCH_CITY when fetch city api has been done', () => {
    fetchMock.getOnce('https://www.metaweather.com/api/location/search/?query=chennai', {
      body: mockedResponses.searchResults,
      headers: {
        'content-type': 'application/json'
      }
    });

    const store = mockStore({ searchCityResults: [] });
    const expectedAction = [{
      type: types.FETCHED_CITY,
      payload: {
        searchCityResults: mockedResponses.searchResults
      }
    }];
    return store.dispatch(actions.citySearchAction('chennai')).then((res) => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});

describe('fetch city weather data action', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates FETCHED_CITY_WEATHER_DATA when fetch city weather data api has been done', () => {
    fetchMock.getOnce('https://www.metaweather.com/api/location/2295424', {
      body: mockedResponses.WeatherData,
      headers: {
        'content-type': 'application/json'
      }
    });
    const store = mockStore({ locationWeatherData: {} });
    const expectedAction = [{
      type: types.FETCHED_CITY_WEATHER_DATA,
      payload: {
        locationWeatherData: mockedResponses.WeatherData
      }
    }];
    return store.dispatch(actions.fetchCityWeatherData(2295424)).then(res => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
