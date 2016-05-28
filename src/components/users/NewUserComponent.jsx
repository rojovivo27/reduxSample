import React from 'react';

let name = '', lastName = '', email = '';

export default function NewUserComponent({
  createUser
}) {
  return (
    <div>
      <input type="text" placeholder="Name..." ref={node => name = node}/>
      <input type="text" placeholder="Last Name..." ref={node => lastName = node}/>
      <input type="text" placeholder="Email..." ref={node => email = node}/>
      <button onClick={() => {
        createUser(name.value, lastName.value, email.value);
        name.value = '';
        lastName.value = '';
        email.value = '';
      }}>
        Create User
      </button>
    </div>
  );
}
