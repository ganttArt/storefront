/* eslint-disable import/no-anonymous-default-export */
let initialState = {
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
}

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'UPDATE_ACTIVE_CATEGORY':
      return {
        activeCategory: payload,
        categories: state.categories,
      }

    case 'RESET':
      return {
        activeCategory: initialState.activeCategory,
        categories: initialState.categories,
      };

    default:
      return state;
  }
}

export const updateActiveCategory = (category) => {
  return {
    type: 'UPDATE_ACTIVE_CATEGORY',
    payload: category
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}
