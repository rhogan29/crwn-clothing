import { createStore, applyMiddleware } from 'redux';
// import middleware
import logger from 'redux-logger';

// we need to add middleware to our store, so that when actions are fired, we can catch them, and display them. 
import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;