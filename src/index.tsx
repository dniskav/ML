import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './client/redux/store/configureStore';
import App from './client/App';
import { IApplicationState } from './client/redux/types';

const initialState: IApplicationState = (window as any).initialReduxState;
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);