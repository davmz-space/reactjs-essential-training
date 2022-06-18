import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.createElement(
  //   "h1",
  //   { style: { color: "blue" } },
  //   "Heyyyyyy Everyone!"
  // ),

  // React.createElement(
  //   "ul",
  //   null,
  //   React.createElement("li", null, "Monday"),
  //   React.createElement("li", null, "Tuesday"),
  //   React.createElement("li", null, "Wednesday"),
  //   React.createElement("li", null, "Thursday"),
  //   React.createElement("li", null, "Friday"),
  // ),

  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
    <li>Thursday</li>
    <li>Friday</li>
  </ul>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
