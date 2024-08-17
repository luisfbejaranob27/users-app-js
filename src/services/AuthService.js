import { getUserByUsername } from './UserService.js';
import { loginFormInitialState } from '../data/LoginFormInitialState.js';
import { alert } from '../alerts/Alert.js';

export const authenticate = (username, password, handleAuthenticated, setFormValues) => {
  const user = getUserByUsername(username);

  if (user !== undefined && username.length > 0 && password.length > 0) {
    if (password === user?.password) {
      handleAuthenticated({ username, isAuthenticated: true });
      setFormValues(loginFormInitialState);
    } else {
      alert('Oops...', 'Please verify username or password', 'error');
    }
  } else {
    if (!username || !password) {
      alert('Oops...', 'Please complete the form fields', 'error');
    } else {
      alert('Oops...', 'Unregistered user', 'error');
    }
  }
};
