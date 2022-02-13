import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Lifecycle1 from './Lifecycle1';
import Lifecycle2 from './Lifecycle2';
//import Lifecycle3 from './Lifecycle3';
import User from './User';
import Lifecycle4 from './Lifecycle4';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
   
    <Lifecycle1 />
    <Lifecycle2 />
    <User />
    <Lifecycle4 />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
