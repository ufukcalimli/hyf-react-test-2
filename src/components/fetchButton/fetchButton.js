import React from 'react';

const FetchButton = ({ getUsers }) => {
  return <button onClick={getUsers}>Get Users!</button>;
};

export default FetchButton;
