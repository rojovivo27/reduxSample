import fetch from 'isomorphic-fetch';
import {
  JSON_HEADERS,
  checkStatus,
  parseJSON
} from '../helpers/fetch';

export const PEOPLE_URI = 'http://148.202.44.182:3000/v1/users/';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export function setUsers( users ) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function receiveUsers () {
  return function( dispatch ) {
    return fetch(PEOPLE_URI, {
      method: 'GET',
      headers: JSON_HEADERS,
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(json => {
      dispatch( setUsers ( json.users ) );
    });
  };
}

export const ADD_USER = 'ADD_USER';

function addUser(user) {
  return {
    type: ADD_USER,
    user
  };
}

export function createUser(firstName, lastName, email){
  return function( dispatch ) {
    return fetch(PEOPLE_URI, {
      method: 'POST',
      headers: JSON_HEADERS,
      body: JSON.stringify({
        firstName,
        lastName,
        email
      })
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(user => dispatch( addUser ( user ) ) );
  };
}
