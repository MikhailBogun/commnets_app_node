import React from 'react';
import ReactDOM from 'react-dom/client';
import './declaration.d.ts';
import './index.css';
import App from './components/App';
// import reportWebVitals from './reportWebVitals';

import rd from 'react-dom';

const rootNode = document.getElementById('root');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

// reportWebVitals();