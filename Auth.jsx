import React from 'react';
import {createStore} from 'redux';

//reducer
const auth = function(state = {status: 'logged out', value: 'guest'}, action) {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({
        status: 'logged in',
        value: action.value
      })
    case 'LOGOUT':
      return Object.assign({}, state, {
        status: 'logged out',
        value: action.value
      })
    default:
      return state;
  }
};

//store

const store = createStore(auth);

//react component

class Auth extends React.Component{
  constructor(props) {
    super(props);
    //::this.fn === ::this.this.fn === this.fn.bind(this)
    this.handleLogin = ::this.handleLogin;
    this.handleLogout = ::this.handleLogout;
  }

  handleLogin() {
    let username = this.refs.username.values;
    // dispatch action
    store.dispatch({
      type: 'LOGIN',
      value: username
    });
  }
  handleLogout() {

  }

  render() {
    return (
      <div>
        <input type='text' ref='username'/>
        <input type='button' value='Login' onClick={this.handleLogin}/>
        <h1>Current state is {this.props.state.status +  ' as ' +
          this.props.state.value
        }</h1>
      </div>
    );
  }
}


/*
const Auth = React.createClass({
  handleLogin: function() {
    let username = this.refs.username.value;
    //dispatch action
    store.dispatch({
      type: 'LOGIN',
      value: username
    });
  },
  handleLogout: function() {},
  render: function() {
    return (
      <div>
        <input type='text' ref='username'/>
        <input type='button' value='login' onClick={this.handleLogin}/>
        <h1>Current state is ...</h1>
      </div>
    );
  }
});*/

export default Auth;
