import { connect } from 'react-redux';

import NewUserComponent from './NewUserComponent';

import { createUser } from '../../actions/users';

const mapStateToProps = (state) => {
  return{};
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    createUser: (name, lastName, email) => dispatch(
      createUser(name, lastName, email)
    )
  };
};

const NewUserContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(NewUserComponent);

export default NewUserContainer;
