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
  categories: [
    {
      displayName: 'Kitchen',
      normalizedName: 'kitchen',
      description: 'Kitchen gadgets and cookery'
    },
    {
      displayName: 'Bath',
      normalizedName: 'bath',
      description: 'Things to use in the bathroom'
    },
  ],
  activeCategory: 'all',
  cart: [],
};

const setViewState = (state = initialState, action) => {
  let { type, payload } = action;
  console.log('in action');

  switch (type) {
    case 'ADD_TO_CART':
      return {
        products: state.products,
        activeCategory: state.activeCategory,
        categories: state.categories,
        cart: [...state.cart, payload]
      }

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
        activeCategory: initialState.activeCategory,
        categories: initialState.categories,
        cart: state.cart
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

export default setViewState;
