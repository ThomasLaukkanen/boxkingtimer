import 'react-native';
import React from 'react';
import TimerClock from './../TimerClock';

import renderer from 'react-test-renderer';

it('Renders corectly', () => {
  renderer.create(TimerClock);
});
