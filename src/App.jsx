import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext.jsx';
import { Navbar } from './components/navbar/Navbar.jsx';
import { Login } from './pages/login/Login.jsx';
import { Register } from './pages/register/Register.jsx';
import { User } from './pages/user/User.jsx';
import './App.css';
import { LoginContext } from './context/LoginContext.jsx';

export const App = () => {
	const { auth } = useContext(LoginContext);
	return (
		<>
			<UserProvider>
				<div className={'container-fluid'}>
					{!auth.isAuthenticated || <Navbar />}
					<Routes>
						{!auth.isAuthenticated ? (
							<>
								<Route path={'/*'} element={<Navigate to={'/login'} />} />
								<Route path={'/login'} element={<Login />} />
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
