import { createStore, combineReducers, applyMiddleware } from 'redux';

import { reducer as counter } from './counter';

import logger from './middlewares/logger';

const rootReducer = combineReducers({
  counter,
  foo: (state = { hello: 'world'}, action) => state,
});

export default createStore(rootReducer, applyMiddleware(logger));