import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { users } from './users';

export let rootReducer = combineReducers({
  users,
  routing: routerReducer
});
