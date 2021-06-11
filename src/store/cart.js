/* eslint-disable import/no-anonymous-default-export */
let initialState = {
  cart: [],
}

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      return {
        cart: [...state.cart, payload]
      }

    case 'RESET':
      return {
        cart: initialState.cart
      };

    default:
      return state;
  }
}

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}
