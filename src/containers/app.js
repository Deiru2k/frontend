import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import store from 'config/store';
import Routes, { history } from 'config/routes';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          {Routes}
        </Router>
      </Provider>
    );
  }
}
