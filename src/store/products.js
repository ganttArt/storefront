/* eslint-disable import/no-anonymous-default-export */
import superagent from 'superagent';

let initialState = {
  products: [
    // {
    //   category: 'kitchen',
    //   name: 'Frying Pan',
    //   description: 'Use this pan to fry vegetables',
    //   price: 30,
    //   inventoryCount: 300
    // },
    // {
    //   category: 'bath',
    //   name: 'Tooth Brush',
    //   description: 'Brush your teeth after eating',
    //   price: 500,
    //   inventoryCount: 20
    // },
    // {
    //   category: 'kitchen',
    //   name: 'Knife Set',
    //   description: 'You will need something to cut your vegetables',
    //   price: 30,
    //   inventoryCount: 300
    // }
  ],
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET_PRODUCTS':
      return {
        products: payload
      };

    default:
      return state;
  }
}

export const getAllProducts = () => (dispatch, getState) => {
  return superagent.get(`https://chrisgantt-api-server.herokuapp.com/product`)
    .then(response => {
      dispatch({
        type: 'GET_PRODUCTS',
        payload: response.body
      });
    });
}

export const filterByCategory = (category) => (dispatch, getState) => {
  return superagent.get(`https://chrisgantt-api-server.herokuapp.com/product`)
    .then(response => {
      return response.body.filter(product => product.category === category)
    })
    .then(response => {
      dispatch({
        type: 'GET_PRODUCTS',
        payload: response
      });
    });
}
