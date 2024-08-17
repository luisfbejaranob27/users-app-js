import { useState } from 'react';
import { loginFormInitialState } from '../data/LoginFormInitialState.js';
import { getUserByUsername } from '../services/UserService.js';
import { alert } from '../alerts/Alert.js';

export const useFormLogin = (handleAuthenticated) => {
  const [formValues, setFormValues] = useState(loginFormInitialState);
  const { username, password } = formValues;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('username', username);
    const user = getUserByUsername(username);
    console.log(user);

    if (user !== undefined && username.length > 0 && password.length > 0) {
      if (password === user?.password) {
        handleAuthenticated(true);
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
  return {
    handleChange,
    handleSubmit
  };
};
