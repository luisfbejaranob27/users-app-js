import { usersInitialState } from '../data/UsersInitialState.js';
import { loginInitialState } from '../data/LoginInitialState.js';
import users from 'bootstrap/js/src/dom/selector-engine.js';

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

export const existsUserByUsername = (username) => {
  return JSON.parse(sessionStorage.getItem('users')).some(user => user.username === username);
};

export const existUserByEmail = (email) => {
  return JSON.parse(sessionStorage.getItem('users')).some(user => user.email === email);
};
