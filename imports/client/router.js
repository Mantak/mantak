import React  from 'react';
import { Router, browserHistory, Route, IndexRoute} from 'react-router';

import Home from './home';

const appRoutes = [
  <Route path="home" component={Home}/>
];

const router = <Router history={browserHistory} routes={appRoutes}/>;
export default router;
