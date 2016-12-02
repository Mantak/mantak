import React  from 'react';
import ReactDOM  from 'react-dom';
import {Provider}  from 'react-redux';

import AppStore from '../imports/client/store';
import AppRouter from '../imports/client/router';

Meteor.startup(()=> {
  ReactDOM.render(
    <Provider store={AppStore}>
      {AppRouter}
    </Provider>,
    document.getElementById('app')
  );
});
