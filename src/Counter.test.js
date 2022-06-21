import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Counter from './Counter';

afterEach(cleanup);
test('<counter />', () => {
  // normal
  const wrapper = render(<Counter />);

  // destructuring:
  const { debug, getByTestId } = render(<Counter />);

  // console.log(wrapper.getByText('0'));
  // console.log(wrapper.getAllByTestId('select-option'));

  // debug:
  // debug();
  // por el contenido del elemento:
  expect(wrapper.getByText('0').textContent);
  // ejemplos
  expect(wrapper.getByText('0').tagName).toBe('BUTTON');
  expect(wrapper.getByText('hello counter!').tagName).toBe('P');
  expect(wrapper.getByText('hello counter!')).toBeTruthy();
  expect(wrapper.getByAltText('logo')).toBeTruthy();
  expect(wrapper.getAllByTestId('select-option')).toBeTruthy();
  expect(wrapper.getAllByTestId('select-option')).toBeTruthy();
  const options = wrapper.getAllByTestId('select-option');
  expect(options[0].selected).toBeTruthy();
  expect(options[3].selected).toBeFalsy();
  expect(wrapper.getByTestId('select-option').tagName).toBe('OPTION');
  expect(wrapper.getByTestId('select-option').index).toBe(0);
  expect(wrapper.getByText('llo cou', { exact: false })).toBeTruthy();
  expect(wrapper.getByTestId('counter-button').tagName).toBe('BUTTON');
  expect(wrapper.getByTestId('counter-button').textContent).toBe('0');

  // ejemplos destructurados:
  expect(getByTestId('counter-button').tagName).toBe('BUTTON');
  // primer valor es 0
  expect(getByTestId('counter-button').textContent).toBe('0');
});


test('Testing click', () => {
  // const wrapper = render(<Counter />);
  const { debug, getByTestId } = render(<Counter />);
  const button = getByTestId('counter-button');
  fireEvent.click(button);
  expect(button.textContent).toBe('1');
  fireEvent.click(button);
  expect(button.textContent).toBe('2');
  fireEvent.click(button);
  expect(button.textContent).toBe('3');
  fireEvent.click(button);
  expect(button.textContent).toBe('4');
});
