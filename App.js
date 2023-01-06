import React, {Fragment, useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName,uCollege, uAge)=>{
setUsersList((prevUsersList)=>{
  return [...prevUsersList, {name: uName, college:uCollege, age: uAge, id: Math.random().toString()}];
});
  }
  return (
    <Fragment>
  <AddUser onAddUser={addUserHandler}/>
  <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
