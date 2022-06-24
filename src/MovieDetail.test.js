import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import MovieDetail from './MovieDetail';

global.fetch = require('jest-fetch-mock');

console.error = jest.fn();

beforeAll(() => {
  jest.spyOn(global.console, 'error').mockImplementation(() => {});
});
afterAll(() => {
  global.console.error.mockRestore();
});


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
  release_date: '24-10/2021',
  overview: 'sdfg dfsxdcf ngfdsdxf gdfdsf gsdsf',
};

test('<MovieDetail/>', async () => {
  fetch.mockResponse(JSON.stringify(movie));

  const { getByText, getByTestId } = render(<MovieDetail match={match} />);
  await waitForElement(() => getByText('Level Up Rules!'));

  expect(getByTestId('movie-title').textContent).toBe(movie.title);
  expect(getByTestId('movie-date').textContent).toBe(movie.release_date);
  expect(getByTestId('movie-review').textContent).toBe(movie.overview);

  expect(console.error).not.toHaveBeenCalled();
});
