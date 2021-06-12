import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ReduxThunk from 'redux-thunk';

import products from './products';
import categories from './categories';
import cart from './cart';

let reducers = combineReducers({ products, categories, cart });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
}

export default store();
