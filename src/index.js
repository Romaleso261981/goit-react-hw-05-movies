import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import 'modern-normalize';
import './index.css';

const basename =
  process.env.NODE_ENV !== 'production'
    ? '/goit-react-hw-05-movies'
    : '/goit-react-hw-05-movies/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
