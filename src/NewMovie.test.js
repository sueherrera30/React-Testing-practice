import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from './MovieForm';

afterEach(cleanup);

test('<MovieForm />', () => {
  const { getByTestId, getByText } = render(<MovieForm />);
  expect(getByTestId('movie-input').tagName).toBe('INPUT');
  const submitbutton = getByText('Submit');
  expect(submitbutton).toBeTruthy();
  fireEvent.click(submitbutton);
  expect(getByText('congratulations, form sent!').tagName).toBe('P');
});
