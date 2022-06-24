import React from 'react';
import { render, cleanup } from 'react-testing-library';
import MovieDetail from './MovieDetail';

global.fetch = require('jest-fetch-mock');

console.error = jest.fn();

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const match = {
  params: {
    id: 'lalalalaidfake',
  },
};

test('<MovieDetail/>', () => {
  fetch.mockResponse(JSON.stringify({
    id: 'hi',
    title: 'Level Up Rules!',
  }));

  const { debug } = render(<MovieDetail match={match} />);
  debug();
});
