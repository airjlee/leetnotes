import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';

const root = document.createElement("div");
root.className = "container";
document.body.appendChild(root);
const rootDiv = createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
