import React from 'react';

import { Route, Redirect } from 'react-router';
import { createHistory } from 'history';

import Containers from 'containers';

const history = createHistory();

export default (
  <Route component={Containers.Root}>
    <Route path="/catalog" component={Containers.Ships.List} />
    <Route path="/catalog/:id" component={Containers.Ships.Id} />
    <Redirect from="/" to="/catalog" />
  </Route>
);

export { history };
