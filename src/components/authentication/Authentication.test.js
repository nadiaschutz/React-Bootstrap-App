import React from 'react';
import ReactDOM from 'react-dom';
import Authentication from './Authentication';

it('connects to Firebase', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Authentication />, div);
});
