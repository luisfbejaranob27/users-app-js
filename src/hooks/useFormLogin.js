import { useState } from 'react';
import { loginFormInitialState } from '../data/LoginFormInitialState.js';
import { authenticate } from '../services/AuthService.js';

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
    authenticate(username, password, handleAuthenticated, setFormValues);
  };
  return {
    handleChange,
    handleSubmit
  };
};
