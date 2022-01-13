import React from 'react';
import ReactDOM from 'react-dom';

import { Reset } from './style/Reset';
import { Base } from './style/Base';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Base />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);