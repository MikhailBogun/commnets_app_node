import React from 'react';
import ReactDOM from 'react-dom/client';
import './declaration.d.ts';
import './index.css';
import App from './components/App';
import {Provider} from "react-redux";


import {store} from "./reducers";

// import reportWebVitals from './reportWebVitals';

import rd from 'react-dom';

const rootNode = document.getElementById('root');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App></App>
      </Provider>
  </React.StrictMode>
);

// reportWebVitals();