import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import reducerA from '../core/client/reducers/reducer_a';
import reducerB from '../core/client/reducers/reducer_b';

const logger = createLogger();

const reducers = combineReducers({
  reducerA,
  reducerB
});
const preloadedState = {};
const middlewares = [ReduxThunk, logger];

const Store = createStore(reducers, preloadedState, applyMiddleware(...middlewares));
export default Store;
