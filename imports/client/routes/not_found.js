import React  from 'react';
import { Route } from 'react-router';
import NotFound from '../containers/home/NotFoundPage.js';
const routes = [
  <Route path="*" component={NotFound} />
];
export default routes;
