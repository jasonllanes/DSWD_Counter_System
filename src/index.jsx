import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/styles/index.css'; // Fixed CSS path

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);