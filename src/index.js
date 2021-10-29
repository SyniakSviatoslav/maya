import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import AppComponent from './app';
import { BrowserRouter } from 'react-router-dom';

const AppWithRouting = () => (
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>
)

ReactDOM.render(
  <AppWithRouting />,
  document.getElementById('root')
);
