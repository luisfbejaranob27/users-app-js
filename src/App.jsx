import { useEffect, useReducer, useState } from 'react';
import { userReducer } from './reduce/UserReduce.js';
import { userActions } from './reduce/UserActions.js';
import { userInitialState } from './data/UserInitialState.js';
import { getUsers } from './services/UserService.js';
import { ListUsers } from './components/list-users/ListUsers.jsx';
import { FormUser } from './components/form-user/FormUser.jsx';
import './App.css';

function App() {
  const usersInitialState = getUsers();
  const [users, dispatch] = useReducer(userReducer, usersInitialState);
  console.log('App users: ', users);

  const [userSelected, setUserSelected] = useState(userInitialState);

  function handleAddUser(user) {
    dispatch({
      type: userActions.ADD_USER,
      payload: user
    });
  }

  const handlerSelectUser = (user) => {
    setUserSelected(user);
  };

  function handleEditUser(user) {
    dispatch({
      type: userActions.EDIT_USER,
      payload: user
    });
  }

  function handleRemoveUser(id) {
    dispatch({
      type: userActions.REMOVE_USER,
      payload: id
    });
  }

  useEffect(() => {
    sessionStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <>
      <div className={'container-fluid'}>
        <div className={'row main-app'}>
          <div className={'col'}>
            <ListUsers users={users} handlerSelectUser={handlerSelectUser} handleRemoveUser={handleRemoveUser} />
          </div>
          <div>
            <button className={'btn btn-primary'}>Create</button>
          </div>
          <div className={'col'}>
            <FormUser handleAddUser={handleAddUser} users={users} userSelected={userSelected} handleEditUser={handleEditUser} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
