import React from 'react';
import {createStore} from 'redux';


//actions
function login(username) {
  return {
    type: 'LOGIN',
    value: username
  }
}

function logout() {
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

//react component
class Auth extends React.Component{
  constructor(props) {
    super(props);
    //::this.fn === ::this.this.fn === this.fn.bind(this)
    this.handleLogin = ::this.handleLogin;
    this.handleLogout = ::this.handleLogout;
  }

  handleLogin() {
    let {value: username} = this.refs.username;
    // dispatch action
    /*store.dispatch({
      type: 'LOGIN',
      value: username
    });*/
    store.dispatch(login(username));
  }
  handleLogout() {
    //dispatch action
    /*store.dispatch({
      type: 'LOGOUT',
      value: 'guest'
    })*/
    store.dispatch(logout());
    this.refs.username.value = '';
  }

  render() {
    const {status, value} = this.props.state;
    let button = status === 'logged in' ?
                 <button onClick={this.handleLogout}>Log out</button> :
                 <input type='button' value='Login' onClick={this.handleLogin}/>;

    return (
      <div>
        <input type='text' ref='username'/>
        {button}
        {/* <input type='button' value='Login' onClick={this.handleLogin}/> */}
        <h1>Current state is {`${status} as ${value}`}</h1>
      </div>
    );
  }
}



// react component
/*
var Auth = React.createClass({
  handleLogin: function() {
    let username = this.refs.username.value;
    // dispatch action
    store.dispatch({
        type: 'LOGIN',
      value: username
    });
  },
  handleLogout: function() {

  },
  render: function() {
    return (
      <div>
       <input type="text" ref="username" />
       <input type="button" value="Login" onClick={this.handleLogin} />
       <h1>Current state is {this.props.state.status + ' as ' + this.props.state.value}</h1>
      </div>
    );
  }
});*/

export default Auth;
