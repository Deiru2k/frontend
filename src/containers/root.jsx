import React from 'react';

// Router
import {Router, Route} from 'react-router';
import {createHistory} from 'history';

// Redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from 'reducers';

import Main from 'containers/main';

const history = createHistory();
const logger = createLogger();
const reducer = combineReducers(reducers);
const store = compose(
  applyMiddleware(thunk, logger),
)(createStore)(reducer);

// app
export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main} />
    </Router>
  </Provider>
);
