import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ReduxThunk from 'redux-thunk';

import products from './products';
import category from './category';

let reducers = combineReducers({ products, data: category });

const store = () => {
  console.log('store thunk, create store', createStore(reducers, applyMiddleware(ReduxThunk)));
  return createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
}

export default store();
