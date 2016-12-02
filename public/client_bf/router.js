import React  from 'react';
import { Router, browserHistory} from 'react-router';

import CoreRoutes from '../core/client/routes';

const appRoutes = [
  ...CoreRoutes,
];

const router = <Router history={browserHistory} routes={appRoutes}/>;

export default router;
