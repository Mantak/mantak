import React  from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../components/layout';
import SubLayout from '../components/sub_layout';
import Home from '../components/home';
import About from '../components/about';

const routes = [
  <Route path="/" component={Layout}>
    <IndexRoute  component={Home}/>,
    <Route path="about" component={About}/>,
  </Route>,
  <Route path="/sub" component={SubLayout}>
    <IndexRoute  component={Home}/>,
    <Route path="/sub/about" component={About}/>,
  </Route>
];
export default routes;
