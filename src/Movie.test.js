import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import Movie, { POSTER_PATH } from './Movie';

console.error = jest.fn();

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const movie = {
  id: 'hi',
  title: 'Level Up Big Day Out',
  poster_path: 'adadsgfg.jpg',
};
test('<Movie/>', () => {
  render(<Movie />);
  expect(console.error).toHaveBeenCalled();
});

test('<Movie/>', () => {
  const { debug, getByTestId } = render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>,
  );
  expect(console.error).not.toHaveBeenCalled();
  expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`);
});
