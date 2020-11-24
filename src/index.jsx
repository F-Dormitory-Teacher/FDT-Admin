import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import stores from './stores';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { ToastContainer } from 'react-toastify';
import './util/util.scss';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Provider store={stores}>
    <BrowserRouter>
      <ToastContainer />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
