import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import combineReducers from './root-reducer'
const setUpMiddleware = [logger];

const store = createStore( combineReducers , applyMiddleware(...setUpMiddleware));

export default store;