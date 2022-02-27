import 'react-native';
import React from 'react';
import TimerClock from '../TimerClock';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

it('Renders corectly', () => {
  renderer.create(<TimerClock text="hej" number={2} />);
});

// it('renders text properly', () => {
//   const {getByText} = render(<TimerClock number={3} text="hello" />);
// });

test('When you click - button it should increase the number', () => {
  const {getByTestId} = render(<TimerClock number={3} text="Rest time" />);
  fireEvent.press(getByTestId('plusbutton'));
  expect(getByTestId('text')).toEqual('4');
});
