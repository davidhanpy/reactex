import React, { Component } from 'react';
import { createStore,combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import AppRouter from './router';
import Reducers from './reducer';
import './App.css';

const history = createBrowserHistory();
const store = createStore(
  combineReducers({router:connectRouter(history), ...Reducers}),
  {},
  compose(applyMiddleware(routerMiddleware(history), reduxThunk, logger)),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter history={history} />
      </Provider>
    );
  }
}

export default App;
