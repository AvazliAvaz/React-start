import React from 'react';
import ReactDOM from 'react-dom/client';
import Test from './Test';
import New from "./New";
import Bootstrap from './Bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   
    <Test />
    <New/>
    <Bootstrap/>
    </>
  );