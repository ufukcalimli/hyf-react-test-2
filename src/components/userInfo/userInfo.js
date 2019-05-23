import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <div>
      <ul>
        <li className="name">{`${user.name} ${user.surname}`}</li>
        <li>Email {user.email}</li>
        <li>Gender {user.gender}</li>
        <li>Age {user.age}</li>
        <li>Region {user.region}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
