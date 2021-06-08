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
      displayName: 'Kitchen',normalizedName: 'kitchen',
      description: 'Kitchen gadgets and cookery'
    },
    {
      displayName: 'Bath',
      normalizedName: 'bath',
      description: 'Things to use in the bathroom'
    },
  ],
  activeCategory: 'kitchen'
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'FILTER':
      let filtered = state.filter(product => product.category === payload);
      return { filtered };

    case 'RESET':
      return initialState;

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
