import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Counter from "./components/counter";

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Counter />,
  document.getElementById('root')
);

reportWebVitals();
