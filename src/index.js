import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./config/routes";
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

