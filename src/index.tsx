import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import { Provider } from 'react-redux';
import { store } from 'features/store';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

