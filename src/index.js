import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import BasketProvider from './Context/BasketProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BasketProvider> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* </BasketProvider> */}
  </React.StrictMode>
);

