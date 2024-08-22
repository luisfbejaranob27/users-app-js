import { createContext } from 'react';
import { useLogin } from '../hooks/useLogin.js';
import { useFormLogin } from '../hooks/useFormLogin.js';
import PropTypes from 'prop-types';

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
	const { auth, handleAuthenticated } = useLogin();
	const { handleChange, handleSubmit } = useFormLogin(handleAuthenticated);
	console.log(auth);

	return (
		<LoginContext.Provider
			value={{
				auth,
				handleAuthenticated,
				handleChange,
				handleSubmit
			}}
		>
			{children}
		</LoginContext.Provider>
	);
};

LoginProvider.propTypes = {
	children: PropTypes.node.isRequired
};
