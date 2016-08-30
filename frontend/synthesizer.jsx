import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<h1>hi</h1>, document.getElementById('root'));
});
