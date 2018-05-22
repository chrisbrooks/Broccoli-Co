import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import AppWithData from 'containers/App/AppWithData';
import './sass/main.scss';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <AppWithData />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
