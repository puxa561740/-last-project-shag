import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import LastStepShag from './App';
import state from './ReduxStore/reduser/combineRedusers';


ReactDOM.render(
  <BrowserRouter>
    <Provider store={state}>
      <LastStepShag />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
