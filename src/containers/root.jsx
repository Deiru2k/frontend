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
import ShipCards from 'containers/cards/shipCards';
import ShipCard from 'containers/cards/shipCard';

const history = createHistory();
const logger = createLogger();
const reducer = combineReducers(reducers);
const store = compose(
  applyMiddleware(thunk, logger),
)(createStore)(reducer);

// app
export default () => (
  <Provider store={store}>
    <Router history={history} component={Main}>
      <Route path="/" component={ShipCards} />
      <Route path=":id" component={ShipCard} />
    </Router>
  </Provider>
);
