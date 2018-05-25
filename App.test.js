import React from 'react';
import Andreea from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Andreea />).toJSON();
  expect(rendered).toBeTruthy();
});
