import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('alerts a String to from the browser', () => {
  alert('This is a string');
});
