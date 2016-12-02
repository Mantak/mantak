import React  from 'react';
import { Router, browserHistory, Route, IndexRoute} from 'react-router';

import Layout from './layout/layout';
import Home from './home';

const appRoutes = [
  <Route path="/" component={Layout}>
    <IndexRoute  component={Home}/>,
  </Route>,
];

const router = <Router history={browserHistory} routes={appRoutes}/>;
export default router;
