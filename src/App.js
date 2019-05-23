import React, { Component } from 'react';
import './App.css';

// components
import NameList from './components/nameList/nameList';
import UserInfo from './components/userInfo/userInfo';
import UserAvatar from './components/userAvatar/userAvatar';
import FetchButton from './components/fetchButton/fetchButton';

class App extends Component {
  state = {
    data: [],
    currentUser: null,
  };

  getUsers() {
    fetch('https://uinames.com/api/?amount=5&ext')
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res });
      });
  }

  getCurrentUser = name => {
    const { data } = this.state;
    const currentUser = data.find(user => user.name === name);
    this.setState({ currentUser: currentUser });
  };

  render() {
    const { data, currentUser } = this.state;

    const namesList = data.map(user => {
      return user.name;
    });

    return (
      <div className="App">
        <header className="App-header">
          {/* <FetchButton getUsers={this.getUsers} /> this component did not work(I don't know why)*/}
          <button onClick={() => this.getUsers()}>Get Users</button>
        </header>
        <div className="content">
          <div className="right-side">
            <NameList className="names-list" names={namesList} getCurrent={this.getCurrentUser} />
          </div>
          <div className="left-side">
            {currentUser ? (
              <div>
                <UserAvatar imgPath={currentUser.photo} />
                <UserInfo className="user-info" user={currentUser} />
              </div>
            ) : (
              <p>No user to show yet</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
