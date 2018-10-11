import React from 'react';
import ReactDOM from 'react-dom';
// import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Welcome from './components/Welcome';

const jsx = (
  <Welcome />
);

ReactDOM.render(jsx, document.getElementById('app'));