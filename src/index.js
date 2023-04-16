import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Test from './Test';
import New from "./New";
import Bootstrap from './Bootstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Test />
    <New/>
    <Bootstrap/>
    </>
  );

