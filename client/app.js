import React  from 'react';
import ReactDOM  from 'react-dom';
import {Provider}  from 'react-redux';

import Store from '../imports/client/store';
import AppRouter from '../imports/client/app_router';

Meteor.startup(()=> {
  ReactDOM.render(
    <Provider store={Store}>
      {AppRouter}
    </Provider>,
    document.getElementById('app')
  );
});
