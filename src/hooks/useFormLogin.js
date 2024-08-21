import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginFormInitialState } from '../data/LoginFormInitialState.js';
import { authenticate } from '../services/AuthService.js';

export const useFormLogin = (handleAuthenticated) => {
  const [formValues, setFormValues] = useState(loginFormInitialState);
  const { username, password } = formValues;
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authenticate(username, password, handleAuthenticated, setFormValues, navigate);
  };
  return {
    handleChange,
    handleSubmit
  };
};
