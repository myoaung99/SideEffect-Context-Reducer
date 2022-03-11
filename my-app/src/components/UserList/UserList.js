import React from "react";
import UserListItem from "./UserListItem";

const UserList = props => {

  const clickHandler = (event) => {
    props.onDelete(event.target.id.toString());
  }


  const showUserList = props.userList.map((user) => <UserListItem onClick={clickHandler} id={user.id} key={user.id} name={user.name} age={user.age} />)
  return (
    <div>
      {showUserList}
    </div>
  )
}

export default UserList;