import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const todos = ["todo1", "todo2", "todo3"];






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ul>
    {todos.map((todo,index)=>(
    <li key={index}>{todo}</li>))}
    </ul>

    <App />
  
    </>
  );

