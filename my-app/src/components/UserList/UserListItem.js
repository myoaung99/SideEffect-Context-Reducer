import React from "react";

const UserListItem = props => {

  return (
    <li id={props.id} onClick={props.onClick}>{props.name} ({props.age})</li>
  )
}

export default UserListItem;