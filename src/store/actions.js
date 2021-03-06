import superagent from 'superagent';

let api = 'https://chrisgantt-api-server.herokuapp.com';

export const getRemoteData = () => dispatch => {
  return superagent.get(`${api}/category`)
    .then(response => {
      console.log('DATA:', response.body);
      dispatch(getAction(response.body))
    })
}

export const getAction = data => {
  console.log('in getAction');
  return {
    type: 'GET_CATEGORIES',
    payload: data
  }
}