import React from "react";

const NewUserForm = (props) => {
  const changeHandler = (event) => {
    props.onUpdate(event.target.value)
  }
  return (
    <div>
      <label>{props.label}</label>
      <input type={props.type} value={props.value} onChange={changeHandler}></input>
    </div>
  )
}

export default NewUserForm;