import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import productReducer, { fetchProducts } from './store/productSlice';
import cartReducer, { getTotals } from './store/cartSlice';
import authReducer, { loadUser } from './store/authSlice';
import usersReducer, { fetchUsers } from './store/usersSlice';




const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    users: usersReducer,
  },

})
store.dispatch(fetchProducts());
store.dispatch(getTotals());
store.dispatch(loadUser(null));
store.dispatch(fetchUsers());




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

