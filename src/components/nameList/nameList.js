import React from 'react';

const NameList = ({ names, getCurrent }) => {
  return (
    <ul>
      {names.map(name => {
        return (
          <li key={name} onClick={() => getCurrent(name)}>
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default NameList;
