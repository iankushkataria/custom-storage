import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import ReactDOM from 'react-dom';
import App from './containers/App';

import { Provider } from 'react-redux';
import store from './store';

window.nodeId = 0;

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
