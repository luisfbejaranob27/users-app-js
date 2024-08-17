import { useEffect, useReducer } from 'react';
import { getAuthenticatedUser } from '../services/UserService.js';
import { loginReducer } from '../reduce/loginReduce.js';
import { loginActions } from '../reduce/Actions.js';

export const useLogin = () => {
  const authInitialState = getAuthenticatedUser();
  const [auth, dispatch] = useReducer(loginReducer, authInitialState);

  const handleAuthenticated = (value) => {
    dispatch({
      type: !value ? loginActions.LOGIN : loginActions.LOGOUT,
      payload: value
    });
  };

  useEffect(() => {
    sessionStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  return {
    auth,
    handleAuthenticated
  };
};
