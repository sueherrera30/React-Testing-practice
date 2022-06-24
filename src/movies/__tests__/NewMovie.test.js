import React from 'react';
import { render, cleanup } from 'react-testing-library';
// import MovieForm from './MovieForm';
import NewMovie from '../NewMovie';

afterEach(cleanup);

// as integration:
test('<NewMovie />', () => {
  const { queryByTestId, getByText, getByTestId } = render(<NewMovie />);
  expect(getByText('New Movie').tagName).toBe('H1');
  expect(getByTestId('page-title').textContent).toBe('New Movie');
  expect(queryByTestId('movie-form')).toBeTruthy();
});

test('<NewMovie /> test snapshot', () => {
  const { container } = render(<NewMovie />);
  expect(container.firstChild).toMatchSnapshot();
});
