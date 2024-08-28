import { createContext } from 'react';
import { useUsers } from '../hooks/useUsers.js';
import PropTypes from 'prop-types';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const {
		state,
		loading,
		errors,
		setErrors,
		userSelected,
		activeForm,
		fetchUsers,
		handleActiveForm,
		handleAddUser,
		handlerSelectUser,
		handleEditUser,
		handleRemoveUser,
		handleResetForm
	} = useUsers();

	return (
		<UserContext.Provider
			value={{
				state,
				loading,
				errors,
				setErrors,
				userSelected,
				activeForm,
				fetchUsers,
				handleActiveForm,
				handleAddUser,
				handlerSelectUser,
				handleEditUser,
				handleRemoveUser,
				handleResetForm
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

UserProvider.propTypes = {
	children: PropTypes.node.isRequired
};
