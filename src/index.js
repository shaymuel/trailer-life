import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { CartProvider } from './contexts/cart.context';
import { ContextProvider } from './contexts/new.context';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ContextProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
