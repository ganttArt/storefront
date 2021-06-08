import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

function Entry() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<Entry />, root);
