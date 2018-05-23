import * as mockedResponses from '../../testMockData';
import fetchMock from 'fetch-mock';
import ApiService from '../ApiService';

describe('Api Service', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('should make api calls', () => {
    const url = 'https://www.metaweather.com/api/location/search/?query=chennai';
    fetchMock.getOnce(url, {
      body: mockedResponses.searchResults,
      headers: {
        'content-type': 'application/json'
      }
    });
    const response = ApiService(url);
    expect(response).resolves.toEqual(mockedResponses.searchResults);
  });
});
