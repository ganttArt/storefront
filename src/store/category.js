let initialState = { results: [] };

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log('category reducer, state', state);
  console.log('category reducer, type', type);
  console.log('category reducer, payload', payload);
  switch(type) {
    case 'GET':
      console.log('category reducer, in GET');
      // return payload
      return { results: payload }
    default:
      return state
  }
}
