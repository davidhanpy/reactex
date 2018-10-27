import React, { Component } from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import AppRouter from './router';
import Reducers from './reducer';
import './App.css';

const history = createBrowserHistory();
const store = createStore(connectRouter(history)(Reducers), {}, compose(
  applyMiddleware(
    routerMiddleware(history),
    logger,
  ),
));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter history={history}/>
      </Provider>
    );
  }
}

export default App;
