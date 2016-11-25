import {createStore} from 'redux';


//actions
export const login = function(username) {
  return {
    type: 'LOGIN',
    value: username
  }
}

export const logout = function() {
    return  {
      type: 'LOGOUT',
      value: 'guest'
    };
}

//reducer
const auth = function(state = {status: 'logged out', value: 'guest'}, action) {
  switch (action.type) {
    case 'LOGIN':
      /*return Object.assign({}, state, {
        status: 'logged in',
        value: action.value
      })*/
      return {...state, status: 'logged in', value: action.value}
    case 'LOGOUT':
      /*return Object.assign({}, state, {
        status: 'logged out',
        value: action.value
      })*/
      return {...state, status: 'logged out', value: action.value}
    default:
      return state;
  }
}

//store
export const store = createStore(auth);
