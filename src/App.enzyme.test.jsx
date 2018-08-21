import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

/**
 * Smoke test
 * */

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});

