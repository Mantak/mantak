import React  from 'react';
import { Route } from 'react-router';

import OverLord from '../components/admin/over_lord';
import Config from '../components/admin/config';

const routes = [
  <Route path="/admin" component={OverLord}>
    <Route path="/admin/config" component={Config} />
  </Route>
];
export default routes;
