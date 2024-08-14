import { usersInitialState } from '../data/UsersInitialState.js';

export const getUsers = () => {
  return JSON.parse(sessionStorage.getItem('users')) || usersInitialState;
};
