import {
  RECEIVE_USERS,
  ADD_USER
} from '../actions/users'

export function users(state = [], action = {}) {
  switch(action.type){
    case RECEIVE_USERS:
      return action.users;
    case ADD_USER:
      return [
        action.user,
        ...state
      ];
    default:
      return state;
  }
}
