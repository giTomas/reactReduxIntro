import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
import Auth from './Auth.jsx';
// import {auth} from './Auth.jsx';
import {createStore} from 'redux';
import {store} from './store.js';
// import {Provider} from 'react-redux';



const render = function() {

  ReactDOM.render(
      <Auth state={store.getState()}/>,
      document.getElementById('root')
  );

};


store.subscribe(render);
render();
