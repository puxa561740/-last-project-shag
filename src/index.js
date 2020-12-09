import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import state from './ReduxStore/reduser/combineRedusers';

const store = createStore(state);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
     <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
