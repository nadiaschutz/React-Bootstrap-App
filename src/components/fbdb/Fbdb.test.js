import React from 'react';
import ReactDOM from 'react-dom';
import Fbdb from './Fbdb';

it('connects to Firebase', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fbdb />, div);
});
