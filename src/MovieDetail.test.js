import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
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

const movie = {
  id: 'hi',
  title: 'Level Up Rules!',
};

test('<MovieDetail/>', async () => {
  fetch.mockResponse(JSON.stringify(movie));

  const { getByText, getByTestId } = render(<MovieDetail match={match} />);
  await waitForElement(() => getByText('Level Up Rules!'));

  expect(getByTestId('movie-title').textContent).toBe(movie.title);
});
