import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import {Provider} from 'react-redux';
import { firebase } from  './firebase/firebase';
import { Login, LogOut } from './actions/auth';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = ()=> {
  if(!hasRendered){
    ReactDOM.render( jsx, document.getElementById('root'))
    hasRendered = true
  }
}

ReactDOM.render( <p>Loading...</p>, document.getElementById('root'))


firebase.auth().onAuthStateChanged((user)=> {
  if(user) {
    store.dispatch(Login(user.uid))
    store.dispatch(startSetExpenses()).then(()=>{
      renderApp()
      if(history.location.pathname === '/'){
        history.push('/dashboard')
      }
    });
  } else {
    store.dispatch(LogOut())
    renderApp();
    history.push('/');
  }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
