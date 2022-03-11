import React, { useState } from 'react';
import './App.css';
import NewUser from './components/NewUser/NewUser';
import UserList from './components/UserList/UserList';

const User_List = [];

function App() {
  const [userList, setUserList] = useState(User_List);

  const updateUserListHandler = (newUser) => {
    setUserList(prev => {
      const prevArr = [...prev];
      prevArr.unshift(newUser);
      return prevArr;
    });
  }

  const deleteHandler = deleteUserId => {
    setUserList(prev => {
      const deletedArr = prev.filter(user => user.id !== deleteUserId);
      return deletedArr;
    });
  }

  console.log("in app");
  console.log(userList);
  return (
    <div>
      <NewUser onUpdateUserList={updateUserListHandler} />
      <UserList userList={userList} onDelete={deleteHandler} />
    </div>


  );
}

export default App;
