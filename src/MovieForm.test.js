import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from './MovieForm';

afterEach(cleanup);

const sumbitForm = jest.fn();
// as unit for new form
test('<MovieForm />', () => {
  const { getByTestId, getByText } = render(<MovieForm sumbitForm={sumbitForm} />);

  expect(getByTestId('movie-input').tagName).toBe('INPUT');
  const submitbutton = getByText('Submit');
  expect(submitbutton).toBeTruthy();

  fireEvent.click(submitbutton);
});
