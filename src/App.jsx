import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar.jsx';
import { useLogin } from './hooks/useLogin.js';
import { useUsers } from './hooks/useUsers.js';
import { Login } from './pages/login/Login.jsx';
import { Register } from './pages/register/Register.jsx';
import { User } from './pages/user/User.jsx';
import './App.css';

export const App = () => {
  const { auth, handleAuthenticated } = useLogin();
  const { users, userSelected, activeForm, handleActiveForm, handleAddUser, handlerSelectUser, handleEditUser, handleRemoveUser, handleResetForm } = useUsers();

  return (
    <>
      <div className={'container-fluid'}>
        {!auth.isAuthenticated || <Navbar auth={auth} handleAuthenticated={handleAuthenticated} />}
        <Routes>
          {!auth.isAuthenticated ? (
            <>
              <Route path={'/*'} element={<Navigate to={'/login'} />} />
              <Route path={'/login'} element={<Login handleAuthenticated={handleAuthenticated} handleActiveForm={handleActiveForm} />} />
              <Route path={'/register'} element={<Register userSelected={userSelected} activeForm={activeForm} handleAddUser={handleAddUser} handleResetForm={handleResetForm} />} />
            </>
          ) : (
            <>
              <Route
                path={'/users'}
                element={
                  <User
                    users={users}
                    userSelected={userSelected}
                    activeForm={activeForm}
                    handleActiveForm={handleActiveForm}
                    handleAddUser={handleAddUser}
                    handlerSelectUser={handlerSelectUser}
                    handleEditUser={handleEditUser}
                    handleRemoveUser={handleRemoveUser}
                    handleResetForm={handleResetForm}
                  />
                }
              />
            </>
          )}
        </Routes>
      </div>
    </>
  );
};
