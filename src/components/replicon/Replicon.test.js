import React from 'react';
import ReactDOM from 'react-dom';
import Replicon from './Replicon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Replicon />, div);
});
