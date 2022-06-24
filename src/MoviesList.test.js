import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import MoviesList from './MoviesList';
import { MemoryRouter } from 'react-router-dom';
global.fetch = require('jest-fetch-mock');

console.error = jest.fn();

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const movies = {
  results: [
    {
      adult: false,
      backdrop_path: '/mBJ995JUssgh2hhm4JxNj8hyVVM.jpg',
      genre_ids: [
        99,
      ],
      id: 979163,
      original_language: 'en',
      original_title: 'Beyond Infinity: Buzz and the Journey to Lightyear',
      overview: 'Explore the evolution of Buzz Lightyear from toy to human in the making of Pixar’s Lightyear. Dive into the origin and cultural impact of everyone’s favorite Space Ranger, the art of designing a new “human Buzz,” and the challenges faced by the Lightyear crew along the way.',
      popularity: 1873.37,
      poster_path: '/i8FtZGLZNZAvxGpxYEvqIJIGNhV.jpg',
      release_date: '2022-06-10',
      title: 'Beyond Infinity: Buzz and the Journey to Lightyear',
      video: false,
      vote_average: 7.5,
      vote_count: 102,
    },
    {
      adult: false,
      backdrop_path: '/cqnVuxXe6vA7wfNWubak3x36DKJ.jpg',
      genre_ids: [
        28,
        12,
        14,
      ],
      id: 639933,
      original_language: 'en',
      original_title: 'The Northman',
      overview: "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
      popularity: 1830.809,
      poster_path: '/8p9zXB7M78nZpm215zHfqpknMeM.jpg',
      release_date: '2022-04-07',
      title: 'The Northman',
      video: false,
      vote_average: 7.3,
      vote_count: 1615,
    },
  ],
};

test('<MoviesList/>', async () => {
  fetch.mockResponse(JSON.stringify(movies));

  const { queryByTestId, getByTestId, getAllByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>,
  );
  expect(getByTestId('loading')).toBeTruthy();
  await waitForElement(() => getByTestId('movie-link'));
  expect(queryByTestId('loading')).toBeFalsy();
  expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movies.results[0].id}`);
  expect(getAllByTestId('movie-link').length).toBe(movies.results.length);
});
