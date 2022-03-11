import React, { useState } from 'react';

import NewUserForm from './NewUserForm';

const NewUser = (props) => {

  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const updateNameHandler = (updateValue) => {
    setUserName(updateValue)
  }
  const updateAgeHandler = (updateValue) => {
    setUserAge(updateValue)
  }

  const submitHandler = event => {
    event.preventDefault();
    const newUser = { id: Math.random().toString(), name: userName, age: userAge }
    props.onUpdateUserList(newUser)
    setUserName('');
    setUserAge('');
  }

  return (
    <form onSubmit={submitHandler}>
      <NewUserForm label={'User'} value={userName} type={'Text'} onUpdate={updateNameHandler} />
      <NewUserForm label={'Age'} value={userAge} type={'Number'} onUpdate={updateAgeHandler} />
      <button>Add</button>
    </form>
  )
}

export default NewUser;