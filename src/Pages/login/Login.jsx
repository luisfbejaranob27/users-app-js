import { FormLogin } from '../../components/form-login/FormLogin.jsx';
import { useFormLogin } from '../../hooks/useFormLogin.js';
import PropTypes from 'prop-types';
import './Login.css';

export const Login = ({ handleAuthenticated }) => {
  const { handleChange, handleSubmit } = useFormLogin(handleAuthenticated);

  return (
    <>
      <FormLogin handleSubmit={handleSubmit} handleChange={handleChange} />
    </>
  );
};

Login.propTypes = {
  handleAuthenticated: PropTypes.func.isRequired
};
