import React  from 'react';
import { Router, browserHistory} from 'react-router';
import Routes from './routes';

const appRouter = <Router history={browserHistory} routes={Routes}/>;

export default appRouter;
