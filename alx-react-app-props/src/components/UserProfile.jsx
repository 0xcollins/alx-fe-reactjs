import React, { useContext } from 'react';
import UserContext from './UserContext'; // Adjust the path based on where UserContext.js is located

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
