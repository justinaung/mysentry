import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from './ErrorBoundary';

Sentry.init({
 dsn: "https://95f15c58fa4e40aca1b75fb276ac0523@sentry.io/1339606"
});

ReactDOM.render(
  <ErrorBoundary>
    <App /> 
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
