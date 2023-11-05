import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { receiveTea, receiveTeas, removeTea } from './store/teaReducer';

const initialState = {
  teas: {
    1: {
      id: 1,
      flavor: "green",
      price: 5.99
    }
  }
};

const store = configureStore(initialState);
window.store = store;
window.receiveTea = receiveTea;
window.receiveTeas = receiveTeas;
window.removeTea = removeTea;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


