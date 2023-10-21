import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtFyKO4ARWf3GBCjIh82Vmgrgkqz5H16I",
  authDomain: "arrabalmusicstore.firebaseapp.com",
  projectId: "arrabalmusicstore",
  storageBucket: "arrabalmusicstore.appspot.com",
  messagingSenderId: "875940012906",
  appId: "1:875940012906:web:5e6edc786cb97c2e9a7b13"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
