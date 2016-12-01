import React  from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../components/layout';
import SubLayout from '../components/sub_layout';
import Home from '../components/home';
import About from '../components/about';

import FormPage from '../containers/home/FormPage';
import TablePage from '../containers/home/TablePage';

const routes = [
  <Route path="/" component={Layout}>
    <IndexRoute  component={Home}/>,
    <Route path="form" component={FormPage}/>
    <Route path="table" component={TablePage}/>
  </Route>,
  <Route path="/sub" component={SubLayout}>
    <IndexRoute  component={Home}/>,
    <Route path="/sub/about" component={About}/>,
  </Route>

];
export default routes;
