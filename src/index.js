import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './Containers/App'; // This is how we clean up our folders and call them.
// import Hello from './NAHello';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; //imported for CSS classes.
import './Containers/App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


//we can pass Hello a property to send out to the HTML the {hello + React ninj thing}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
