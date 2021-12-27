// import dependencies
import React from 'react';

// import react-testing methods
import { render, screen } from './test-utils';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';

import HelloUser from '../src/HelloUser';

test('loads and displays greeting', async () => {
  render(<HelloUser username='John' />);

  const div = await screen.findByTestId('hello-user');
  expect(div).toBeVisible();
  expect(div.firstChild).toHaveTextContent('Hello John');
});
