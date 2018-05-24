import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'containers/App/App';
import './sass/main.scss';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

registerServiceWorker();

render(App);

if (module.hot) {
  module.hot.accept('containers/App/App', () => {
    render(App);
  });
}
