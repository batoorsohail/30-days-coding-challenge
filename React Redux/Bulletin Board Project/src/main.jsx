import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './index.css';
import { fetchUsers } from './features/users/usersSlice.js';

store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
