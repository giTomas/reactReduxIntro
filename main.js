import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
import Auth from './Auth.jsx';
// import {auth} from './Auth.jsx';
import {store} from './Auth.jsx';

console.log(store.getState());

const render = function() {

  ReactDOM.render(
    <Auth state={store.getState()}/>,
    document.getElementById('root')
  );

};


store.subscribe(render);
render();
