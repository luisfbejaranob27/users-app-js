import { useEffect, useReducer, useState } from 'react';
import { getUsers } from '../services/UserService.js';
import { userReducer } from '../reduce/UserReduce.js';
import { userInitialState } from '../data/UserInitialState.js';
import { userActions } from '../reduce/UserActions.js';

export const useUsers = () => {
  const usersInitialState = getUsers();
  const [users, dispatch] = useReducer(userReducer, usersInitialState);

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

  return {
    users,
    userSelected,
    handleAddUser,
    handlerSelectUser,
    handleEditUser,
    handleRemoveUser
  };
};
