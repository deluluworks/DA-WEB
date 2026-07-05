import { StrictMode } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';

// _ds_bundle.js expects global React/ReactDOM (UMD-style); expose our own instances so it doesn't get a second copy.
window.React = React;
window.ReactDOM = ReactDOM;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
