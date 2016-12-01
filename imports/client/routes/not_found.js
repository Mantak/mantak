import React  from 'react';
import { Route } from 'react-router';
import NotFound from '../components/not_found';
const routes = [
  <Route path="*" component={NotFound} />
];
export default routes;
