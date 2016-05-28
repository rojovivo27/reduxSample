import React, { Component } from 'react';

export default class UsersComponent extends Component{

  componentDidMount() {
    const { receiveUsers } = this.props;

    receiveUsers();
  }

  render() {

    const { users } = this.props;

    return (
      <div>
        <h1>Users</h1>
        <ul>
        {users.map((user, index) =>
          <li key={user._id}>
          {user.firstName}{' '}{user.lastName} <br />
          </li>
        )}
        </ul>
      </div>
    );
  }
}
