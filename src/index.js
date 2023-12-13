import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BasketProvider from './Context/BasketContext';
import WishlistProvider from './Context/WishlistContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasketProvider>
      <WishlistProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
      </WishlistProvider>
    </BasketProvider>
  </React.StrictMode>
);

