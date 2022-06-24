import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from '../MovieForm';

afterEach(cleanup);

// const sumbitForm = () => console.log('hola');
const sumbitFormfunction = jest.fn();
// as unit for new form
test('<MovieForm />', () => {
  const {
    getByTestId, getByText, getByLabelText,
  } = render(<MovieForm sumbitForm={sumbitFormfunction} />);
  expect(getByTestId('movie-input').tagName).toBe('INPUT');
  const submitbutton = getByText('Submit');
  expect(submitbutton).toBeTruthy();

  // si esto no funciona:

  // getByLabelText('Text').value = 'hello';
  // fireEvent.change(getByLabelText('Text'));

  // entonces, usar esto:
  // nos permite pasar en los parametros un objeto con otro objeto que nos da el valor del target:
  fireEvent.change(getByLabelText('Text'), { target: { value: 'hello' } });

  fireEvent.click(submitbutton);
  expect(sumbitFormfunction).toHaveBeenCalledTimes(1);
  expect(sumbitFormfunction).toHaveBeenCalledWith({
    text: 'hello',
  });
});
