import { connect } from 'react-redux';

import UsersComponent from './UsersComponent';

import { receiveUsers } from '../../actions/users';

const mapStateToProps = (state) => {
  return{
    users: state.users
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    receiveUsers: (id, name) => dispatch( receiveUsers(id, name) )
  };
};

const UsersContainer = connect (
  mapStateToProps,
  mapDispatchToProps)
  (UsersComponent);

export default UsersContainer;
