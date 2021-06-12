/* eslint-disable import/no-anonymous-default-export */
let initialState = {
  products: [
    {
      category: 'kitchen',
      name: 'Frying Pan',
      description: 'Use this pan to fry vegetables',
      price: 30,
      inventoryCount: 300
    },
    {
      category: 'bath',
      name: 'Tooth Brush',
      description: 'Brush your teeth after eating',
      price: 500,
      inventoryCount: 20
    },
    {
      category: 'kitchen',
      name: 'Knife Set',
      description: 'You will need something to cut your vegetables',
      price: 30,
      inventoryCount: 300
    }
  ],
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'FILTER':
      let products = initialState.products.filter(product => product.category === payload);

      return {
        products,
        activeCategory: payload,
        categories: state.categories,
        cart: state.cart
      };

    case 'RESET':
      return {
        products: initialState.products,
      };

    default:
      return state;
  }
}

export const filterByCategory = (category) => {
  return {
    type: 'FILTER',
    payload: category
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}
