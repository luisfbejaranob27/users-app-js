import { useLogin } from './hooks/useLogin.js';
import { Login } from './Pages/login/Login.jsx';
import { User } from './Pages/user/User.jsx';
import './App.css';

export const App = () => {
  const { auth, handleAuthenticated } = useLogin();

  return <>{!auth.isAuthenticated ? <Login handleAuthenticated={handleAuthenticated} /> : <User />}</>;
};
