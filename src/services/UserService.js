import { usersInitialState } from '../data/UsersInitialState.js';
import { loginInitialState } from '../data/LoginInitialState.js';

export const getUsers = () => {
  return JSON.parse(sessionStorage.getItem('users')) || usersInitialState;
};

export const getAuthenticatedUser = () => {
  return JSON.parse(sessionStorage.getItem('auth')) || loginInitialState;
};

export const getUserByUsername = (username) => {
  const users = JSON.parse(sessionStorage.getItem('users')) || [];
  return users.find((user) => user.username === username);
};
