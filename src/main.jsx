import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { RouterProvider } from 'react-router-dom';
import router from './routes/Route';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import { AppBar } from './components/AppBar/AppBar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppBar/>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
