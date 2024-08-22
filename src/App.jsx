import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext, UserProvider } from './context/UserContext.jsx';
import { Navbar } from './components/navbar/Navbar.jsx';
import { useLogin } from './hooks/useLogin.js';
import { Login } from './pages/login/Login.jsx';
import { Register } from './pages/register/Register.jsx';
import { User } from './pages/user/User.jsx';
import './App.css';

export const App = () => {
	const { auth, handleAuthenticated } = useLogin();
	const { handleActiveForm } = useContext(UserContext);

	return (
		<>
			<UserProvider>
				<div className={'container-fluid'}>
					{!auth.isAuthenticated || <Navbar auth={auth} handleAuthenticated={handleAuthenticated} />}
					<Routes>
						{!auth.isAuthenticated ? (
							<>
								<Route path={'/*'} element={<Navigate to={'/login'} />} />
								<Route path={'/login'} element={<Login handleAuthenticated={handleAuthenticated} handleActiveForm={handleActiveForm} />} />
								<Route path={'/register'} element={<Register />} />
							</>
						) : (
							<>
								<Route path={'/users'} element={<User />} />
							</>
						)}
					</Routes>
				</div>
			</UserProvider>
		</>
	);
};
