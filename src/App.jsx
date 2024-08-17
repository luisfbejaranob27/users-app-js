import { Navbar } from './components/navbar/Navbar.jsx';
import { useLogin } from './hooks/useLogin.js';
import { useUsers } from './hooks/useUsers.js';
import { Login } from './Pages/login/Login.jsx';
import { User } from './Pages/user/User.jsx';
import './App.css';

export const App = () => {
  const { auth, handleAuthenticated } = useLogin();
  const { users, userSelected, activeForm, handleActiveForm, handleAddUser, handlerSelectUser, handleEditUser, handleRemoveUser, handleResetForm } = useUsers();

  return (
    <>
      <div className={'container-fluid'}>
        {!auth.isAuthenticated || <Navbar auth={auth} handleAuthenticated={handleAuthenticated} />}
        {!auth.isAuthenticated ? (
          <Login handleAuthenticated={handleAuthenticated} />
        ) : (
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
        )}
      </div>
    </>
  );
};
